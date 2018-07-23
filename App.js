import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import store from './store';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';

class App extends React.Component {
  render() {

    const MainNavigation = createBottomTabNavigator({
      welcome: WelcomeScreen,
      auth: AuthScreen,
      main: createBottomTabNavigator({
        map: MapScreen,
        deck: DeckScreen,
        review: createStackNavigator({
          rev: ReviewScreen,
          setting: SettingScreen
        })
      })
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true,
      initialRouteName: 'welcome'
    })

    return(
      <Provider store={store} >
        <MainNavigation />
      </Provider>
    )

  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { createStackNavigator } from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HomeScreen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>DetailsScreen</Text>
//       </View>
//     )
//   }
// }

// export default createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen
// }, {
//   initialRouteName: 'Home'
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })

// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { createDrawerNavigator } from 'react-navigation';
// import WelcomeScreen from './screens/WelcomeScreen';
// import AuthScreen from './screens/AuthScreen'

// class App extends React.Component {
//   render() {
//     return (
//       <View />
//     )
//   }
// }

// export default createDrawerNavigator({
//   welcome: 'WelcomeScreen',
//   auth: 'AuthScreeen'
// })

