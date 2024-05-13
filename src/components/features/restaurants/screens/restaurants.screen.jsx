import React, { useContext } from "react";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import Search from "../../../search/search.component";
import Spacer from "../../../spacer/spacer.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import { RestaurantsList } from "./restaurants.screen.styles";

const RestaurantsScreen = () => {
    const { restaurants } = useContext(RestaurantsContext);
    return (
        <>
            <Search />
            <RestaurantsList
                data={restaurants}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
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
