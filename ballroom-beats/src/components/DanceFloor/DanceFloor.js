import React, { Component } from "react";
import Waltz from "../Dances/Waltz/Waltz.js"
// import Salsa from "../Dances/Salsa/Salsa.js"
import {
  Text,
  View,
  StyleSheet,
  Animated, 
  Easing,
  TouchableOpacity
} from "react-native";
 

export default class DanceFloor extends Component {
  state = {
    dance: "waltz"

  };

  chooseDance = () => {
    if (this.state.dance === "waltz") {
      return (
        <Waltz
        start={this.props.start}
        style={styles.container1}
        />
      )
    }

    // if (this.state.dance === "salsa") {
    //   return (
    //     <Salsa />
    //   )
    // }
  }

  render() {
    return (
      <>
        {this.chooseDance()}
      </>
    )
  }

}

const styles = StyleSheet.create({
  container1: {
    // display: "flex",
    // flex: 1,
    // flexDirection: "row",
    // backgroundColor: "#FFF",
    // alignItems: "center",
    // justifyContent: "space-around"
  },
});