import React from "react";
import { FlatList } from "react-native";
import Spacer from "../../../spacer/spacer.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import { RestaurantsList, SafeArea, Search, SearchBar } from "./restaurants.screen.styles";

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
                <FlatList
                    data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
                    renderItem={() => <RestaurantInfoCardComponent />}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={{ padding: 5 }}
                />
            </RestaurantsList>
        </SafeArea>
    );
};

export default RestaurantsScreen;
