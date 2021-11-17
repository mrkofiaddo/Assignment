import 'react-native-gesture-handler';
import React from 'react';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import homescreen from './Screens/homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './Screens/DetailsScreen';
import Cart from './Screens/Cart';
import CartIcon from './Assets/consts/CartIcon';
import Checkout from './Screens/Checkout';
import FinalPage from './Screens/FinalPage';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

     
        
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FinalPage"
          component={FinalPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homescreen"
          component={homescreen}
          
          options={{ headerRight :()=>(<CartIcon/>),
          headerTitle:'Home'}}
        />
      
      <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />

        
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App