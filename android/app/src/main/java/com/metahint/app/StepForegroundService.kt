package service-mh.example.invalid

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import android.os.Build
import android.os.IBinder
import android.widget.RemoteViews
import java.util.Locale
import androidx.core.app.NotificationCompat

class StepForegroundService : Service() {

    companion object {
        const val CHANNEL_ID = "step-tracking-silent"
        const val NOTIFICATION_ID = 1001
        const val ACTION_UPDATE = "service-mh.example.invalid.UPDATE_STEPS"
        const val ACTION_STOP = "service-mh.example.invalid.STOP"
        const val EXTRA_STEPS = "steps"
        const val EXTRA_STEP_UNIT = "step_unit"
    }

    private var currentSteps = 0
    private var stepUnit = "걸음"

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onCreate() {
        super.onCreate()
        createNotificationChannel()
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        when (intent?.action) {
            ACTION_STOP -> {
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
            }
        }
        return START_STICKY
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
