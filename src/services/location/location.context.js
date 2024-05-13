import React, { createContext, useEffect, useMemo, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = async (searchKeyword) => {
        setIsLoading(true);

        if (!searchKeyword.length) {
            // Don't do anything
            return;
        }

        setKeyword(searchKeyword);
        try {
            const rawLocation = await locationRequest(
                searchKeyword && searchKeyword.toLowerCase().trim()
            );
            const transformedLocation = await locationTransform(rawLocation);
            setLocation(transformedLocation);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError(err);
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 2000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const value = useMemo(
        () => ({
            location,
            isLoading,
            error,
            search: onSearch,
            keyword,
        }),
        [location, isLoading, error, keyword]
    );

    return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
};
