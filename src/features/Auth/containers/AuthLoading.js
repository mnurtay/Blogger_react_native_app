import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SplashComponent from '../../Splash/SplashComponent'

export default class AuthLoading extends Component{

    constructor(props){
        super(props)
        this.state = {
            view: <SplashComponent />
        }
    }

    // componentWillMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             view: <View><Text>Auth</Text></View>
    //         })
    //     }, 1500)
    // }

    render(){
        return(
            this.state.view
        )
    }
}