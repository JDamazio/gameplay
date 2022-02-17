import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/home';
import {SignIn} from '../screens/signin';
import { theme } from '../global/styles/theme';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return(
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle:{
                    backgroundColor: theme.colors.background
                }
                
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}