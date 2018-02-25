# SCFX


### A Starcraft dialogues and SFX sound box app.

All sources found on [http://www.hazmatt.net/gaming/starcraft/](http://www.hazmatt.net/gaming/starcraft/).

- [Protoss](/doc/protoss.md)
- [Terran](/doc/terran.md)
- [Zerg](/doc/zerg.md)


## Installation

This is a Nativescript app.
To easily install Nativescript, use the root Dockerfile file (it can be long, be patient).
```bash
docker build -t nativescript .
```

Activate your phone's [**debug mode**](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm) then plug in it to an usb port.

To use Docker more easily, create an alias:
```bash
alias tns="docker run -it --rm --privileged -v $PWD/src:/src nativescript tns"
```
... you can also use the [given script](/scripts/create-tns-alias.sh):
```bash
source scripts/create-tns-alias.sh
```
Then build and run the app (this activate the file watcher too):
```bash
tns run android
```

IMPORTANT:  
To work properly, the app uses the plugin [NativeScript-Gif](https://github.com/bradmartin/nativescript-gif) which needs to add a library when building.  
Find the file **src/platforms/android/app/build.gradle** (created after the first build) and add this **dependency:**
```gradle
dependencies {
    compile 'pl.droidsonroids.gif:android-gif-drawable:1.2.10'
}
```
... then build again the app:
```
tns build android
```
