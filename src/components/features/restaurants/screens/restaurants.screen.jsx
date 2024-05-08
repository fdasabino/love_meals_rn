import React from "react";
import Spacer from "../../../spacer/spacer.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import { RestaurantsList, Search, SearchBar } from "./restaurants.screen.styles";

const RestaurantsScreen = () => {
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
                data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
                keyExtractor={(item) => item.name}
                renderItem={() => (
                    <Spacer
                        position="bottom"
                        size="large">
                        <RestaurantInfoCardComponent />
                    </Spacer>
                )}
            />
        </>
    );
};

export default RestaurantsScreen;
