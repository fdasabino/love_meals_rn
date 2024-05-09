import React, { useContext } from "react";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import Spacer from "../../../spacer/spacer.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import { RestaurantsList, Search, SearchBar } from "./restaurants.screen.styles";

const RestaurantsScreen = () => {
    const restaurantContext = useContext(RestaurantsContext);

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
                data={restaurantContext.restaurants}
                keyExtractor={(item) => item}
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
