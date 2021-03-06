import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

function AddCoupon({ navigation }) {

    var items
    const [checked, setChecked] = useState('first');
    const [check, setCheck] = useState('first');

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => navigation.navigate("Offer")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Add Coupon</Text>
            </View>
            <View style={styles.body}>

                <View style={{ flexDirection: 'row', color: "#696969" , marginTop:1 }}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color="#696969"
                    />
                    <Text style={{ marginLeft: 10, marginTop: 8, fontFamily: "OpenSansRegular", color: "#696969", marginRight: 10 }}>For all Users</Text>
                </View>
                <View style={{ flexDirection: 'row', color: "#696969", marginBottom:2 }}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        color="#696969"
                    />
                    <Text style={{ marginLeft: 10, marginTop: 8, fontFamily: "OpenSansRegular", color: "#696969" }}>For First time Users</Text>
                </View>

                <Text style={styles.input}>Coupon Code Name</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Coupon Code Description</Text>
                <TextInput style={styles.input1} />

                <Text style={styles.input}>Coupon Code Discount</Text>
                <View style={{ flexDirection: 'row', color: "#696969" }}>
                    <RadioButton
                        value="first"
                        status={check === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setCheck('first')}
                        color="#696969"
                    />
                    <Text style={{ marginLeft: 10, marginTop: 10, fontFamily: "OpenSansRegular", color: "#696969", marginRight: 10 }}>%</Text>
                    <RadioButton
                        value="second"
                        status={check === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setCheck('second')}
                        color="#696969"
                    />
                    
                    <Text style={{ marginLeft: 10, marginTop: 10, fontFamily: "OpenSansRegular", color: "#696969" }}>Value</Text>
                </View>

                <Text style={styles.input}>Minimum Basket Value</Text>
                <TextInput style={styles.input1} />
                <View style={styles.side}>
                    <Text style={styles.input}>Coupon Bearer</Text>
                    <View>

                    <DropDownPicker style={styles.dropdown}
                        items={[
                            { label: 'Admin', value: 'Admin' },
                            { label: 'Restaurant', value: 'Restaurant' },
                        ]}
                        containerStyle={{ height: 40, width: 196, paddingLeft: 35 }}
                        color='#696969'
                        globalTextStyle={{ fontFamily: "OpenSansRegular" }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fff' }}
                    />
                    </View>
                </View>
                <View style={styles.side}>
                    <Text style={styles.input}>Commission</Text>
                    <TextInput style={styles.box}></TextInput>
                </View>
                <Text style={styles.input}>Total no. of Vouchers</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>No. of Redeems allowed for Users</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Coupon Validity</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Select Restaurant</Text>
            </View>
           
                    <DropDownPicker style={styles.dropdown}
                        items={[
                            { label: 'Admin', value: 'Admin' },
                            { label: 'Restaurant', value: 'Restaurant' },
                        ]}
                        containerStyle={{ height: 40, width: 300}}
                        color='#696969'
                        globalTextStyle={{ fontFamily: "OpenSansRegular" }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fff' }}
                    />
              
            <View style={styles.option}>
                <TouchableOpacity onPress={()=>navigation.navigate("Coupon")}>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
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
        paddingRight: 110,
        // marginRight:30
    },
    menu: {
        fontSize: 30,
        color: '#FDC913',
        marginTop: 6,
        paddingRight: 40,
        paddingLeft:50
        // marginRight: 50
    },
    dashboard: {
        fontSize: 30,
        // paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'OpenSansBold',
        
    },
    body: {
        fontSize: 25,
        color: '#696969'
    },
    input: {
        fontSize: 14,
        paddingTop: 1,
      
        color: '#696969',
        fontFamily: 'OpenSansSemiBold'
    },
    input1: {
        // borderColor: '#fff',
        borderBottomColor: '#696969',
        borderBottomWidth: 1,
        marginBottom: 5,
        width: 300
    },
    touch: {
        paddingTop: 2,
        padding: 10,
        flexDirection: 'row'
    },
    placeholder: {
        width: 300,
        height: 35,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        elevation: 4,
    },
    option: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 170,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold'
    },
    box: {
        borderWidth: 1,
        borderColor: '#696969',
        height: 20,
        width: 160,
        color: '#696969',
        borderColor: '#696969',
        marginLeft: 55
    },
    side: {
        flexDirection: 'row'
    }
});

export default AddCoupon;