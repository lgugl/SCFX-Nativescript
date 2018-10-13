
FROM debian:latest

# TOOLS
RUN \
apt-get update -y && \
apt-get install -y curl wget sudo gnupg lib32z1 lib32ncurses5 lib32stdc++6 g++ ant python make unzip

# JAVA
RUN apt-get install -y openjdk-8-jdk
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64

# NODE
RUN curl -sL https://deb.nodesource.com/setup_9.x | sudo bash - && \
apt-get install -y nodejs

# ANDROID SDK
RUN mkdir /usr/local/android-sdk && \
wget -nc https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip -O temp.zip && \
unzip temp.zip -d /usr/local/android-sdk && \
rm temp.zip
ENV ANDROID_HOME /usr/local/android-sdk
RUN yes | $ANDROID_HOME/tools/bin/sdkmanager "tools" "platform-tools" "platforms;android-25" "build-tools;25.0.2" "extras;android;m2repository" "extras;google;m2repository"

# NATIVESCRIPT
RUN npm install nativescript@3.4.0 -g --unsafe-perm
RUN tns doctor

# WORKDIR
RUN mkdir /src
VOLUME /src
WORKDIR /src

