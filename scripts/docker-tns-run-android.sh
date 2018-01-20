docker run -it --rm --privileged \
-v /dev/bus/usb:/dev/bus/usb -v $PWD/src:/src nativescript \
bash -c "tns platform add android && tns run android"