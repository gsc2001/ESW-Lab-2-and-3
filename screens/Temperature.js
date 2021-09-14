import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../utils/api';

export default function Temperature({ navigation }) {
    const [temp, setTemp] = useState(0);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            const interval = setInterval(() => {
                api.getTemperature()
                    .then(t => {
                        if (t != temp) setTemp(t);
                        if (loading) setLoading(false);
                    })
                    .catch(err => console.error(err.response));
            }, 2000);
            return () => clearInterval(interval);
        }, [])
    );
    console.log(temp);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading ? <Text>Loading</Text> : <Text style={{ fontSize: 70 }}>{temp}°C</Text>}
        </View>
    );
}
