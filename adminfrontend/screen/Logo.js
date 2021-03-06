import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native'

export default function Logo () 
{
    const { colors } = useTheme()
        return (
            <View style={styles.container}>
            
                    <Text style={styles.text1}>LOGO</Text>
            
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        // paddingTop:10,
        paddingLeft:20,
        elevation:10,
        // backgroundColor:'#f5fffa',
        paddingBottom:10
    },
    logo: {
        width: 230
    },
    text1: {
        fontSize: 25,
        fontFamily:'OpenSansBold',
        borderColor: 'white',
        borderBottomColor: 'grey',
        // paddingLeft: 34,
        // paddingTop: 80,
        // paddingBottom: 15,
        // elevation: 3,
        color: '#696969'
    }
})

