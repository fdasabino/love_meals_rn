import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import Loader from "./src/components/loader/loader.component";
import Navigation from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme/index";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

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
        <>
            <ThemeProvider theme={theme}>
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <Navigation />
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
};

export default App;
