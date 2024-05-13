import React, { useContext } from "react";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import Loader from "../../../loader/loader.component";
import Search from "../../../search/search.component";
import Spacer from "../../../spacer/spacer.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import { RestaurantsList } from "./restaurants.screen.styles";
const RestaurantsScreen = () => {
    const { restaurants, isLoading } = useContext(RestaurantsContext);
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
                            {isLoading && <Loader />}
                            <RestaurantInfoCardComponent
                                restaurant={item}
                                isLoading={isLoading}
                            />
                        </Spacer>
                    );
                }}
            />
        </>
    );
};

export default RestaurantsScreen;
