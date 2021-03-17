import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Auth,Login,Daftar } from '../../src/Pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="Auth" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Daftar" component={Daftar} />
        </Stack.Navigator>
    );
}

export default Router;