import { FlatList } from "react-native";
import styled from "styled-components/native";

export const RestaurantsList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})`
    flex: 0.9;
`;

export const ErrorMessageContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ErrorMessageText = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.text.error};
    padding: ${(props) => props.theme.space[2]};
    text-align: center;
`;
