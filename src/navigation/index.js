import React from 'react';
import { 
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import AuthLoading from '../features/Auth/containers/AuthLoading'
import AuthStack from './AuthStack'

const switchNav = createSwitchNavigator(
    {
        authLoading: AuthLoading,
        auth: AuthStack

    },
    {
        initialRouteName: 'authLoading',
    }
);

export default createAppContainer(switchNav)