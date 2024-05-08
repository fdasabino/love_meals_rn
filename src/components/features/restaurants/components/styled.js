import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin: ${(props) => props.theme.space[2]};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.success};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Address = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;
