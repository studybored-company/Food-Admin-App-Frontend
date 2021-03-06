import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Accounts = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => navigation.navigate("Dashboard")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Accounts</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body1}>
                    <View style={styles.body2}>
                        <TouchableOpacity onPress={() => navigation.navigate("Accounts")}>
                            <Text style={styles.button1}>Statements</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Accounts2")}>
                            <Text style={styles.button2}>Settlements</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Offer")}>
                        <TextInput
                            placeholder="Select Restaurant"
                            style={styles.placeholder}
                            underlineColorAndroid='transparent'>
                        </TextInput>
                    </TouchableOpacity>
                </View>
                <View style={styles.datas}>
                    <View style={styles.data}>
                        <Text style={styles.text3}>UserId</Text>
                        <Text style={{
                            paddingLeft: 103, padding: 3, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: 0.0</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Customer Name</Text>
                        <Text style={{
                            paddingLeft: 30, padding: 3, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: ABC</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Order Delivery</Text>
                        <Text style={{
                            paddingLeft: 43, padding: 3, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: 21/02/2021</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Tax</Text>
                        <Text style={{
                            paddingLeft: 126, padding: 3, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: 5%</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Delivery charge</Text>
                        <Text style={{
                            paddingLeft: 37, padding: 3, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Tax</Text>
                        <Text style={{
                            paddingLeft: 126, padding: 3, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Commission</Text>
                        <Text style={{
                            paddingLeft: 59, padding: 5, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: 20%</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Order Amount</Text>
                        <Text style={{
                            paddingLeft: 43, padding: 3, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: 200</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Transaction Status</Text>
                        <Text style={{
                            paddingLeft: 14, padding: 3, fontSize: 16, fontFamily: 'OpenSansSemiBold'
                            , color: '#696969'
                        }}>: Received</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#f5fffa',
        marginTop: 10,
        paddingBottom: 40,
        paddingLeft: 1,
        paddingRight: 100,
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 5,
        paddingRight: 80,
        // marginRight: 100
    },
    dashboard: {
        fontSize: 30,
        // paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        // marginRight:130
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 520,
        width: 330,
        elevation: 8,
        borderRadius: 8
    },
    body1: {
        backgroundColor: 'white',
        height: 100,
        width: 330,
        elevation: 5,
        borderRadius: 10
    },
    body2: {
        flexDirection: 'row'
    },
    button1: {
        textAlign: 'center',
        padding: 12,
        width: 165,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 10,
        fontSize: 16,
        color: '#696969',
        borderRadius: 2,
        fontFamily: 'OpenSansSemiBold'
    },
    button2: {
        textAlign: 'center',
        padding: 12,
        width: 165,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#696969',
        borderRadius: 2,
        fontFamily: 'OpenSansSemiBold'
    },
    touch: {
        paddingTop: 10,
        flexDirection: 'row'
    },
    placeholder: {
        width: 330,
        height: 40,
        borderColor: 'white',
        borderWidth: 0,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 5,
        borderRadius: 5,
        fontFamily: 'OpenSansSemiBold'
    },
    datas: {
        paddingTop: 20,
        padding: 10
    },
    data: {
        flexDirection: 'row',
        padding: 2
    },
    text3: {
        padding: 3,
        color: '#696969',
        paddingLeft: 20,
        fontSize: 16,
        fontFamily: 'OpenSansRegular'
    }
});

export default Accounts;