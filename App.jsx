// Code for the App component
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
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
