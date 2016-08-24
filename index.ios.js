/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const SearchPage = require('./SearchPage');

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container2: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
});

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container1}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}



class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container2}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,

        }}/>
    );
  }
}

class HelloWorld extends Component {
  render() {
    return <Text style={styles.text}>Hello World (Again)</Text>;
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
