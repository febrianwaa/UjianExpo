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
import HistoryLaporan from './src/Page/HistoryLaporan';
import RegisterLaporan from './src/Page/RegisterLaporan';

import HomeTinder from './src/PageTinder/HomeTinder';
import LoginTinder from './src/PageTinder/LoginTinder';
import MenuTinder from './src/PageTinder/MenuTinder';
import  RegisterTinder  from './src/PageTinder/RegisterTinder';
import  DataCalonTinder  from './src/PageTinder/DataCalonTinder';


const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="registrasi" component={Register}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="menu" component={Menu}/>
            <Stack.Screen name="historyuser" component={HistoryUser}/>
            <Stack.Screen name="petaa" component={Petaa}/>
            <Stack.Screen name="registerlaporan" component={RegisterLaporan}/>
            <Stack.Screen name="historylaporan" component={HistoryLaporan}/> */}

            <Stack.Screen name="HomeTinder" component={HomeTinder}/>
            <Stack.Screen name="LoginTinder" component={LoginTinder}/>
            <Stack.Screen name="MenuTinder" component={MenuTinder}/>
            <Stack.Screen name="RegisterTinder" component={RegisterTinder}/>
            <Stack.Screen name="DataCalonTinder" component={DataCalonTinder}/>

          
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
