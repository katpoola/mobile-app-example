import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    width: "100%",
    flex: 1,
  },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontWeight: "500",
  },
  eye: {
    marginRight: 16,
  },
});
