import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LocationContext } from "../location/location.context";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = async (loc) => {
        setIsLoading(true);
        setError(null); // Clear previous errors on new request
        setRestaurants([]); // Clear previous restaurants on new request
        try {
            const results = await restaurantsRequest(loc);
            setRestaurants(restaurantsTransform(results));
        } catch (err) {
            setError("Failed to fetch restaurants: " + err.message); // More detailed error message
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        } else {
            setRestaurants([]); // Optionally clear restaurants when there is no location
        }
    }, [location]); // Include location in the dependency array

    const value = useMemo(
        () => ({
            restaurants,
            isLoading,
            error,
        }),
        [restaurants, isLoading, error]
    );

    return <RestaurantsContext.Provider value={value}>{children}</RestaurantsContext.Provider>;
};
