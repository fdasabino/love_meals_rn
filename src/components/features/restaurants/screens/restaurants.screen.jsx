import React, { useContext } from "react";
import { Text } from "react-native";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import Loader from "../../../loader/loader.component";
import Spacer from "../../../spacer/spacer.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import {
    ErrorMessageContainer,
    ErrorMessageText,
    RestaurantsList,
    Search,
    SearchBar,
} from "./restaurants.screen.styles";

const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return (
            <ErrorMessageContainer>
                <ErrorMessageText>{error}</ErrorMessageText>
            </ErrorMessageContainer>
        );
    }

    if (!restaurants) {
        return (
            <ErrorMessageContainer>
                <ErrorMessageText>No restaurants found</ErrorMessageText>
            </ErrorMessageContainer>
        );
    }

    return (
        <>
            <Search>
                <SearchBar
                    mode="bar"
                    iconColor="black"
                    clearButtonMode="while-editing"
                    placeholder="Search"
                    onChangeText={(query) => console.log(query)}
                />
            </Search>
            <RestaurantsList
                data={restaurants}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                    console.log("Item: ", item);
                    return (
                        <Spacer
                            position="bottom"
                            size="large">
                            <RestaurantInfoCardComponent restaurant={item} />
                        </Spacer>
                    );
                }}
            />
        </>
    );
};

export default RestaurantsScreen;
