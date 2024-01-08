// import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from '../ProductsScreen/ProductsScreen';
import HomeProductDetails from '../ProductDetails/ProductDetails'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      initialRouteName='Products'
    >
      <Stack.Screen 
        name="Products" 
        component={ProductsScreen}
        
        options={{
          title: 'Products',
        }}
      />
      <Stack.Screen 
        name="HomeProductDetails" 
        component={HomeProductDetails}
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