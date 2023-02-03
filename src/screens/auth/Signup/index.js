import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { styles } from "./styles";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    console.log("pres :D");
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with the <Text style={styles.bold}>Terms of Service</Text>
        </Text>
      </View>
      <Button title="Sign Up" onPress={handlePress}></Button>
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Already have an account?
        <Text style={styles.footerLink}> Sign In </Text>
      </Text>
    </View>
  );
};

export default Signup;
