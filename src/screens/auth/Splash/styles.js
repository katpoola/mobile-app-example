import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    padding: 9,
  },
  title: {
    color: colors.black,
    fontSize: 40,
    fontWeight: "bold",
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: "underline",
  },
  signInButton: {
    color: colors.blue,
    fontWeight: "bold",
    marginTop: 30,
  },
  titleContainer: {
    marginVertical: 55,
  },
});
