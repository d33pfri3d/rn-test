## This is a React Native Test.

Status : Incomplete give time frame.

This is an expo based application, yarn dev should get it running.

### Libs used

expo - The best way to build a React Native application for an MVP style app. Nice Dx.

ethereumjs-wallet - some good basic wallet functions ( that work ).

bip39
Had some issues with Android using the `mnemonicToSeed` helper from the Bip39 lib on Android, seeing some open issues in the github and looks like some have resorted to writing their own native bip39 native module, which would might be the right call in this case or using the built in Bip39 Lib from `NativeModules` - untested.

### AC

You're tasked with designing a simple mobile app that allows users to input a twelve- word recovery seed, derive and store their private key, and view their ETH balance and address. The app should be designed using React Native and TypeScript, and it should
work on both iOS and Android devices.

- The app should allow users to input a twelve-word recovery seed, and use it to
  derive their private key.

  Notes: At the moment the input is just a plain text box that allows free input. Ideally this would be a pick-a-word style input or one that turns each word into 'pips' as they are added. Also restrictions / validation would be added for

- The app should securely store the user's private key. You can assume that the device
  itself is secure, but you should take appropriate measures to protect the key from
  potential attackers.

  Notes: I would likely use an AES encryption along with maybe a user supplied pin to encrypt the data, and then store much of the data in the users keychain OR potentially use a SecureStorage lib available.

- The app should display the user's ETH balance and address.

  Notes : Once the users wallet data is fetched, there are a few APIs such as Alchemy that can return back wallet data.

- The app should have a clean and intuitive user interface, with clear instructions and
  feedback.

  Notes : No time taken to make a pretty UI.

- The app should be designed with scalability and future updates in mind.

- You don't have to do this, but you should, in an accompanying document, explain
  how you would securely retrieve, store and handle any sensitive API keys / secrets.

  Secrets and Env vars could be stored in a bucket and for development purposes a shell script could be used to fetch them securly and CI can inject them at build time using an API call. Keys for the call would be stored in CI.

### Publishing the App

The app would be built and published using a combination of CI services and Fastlane for executing vaious build lanes for iOS and Android.
