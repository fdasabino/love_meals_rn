// Imports
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

// Screens
import { Text } from "react-native";
import RestaurantsScreen from "./src/components/features/restaurants/screens/restaurants.screen";

const App = () => {
    const [fontsLoaded] = useFonts({
        Oswald_400Regular,
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantsScreen />
                <ExpoStatusBar style="auto" />
            </ThemeProvider>
        </>
    );
};

export default App;
