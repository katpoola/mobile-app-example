import React from "react";
import { Pressable, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
