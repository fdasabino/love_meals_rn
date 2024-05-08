// Imports
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

// Screens
import RestaurantsScreen from "./src/components/features/restaurants/screens/restaurants.screen";

const App = () => {
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
