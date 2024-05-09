import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

export const Search = styled.View`
    flex: 0.1;
    justify-content: center;
    margin: ${(props) => props.theme.space[2]};
    padding-left: ${(props) => props.theme.space[2]};
    padding-right: ${(props) => props.theme.space[2]};
    shadow-color: ${(props) => props.theme.colors.ui.primary};
    shadow-offset: 0px 1px;
    shadow-opacity: 0.1;
`;

export const SearchBar = styled(Searchbar)`
    padding-right: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.brand.muted};
    border-radius: ${(props) => props.theme.space[2]};
    border-width: ${(props) => props.theme.space[1]};
    border-color: ${(props) => props.theme.colors.border.secondary};
`;

export const RestaurantsList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})`
    flex: 0.9;
`;
