// Imports
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { SafeArea } from "./App.styles";
import { theme } from "./src/infrastructure/theme/index";

// Screens
import MapScreen from "./src/components/features/map/screens/map.screen";
import RestaurantsScreen from "./src/components/features/restaurants/screens/restaurants.screen";
import SettingsScreen from "./src/components/features/settings/screens/settings.screen";
import Navigation from "./src/components/navigation/navigation.component";

const App = () => {
    const [fontsLoaded] = useFonts({
        Oswald_400Regular,
        Lato_400Regular,
        Lato_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const screens = [
        {
            name: "Restaurants",
            component: RestaurantsScreen,
            icon: "list-outline",
        },
        {
            name: "Map",
            component: MapScreen,
            icon: "map-outline",
        },
        {
            name: "Settings",
            component: SettingsScreen,
            icon: "settings-outline",
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <SafeArea>
                    <Navigation screens={screens} />
                    <ExpoStatusBar style="auto" />
                </SafeArea>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
