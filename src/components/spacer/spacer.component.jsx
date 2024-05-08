import PropTypes from "prop-types";
import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariant = {
    top: "margin-top",
    left: "margin-left",
    right: "margin-right",
    bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex] || 0; // Default to 0 if undefined
    return `${property}:${value}px;`;
};

const SpacerView = styled.View`
    ${({ variant }) => variant};
`;

export const Spacer = ({ position = "top", size = "small", children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.propTypes = {
    position: PropTypes.oneOf(["top", "left", "right", "bottom"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    children: PropTypes.node,
};

export default Spacer;
