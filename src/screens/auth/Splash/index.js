import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = () => {
  const handlePress = () => {
    console.log("pres");
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../assets/splash-image.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All You Need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign Up" onPress={handlePress}></Button>
      <Pressable onPress={handlePress}>
        <Text style={styles.signInButton}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
