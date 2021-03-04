import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Auth } from '../../src/Pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
    );
}

export default Router;