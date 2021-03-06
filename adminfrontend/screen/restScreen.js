import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import { DrawerActions } from '@react-navigation/native';


const restScreen = ({ navigation }) => {

    const onDelete = () => {
        Alert.alert(
            ' ',
            'Are you sure want to delete this ?',
            [
                { text: 'Yes' },
                { text: 'No', style: 'No' },
            ],
            {
                cancelable: false
            }
        );
    }

    return (

        <View >

            <View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                        marginBottom: 40, flexDirection: 'row', justifyContent: 'space-between',
                     marginLeft: 20, marginRight: 20
                    }} >
                        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                            <Icons name="arrow-back"
                                color="#FDC913" size={30} style={{ paddingTop: 13 }} ></Icons>
                        </TouchableOpacity>
                        <Text style={styles.rest}>Restaurant</Text>
                        <TouchableOpacity style={{ paddingTop: 10 }} onPress={() => navigation.navigate("regScreen")}>
                            <Text style={{
                                backgroundColor: "#FDC913",
                                color: "white", height: 38, paddingTop: 10, paddingLeft: 20, paddingRight: 20, paddingBottom: 10, borderRadius: 20, width: "100%", fontFamily: 'OpenSansBold'
                            }}>Add</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.view3}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.reg}>Registered Restaurant</Text>


                            <View style={{ flexDirection: 'column' }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Block")} >
                                    <Text style={{
                                        marginLeft: 25, marginTop: 10,
                                        color: "#696969", fontFamily: 'OpenSansSemiBold'
                                    }}>Blocked </Text>
                                    <Text style={{
                                        marginLeft: 25, color: "#696969",
                                        fontFamily: 'OpenSansSemiBold'
                                    }}>Restaurant</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={styles.view1}  >

                            <TouchableOpacity>

                                <Text style={{ marginBottom: 10, color: "#696969", fontFamily: 'OpenSansRegular' }} onPress={() => navigation.navigate("tabScreen")}>
                                    ID</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: "#696969", marginRight: 80, fontFamily: 'OpenSansRegular' }} onPress={() => navigation.navigate("tabScreen")}>Restaurant</Text>
                                        <Text style={{ marginLeft: 10, color: "#696969", fontFamily: 'OpenSansRegular' }} onPress={() => navigation.navigate("tabScreen")}>Name</Text>
                                    </TouchableOpacity>
                                </View>
                                <Icon1 name="pencil" size={20} style={{ marginRight: 10 }} onPress={() => navigation.navigate("EditScreen")}></Icon1>
                                <Icon name="delete" size={20} onPress={onDelete}></Icon>
                            </View>


                        </View>



                        <View style={styles.view1}>


                            <Text style={{ marginBottom: 10, color: "#696969", fontFamily: 'OpenSansRegular' }}>ID</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: "#696969", marginRight: 80, fontFamily: 'OpenSansRegular' }}>Restaurant</Text>
                                    <Text style={{ marginLeft: 10, color: "#696969", fontFamily: 'OpenSansRegular' }}>Name</Text></View>
                                <Icon1 name="pencil" size={20} style={{ marginRight: 10 }} onPress={() => navigation.navigate("EditScreen")}></Icon1>
                                <Icon name="delete" size={20} onPress={onDelete}></Icon>
                            </View>


                        </View>

                        <View style={styles.view1}>


                            <Text style={{ marginBottom: 10, color: "#696969", fontFamily: 'OpenSansRegular' }}>ID</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: "#696969", marginRight: 80, fontFamily: 'OpenSansRegular' }}>Restaurant</Text>
                                    <Text style={{ marginLeft: 10, color: "#696969", fontFamily: 'OpenSansRegular' }}>Name</Text></View>
                                <Icon1 name="pencil" onPress={() => navigation.navigate("EditScreen")} size={20} style={{ marginRight: 10 }}></Icon1>
                                <Icon name="delete" size={20} onPress={onDelete}></Icon>
                            </View>


                        </View>



                    </View>
                </ScrollView>
            </View>
        </View>




    )
}

export default restScreen;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row'
    },

    rest: {
        fontSize: 30,
        marginLeft: 20,
        // marginRight:10,
        marginTop: 10,
        color: "#696969",
        fontFamily: 'OpenSansBold',
    },
    back: {
        fontSize: 15,
        marginTop: 55,
        marginLeft: 70,
        color: "#696969",
        fontFamily: 'OpenSansRegular'
    },
    rest2: {
        fontSize: 35,
        marginLeft: 20,
        marginRight: 20,
        //color:colors.textColor,
        color: "#696969",
        fontFamily: 'OpenSansBold'


    },

    view1: {
        paddingLeft: 25,
        paddingTop: 35,
        marginBottom: 20,
        height: 120,
        width: "82%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginLeft: 25
    },
    reg: {
        paddingLeft: 35,
        paddingTop: 10,
        fontSize: 15,
        height: 60,
        width: "50%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginBottom: 50,
        color: "#696969",
        fontFamily: 'OpenSansSemiBold'

    },
    view3: {
        marginBottom: 60,
        marginLeft: 25,
        height: 620,
        width: "86%",
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop: 20
    }

});