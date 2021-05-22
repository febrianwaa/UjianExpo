import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/Redux/Store';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Page/Home';
import Register from './src/Page/Register';
import Login from './src/Page/Login';
import Menu from './src/Page/Menu';
import HistoryUser from './src/Page/HistoryUser';
import Petaa from './Petaa';



const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="registrasi" component={Register}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="menu" component={Menu}/>
    <Stack.Screen name="historyuser" component={HistoryUser}/>
    <Stack.Screen name="petaa" component={Petaa}/>
          
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
