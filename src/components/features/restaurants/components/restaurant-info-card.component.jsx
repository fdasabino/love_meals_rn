import React from "react";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import { tempRestaurant } from "../../../../data/restaurant";
import Text from "../../../typography/text.component";
import {
    CardCover,
    ClosedDot,
    ClosedTemporarily,
    Info,
    OpenDot,
    StarsContainer,
    StyledCard,
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
        <Text
            variant="body"
            align="center">
            Opening Hours: {openingHours}
        </Text>
    );

    return (
        <StyledCard elevation={5}>
            <CardCover
                key={name}
                source={{ uri: photos[0] }}
            />
            <Info>
                <Text
                    variant="title"
                    align="center">
                    {name}
                </Text>
                <StarsContainer>{renderStars}</StarsContainer>
                <Wrapper>
                    {renderOpen}
                    {renderBusinessTypeIcon}
                </Wrapper>
                <Wrapper>{renderOpeningHours}</Wrapper>
                <Wrapper>
                    <Text
                        variant="body"
                        align="center">
                        {address}
                    </Text>
                </Wrapper>
                {renderIsClosedTemporarily && <Wrapper>{renderIsClosedTemporarily}</Wrapper>}
            </Info>
        </StyledCard>
    );
};

export default RestaurantInfoCardComponent;
