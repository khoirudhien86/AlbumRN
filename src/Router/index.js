import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Auth,Login,Daftar, Album, Info, Splash } from '../../src/Pages';
import { BottomNavigation } from '../Components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Album" component={Album} />
            <Tab.Screen name="Info" component={Info} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
            headerShown: false
          }}>
            {/* <Stack.Screen name="Splash" component={Splash} /> */}
            {/* <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Daftar" component={Daftar} /> */}
            <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
    );
}

export default Router;