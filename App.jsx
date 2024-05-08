// Code for the App component
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, Text } from "react-native";

const App = () => {
    return (
        <>
            <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
                <Text>Our React native blank canvas</Text>
            </SafeAreaView>
            <ExpoStatusBar style="auto" />
        </>
    );
};

export default App;
