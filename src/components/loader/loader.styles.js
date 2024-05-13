import AnimatedLoader from "react-native-animated-loader";
import styled from "styled-components/native";

export const LoadingSpinner = styled(AnimatedLoader).attrs({
    visible: true,
    overlayColor: "rgba(255,255,255,0.2)",
    source: require("./files/loader_animation.json"),
    animationStyle: {
        width: 200,
        height: 200,
    },
    speed: 2,
})`
    width: 100%;
    height: 50%;
`;

export const LoadingText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #009387;
    margin-top: 10px;
`;
