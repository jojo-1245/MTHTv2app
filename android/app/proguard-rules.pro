# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# PointClick Offerwall SDK
-keep class kr.co.pointclick.sdk.offerwall.core.consts.** {*;}
-keep interface kr.co.pointclick.sdk.offerwall.core.consts.** {*;}
-keep class kr.co.pointclick.sdk.offerwall.core.models.** {*;}
-keep interface kr.co.pointclick.sdk.offerwall.core.models.** {*;}
-keep class kr.co.pointclick.sdk.offerwall.core.PointClickAd {*;}
-keep class kr.co.pointclick.sdk.offerwall.core.events.PackageReceiver {*;}

# Add any project specific keep options here:
