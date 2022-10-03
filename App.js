import React, { Component } from "react";
import { Text, View, TextInput, Switch, TouchableOpacity } from "react-native";
import styles from "./assets/stylesheet/BMIStyle";

class Inputs extends Component {
  state = {
    height: "",
    heightFeet: "",
    weight: "",
    heightMeasurement: "(centimeters)",
    heightMeasurementFeet: "(feet)",
    weightMeasurement: "(kilograms)",
    bmiValue: "",
    BmiResult: "",
    MetricEnabled: false,
  };
  toggleSwitch = () => {
    if (this.state.MetricEnabled === false) {
      this.setState({
        MetricEnabled: true,
        heightMeasurement: "(inches)",
        weightMeasurement: "(pounds)",
        bmiValue: "",
        BmiResult: "",
      });
      this.TextInput.clear();
      this.TextInputInch.clear();
    } else {
      this.setState({
        MetricEnabled: false,
        heightMeasurement: "(centimeters)",
        weightMeasurement: "(kilograms)",
        bmiValue: "",
        BmiResult: "",
      });
      this.TextInput.clear();
      this.TextInputInch.clear();
    }
  };
  handleHeight = (text) => {
    this.setState({ height: text });
  };
  handleHeightFeet = (text) => {
    this.setState({ heightFeet: text });
  };
  handleWeight = (text) => {
    this.setState({ weight: text });
  };
  calculate = (height, weight) => {
    var result = 0;
    if (this.state.MetricEnabled) {
      height =
        parseFloat(this.state.heightFeet * 12) + parseFloat(this.state.height);
      result =
        (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) *
        parseFloat(703);
    } else {
      result =
        (parseFloat(weight) * 10000) /
        (parseFloat(height) * parseFloat(height));
    }
    result = result.toFixed(2);
    this.setState({ bmiValue: result });
    if (result < 18.5) {
      this.setState({ BmiResult: "Underweight" });
    } else if (result >= 18.5 && result <= 24.9) {
      this.setState({ BmiResult: "Normal" });
    } else if (result >= 25 && result <= 29.9) {
      this.setState({ BmiResult: "Overweight" });
    } else if (result >= 30) {
      this.setState({ BmiResult: "Obese" });
    } else {
      alert("Enter Valid Input!");
      this.setState({ BmiResult: "Enter Valid Input!" });
    }
  };
  render() {
    return (
      <View style={styles.layout}>
        <Text style={styles.appTitle}>BMI Calculator</Text>
        <View style={styles.wrapper}>
          <Text style={styles.metric}>Metric</Text>
          <Switch
            style={styles.toggle}
            trackColor={{ false: "#BFC7C5", true: "#CB3A76" }}
            thumbColor={this.state.MetricEnabled ? "#F1DEDE" : "#4C061D"}
            onValueChange={this.toggleSwitch}
            value={this.state.MetricEnabled}
          />
          <Text style={styles.standard}>Standard</Text>
        </View>
        <Text style={styles.inputLabel}>Height</Text>
        <View style={styles.heightWrapper}>
          {this.state.MetricEnabled ? (
            <TextInput
              style={styles.input1}
              ref={(input) => {
                this.TextInput = input;
              }}
              placeholder={`Height in ${this.state.heightMeasurementFeet}`}
              onChangeText={this.handleHeightFeet}
            />
          ) : (
            ""
          )}
          <TextInput
            style={styles.input1}
            ref={(input) => {
              this.TextInputInch = input;
            }}
            placeholder={`Height in ${this.state.heightMeasurement}`}
            onChangeText={this.handleHeight}
          />
        </View>
        <Text style={styles.inputLabel}>Weight</Text>
        <TextInput
          style={styles.input}
          ref={(input) => {
            this.TextInput = input;
          }}
          placeholder={`Weight in ${this.state.weightMeasurement}`}
          onChangeText={this.handleWeight}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.calculate(this.state.height, this.state.weight)}
        >
          <Text style={styles.submitButtonText}> Calculate BMI </Text>
        </TouchableOpacity>
        <Text style={styles.bmiOutput}>{this.state.bmiValue}</Text>
        <Text style={styles.resultText}>{this.state.BmiResult}</Text>
        <Text style={styles.helpText1}>{"BMI Categories:\n"}</Text>
        <Text style={styles.helpText2}>
          {`Underweight: BMI of 18.5 or lesser\nNormal: 18.5 to 24.9\nOverweight: 25 to 29.9\nObese: BMI of 30 or greater`}
        </Text>
      </View>
    );
  }
}
export default Inputs;
