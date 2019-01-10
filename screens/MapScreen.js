import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../actions';

class MapScreen extends React.Component {

    state = {
        region: {
            latitude: 37,
            longitude: -122,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
        } 
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region })
    }

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck');
        });
    }

    render() {

        return(

            <View style={{flex: 1}}>
                <MapView 
                    style={{flex: 1}}
                    initialRegion={this.state.region}
                    loadingEnabled={true}
                    showsUserLocation
                    provider="google"
                    followsUserLocation
                    showsPointsOfInterest
                    scrollEnabled
                    loadingIndicatorColor='#007aff'
                    loadingBackgroundColor='#FFFFFF'
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer} >
                    <Button
                        title='Search for jobs'
                        buttonStyle={{
                            backgroundColor: "#fff",
                            borderRadius: 8,
                            elevation: 1,
                            zIndex: 10
                        }}
                        textStyle={{
                            color: "#007aff",
                            fontSize: 18,
                            fontWeight: "200"
                        }}
                        iconRight={{ 
                            name: 'search', 
                            size: 26, 
                            color: "#007aff" 
                        }}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 40
    }
})

export default connect(null, actions)(MapScreen);