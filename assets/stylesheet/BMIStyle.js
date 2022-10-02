import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  input1:{
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "42.25%",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  metric: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  standard: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  submitButton: {
    backgroundColor: "#ff6666",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  heightWrapper: {
    flexDirection: "row",
  },
  output: {
    textAlign: "center",
    fontSize: 30,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: "blue",
  },
  helpText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 20,
    color: "purple",
  },
  label: {
    marginLeft: 15,
  },
  toggle: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default styles;
