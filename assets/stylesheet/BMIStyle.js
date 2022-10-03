import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layout: {
    paddingTop: 30,
    backgroundColor: "#F1DEDE",
    height: "100%",
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: "#CB3A76",
  },
  input1: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 5,
    width: "42%",
    borderRadius: 10,
    borderColor: "#CB3A76",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 20,
  },
  metric: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#4C061D",
  },
  standard: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#4C061D",
  },
  submitButton: {
    backgroundColor: "#4C061D",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 15,
  },
  submitButtonText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#F1DEDE",
    fontWeight: "bold",
    fontSize: 15,
    fontStyle: "italic",
  },
  heightWrapper: {
    flexDirection: "row",
  },
  bmiOutput: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
    color: "#047478",
  },
  appTitle: {
    paddingTop: 40,
    paddingBottom: 30,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#BA2C67",
    fontStyle: "italic",
  },
  resultText: {
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: "center",
    fontSize: 20,
    color: "#4C061D",
  },
  helpText1: {
    paddingTop: 5,
    textAlign: "center",
    fontSize: 15,
    color: "#BA2C67",
    fontWeight: "bold",
  },
  helpText2: {
    paddingTop: 0,
    textAlign: "center",
    fontSize: 15,
    color: "#BA2C67",
  },
  inputLabel: {
    marginLeft: 15,
    color: "#047478",
    paddingTop: 5,
    fontSize: 15,
    paddingBottom: 5,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  toggle: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default styles;
