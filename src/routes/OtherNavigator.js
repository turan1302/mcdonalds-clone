import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Other from '../screens/Other';

const Stack = createNativeStackNavigator();

const OtherNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Other"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Other" component={Other} />
        </Stack.Navigator>
    );
};

export default OtherNavigator;