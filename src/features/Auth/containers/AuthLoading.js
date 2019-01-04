import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import SplashComponent from '../../Splash/SplashComponent'

export default class AuthLoading extends Component{
    constructor(props){
        super(props)
        this.state = {
            view: <SplashComponent />,
            load: false
        }
    }

    componentWillMount() {
        setTimeout( async () => {
            userLogin = await AsyncStorage.getItem('userLogin')
            this.setState( prevState => {
                view: this.props.navigation.navigate(userLogin ? 'app' : 'auth')
            })
        }, 2500)
    }

    render(){
        return this.state.view
    }
}