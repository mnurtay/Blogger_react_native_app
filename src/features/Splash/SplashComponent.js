import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Animated, Easing } from 'react-native';
import { MAIN_COLOR } from '../../utils/constants';

export default class SplashComponent extends Component{
    componentWillMount(){
        this.animatedValue = new Animated.Value(0)
    }
    componentDidMount(){
        Animated.timing(this.animatedValue, {
            toValue: 1,
            easing: Easing.elastic(1),
            duration: 2000
        }).start()
    }
    render(){
        const interpolateRotation = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['45deg', '405deg']
        })
        const animatedStyle = {
            transform: [
                { rotate: interpolateRotation }
            ]
        }
        const interpolateRotation2 = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['-45deg', '-405deg']
        })
        const animatedStyle2 = {
            transform: [
                { rotate: interpolateRotation2 }
            ]
        }
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Animated.View style={[styles.diamond, animatedStyle]}>
                    <View>
                        <Animated.Text style={[styles.textStyle, animatedStyle2]}>
                            Blogger App
                        </Animated.Text>
                    </View>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    diamond: {
        width: 270,
        height: 270,
        borderRadius: 12,
        backgroundColor: MAIN_COLOR,
        // transform: [
        //     {rotate: '45deg'}
        // ],
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: 'happyMonkey',
        color: '#fff',
        fontSize: 40,
        // transform: [
        //     {rotate: '-45deg'}
        // ],
    }
})