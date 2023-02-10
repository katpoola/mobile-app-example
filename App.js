import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin"
import * as auth from './auth.json'
import { GoogleSignin } from "@react-native-google-signin/google-signin";



const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      webClientId: auth.WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: auth.IOS_CLIENT_ID,
    });
  }, []);
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};
export default App;
