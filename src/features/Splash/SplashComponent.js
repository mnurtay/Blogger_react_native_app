import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MAIN_COLOR } from '../../utils/constants';

export default class SplashComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.diamond}>
                    <View>
                        <Text style={styles.textStyle}>
                            Blogger App
                        </Text>
                    </View>
                </View>
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
        transform: [
            {rotate: '45deg'}
        ],
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: 'happyMonkey',
        color: '#fff',
        fontSize: 40,
        transform: [
            {rotate: '-45deg'}
        ],
    }
})