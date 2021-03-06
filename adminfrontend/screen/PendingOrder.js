import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useFonts } from 'expo-font';

import Logo from './Logo';

const PendingOrder = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Logo /> */}
            <View style={styles.head}>
                <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Dashboard")}>
                    <Icon name="arrow-back" size={30} color="#FDC913" />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Pending Order</Text>
                {/* <Text style={styles.back} >Back</Text> */}
            </View>

            <View style={styles.body}>
                <View style={styles.body1}>
                    <Text style={styles.number}>Order no: 01</Text>
                    <Text style={styles.date}>Date: 14/02/2021</Text>
                </View>
                <View style={styles.image1}>
                    <Image style={styles.image} source={require("../assets/burger.jpg")} />
                    <Text style={styles.text1}>Burger * 2 More</Text>
                    <Text style={styles.text2}>Rs.0.00</Text>
                    <Text style={styles.text3}>Payment : Cash</Text>
                    <Text style={styles.text3}>Order Price : 0.0</Text>
                    <Text style={styles.text3}>Contact User :</Text>
                    <Text style={styles.text4}>+91 123456789</Text>
                    <View style={styles.option}>
                        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("ActiveOrder")}>
                            <Text style={styles.text}>Confirm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Dashboard")}>
                            <Text style={styles.text}>Reject</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        alignItems: 'center'
    },
    head: {
        paddingTop:10,
        flexDirection: 'row',
        // backgroundColor: '#f5fffa',
        paddingBottom: 40,
        
    },
    menu: {
        
        paddingRight:70
        // marginTop: 2,
        // marginRight: 4
    },
    dashboard: {
        fontSize: 25,
        paddingRight:80,
        color: '#696969',
        fontFamily: 'OpenSansBold',
       
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'semibold'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 500,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        paddingTop: 10
    },
    body1: {
        flexDirection: 'row'
    },
    number: {
        paddingRight: 20,
        paddingLeft: 10,
        color: '#696969',
        fontSize: 13,
        fontFamily: 'OpenSansRegular',
    },
    date: {
        paddingLeft: 100,
        color: '#696969',
        fontSize: 13,
        fontFamily: 'OpenSansRegular'
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 10
    },
    image1: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 50
    },
    text1: {
        paddingTop: 20,
        fontSize: 20,
        color: '#696969',
        fontFamily: 'OpenSansBold'
    },
    text2: {
        padding: 3,
        fontSize: 20,
        color: 'red',
        fontFamily: 'OpenSansSemiBold',
    },
    text3: {
        padding: 7,
        fontSize: 14,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    text4: {
        fontSize: 14,
        color: '#696969',
        paddingBottom: 10,
        fontFamily: 'OpenSansSemiBold'
    },
    option: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touch: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        textAlign: 'center',
        padding: 10,
        width: 110,
        height: 40,
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 3,
        fontFamily: 'OpenSansSemiBold',
        fontSize: 14
    },
});

export default PendingOrder;