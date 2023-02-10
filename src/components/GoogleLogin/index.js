import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { styles } from "./styles";

const GoogleLogin = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userinfo => ", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // sign in already in progress
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available
      } else {
        // some other error happened
      }
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={signIn}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require("../../assets/google-logo.png")}
      />
    </TouchableOpacity>
  );
};

export default GoogleLogin;
