import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 14,
  },
  bold: {
    fontWeight: "bold",
  },
  footerText: {
    color: colors.blue,
    marginBottom: 56,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
  },
});
