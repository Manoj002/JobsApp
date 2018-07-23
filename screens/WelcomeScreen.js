import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../Components/Slides';

const SLIDE_DATA = [
    {text: 'Welcome to JobApp', color: '#03A9F4'},
    { text: 'Use this to get a Job', color: '#009688'},
    { text: 'Set your location, then swipe away', color: '#03A9F4'}
];

class WelcomeScreen extends React.Component {

    state = { token: null } // state is kept on component side try with redux

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');   // .getItem is an async call
        
        if(token) {
            this.props.navigation.navigate('map');    // if token exists take me to mapScreen
            this.setState({ token });           // as lazy: true, hence assign token the value
        }
        else {
            this.setState({ token: false })
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {

        if(_.isNull(this.state.token)) {    // check if token is null
            return <AppLoading />        // Show AppLoading component if token is null
        }

        return(
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        )
    }
}

export default WelcomeScreen;