import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../services/location/location.context";
import { SearchBar, SearchContainer } from "./search.styles";

const Search = () => {
    const { error, search, keyword } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword || "San Francisco");

    const handleChange = (query) => {
        setSearchKeyword(query); // Corrected to fetch the value from event
    };

    const handleSubmit = () => {
        if (searchKeyword.length) {
            search(searchKeyword);
        }
    };

    // Adding searchKeyword as a dependency so it re-runs the search when searchKeyword changes
    useEffect(() => {
        if (searchKeyword && searchKeyword !== keyword) {
            // Avoids initial redundant search if not required
            search(searchKeyword);
        }
    }, [searchKeyword, error]);

    return (
        <SearchContainer>
            <SearchBar
                onChangeText={handleChange} // Simplified function reference
                onSubmitEditing={handleSubmit}
                icon="map-search"
                mode="bar"
                value={searchKeyword}
                iconColor={error ? "tomato" : "black"}
                placeholder="Search for a location"
            />
        </SearchContainer>
    );
};

export default Search;
