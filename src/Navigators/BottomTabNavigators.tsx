import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AccountScreen from './screens/AccountScreen/AccountScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen/ShoppingCartScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        tabBarActiveTintColor: '#0615bf',
        tabBarActiveBackgroundColor: '#cef531',
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }): ReactNode =>  {
            return <MaterialCommunityIcons name='home' color={color} size={size}  />;
          }
        }}
      />
      <Tab.Screen 
        name="Shopping Cart" 
        component={ShoppingCartScreen}
        options={{
          tabBarLabel: 'Shopping Cart',
          tabBarIcon: ({ color, size }): ReactNode =>  {
            return <MaterialCommunityIcons name='cart' color={color} size={size} />;
          }
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }): ReactNode =>  {
            return <MaterialCommunityIcons name='account' color={color} size={size} />;
          }
        }}
      />
    </Tab.Navigator>

  )
}

export default function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

