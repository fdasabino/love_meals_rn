// Imports
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

// Screens
import RestaurantsScreen from "./src/components/features/restaurants/screens/restaurants.screen";

const App = () => {
    return (
        <>
            <RestaurantsScreen />
            <ExpoStatusBar style="auto" />
        </>
    );
};

export default App;
