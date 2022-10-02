import React, { Component, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, Switch } from "react-native";
import styles from "./assets/stylesheet/BMIStyle";

class Inputs extends Component {
  state = {
    height: "",
    heightFeet: "",
    weight: "",
    heightMeasurement: "(Cm)",
    heightMeasurementFeet: "(Ft)",
    weightMeasurement: "(Kg)",
    bmi: "",
    BmiResult: "",
    MetricEnabled: false,
  };
  toggleSwitch = () => {
    if (this.state.MetricEnabled === false) {
      this.setState({
        MetricEnabled: true,
        heightMeasurement: "(Inch)",
        weightMeasurement: "(Lb)",
        bmi: "",
        BmiResult: "",
      });
      this.TextInput.clear();
      this.TextInputInch.clear();
    } else {
      this.setState({
        MetricEnabled: false,
        heightMeasurement: "(Cm)",
        weightMeasurement: "(Kg)",
        bmi: "",
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
      console.log("height", height);
      result =
        (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) *
        parseFloat(703);
    } else {
      result =
        (parseFloat(weight) * 10000) /
        (parseFloat(height) * parseFloat(height));
    }
    //calculation
    result = result.toFixed(2);
    //display result
    this.setState({ bmi: result });
    if (result < 18.5) {
      this.setState({ BmiResult: "Underweight" });
    } else if (result >= 18.5 && result < 25) {
      this.setState({ BmiResult: "Normal weight" });
    } else if (result >= 25 && result < 30) {
      this.setState({ BmiResult: "Overweight" });
    } else if (result >= 30) {
      this.setState({ BmiResult: "Obese" });
    } else {
      alert("Incorrect Input!");
      this.setState({ BmiResult: "Incorrect Input!" });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>
        <View style={styles.wrapper}>
          <Text style={styles.metric}>Metric</Text>
          <Switch
            style={styles.toggle}
            trackColor={{ false: "gray", true: "green" }}
            thumbColor={this.state.MetricEnabled ? "white" : "black"}
            onValueChange={this.toggleSwitch}
            value={this.state.MetricEnabled}
          />
          <Text style={styles.standard}>Standard</Text>
        </View>
        <Text style={styles.label}>Height</Text>
        <View style={styles.heightWrapper}>
          {this.state.MetricEnabled ? (
            <TextInput
              style={styles.input1}
              ref={(input) => {
                this.TextInput = input;
              }}
              underlineColorAndroid="transparent"
              placeholder={`Height ${this.state.heightMeasurementFeet}`}
              autoCapitalize="none"
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
            underlineColorAndroid="transparent"
            placeholder={`Height ${this.state.heightMeasurement}`}
            autoCapitalize="none"
            onChangeText={this.handleHeight}
          />
        </View>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          ref={(input) => {
            this.TextInput = input;
          }}
          underlineColorAndroid="transparent"
          placeholder={`Weight ${this.state.weightMeasurement}`}
          autoCapitalize="none"
          onChangeText={this.handleWeight}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.calculate(this.state.height, this.state.weight)}
        >
          <Text style={styles.submitButtonText}> Calculate </Text>
        </TouchableOpacity>
        <Text style={styles.output}>{this.state.bmi}</Text>
        <Text style={styles.resultText}>{this.state.BmiResult}</Text>
        <Text style={styles.helpText}>
          {`BMI Categories:\nUnderweight = <18.5\nNormal weight = 18.5 to 24.9\nOverweight = 25 to 29.9\nObesity = BMI of 30 or greater`}
        </Text>
      </View>
    );
  }
}
export default Inputs;
