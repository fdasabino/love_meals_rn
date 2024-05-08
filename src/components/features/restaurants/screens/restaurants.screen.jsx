import React from "react";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import { Container, RestaurantsList, Search, SearchBar } from "./styled";

const RestaurantsScreen = () => {
    return (
        <Container>
            <Search>
                <SearchBar
                    mode="bar"
                    iconColor="black"
                    clearButtonMode="while-editing"
                    placeholder="Search"
                    onChangeText={(query) => console.log(query)}
                />
            </Search>
            <RestaurantsList>
                <RestaurantInfoCardComponent />
            </RestaurantsList>
        </Container>
    );
};

export default RestaurantsScreen;
