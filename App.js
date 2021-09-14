import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Alarm from './screens/Alarm';
import Humidity from './screens/Humidity';
import Temperature from './screens/Temperature';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Temperature') {
                            return (
                                <Ionicons name='thermometer-outline' size={size} color={color} />
                            );
                        } else if (route.name === 'Humidity') {
                            return <Ionicons name='water-outline' size={size} color={color} />;
                        } else if (route.name === 'Alarm') {
                            return <Ionicons name='alarm-outline' size={size} color={color} />;
                        }
                        // You can return any component that you like here!
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray'
                })}>
                <Tab.Screen name='Temperature' component={Temperature} />
                <Tab.Screen name='Humidity' component={Humidity} />
                <Tab.Screen name='Alarm' component={Alarm} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
