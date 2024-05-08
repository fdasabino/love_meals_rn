import React from "react";
import {
    BottomLarge,
    BottomMedium,
    BottomSmall,
    LeftLarge,
    LeftMedium,
    LeftSmall,
    RightLarge,
    RightMedium,
    RightSmall,
    TopLarge,
    TopMedium,
    TopSmall,
} from "./styled";

const SpacerComponent = ({ variant }) => {
    switch (variant) {
        case "top.small":
            return <TopSmall />;
        case "top.medium":
            return <TopMedium />;
        case "top.large":
            return <TopLarge />;
        case "bottom.small":
            return <BottomSmall />;
        case "bottom.medium":
            return <BottomMedium />;
        case "bottom.large":
            return <BottomLarge />;
        case "left.small":
            return <LeftSmall />;
        case "left.medium":
            return <LeftMedium />;
        case "left.large":
            return <LeftLarge />;
        case "right.small":
            return <RightSmall />;
        case "right.medium":
            return <RightMedium />;
        case "right.large":
            return <RightLarge />;
        default:
            return <TopSmall />;
    }
};

export default SpacerComponent;
