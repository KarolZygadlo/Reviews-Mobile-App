import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { globalStyles, images } from '../assets/styles/styles';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {

    const { title, body, rating } = route.params;

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <View style={globalStyles.rating}>
                    <Text>Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}