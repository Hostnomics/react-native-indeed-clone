## Setup

1. Set up account with API


2. Install project with Expo. See [Expo Docs](https://expo.github.io/router/docs/)
    - Install in currect directory with **./**
        - `npx create-expo-app@latest --example with-router ./`
    
   - Expo [Layout Docs](https://docs.expo.dev/routing/layouts/) 

3. Add **app** directory with 
    - `_layout.js`. [(16:35)](https://youtu.be/mJ3bGvy0WAY?t=995)
    - `index.js` 

4. Import dependencies (17:53)
    - `npm install expo-font axios react-native-dotenv`
        - expo-font - for fonts
        - axios - for API requests.
        - react-native-dotenv - env file. Environmental variables.

5. Spin up local dev server with **npm start**
    - Note from install 
        - _To run your project, run one of the following npm commands._
            - `npm run android`
            - `npm run ios` _you need to use macOS to build the iOS project. Use the Expo app if you need to do iOS development without a mac_
            - `npm run dev`


## 6. Mobile Local Host
- **(A)** `npm start`
    - Download the expo go app
    - Run **npm start** in computer terminal. 
    - Scan the QR code with the Camera in iOS and open up the local host app on your phone

- **(B)** `expo-cli start --tunnel`
    - **IF WIFI BLOCKING the app**, kill the `npm start` and install the **expo-cli** with this command instead: 

    - Globally install the expo package: 
        - `npm install -g expo-cli`  [(19:55)](https://youtu.be/mJ3bGvy0WAY?t=1195)
    - Run the **expo package** with: 
        - `expo-cli start --tunnel`


7. Download the project template `assets`, `components`, `constants` and `styles` directories from the [Google Drive Project Zipped Files Here](https://drive.google.com/file/d/1VGr3R-3uta9xNj17eRHMxTELhtE2LaCm/view)





# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
