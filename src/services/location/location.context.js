import React, { useEffect, useMemo, useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("san francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = async (searchKeyword = "Antwerp") => {
        console.log(searchKeyword);
        setIsLoading(true);
        setKeyword(searchKeyword);
        try {
            const rawLocation = await locationRequest(searchKeyword.toLowerCase());
            const transformedLocation = await locationTransform(rawLocation);
            setLocation(transformedLocation);
            setIsLoading(false);
            console.log(transformedLocation);
        } catch (err) {
            setIsLoading(false);
            setError(err);
            console.error(err);
        }
    };

    useEffect(() => {
        onSearch();
    }, []);

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
