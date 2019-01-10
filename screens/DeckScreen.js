import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card } from 'react-native-elements';
import Swipe from '../Components/Swipe';

class DeckScreen extends React.Component {

    renderCard(job) {

        const initialRegion={
            latitude: job.latitude,
            longitude: job.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }

        return(
            <Card title={job.jobtitle}>
                <View style={{height: 300}}>
                    <MapView
                        scrollEnabled={false}
                        style={{flex: 1}}
                        cacheEnabled={Platform.OS === 'android' ? true: false }
                        initialRegion={initialRegion}
                    >
                    </MapView>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
                </Text>
            </Card>
        )
    }

    renderNoMoreCards() {
        return(
            <View 
                style={{
                    justifyContent: "center",
                    height: 50,
                    width: "90%",
                    marginLeft: 20,
                    marginRight: 20,
                    elevation: 1,
                    zIndex: 10,
                    borderRadius: 8
                }} 
            >
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "200",
                        color: "#000"
                    }}
                >
                    No more jobs!!!
                </Text>
            </View>
        )
    }

    render() {
        return(
            <View
                style={styles.container}
            >
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    container: {
        flex: 1,
        justifyContent: "center"
    }
})

function mapStateToProps({ jobs }) {
    console.log(jobs.results)
    return { jobs: jobs.results}
}

export default connect(mapStateToProps)(DeckScreen);