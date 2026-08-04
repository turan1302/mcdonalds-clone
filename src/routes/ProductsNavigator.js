import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/Products';

const Stack = createNativeStackNavigator();

const ProductsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Products"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
    );
};

export default ProductsNavigator;