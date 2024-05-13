import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../services/location/location.context";
import Loader from "../loader/loader.component";
import { SearchBar, SearchContainer } from "./search.styles";

const Search = () => {
    const { error, search, keyword, isLoading } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword || "San Francisco");

    const handleChange = (query) => {
        setSearchKeyword(query);
    };

    const handleSubmit = () => {
        search(searchKeyword);
    };

    // Adding searchKeyword as a dependency so it re-runs the search when searchKeyword changes
    useEffect(() => {
        if (searchKeyword && searchKeyword !== keyword) {
            // Avoids initial redundant search if not required
            search(searchKeyword);
        }
    }, [searchKeyword, error, isLoading, keyword, search]);

    return (
        <>
            <SearchContainer>
                <SearchBar
                    onChangeText={handleChange} // Simplified function reference
                    onSubmitEditing={handleSubmit}
                    icon="map-search"
                    value={searchKeyword}
                    mode="bar"
                    iconColor={error ? "tomato" : "black"}
                    placeholder="Search for a location"
                />
            </SearchContainer>
            {isLoading && <Loader />}
        </>
    );
};

export default Search;
