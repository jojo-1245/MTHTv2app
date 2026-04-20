package ai.metahint.appw

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class PointClickOfferwallModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String = "PointClickOfferwallModule"

  @ReactMethod
  fun showOfferwall(
    placementUid: String,
    pickerUid: String,
    title: String,
    buttonTemplateIdx: Double
  ) {
    val activity = reactApplicationContext.currentActivity
    if (activity == null) {
      Log.e(TAG, "showOfferwall: currentActivity is null")
      return
    }
    Log.d(TAG, "showOfferwall: placementUid=$placementUid pickerUid=$pickerUid title=$title btnTemplate=${buttonTemplateIdx.toInt()}")
    try {
      val pointClickAd = Class.forName("kr.co.pointclick.sdk.offerwall.core.PointClickAd")
      pointClickAd.getMethod("init", String::class.java, String::class.java)
        .invoke(null, placementUid, pickerUid)
      pointClickAd.getMethod("showOfferwall", android.app.Activity::class.java, String::class.java, Int::class.javaPrimitiveType)
        .invoke(null, activity, title, buttonTemplateIdx.toInt())
    } catch (e: ClassNotFoundException) {
      Log.e(TAG, "PointClick SDK not on classpath (pointclickGithubToken not set?)", e)
    } catch (e: Exception) {
      Log.e(TAG, "PointClick showOfferwall failed", e)
    }
  }

  companion object {
    private const val TAG = "PointClickOfferwall"
  }
}
