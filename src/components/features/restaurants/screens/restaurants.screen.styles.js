import { Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = styled.View`
    flex: 0.1;
    margin: ${(props) => props.theme.space[2]};
    justify-content: center;
    margin-bottom: ${(props) => props.theme.space[2]};
`;

export const SearchBar = styled(Searchbar)`
    padding-right: ${(props) => props.theme.space[2]};
`;

export const RestaurantsList = styled.View`
    flex: 0.9;
`;
