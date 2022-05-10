import { Text, View,Button } from 'react-native'
import React from 'react'
import SettingsView from './src/SettingsView.js'
import  { Component, PropTypes } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'; 

class HomeScreen extends React.Component {  
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
              <Text>Home Screen</Text>  
              <Button  
                  title="Settings"  
                  onPress={() => this.props.navigation.navigate('Settings')}  
              />  
          </View>  
      );  
  }  
}  

const AppNavigator = createStackNavigator(  
  {  
      Settings: SettingsView,  
      Home: HomeScreen
  },  
  {  
      initialRouteName: "Home"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}  