import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import ProductsScreen from '../screens/ProductsScreen';
import FavoriteProductsScreen from '../screens/FavoriteProductsScreen';

import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const ProductsStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductsStack" component={ProductsStack} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Stack.Screen name="Products" component={BottomTabStack} />
        <Drawer.Screen name="Favorites" component={FavoriteProductsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
