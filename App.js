import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from './components/Home';
import {Details} from './components/Details';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props){
    super(props);
 }
   render(){
     return(
       <NavigationContainer>
       <Stack.Navigator initialRouteName = "Home">
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Details" component={Details} />
       </Stack.Navigator>
       </NavigationContainer>
     );
   }
}



