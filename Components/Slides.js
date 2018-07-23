import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class slides extends React.Component {

    renderLastSlide(index) {
        if(index === this.props.data.length -1) {
            return(
                <Button 
                    title='Onwards!'
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            )
        }
    }

    renderSlides() {
        return this.props.data.map((slides, index) => {
            return(
                <View 
                    key={slides.text}
                    style={[styles.slideStyle, {backgroundColor: slides.color}]}
                >
                    <Text style={styles.textStyle}>{slides.text}</Text>
                        {this.renderLastSlide(index)}
                </View>
            )
        })
    }

    render() {
        return(
            <ScrollView
                horizontal
                style={{flex: 1}}
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#FFFFFF'
    },
    slideStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        paddingTop: 15
    }
})

export default slides;