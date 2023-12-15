import React, { ReactNode } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#03cafc'}}>
      <Text style={{ fontSize: 20, color: '#ffffff'}}>Home Screen</Text>
      <MaterialCommunityIcons name="home" color="#ffffff" size={30} />
    </View>
  )
}

function ShoppingCartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#c203fc'}}>
      <Text style={{ fontSize: 20, color: '#ffffff'}}>Shopping Cart Screen</Text>
      <MaterialCommunityIcons name='cart' color='#ffffff' size={30} />
    </View>
  )
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#48d969'}}>
      <Text style={{ fontSize: 20, color: '#ffffff' }}>Account Screen</Text>
      <MaterialCommunityIcons name='account' color='#ffffff' size={30} />

    </View>
  )
}

function MyTabs() {
  return (

    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        tabBarActiveTintColor: '#0615bf',
        tabBarActiveBackgroundColor: '#cef531',
        // tabBarStyle: { position: 'absolute'  }
        // tabBarStyle: { paddingBottom: 10 }
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarStyle: { paddingBottom: 10 },
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

