import React from "react";
import { AppRegistry } from "react-native";

import App from "./App";

const splashscreen = () => <App />;
export default splashscreen;

AppRegistry.registerComponent( "splashscreen", () => splashscreen );
