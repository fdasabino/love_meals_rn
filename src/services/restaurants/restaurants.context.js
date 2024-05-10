import React, { createContext, useEffect, useMemo, useState } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = async () => {
        setIsLoading(true);
        try {
            const results = await restaurantsRequest().then(restaurantsTransform);
            setRestaurants(results);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        retrieveRestaurants();

        // Optional: Return a cleanup function if there are subscriptions or other cleanups needed
        return () => {
            // Perform any necessary cleanup here
        };
    }, []);

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
