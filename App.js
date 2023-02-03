import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const WEB_CLIENT_ID =
  "1015537669671-6hpfgo7qr69ga792rle9cp6a1pn62pp4.apps.googleusercontent.com";
const IOS_CLIENT_ID =
  "1015537669671-igqkbekon141k3piau88t880dtdqpv6n.apps.googleusercontent.com";
const REVERSED_CLIENT_ID =
  "com.googleusercontent.apps.1015537669671-igqkbekon141k3piau88t880dtdqpv6n";

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
    });
  }, []);
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};
export default App;
