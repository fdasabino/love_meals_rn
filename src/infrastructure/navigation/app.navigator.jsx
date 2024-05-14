import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { screens } from "../../utils/screens";
import { SafeArea } from "./app.navigator.styles";
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <SafeArea>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            switch (route.name) {
                                case "Restaurants":
                                    iconName = focused ? "restaurant" : "restaurant-outline";
                                    break;
                                case "Map":
                                    iconName = focused ? "map" : "map-outline";
                                    break;
                                case "Settings":
                                    iconName = focused ? "settings" : "settings-outline";
                                    break;
                                default:
                                    iconName = "information-circle";
                                    break;
                            }
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "#1e2a78",
                        tabBarInactiveTintColor: "#3d6cb9",
                        headerShown: false,
                    })}>
                    {screens.map((screen) => (
                        <Tab.Screen
                            key={screen.name}
                            name={screen.name}
                            component={screen.component}
                            options={{
                                tabBarLabelPosition: "below-icon",
                            }}
                        />
                    ))}
                </Tab.Navigator>
            </NavigationContainer>
        </SafeArea>
    );
};

export default AppNavigator;
