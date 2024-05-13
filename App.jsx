import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { SafeArea } from "./App.styles";
import Loader from "./src/components/loader/loader.component";
import Navigation from "./src/components/navigation/navigation.component";
import { theme } from "./src/infrastructure/theme/index";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { screens } from "./src/utils/screens";

const App = () => {
    const [fontsLoaded] = useFonts({
        Oswald_400Regular,
        Lato_400Regular,
        Lato_700Bold,
    });

    if (!fontsLoaded) {
        return <Loader />;
    }

    return (
        <ThemeProvider theme={theme}>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <NavigationContainer>
                        <SafeArea>
                            <Navigation screens={screens} />
                            <ExpoStatusBar style="auto" />
                        </SafeArea>
                    </NavigationContainer>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </ThemeProvider>
    );
};

export default App;
