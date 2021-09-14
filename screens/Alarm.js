import * as React from 'react';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, Button } from 'react-native';
import api from '../utils/api';

export default function Alarm() {
    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const submitDate = () => {
        api.pushDate(date);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <View
                style={{
                    width: '90%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    margin: 15
                }}>
                <View>
                    <Button onPress={showDatepicker} title='Select Date' />
                </View>
                <View>
                    <Button onPress={showTimepicker} title='Select Time' />
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />
            )}
            <View style={{ margin: 15 }}>
                <View>
                    <Text style={{ fontSize: 20 }}>
                        Date: {date.getDate()} : {date.getMonth() + 1} : {date.getFullYear()}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>
                        Time: {date.getHours()}: {date.getMinutes()}
                    </Text>
                </View>
            </View>
            <Button onPress={submitDate} title='Submit' />
        </View>
    );
}
