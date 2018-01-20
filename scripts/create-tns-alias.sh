#alias tns="docker run -it --rm --privileged -v /dev/bus/usb:/dev/bus/usb -v $PWD/src:/src nativescript tns"
alias tns="docker run -it --rm --privileged -v $PWD/src:/src nativescript tns"