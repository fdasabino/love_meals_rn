import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        photos = [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        address = "100 Some Random Street",
        openingHours = "8:00 - 22:00",
        rating = 4,
        isOpenNow = true,
    } = restaurant;

    return (
        <Card
            elevation={5}
            style={styles.card}>
            <Card.Cover
                key={name}
                style={styles.cover}
                source={{ uri: photos[0] }}
            />
            <Card.Title
                title={name}
                style={styles.title}
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        margin: 10,
    },
    cover: {
        backgroundColor: "white",
    },
    title: {
        padding: 16,
    },
});

export default RestaurantInfoCardComponent;
