import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

export const Search = styled.View`
    flex: 0.1;
    margin: ${(props) => props.theme.space[2]};
    justify-content: center;
    margin-bottom: ${(props) => props.theme.space[2]};
`;

export const SearchBar = styled(Searchbar)`
    padding-right: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.brand.muted};
    border-radius: 10px;
    border-width: 2px;
    border-color: ${(props) => props.theme.colors.brand.primary};
`;

export const RestaurantsList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})`
    flex: 0.9;
`;
