package service-mh.example.invalid

import android.content.Intent
import android.os.Build
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

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
            val steps = prefs.getInt(StepForegroundService.KEY_STEP_COUNT, 0)
            promise.resolve(steps)
        } catch (e: Exception) {
            promise.reject("GET_STEPS_FAILED", e.message)
        }
    }
}
