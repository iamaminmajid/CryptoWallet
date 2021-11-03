import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native'
import Welcome from '../blocks/welcome';




export default function ItemScreen(){
    const [isModalVisible, setModalVisible] = useState(false);

    function handleModal(){
        setModalVisible(false)
    }
    function handleModalOn(){
        setModalVisible(true)
    }

    return(
        <SafeAreaView>
            <StatusBar/>
            
            <Welcome/>
            <ScrollView style={styles.container}>
                <Text>Transaction History goes hre...</Text>
            </ScrollView>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    container:{
        padding:20,
    },
    heading:{
        fontSize:26,
        fontWeight:"700",
        color:"#1a4aba"
    },
    
    

})