import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import MopedIcon from "@mui/icons-material/Moped";

const FoodCard = ({ isVertical, image, alt, name, price, description }) => {
  const ellipsisStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <Grid size={isVertical ? 4 : 12}>
      <Card
        elevation={0}
        sx={{
          display: "flex",
          backgroundColor: isVertical ? "#495E571a" : "white",
          flexDirection: isVertical ? "column" : "row",
          borderRadius: "16px",
        }}
      >
        <CardMedia
          sx={{
            order: isVertical ? -1 : 1,
            maxWidth: isVertical ? "unset" : "100px",
            objectFit: isVertical ? "cover" : "scale-down",
            aspectRatio: "3/2",
          }}
          component="img"
          loading="lazy"
          alt={alt}
          image={image[isVertical ? 1 : 0]}
        />
        <CardContent sx={{ p: isVertical ? "" : "0 16px 0 0 !important" }}>
          <Box display="flex" flexDirection="column">
            <Typography sx={{ mb: isVertical ? -1 : 1 }} variant="h5">
              {name}
            </Typography>
            <Typography
              sx={{ order: isVertical ? 0 : 1 }}
              textAlign={isVertical ? "right" : "left"}
              pb={isVertical ? 2 : 1}
              variant="subtitle1"
              color="info"
            >
              ${price}
            </Typography>
            <Typography
              mb={isVertical ? 4 : 1}
              variant="body2"
              sx={{
                color: "text.secondary",
                ...ellipsisStyle,
              }}
            >
              {description}
            </Typography>
          </Box>

          <Link color="black" underline="none" href="/order">
            <Typography variant="button">
              Order a delivery
              <MopedIcon sx={{ ml: 1, verticalAlign: "bottom" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FoodCard;
