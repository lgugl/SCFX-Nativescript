docker run -it --rm --privileged -v $PWD/src:/src nativescript \
bash -c "tns platform add android && tns run android"