import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as ct from '../../../utils/constants'
import { Constants } from 'expo'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

export default class SigninContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <View style={{backgroundColor:ct.STATUSBAR_COLOR, height:Constants.statusBarHeight}} />
                <View style={styles.lang_btn_container}>
                    <Button 
                        clear
                        title='Русский'
                        icon={ <Ionicons name='ios-arrow-down' size={16} color='#808080'/> }
                        buttonStyle={styles.lang_button}
                        titleStyle={{color:'#808080', fontSize:17}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    lang_button: {
        flexDirection:'row-reverse',
        width: 200,
        height: 40,
        borderRadius: 12
    },
    lang_btn_container: {
        marginTop: 5,
        alignItems: 'center'
    }
})