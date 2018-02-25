# SCFX
## Starcraft dialogues and SFX sound box app

This is a Nativescript app.
To easily install Nativescript, use the root Dockerfile (it can be long, be patient).
```bash
docker build -t nativescript .
```

Set your phone on [**debug mode**](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm) then plug in it on usb.

To use Docker easily, create an alias:
```bash
alias tns="docker run -it --rm --privileged -v $PWD/src:/src nativescript tns"
```
... you can also use the given script:
```bash
source scripts/create-tns-alias.sh
```
Then build and run the app (with file watcher):
```bash
tns run android
```

To work properly, the app uses the plugin [NativeScript-Gif](https://github.com/bradmartin/nativescript-gif) which needs to add a library when building.  
Find the file **src/platforms/android/app/build.gradle** (created after the first build) and add this **dependency:**
```gradle
dependencies {
    compile 'pl.droidsonroids.gif:android-gif-drawable:1.2.10'
}
```
Then build again the app:
```
tns build android
```