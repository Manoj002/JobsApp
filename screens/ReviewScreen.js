import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        return {
            title: 'Review Jobs',
            headerRight: (
                <Button 
                    title='setting'
                    onPress={() => navigation.navigate('setting')}
                    backgroundColor='rgba(0,0,0,0)'
                    color='rgba(0, 122, 255, 1)'
                />
            ), 
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        }
    }

    render() {
        return(
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('setting')}
                />
            </View>
        )
    }
}

export default ReviewScreen;