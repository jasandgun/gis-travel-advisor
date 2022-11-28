import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions} from "@mui/material";
import {LocationOn} from "@mui/icons-material";
import {Phone} from "@mui/icons-material";
import {Rating} from "@mui/material";

import {Award, PlaceDetailsParams} from '../../types/componentTypes/PlaceDetailsTypes';
import {StyledChip, SpacingTypography, SubtitleTypography,} from "./PlaceDetailsStyles";

const restaurantPlaceholderImg: string =
  'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';

function PlaceDetails({place, selected, refProp}: PlaceDetailsParams) {

  // TODO: bug here, received null for current
  if (selected) {
    // console.log({refProp});
    refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"})
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{height: 350}}
        image={place.photo ? place.photo.images.large.url : restaurantPlaceholderImg}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant={"h5"}>{place.name}</Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Rating value={Number(place.rating)} readOnly/>
          <Typography gutterBottom variant={"subtitle1"}>
            out of {place.num_reviews} review{place.num_reviews > 1 && 's'}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant={"subtitle1"}>Price</Typography>
          <Typography gutterBottom variant={"subtitle1"}>
            {place.price_level ? place.price_level : 'Pricing is unavailable.'}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant={"subtitle1"}>Ranking</Typography>
          <Typography gutterBottom variant={"subtitle1"}>
            {place.ranking ? place.ranking : 'Ranking is unavailable.'}
          </Typography>
        </Box>
        {place?.awards?.map((award: Award) => {
          return (
            <Box my={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <img src={award.images.small} alt={award.display_name}/>
              <Typography variant={"subtitle2"} color={"textSecondary"}>
                {award.display_name}
              </Typography>
            </Box>
          );
        })}
        {place?.cuisine?.map(({name}) => {
          return (
            <StyledChip key={name} size={"small"} label={name}/>
          );
        })}
        {place?.address && (
          <SubtitleTypography gutterBottom variant={"subtitle2"} color={"textSecondary"}>
            <LocationOn/> {place.address}
          </SubtitleTypography>
        )}
        {place?.phone && (
          <SpacingTypography gutterBottom variant={"subtitle2"} color={"textSecondary"}>
            <Phone/> {place.phone}
          </SpacingTypography>
        )}
        <CardActions>
          <Button size={"small"} color={"primary"} onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size={"small"} color={"primary"} onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;
export {restaurantPlaceholderImg};
