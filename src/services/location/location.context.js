import React, { createContext, useEffect, useMemo, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = async (searchKeyword) => {
        setError(null);
        setIsLoading(true);
        setKeyword(searchKeyword);
    };

    useEffect(() => {
        if (!keyword.length) {
            return;
        }

        const locationRequestTimeout = setTimeout(() => {
            setIsLoading(false);
            setError("Timeout! Please try again.");
        }, 5000);

        locationRequest(keyword.trim().toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
                setKeyword("");
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });

        return () => clearTimeout(locationRequestTimeout);
    }, [keyword]);

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
            keyword,
            search: onSearch,
        }),
        [location, isLoading, error, keyword]
    );

    return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
};
