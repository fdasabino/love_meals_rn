import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: ${(props) => props.theme.space[3]};
    padding-bottom: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[1]};
    padding-right: ${(props) => props.theme.space[1]};
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

export const IconContainer = styled.View`
    flex-direction: row;
    gap: 2px;
`;

export const ClosedText = styled.Text`
    color: ${(props) => props.theme.colors.ui.error};
    font-family: ${(props) => props.theme.fonts.body};
`;
