import { StyleSheet, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="#e2f3f5"
            source={require("./files/loader_animation.json")}
            animationStyle={styles.lottie}
            speed={2}>
            <Text style={styles.text}>Loading...</Text>
        </AnimatedLoader>
    );
};

const styles = StyleSheet.create({
    lottie: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Lato_400Regular",
    },
});

export default Loader;
