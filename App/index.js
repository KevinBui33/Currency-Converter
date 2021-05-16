import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ContextProvider } from "./Context";

const Stack = createStackNavigator();

import CurrencyTypeList from "./Screens/CurrencyTypeList";
import Home from "./Screens/Home";

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CurrencyTypeList" component={CurrencyTypeList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
