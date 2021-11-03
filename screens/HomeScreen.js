import React from 'react';
import {View, 
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar
} from 'react-native'
import List from '../blocks/list.js'
import Welcome from '../blocks/welcome.js';

import ItemScreen from './ItemScreen.js'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function HomeScreen(){
    return(
        
            <Stack.Navigator>
                <Stack.Screen name="Home" component={mainScreen} options={{headerShown: false}} />
                <Stack.Screen name="Party" component={ItemScreen} options={{headerShown: false}} />
                
            </Stack.Navigator>

    )
}
function mainScreen(){
    return (
        <SafeAreaView style={{height:"100%"}}>
            <StatusBar/>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Welcome />    
                <List />
            </ScrollView>
        </SafeAreaView>
    )
}