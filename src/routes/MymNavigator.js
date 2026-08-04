import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mym from '../screens/Mym';

const Stack = createNativeStackNavigator();

const MymNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Mym"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Mym" component={Mym} />
        </Stack.Navigator>
    );
};

export default MymNavigator;