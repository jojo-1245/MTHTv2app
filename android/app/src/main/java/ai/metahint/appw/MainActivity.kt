package ai.metahint.appw
import expo.modules.splashscreen.SplashScreenManager

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Build
import android.os.Bundle
import android.util.Log

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import expo.modules.ReactActivityDelegateWrapper

class MainActivity : ReactActivity() {

  private var packageReceiver: BroadcastReceiver? = null

  override fun onCreate(savedInstanceState: Bundle?) {

    SplashScreenManager.registerOnActivity(this)

    super.onCreate(null)
    registerPointClickPackageReceiver()
  }

  override fun onDestroy() {
    unregisterPointClickPackageReceiver()
    super.onDestroy()
  }

  private fun registerPointClickPackageReceiver() {
    try {
      if (packageReceiver != null) return
      val receiverClass = Class.forName("kr.co.pointclick.sdk.offerwall.core.events.PackageReceiver")
      val receiver = receiverClass.getDeclaredConstructor().newInstance() as BroadcastReceiver
      packageReceiver = receiver
      val intentFilter = IntentFilter().apply {
        addAction(Intent.ACTION_PACKAGE_ADDED)
        addAction(Intent.ACTION_PACKAGE_REMOVED)
        addDataScheme("package")
      }
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
        applicationContext.registerReceiver(receiver, intentFilter, Context.RECEIVER_NOT_EXPORTED)
      } else {
        applicationContext.registerReceiver(receiver, intentFilter)
      }
    } catch (e: ClassNotFoundException) {

    } catch (e: Exception) {
      Log.e("MainActivity", "PointClick PackageReceiver register failed", e)
    }
  }

  private fun unregisterPointClickPackageReceiver() {
    try {
      packageReceiver?.let {
        applicationContext.unregisterReceiver(it)
        packageReceiver = null
      }
    } catch (e: IllegalArgumentException) {
      Log.e("MainActivity", "PointClick PackageReceiver unregister", e)
    }
  }

  override fun getMainComponentName(): String = "main"

  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return ReactActivityDelegateWrapper(
          this,
          BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
          object : DefaultReactActivityDelegate(
              this,
              mainComponentName,
              fabricEnabled
          ){})
  }

  override fun invokeDefaultOnBackPressed() {
      if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
          if (!moveTaskToBack(false)) {

              super.invokeDefaultOnBackPressed()
          }
          return
      }

      super.invokeDefaultOnBackPressed()
  }
}
