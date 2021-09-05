import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from '../screens/Home';
import Details from '../screens/Details';

const stack = createStackNavigator()

const Navigation=()=>{
   return(
          <NavigationContainer>
              <stack.Navigator>
                  <stack.Screen name="Home" component={Home}  options={{title:"Home"}}/>
                  <stack.Screen name="Details" component={Details} options={{title:"Details"}}/>
                  
              </stack.Navigator>
          </NavigationContainer>
   )
}
export default Navigation;