import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import SigninContainer from '../features/Auth/containers/SigninContainer'
import SignupContainer from '../features/Auth/containers/SignupContainer'

const stack = createStackNavigator(
    {
        signin: SigninContainer,
        signup: SignupContainer,
    },{
        initialRouteName: 'signin',
        navigationOptions: {
            headerVisible: false
        },
        headerMode: 'none'
    }
)

export default createAppContainer(stack)