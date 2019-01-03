import React from 'react';
import { 
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import AuthLoading from '../features/Auth/containers/AuthLoading'

const switchNav = createSwitchNavigator(
    {
        authLoading: AuthLoading,
    },
    {
        initialRouteName: 'authLoading',
    }
);

export default createAppContainer(switchNav)