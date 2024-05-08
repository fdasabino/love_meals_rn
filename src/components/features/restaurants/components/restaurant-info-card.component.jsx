import React from "react";
import { Text } from "react-native";
import { SvgXml } from "react-native-svg";
import open from "../../../../../assets/open";
import star from "../../../../../assets/star";
import {
    Address,
    CardCover,
    ClosedText,
    IconContainer,
    Info,
    Section,
    StyledCard,
    Title,
} from "./styled";

const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        photos = [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        address = "100 Some Random Street",
        openingHours = "8:00 - 22:00",
        rating = 4,
        isOpenNow = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    const renderStars = ratingArray.map((_, i) => (
        <SvgXml
            key={`star-${name}-${i}`}
            xml={star}
            width={20}
            height={20}
        />
    ));

    const renderOpen = isOpenNow ? (
        <SvgXml
            xml={open}
            width={35}
            height={35}
        />
    ) : (
        <ClosedText>Closed</ClosedText>
    );

    return (
        <StyledCard elevation={5}>
            <CardCover
                key={name}
                source={{ uri: photos[0] }}
            />

            <Info>
                <Title>{name}</Title>
                <Section>
                    <IconContainer>{renderStars}</IconContainer>
                    <IconContainer>{renderOpen}</IconContainer>
                </Section>
                <Address>{address}</Address>
            </Info>
        </StyledCard>
    );
};

export default RestaurantInfoCardComponent;
