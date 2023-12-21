import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyAppoint from './screens/MyAppoint';
import AppointCalendar from './screens/AppointCalendar';
import Login from './screens/Login';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />

    <Button
        title="Go to Details"
        onPress={() => navigation.navigate('AppointCalendar',{serviceType: 1, slotType: 1, appointDatetime: '2023-12-21', description: 'test' })}
      />  
    </View>
  );
}



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
                component={HomeScreen} 
                options={{ title: 'My home', headerShown:false }}
              />
              <HomeStack.Screen name="Login" component={Login} options={{ title: 'My home', headerShown:false }} />
              <HomeStack.Screen name="MyAppoint" component={MyAppoint} />
              <HomeStack.Screen name="AppointCalendar" component={AppointCalendar} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <SettingsStack.Navigator>
              <HomeStack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: 'My home', headerShown:false }}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
