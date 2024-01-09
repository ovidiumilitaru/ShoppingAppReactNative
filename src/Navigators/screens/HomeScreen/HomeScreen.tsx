// import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from '../ProductsScreen/ProductsScreen';
import ProductDetailsScreen from '../ProductDetailsScreen/ProductDetailsScreen'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      initialRouteName='Products'
    >
      <Stack.Screen 
        name="ProductsScreen" 
        component={ProductsScreen}
        options={{
          title: 'Products',
        }}
      />
      <Stack.Screen 
        name="ProductDetailsScreen" 
        component={ProductDetailsScreen}
        options={{
          title: 'Prod Details'
        }}
      />
    </Stack.Navigator>
  )
}

export default function HomeScreen() {
  return (
    <MyStack />
  )
}