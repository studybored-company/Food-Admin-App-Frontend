import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useFonts } from 'expo-font';

import Logo from './Logo';

const OrderDetails = ({ navigation }) => {

    return (
        <View style={styles.container}>
        {/* <Logo /> */}
        <View style={styles.head}>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("ActiveOrder")}>
                <Icon name="arrow-back" size={30} color="#FDC913" />
            </TouchableOpacity>
            <Text style={styles.dashboard}>Order Details</Text>
            {/* <Text style={styles.back} >Back</Text> */}
        </View>
            <View style={styles.body}>
                <View style={styles.image1}>
                    <Image style={styles.image} source={require("../assets/burger.jpg")} />
                    <View style={styles.view}>
                        <Text style={styles.text1}>Burger * 2 </Text>
                        <Text style={styles.text2}>Rs.0.00</Text>
                    </View>
                </View>
                <View style={styles.body1}>

                    <View style={styles.data}>
                        <Text style={styles.text3}>Order Date</Text>
                        <Text style={{
                            paddingLeft: 55, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 15-02-2021</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Payment mode</Text>
                        <Text style={{
                            paddingLeft: 24, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: Cash</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Restaurant Name</Text>
                        <Text style={{
                            paddingLeft: 5, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: ABC</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Address</Text>
                        <Text style={{
                            paddingLeft: 78, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: ABC</Text>
                    </View>

                    <Text style={styles.text5}>Bill Details</Text>

                    <View style={styles.data}>
                        <Text style={styles.text3}>Username</Text>
                        <Text style={{
                            paddingLeft: 50, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: XYZ</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Phone</Text>
                        <Text style={{
                            paddingLeft: 80, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: +91 123456789</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Address</Text>
                        <Text style={{
                            paddingLeft: 67, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: ABC</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Order Price</Text>
                        <Text style={{
                            paddingLeft: 41, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Delivery charge</Text>
                        <Text style={{
                            paddingLeft: 9, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Tax</Text>
                        <Text style={{
                            paddingLeft: 102, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Delivery Tip</Text>
                        <Text style={{
                            paddingLeft: 38, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Total</Text>
                        <Text style={{
                            paddingLeft: 90, fontSize: 15, fontFamily: 'OpenSansRegular'
                            , color: '#696969'
                        }}>: 0.00</Text>
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
        fontFamily: 'OpenSansRegular'
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
    image1: {
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        paddingBottom: 30
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 8
    },
    view: {
        flexDirection: 'column',
        padding: 20,
        paddingTop: 10,
        alignItems: 'center'
    },
    text1: {
        paddingTop: 20,
        fontSize: 16,
        color: '#696969',
        fontFamily: 'OpenSansBold'
    },
    text2: {
        padding: 3,
        fontSize: 15,
        color: 'red',
        fontFamily: 'OpenSansSemiBold'
    },
    body1: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 330,
        width: 330
    },
    data: {
        flexDirection: 'row'
    },
    text3: {
        paddingLeft: 40,
        fontSize: 15,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    text5: {
        padding: 20,
        textAlign: 'center',
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15
    }
});

export default OrderDetails;