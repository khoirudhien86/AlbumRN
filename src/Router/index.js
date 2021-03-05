import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Auth,Login } from '../../src/Pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default Router;