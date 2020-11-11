import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../assets/styles/styles';

export default function About() {
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About screen</Text>
        </View>
    )
}