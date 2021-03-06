import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Animated, Alert, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/Ionicons'

const SubAdmins = ({ navigation }) => {

    const [people, setPeople] = useState([

        { name: 'Sherin John', id: '1' },
        { name: 'Sismi Joseph', id: '2' },
        { name: 'Anjali Dileep', id: '3' },
        
    ])

    const Item = ({ item, onPress }) => (
        <View>
            <TouchableOpacity
                activeOpacity={0.3}
                style={styles.item}
                onPress={onPress}>
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
            <View style={styles.pad}></View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item
            item={item}
            onPress={() => navigation.navigate('SubAdminsDetails', { items: item })}
        />
    );
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.3} onPress={()=>navigation.navigate("settings")}>
                    <Icon style={styles.headertext} name="arrow-back" size={30} color="#FDC913" />
                </TouchableOpacity>
                <Text style={styles.headertxt}>Admins</Text>

            </View>
            
            <View>
                <FlatList
                    data={people}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.inputButton} onPress={() => navigation.navigate('AddSubAdmins')}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}


export default SubAdmins;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5fffa',
        height: '100%',
        // paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        
        paddingBottom: 50
    },
    headertext: {
        paddingLeft:10,
        paddingRight:80

    },
    headertxt: {
        fontSize: 25,
        color: '#696969',
        fontFamily: 'OpenSansBold'
    },
    item: {
        backgroundColor: 'white',
        elevation: 2,
        padding: 20,
        borderRadius: 50,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
    },
    pad: {
        paddingBottom: 30
    },
    title: {
        textAlign: 'center',
        color: '#696969',
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15
    },
    category: {
        paddingTop: 20,
        paddingBottom: 30,
    },
    categorytext: {
        fontSize: 18,
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    buttoncontainer: {
        paddingTop: 50
    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        // width:150,
        // alignSelf:'center'
    },
    button: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        
    },

})
