import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Animated, Easing, PixelRatio } from 'react-native';
import { MAIN_COLOR, w, h } from '../../utils/constants';

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
                <StatusBar hidden={true} animated={false}/>
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
        width: w*.67,
        height: w*.67,
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
        backgroundColor: MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: 'lobster',
        color: '#fff',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(16),
    }
})