
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import Movies from '../Screens/Movies';
import Registration from '../Screens/Registration';
import Login from '../Screens/Login';

// import Test from '../Screens/Test';

export const Routes = () => {

    const Stack = createStackNavigator();

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>

                <Stack.Screen name="SignUp" component={Registration} />
                <Stack.Screen name="Login" component={Login} />

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='Movies' component={Movies} />

                {/* <Stack.Screen name='Test' component={Test} /> */}

            </Stack.Navigator>
        </NavigationContainer>

    );

}

export default Routes;
