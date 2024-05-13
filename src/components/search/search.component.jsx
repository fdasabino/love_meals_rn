import React, { useContext, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { LocationContext } from "../../services/location/location.context";
import Loader from "../loader/loader.component";
import { SearchBar, SearchContainer } from "./search.styles";

const Search = () => {
    const { location, isLoading, error, search, keyword } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword || "San Francisco");
    const toast = useToast();

    if (isLoading) {
        return <Loader />;
    }

    if (location) {
        // do something with location
    }

    if (error) {
        toast.show(error, { type: "danger" });
    }

    const handleChange = (query) => {
        setSearchKeyword(query);
    };

    const handleSubmit = () => {
        if (searchKeyword.length) {
            search(searchKeyword);
        }
    };

    return (
        <SearchContainer>
            <SearchBar
                onChangeText={handleChange}
                onSubmitEditing={handleSubmit}
                icon="map-search"
                mode="bar"
                iconColor={error ? "tomato" : "black"}
                value={searchKeyword}
                placeholder="Search for a location"
            />
        </SearchContainer>
    );
};

export default Search;
