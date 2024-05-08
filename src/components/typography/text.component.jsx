import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/native";

const defaultTextStyles = (theme, align) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  text-align: ${align}; 
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
    title,
    body,
    label,
    caption,
    error,
    hint,
};

const TextStyled = styled.Text`
    ${({ theme, variant, align }) => defaultTextStyles(theme, align) + variants[variant](theme)}
`;

const Text = ({ variant = "body", align = "left", children }) => {
    return (
        <TextStyled
            variant={variant}
            align={align}>
            {children}
        </TextStyled>
    );
};

Text.propTypes = {
    variant: PropTypes.oneOf(["title", "body", "label", "caption", "error", "hint"]),
    align: PropTypes.oneOf(["left", "right", "center", "justify"]),
    children: PropTypes.node,
};

export default Text;
