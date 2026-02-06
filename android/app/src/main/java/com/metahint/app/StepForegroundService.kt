package service-mh.example.invalid

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.os.Build
import android.os.Handler
import android.os.IBinder
import android.os.Looper
import android.widget.RemoteViews
import java.util.Calendar
import java.util.Locale
import androidx.core.app.NotificationCompat

class StepForegroundService : Service(), SensorEventListener {

    companion object {
        const val CHANNEL_ID = "step-tracking-silent"
        const val NOTIFICATION_ID = 1001
        const val ACTION_UPDATE = "service-mh.example.invalid.UPDATE_STEPS"
        const val ACTION_STOP = "service-mh.example.invalid.STOP"
        const val EXTRA_STEPS = "steps"
        const val EXTRA_STEP_UNIT = "step_unit"
        const val PREFS_NAME = "metahint_step_prefs"
        const val KEY_STEP_COUNT = "step_count"
        const val KEY_STEP_DATE = "step_date"
        const val UPDATE_INTERVAL_MS = 30000L 
    }

    private var currentSteps = 0
    private var stepUnit = "걸음"
    private var sensorManager: SensorManager? = null
    private var stepCounterSensor: Sensor? = null
    private var stepDetectorSensor: Sensor? = null
    private var handler: Handler? = null
    private var updateRunnable: Runnable? = null
    private var lastStepCount = 0
    private var stepOffset = 0 
    private var lastStepCounterValue = 0 
    private var isTracking = false

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onCreate() {
        super.onCreate()
        createNotificationChannel()
        sensorManager = getSystemService(Context.SENSOR_SERVICE) as SensorManager
        handler = Handler(Looper.getMainLooper())

        stepCounterSensor = sensorManager?.getDefaultSensor(Sensor.TYPE_STEP_COUNTER)

        stepDetectorSensor = sensorManager?.getDefaultSensor(Sensor.TYPE_STEP_DETECTOR)

        loadSavedStepCount()
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        when (intent?.action) {
            ACTION_STOP -> {
                stopStepTracking()
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                    stopForeground(Service.STOP_FOREGROUND_REMOVE)
                } else {
                    @Suppress("DEPRECATION")
                    stopForeground(true)
                }
                stopSelf()
                return START_NOT_STICKY
            }
            ACTION_UPDATE -> {
                val steps = intent.getIntExtra(EXTRA_STEPS, 0)
                val unit = intent.getStringExtra(EXTRA_STEP_UNIT) ?: "걸음"
                currentSteps = steps
                stepUnit = unit
                startForeground(NOTIFICATION_ID, buildNotification(steps, unit))
            }
            else -> {

                val steps = intent?.getIntExtra(EXTRA_STEPS, 0) ?: 0
                val unit = intent?.getStringExtra(EXTRA_STEP_UNIT) ?: "걸음"
                currentSteps = steps
                stepUnit = unit
                startForeground(NOTIFICATION_ID, buildNotification(steps, unit))
                startStepTracking()
            }
        }
        return START_STICKY
    }

    private fun startStepTracking() {
        if (isTracking) return

        stepCounterSensor?.let { sensor ->
            sensorManager?.registerListener(this, sensor, SensorManager.SENSOR_DELAY_NORMAL)
            isTracking = true

            updateRunnable = object : Runnable {
                override fun run() {
                    if (isTracking) {
                        updateStepCountFromSensor()
                        handler?.postDelayed(this, UPDATE_INTERVAL_MS)
                    }
                }
            }
            handler?.postDelayed(updateRunnable!!, UPDATE_INTERVAL_MS)
        } ?: run {

            stepDetectorSensor?.let { sensor ->
                sensorManager?.registerListener(this, sensor, SensorManager.SENSOR_DELAY_NORMAL)
                isTracking = true
            }
        }
    }

    private fun stopStepTracking() {
        isTracking = false
        sensorManager?.unregisterListener(this)
        updateRunnable?.let { handler?.removeCallbacks(it) }
        updateRunnable = null
    }

    override fun onSensorChanged(event: SensorEvent?) {
        event?.let {
            when (it.sensor.type) {
                Sensor.TYPE_STEP_COUNTER -> {

                    checkAndResetIfNewDay()

                    val totalSteps = it.values[0].toInt()
                    if (lastStepCounterValue == 0) {

                        lastStepCounterValue = totalSteps
                        stepOffset = totalSteps

                        if (currentSteps > 0) {

                            stepOffset = totalSteps - currentSteps
                        }
                    } else {

                        val stepsSinceLast = totalSteps - lastStepCounterValue
                        if (stepsSinceLast > 0) {
                            currentSteps += stepsSinceLast
                            lastStepCounterValue = totalSteps
                            saveStepCount(currentSteps)
                            startForeground(NOTIFICATION_ID, buildNotification(currentSteps, stepUnit))
                        }
                    }
                }
                Sensor.TYPE_STEP_DETECTOR -> {

                    checkAndResetIfNewDay()

                    if (it.values[0] == 1.0f) {
                        currentSteps++
                        saveStepCount(currentSteps)
                        startForeground(NOTIFICATION_ID, buildNotification(currentSteps, stepUnit))
                    }
                }
            }
        }
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {

    }

    private fun updateStepCountFromSensor() {

        checkAndResetIfNewDay()

        startForeground(NOTIFICATION_ID, buildNotification(currentSteps, stepUnit))
    }

    private fun checkAndResetIfNewDay() {
        val prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val savedDate = prefs.getString(KEY_STEP_DATE, "")
        val today = getTodayDateString()

        if (!savedDate.isNullOrEmpty() && savedDate != today) {

            currentSteps = 0
            stepOffset = 0
            lastStepCount = 0
            lastStepCounterValue = 0
            saveStepCount(0)
        }
    }

    private fun loadSavedStepCount() {
        val prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val savedDate = prefs.getString(KEY_STEP_DATE, "")
        val today = getTodayDateString()

        if (savedDate != today) {

            currentSteps = 0
            stepOffset = 0
            lastStepCount = 0
            lastStepCounterValue = 0
            saveStepCount(0)
        } else {

            currentSteps = prefs.getInt(KEY_STEP_COUNT, 0)
            lastStepCount = currentSteps
        }
    }

    private fun saveStepCount(steps: Int) {
        val prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val editor = prefs.edit()
        editor.putInt(KEY_STEP_COUNT, steps)
        editor.putString(KEY_STEP_DATE, getTodayDateString())
        editor.apply()
    }

    private fun getTodayDateString(): String {
        val calendar = Calendar.getInstance()
        val year = calendar.get(Calendar.YEAR)
        val month = calendar.get(Calendar.MONTH) + 1
        val day = calendar.get(Calendar.DAY_OF_MONTH)
        return String.format(Locale.getDefault(), "%04d-%02d-%02d", year, month, day)
    }

    override fun onDestroy() {
        super.onDestroy()
        stopStepTracking()
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                "걸음 추적",
                NotificationManager.IMPORTANCE_LOW
            ).apply {
                setShowBadge(false)
                enableVibration(false)
                enableLights(false)
                setSound(null, null)
            }
            val nm = getSystemService(NotificationManager::class.java)
            nm.createNotificationChannel(channel)
        }
    }

    private fun buildNotification(steps: Int, unit: String): android.app.Notification {
        val remoteViews = RemoteViews(packageName, R.layout.notification_step)
        remoteViews.setTextViewText(R.id.step_count, String.format(Locale.getDefault(), "%,d", steps))
        remoteViews.setTextViewText(R.id.step_unit, unit)

        val pendingIntent = PendingIntent.getActivity(
            this,
            0,
            packageManager.getLaunchIntentForPackage(packageName),
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        return NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_notification)
            .setStyle(NotificationCompat.DecoratedCustomViewStyle())
            .setCustomContentView(remoteViews)
            .setCustomBigContentView(remoteViews)
            .setOngoing(true)
            .setContentIntent(pendingIntent)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setCategory(NotificationCompat.CATEGORY_SERVICE)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .build()
    }

}
