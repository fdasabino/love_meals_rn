import React from "react";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import { tempRestaurant } from "../../../../data/restaurant";
import {
    Address,
    CardCover,
    ClosedDot,
    ClosedTemporarily,
    Info,
    OpenDot,
    OpeningHours,
    StarsContainer,
    StyledCard,
    Title,
    Wrapper,
} from "./styled";

const RestaurantInfoCardComponent = ({ restaurant = tempRestaurant }) => {
    const { name, photos, icon, address, openingHours, rating, isOpenNow } = restaurant;
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    const renderOpen = isOpenNow ? <OpenDot /> : <ClosedDot />;
    const renderStars = ratingArray.map((_, i) => (
        <SvgXml
            key={`star-${name}-${i}`}
            xml={star}
            width={25}
            height={25}
        />
    ));
    const renderBusinessTypeIcon = icon && (
        <Image
            source={{ uri: icon }}
            style={{ width: 20, height: 20 }}
        />
    );
    const renderIsClosedTemporarily = restaurant.isClosedTemporarily && (
        <ClosedTemporarily>Closed Temporarily</ClosedTemporarily>
    );
    const renderOpeningHours = openingHours && (
        <OpeningHours>Opening Hours: {openingHours}</OpeningHours>
    );

    return (
        <StyledCard elevation={5}>
            <CardCover
                key={name}
                source={{ uri: photos[0] }}
            />
            <Info>
                <Title>{name}</Title>
                <StarsContainer>{renderStars}</StarsContainer>
                <Wrapper>
                    {renderOpen}
                    {renderBusinessTypeIcon}
                </Wrapper>
                <Wrapper>{renderOpeningHours}</Wrapper>
                <Wrapper>
                    <Address>{address}</Address>
                </Wrapper>
                {renderIsClosedTemporarily && <Wrapper>{renderIsClosedTemporarily}</Wrapper>}
            </Info>
        </StyledCard>
    );
};

export default RestaurantInfoCardComponent;
