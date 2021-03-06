import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Graph from '../BarGraph/Graph'
import { useFonts } from 'expo-font';

import Logo from './Logo';

const GraphicReport = ({ navigation}) => {

    return (
        <ScrollView >
            <View style={styles.container}>
            {/* <Logo /> */}
            <View style={styles.head}>
                <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Dashboard")}>
                    <Icon name="arrow-back" size={30} color="#FDC913" />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Graphic Report</Text>
                {/* <Text style={styles.back} >Back</Text> */}
            </View>
            <View style={styles.graph}>
                <Text style={styles.search}>Search by Date</Text>
                <TextInput style={styles.date} placeholder="dd/mm/yyyy" keyboardType="numeric"/>
            </View>
            <View style={styles.graph1}>
                <View style={styles.body}>
                    <Text style={styles.text1}>Revenue : Year 2021</Text>
                    {/* <Image style={styles.img} source={require("../assets/graph1.jpg")} /> */}
                    <View style={styles.bargraph}>
                    <Graph/>
                    </View>
                   
                </View>
                <View><Text></Text></View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Orders : Year 2021</Text>
                    {/* <Image style={styles.img} source={require("../assets/graph1.jpg")} /> */}
                    <View style={styles.bargraph}>
                    <Graph/>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa',
        paddingBottom: 10,
        alignItems: 'center',
    },
    head: {
       
        paddingTop: 10,
        flexDirection: 'row',
        // backgroundColor: '#f5fffa',
        paddingBottom: 25,

    },
    menu: {

        paddingRight: 40
        // marginTop: 2,
        // marginRight: 4
    },
    dashboard: {
        fontSize: 25,
        paddingRight: 80,
        color: '#696969',
        fontFamily: 'OpenSansBold',

    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    graph: {
        flexDirection: 'row',
        // backgroundColor: '#f5fffa'
    },
    search: {
        padding: 10,
        color: '#696969',
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold'
    },
    date: {
        // paddingTop: 10,
        color: '#696969',
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold',
        width:90
    },
    graph1: {
        alignItems: 'center'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 320,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        alignItems: 'center',
        paddingTop: 20,
       
    },
    img: {
        height: 200,
        width: 240,
        alignItems: 'center'
    },
    text1: {
        paddingRight: 28,
        color: '#696969',
        fontSize: 16,
        fontFamily: 'OpenSansSemiBold'
    },
    bargraph:{
        marginTop:-120,
        marginRight:40
    }
});

export default GraphicReport;