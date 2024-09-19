import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from '../screens/HomeScreen' ;
import FavoritesScreen from '../screens/FavoritesScreen' ;
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomeIcon from '../components/CustomeIcon';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator() ;

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarShowLabel:false,
        tabBarBackground:()=>(
            <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />
        ),
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomeIcon name="home" size={25} 
                color={
                    focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}
                    />
            ),
            }}></Tab.Screen>
        <Tab.Screen name="Cart" component={CartScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomeIcon name="cart" size={25} 
                color={
                    focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}
                    />
            ),
            }}></Tab.Screen>
        <Tab.Screen name="Favorite" component={FavoritesScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomeIcon name="like" size={25} 
                color={
                    focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}
                    />
            ),
            }}></Tab.Screen>
        <Tab.Screen name="History" component={OrderHistoryScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <CustomeIcon name="bell" size={25} 
                color={
                    focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}
                    />
            ),
            }}></Tab.Screen>
    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height:80,
        position:'absolute',
        backgroundColor:COLORS.primaryBlackRGBA,
        borderTopWidth:0,
        elevation:0,
        borderTopColor:'transparent',
    },
    BlurViewStyles:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
})

export default TabNavigator ;