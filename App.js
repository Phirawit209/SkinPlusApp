import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import MyAppoint from './screens/MyAppoint';
import AppointCalendar from './screens/AppointCalendar';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';


const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>

        
      <Tab.Screen name="First">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen 
                name="Home" 
                component={Home} 
                options={{ title: 'My home', headerShown:false }}
              />
              <HomeStack.Screen name="Login" component={Login} options={{ title: 'My home', headerShown:false }} />
              <HomeStack.Screen name="Profile" component={Profile} options={{ title: 'Profile', headerShown:false }} />
              <HomeStack.Screen name="MyAppoint" component={MyAppoint} />
              <HomeStack.Screen name="AppointCalendar" component={AppointCalendar} />
              <HomeStack.Screen name="Register" component={Register} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>



        <Tab.Screen name="Second">
          {() => (
            <SettingsStack.Navigator>
              <HomeStack.Screen 
                name="Login" 
                component={Login} 
                options={{ title: 'Login', headerShown:false }}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>


       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
