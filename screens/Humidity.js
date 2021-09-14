import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../utils/api';

export default function Humidity({ navigation }) {
    const [humidity, setHumidity] = useState(0);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            const interval = setInterval(() => {
                api.getHumidity()
                    .then(hum => {
                        if (hum != humidity) setHumidity(hum);
                        if (loading) setLoading(false);
                    })
                    .catch(err => console.error(err.response));
            }, 2000);
            return () => clearInterval(interval);
        }, [])
    );
    console.log(humidity);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading ? <Text>Loading..</Text> : <Text style={{ fontSize: 70 }}>{humidity}</Text>}
        </View>
    );
}
