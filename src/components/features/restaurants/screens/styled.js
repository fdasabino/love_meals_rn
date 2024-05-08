import { Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export const Search = styled.View`
    flex: 0.1;
    margin: 5px;
    justify-content: center;
`;

export const SearchBar = styled(Searchbar)`
    padding-right: 5px;
`;

export const RestaurantsList = styled.View`
    flex: 0.9;
`;
