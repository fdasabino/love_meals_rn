import React from "react";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import { RestaurantsList, SafeArea, Search, SearchBar } from "./styled";

const RestaurantsScreen = () => {
    return (
        <SafeArea>
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
        </SafeArea>
    );
};

export default RestaurantsScreen;
