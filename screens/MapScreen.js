import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../actions';

class MapScreen extends React.Component {

    state = {
        // mapLoaded: false,
        region: {
            latitude: 37,
            longitude: -122,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
        } 
    }

    // componentDidMount() {
    //     this.setState({ mapLoaded: true })
    // }

    onRegionChangeComplete = (region) => {
        this.setState({ region })
    }

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck');
        });
    }

    render() {

        // if(!this.state.mapLoaded) {
        //     return(
        //         <View style={{flex: 1, justifyContent: 'center'}}>
        //             <ActivityIndicator size = 'large'/>
        //         </View>
        //     )
        // }

        return(

            <View style={{flex: 1}}>
                <MapView 
                    style={{flex: 1}}
                    initialRegion={this.state.region}
                    loadingEnabled={true}
                    loadingIndicatorColor='#007aff'
                    loadingBackgroundColor='#FFFFFF'
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttomContainer} >
                    <Button 
                        large
                        title='Search here'
                        backgroundColor="#009688"
                        icon={{ name: 'search', size: 26 }}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttomContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20
    }
})

export default connect(null, actions)(MapScreen);