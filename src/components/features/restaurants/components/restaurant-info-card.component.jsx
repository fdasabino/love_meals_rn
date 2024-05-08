import React from "react";
import { Image, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import open from "../../../../../assets/open";
import star from "../../../../../assets/star";
import { tempRestaurant } from "../../../../data/restaurant";
import SpacerComponent from "../../../spacer/spacer.component";
import {
    Address,
    CardCover,
    ClosedText,
    IconContainer,
    Info,
    Section,
    StyledCard,
    Title,
    Wrapper,
} from "./styled";

const RestaurantInfoCardComponent = ({ restaurant = tempRestaurant }) => {
    const { name, photos, icon, address, openingHours, rating, isOpenNow } = restaurant;

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

    const renderIcon = icon && (
        <Image
            source={{ uri: icon }}
            style={{ width: 20, height: 20 }}
        />
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
                    <Wrapper>
                        <IconContainer>{renderStars}</IconContainer>
                    </Wrapper>
                    <Wrapper>
                        <IconContainer>{renderOpen}</IconContainer>
                        <IconContainer>{renderIcon}</IconContainer>
                    </Wrapper>
                </Section>
                <Address>{address}</Address>
            </Info>
        </StyledCard>
    );
};

export default RestaurantInfoCardComponent;
