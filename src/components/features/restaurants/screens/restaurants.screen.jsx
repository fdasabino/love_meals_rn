import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar
                    style={styles.bar}
                    mode="bar"
                    iconColor="black"
                    clearButtonMode="while-editing"
                    placeholder="Search"
                    onChangeText={(query) => console.log(query)}
                />
            </View>
            <View style={styles.list}>
                <RestaurantInfoCardComponent />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },

    search: {
        flex: 0.1,
        margin: 5,
        justifyContent: "center",
    },

    bar: {
        paddingRight: 5,
    },

    list: {
        flex: 0.9,
    },
});

export default RestaurantsScreen;
