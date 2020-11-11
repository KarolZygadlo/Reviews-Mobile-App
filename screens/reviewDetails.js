import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/styles';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {

    const { title, body, rating } = route.params;

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <Text>{ rating }</Text>
            </Card>
        </View>
    )
}