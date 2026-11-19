package ai.metahint.appw

import android.content.Intent
import android.os.Build
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class StepNotificationModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "StepNotification"

    @ReactMethod
    fun startForegroundService(stepUnit: String, promise: Promise) {
        try {
            val intent = Intent(reactApplicationContext, StepForegroundService::class.java).apply {
                putExtra(StepForegroundService.EXTRA_STEPS, 0)
                putExtra(StepForegroundService.EXTRA_STEP_UNIT, stepUnit)
            }
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                reactApplicationContext.startForegroundService(intent)
            } else {
                reactApplicationContext.startService(intent)
            }
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("START_FAILED", e.message)
        }
    }

    @ReactMethod
    fun updateSteps(steps: Int, stepUnit: String, promise: Promise) {
        try {
            val intent = Intent(reactApplicationContext, StepForegroundService::class.java).apply {
                action = StepForegroundService.ACTION_UPDATE
                putExtra(StepForegroundService.EXTRA_STEPS, steps)
                putExtra(StepForegroundService.EXTRA_STEP_UNIT, stepUnit)
            }
            reactApplicationContext.startService(intent)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("UPDATE_FAILED", e.message)
        }
    }

    @ReactMethod
    fun stopForegroundService(promise: Promise) {
        try {
            val intent = Intent(reactApplicationContext, StepForegroundService::class.java).apply {
                action = StepForegroundService.ACTION_STOP
            }
            reactApplicationContext.startService(intent)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("STOP_FAILED", e.message)
        }
    }

    @ReactMethod
    fun getStepCount(promise: Promise) {
        try {
            val prefs = reactApplicationContext.getSharedPreferences(
                StepForegroundService.PREFS_NAME,
                android.content.Context.MODE_PRIVATE
            )
            val today = todayDateString()
            val savedDate = prefs.getString(StepForegroundService.KEY_STEP_DATE, "")
            if (!savedDate.isNullOrEmpty() && savedDate != today) {

                prefs.edit()
                    .putInt(StepForegroundService.KEY_STEP_COUNT, 0)
                    .putString(StepForegroundService.KEY_STEP_DATE, today)
                    .apply()
                sendResetForNewDayIntent(null)
                promise.resolve(0)
                return
            }
            val steps = prefs.getInt(StepForegroundService.KEY_STEP_COUNT, 0)
            promise.resolve(steps)
        } catch (e: Exception) {
            promise.reject("GET_STEPS_FAILED", e.message)
        }
    }

    @ReactMethod
    fun resetForNewDay(stepUnit: String, promise: Promise) {
        try {
            val prefs = reactApplicationContext.getSharedPreferences(
                StepForegroundService.PREFS_NAME,
                android.content.Context.MODE_PRIVATE
            )
            prefs.edit()
                .putInt(StepForegroundService.KEY_STEP_COUNT, 0)
                .putString(StepForegroundService.KEY_STEP_DATE, todayDateString())
                .apply()
            sendResetForNewDayIntent(stepUnit)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("RESET_FAILED", e.message)
        }
    }

    private fun sendResetForNewDayIntent(stepUnit: String?) {
        val intent = Intent(reactApplicationContext, StepForegroundService::class.java).apply {
            action = StepForegroundService.ACTION_RESET_FOR_NEW_DAY
            if (!stepUnit.isNullOrEmpty()) {
                putExtra(StepForegroundService.EXTRA_STEP_UNIT, stepUnit)
            }
        }
        try {
            reactApplicationContext.startService(intent)
        } catch (_: Exception) {

        }
    }

    private fun todayDateString(): String {
        val cal = java.util.Calendar.getInstance()
        return String.format(
            java.util.Locale.getDefault(),
            "%04d-%02d-%02d",
            cal.get(java.util.Calendar.YEAR),
            cal.get(java.util.Calendar.MONTH) + 1,
            cal.get(java.util.Calendar.DAY_OF_MONTH)
        )
    }
}
