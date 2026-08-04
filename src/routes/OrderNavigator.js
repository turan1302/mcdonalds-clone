import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../screens/Order';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Order"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
    );
};

export default OrderNavigator;