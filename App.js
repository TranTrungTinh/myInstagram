// import React from 'react';
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
YellowBox.ignoreWarnings(["Class RCTCxxModule"]);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "./src/components/MainScreen";

const AppStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppStackNavigator);
