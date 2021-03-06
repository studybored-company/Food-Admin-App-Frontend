import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, LogBox, StatusBar, useWindowDimensions } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { AppearanceProvider } from 'react-native-appearance';

import SplashScreen from './screen/SplashScreen'
import Login from './screen/Login'
import Signup from './screen/Signup'
import DrawerNavigator from './screen/DrawerNavigator'
import Category from './screen/Category'
import AddCategory from './screen/AddCategory'
import AddMenu from './screen/AddMenu';
import FoodItems from './screen/FoodItems';
import AddFoodItems from './screen/AddFoodItems';
import Menu from './screen/Menu';
import EditMenu from './screen/EditMenu';
import EditCategory from './screen/EditCategory';
import EditFoodItems from './screen/EditFoodItems';
import SubAdmins from './screen/SubAdmins';
import AddSubAdmins from './screen/AddSubAdmins';
import SubAdminsDetails from './screen/SubAdminsDetails';
import EditSubAdmins from './screen/EditSubAdmins';
import restScreen from './screen/restScreen';
import regScreen from './screen/regScreen';
import reviewScreen from './screen/reviewScreen';
import tabScreen from './screen/tabScreen';
import foodScreen from './screen/foodScreen';
import detailScreen from './screen/detailScreen';
import confScreen from './screen/confScreen';
import EditScreen from './screen/EditScreen';
import deliveryTips from './screen/deliveryTips';
import deliveryBoy from './screen/deliveryBoy';
import deliveryRegScreen from './screen/delveryRegScreen';
import deliveryEditScreen from './screen/deliveryEditScreen';
import settings from './screen/settings';
import fontSize from './screen/fontSize';
import Mode from './screen/Mode';
import contact from './screen/contact';
import Feedback from './screen/Feedback';
import notification from './screen/notification';
import Map from './screen/Map';
import Dashboard from './screen/Dashboard';
import PendingOrder from './screen/PendingOrder';
import OrderDetails from './screen/OrderDetails';
import ActiveOrder from './screen/ActiveOrder';
import GraphicReport from './screen/GraphicReport';
import Offer from './screen/Offer';
import Block from './screen/Block';
import Banner from './screen/Banner';
import Coupon from './screen/Coupon';
import AddBanner from './screen/AddBanner';
import EditBanner from './screen/EditBanner';
import DeleteBanner from './screen/DeleteBanner';
import AddCoupon from './screen/AddCoupon';
import EditCoupon from './screen/EditCoupon';
import DeleteCoupon from './screen/DeleteCoupon';
import Accounts from './screen/Accounts';
import Accounts2 from './screen/Accounts2';
import Settlementsummary from './screen/Settlementsummary';
import RestDetails from './screen/RestDetails'
import Logo from './screen/Logo';
import { AuthContext } from './Components/Context';
import BarGraph from './BarGraph/Graph'


const Stack = createStackNavigator();

export default function App() {

  // LogBox.ignoreAllLogs();
  

  const [darkMode, setDarkMode] = useState(false);

  const authContext = React.useMemo(() => ({

    toggleTheme() {
      setDarkMode(darkMode => !darkMode);

    }
  }), []);

  const [loaded] = useFonts({

    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),

  });

  if (!loaded) {
    return null;
  }

  const CustomDefaultTheme = {
    ...DefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#f5fffa',
      text: '#696969',
      card: 'white',
    }
  }

  const CustomDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: 'black',
      text: "white",
      card: "white"
    }
  }

  const theme = darkMode ? CustomDarkTheme : CustomDefaultTheme

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            {/* <Stack.Screen name="SplashScreen" component={SplashScreen}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="Login" component={Login}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="Signup" component={Signup}
              options={{
                headerShown: false
              }}
            /> */}

            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
              options={
                { headerShown: false }
              } />
            <Stack.Screen name="Dashboard" component={Dashboard}
              options={
                { headerShown: false }
              } />
            <Stack.Screen name="Logo" component={Logo}
              options={
                { headerShown: false }
              } />
            <Stack.Screen name="Menu" component={Menu}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="AddMenu" component={AddMenu}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="EditMenu" component={EditMenu}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="Category" component={Category}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="AddCategory" component={AddCategory}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="EditCategory" component={EditCategory}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="FoodItems" component={FoodItems}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="AddFoodItems" component={AddFoodItems}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="EditFoodItems" component={EditFoodItems}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="SubAdmins" component={SubAdmins}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="SubAdminsDetails" component={SubAdminsDetails}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="AddSubAdmins" component={AddSubAdmins}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="EditSubAdmins" component={EditSubAdmins}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="Block" component={Block}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="RestDetails" component={RestDetails}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="restScreen" component={restScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="regScreen" component={regScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="reviewScreen" component={reviewScreen}
              options={
                { headerShown: false }
              }
            />
            <Stack.Screen name="tabScreen" component={tabScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="foodScreen" component={foodScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="detailScreen" component={detailScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="confScreen" component={confScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="EditScreen" component={EditScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="deliveryTips" component={deliveryTips}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="deliveryBoy" component={deliveryBoy}
              options={
                { headerShown: false }
              }
            />
            <Stack.Screen name="deliveryRegScreen" component={deliveryRegScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="deliveryEditScreen" component={deliveryEditScreen}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="settings" component={settings}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="fontSize" component={fontSize}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="Mode" component={Mode}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="contact" component={contact}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="Feedback" component={Feedback}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="notification" component={notification}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="Map" component={Map}
              options={
                { headerShown: false }
              }
            />

            <Stack.Screen name="PendingOrder" component={PendingOrder}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="OrderDetails" component={OrderDetails}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="ActiveOrder" component={ActiveOrder}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="GraphicReport" component={GraphicReport}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Offer" component={Offer}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Banner" component={Banner}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Coupon" component={Coupon}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="AddBanner" component={AddBanner}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="EditBanner" component={EditBanner}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="DeleteBanner" component={DeleteBanner}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="AddCoupon" component={AddCoupon}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="EditCoupon" component={EditCoupon}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="DeleteCoupon" component={DeleteCoupon}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Accounts" component={Accounts}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Accounts2" component={Accounts2}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Settlementsummary" component={Settlementsummary}
              options={
                { headerShown: false }
              } />

          </Stack.Navigator>

        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});