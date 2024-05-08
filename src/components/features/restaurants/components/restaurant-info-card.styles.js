import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[2]};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const StarsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    padding: ${(props) => props.theme.space[3]};
`;

export const Icon = styled.Image`
    width: 20px;
    height: 20px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
`;

export const OpenDot = styled.View`
    background-color: ${(props) => props.theme.colors.ui.success};
    width: 18px;
    height: 18px;
    border-radius: 50%;
`;
export const ClosedDot = styled.View`
    background-color: ${(props) => props.theme.colors.ui.error};
    width: 18px;
    height: 18px;
    border-radius: 50%;
`;

export const ClosedTemporarily = styled.Text`
    width: 100%;
    background-color: ${(props) => props.theme.colors.ui.error};
    padding: ${(props) => props.theme.space[2]};
    color: ${(props) => props.theme.colors.text.inverse};
    text-align: center;
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
`;
