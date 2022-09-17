import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomePage from "./components/HomePage";
import SocialPage from "./components/SocialPage";
import TrendsPage from "./components/TrendsPage";
import SavingsPage from "./components/SavingsPage";

const Tab = createBottomTabNavigator();

function MyTabs() {
    const iconSize = 30;
    return (
        <Tab.Navigator
            initialRouteName="HomePage"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="Social"
                component={SocialPage}
                options={{
                    tabBarLabel: 'Social',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={TrendsPage}
                options={{
                    tabBarLabel: 'Trends',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="Savings"
                component={SavingsPage}
                options={{
                    tabBarLabel: 'Savings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={iconSize} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}