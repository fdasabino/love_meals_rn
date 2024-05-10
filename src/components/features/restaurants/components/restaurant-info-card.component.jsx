import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import { tempRestaurant } from "../../../../data/restaurant";
import Text from "../../../typography/text.component";
import {
    CardCover,
    ClosedDot,
    ClosedTemporarily,
    Icon,
    Info,
    OpenDot,
    StarsContainer,
    StyledCard,
    Wrapper,
} from "./restaurant-info-card.styles";

const RestaurantInfoCardComponent = ({ restaurant }) => {
    const {
        name,
        photos,
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        address,
        rating,
        isOpenNow,
        isClosedTemporarily,
        openingHours,
    } = restaurant;

    console.log(restaurant.icon);

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    const renderOpen = isOpenNow ? <OpenDot /> : <ClosedDot />;
    const renderBusinessTypeIcon = <Icon source={{ uri: icon }} />;
    const renderIsClosedTemporarily = <ClosedTemporarily>Closed Temporarily</ClosedTemporarily>;

    const renderStars = ratingArray.map((_, i) => (
        <SvgXml
            key={`star-${name}-${i}`}
            xml={star}
            width={25}
            height={25}
        />
    ));

    const renderOpeningHours = (
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
                    {icon && renderBusinessTypeIcon}
                </Wrapper>
                <Wrapper>{renderOpeningHours}</Wrapper>
                <Wrapper>
                    <Text
                        variant="body"
                        align="center">
                        {address}
                    </Text>
                </Wrapper>
                {isClosedTemporarily && <Wrapper>{renderIsClosedTemporarily}</Wrapper>}
            </Info>
        </StyledCard>
    );
};

export default RestaurantInfoCardComponent;
