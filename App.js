/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { Provider } from 'react-redux';
import ProductScreen from './src/ProductScreen'
import FilterScreen from './src/FilterScreen'
import { store } from './store'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
const AppStack = createStackNavigator()



const Root = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <AppStack.Screen name='Product' component={ProductScreen} options={{ headerShown: false }} />
        <AppStack.Screen name='Filter' component={FilterScreen} options={{ headerShown: false }} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Root />
      </Provider>
    </SafeAreaView>
  );
};


export default App;
