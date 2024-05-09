// Imports
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { SafeArea } from "./App.styles";
import Navigation from "./src/components/navigation/navigation.component";
import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { screens } from "./src/utils/screens";

const App = () => {
    const [fontsLoaded] = useFonts({
        Oswald_400Regular,
        Lato_400Regular,
        Lato_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <ThemeProvider theme={theme}>
            <RestaurantsContextProvider>
                <NavigationContainer>
                    <SafeArea>
                        <Navigation screens={screens} />
                        <ExpoStatusBar style="auto" />
                    </SafeArea>
                </NavigationContainer>
            </RestaurantsContextProvider>
        </ThemeProvider>
    );
};

export default App;
