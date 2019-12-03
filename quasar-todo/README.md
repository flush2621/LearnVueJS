# Quasar App (quasar-todo)

A Quasar Framework app

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### app's pay attention to details
install android sdk
setx ANDROID_HOME "%USERPROFILE%\AppData\Local\Android\Sdk"
setx path "%path%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools"

jdk version 1.8

unzip gradle
set GRADLE_HOME and %GRADLE_HOME%/bin in path

quasar build -m cordova -T android

keytool -genkey -v -keystore my-release-key.keystore -alias HelloMr -keyalg RSA -keysize 2048 -validity 20000

jarsigner -verbose -keystore C:\app\apk-bag\my-release-key.keystore -signedjar C:\app\apk-bag\todo.apk C:\app\apk-bag\app-release-unsigned.apk HelloMr
