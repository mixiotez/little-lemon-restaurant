import { Fragment } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import MopedIcon from "@mui/icons-material/Moped";

import Container from "@/components/Container/Container";

import Logo from "@/assets/logo.svg?react";
import bruschetta from "@/assets/bruschetta.jpg?w=300;600&format=webp";
import crostini from "@/assets/crostini.jpg?w=300;600&format=webp";
import greekSalad from "@/assets/greek-salad.jpg?w=300;600&format=webp";
import lemonDessert from "@/assets/lemon-dessert.jpg?w=200;600&format=webp";
import marioAndAdrian from "@/assets/mario-and-adrian.jpg?w=400;800&format=webp";

import "./Home.css";

const cards = [
  {
    image: greekSalad,
    alt: "greek salad closeup with a fork on top",
    name: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruschetta,
    alt: "four bruschettas on a plate",
    name: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
  },
  {
    image: lemonDessert,
    alt: "slice of lemon cake with a lemon behind",
    name: "Lemon Dessert",
    price: "4.99",
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const reviews = [
  {
    avatarColor: "info.main",
    name: "Sarah T.",
    rating: 5,
    review:
      "Little Lemon offers delicious Mediterranean flavors with a cozy, welcoming vibe. The greek salad and the tzatziki were fantastic!",
  },
  {
    avatarColor: "primary.main",
    name: "James P.",
    rating: 5,
    review:
      "Great seasonal menu and flavorful dishes, though the wait time can be long during peak hours.",
  },
  {
    avatarColor: "secondary.main",
    name: "Emily G.",
    rating: 5,
    review:
      "Consistently amazing food with a rustic atmosphere — perfect for a relaxing meal. Love the rotating specials of the week!",
  },
];

const Home = () => {
  const isXs = useMediaQuery("(max-width:600px)");
  const isMd = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Container
        className="hero"
        component="section"
        sx={{ backgroundColor: "secondary.main" }}
        maxWidth={false}
      >
        <Grid
          sx={{ mx: "auto", py: 5, maxWidth: "md", justifyContent: "center" }}
          container
        >
          <Grid size={isMd ? 6 : 12}>
            <Typography
              lineHeight={0.5}
              component="h1"
              variant="h2"
              color="primary"
            >
              Little Lemon
            </Typography>
            <Typography pb={2} component="h2" variant="h4" color="white">
              Chicago
            </Typography>
            {!isMd && (
              <img
                className="small-img"
                src={crostini[0]}
                alt="four pieces of crostini on a plate"
              />
            )}
            <Typography pb={3} variant="body1" color="white">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Typography>
            <Button
              fullWidth={isXs}
              variant="contained"
              color="primary"
              size="large"
              href="/reservations"
              component={Link}
            >
              Reserve a table
            </Button>
          </Grid>
          {isMd && (
            <Grid size={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <img
                className="medium-img"
                src={crostini[1]}
                alt="four pieces of crostini on a plate"
              />
            </Grid>
          )}
        </Grid>
      </Container>

      <Container sx={{ mb: isMd ? 6 : 4 }}>
        <Grid
          container
          spacing={isMd ? 4 : 2}
          component="section"
          sx={{ mt: isMd ? "96px" : 4, mx: "auto", maxWidth: "md" }}
        >
          <Grid size={6}>
            <Typography component="h2" variant="h3">
              Specials
            </Typography>
          </Grid>
          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button component={Link} href="/menu" variant="contained">
              Online Menu
            </Button>
          </Grid>

          {cards.map((card, index) => (
            <Fragment key={card.name}>
              {!isMd && index !== 0 && <Divider sx={{ width: "100%" }} />}
              <FoodCard {...card} isVertical={isMd} />
            </Fragment>
          ))}
        </Grid>
      </Container>

      <Container sx={{ backgroundColor: "info.light" }}>
        <Grid
          container
          spacing={isMd ? 4 : 2}
          component="section"
          sx={{
            py: 10,
            mt: isMd ? "96px" : 4,
            mx: "auto",
            maxWidth: "md",
            alignItems: "stretch",
          }}
        >
          <Typography
            textAlign="center"
            width="100%"
            component="h2"
            variant="h3"
          >
            Testimonials
          </Typography>
          {reviews.map((review) => (
            <Grid size={isMd ? 4 : 12} key={review.name}>
              <ReviewCard {...review} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container>
        <Grid
          sx={{
            mx: "auto",
            pt: 10,
            pb: { xs: 2, md: 5 },
            maxWidth: "lg",
            justifyContent: "center",
          }}
          container
          component="article"
          className="about"
        >
          <Grid size={isMd ? 4 : 12}>
            <Typography
              pb={4}
              lineHeight={0.5}
              component="h1"
              variant="h2"
              color="secondary.main"
            >
              About Us
            </Typography>
            {!isMd && (
              <img
                loading="lazy"
                src={marioAndAdrian[0]}
                alt="mario looking at adrian talking while they are in the kitchen"
              />
            )}
            <Typography mt={{ xs: 2, md: 0 }} pb={3} variant="body1">
              Based in Chicago, Illinois, Little Lemon is a family-owned
              Mediterranean restaurant, focused on traditional recipes served
              with a modern twist. The chefs draw inspiration from Italian,
              Greek, and Turkish culture and have a menu of 12-15 items that
              they rotate seasonally. The restaurant has a rustic and relaxed
              atmosphere with moderate prices, making it a popular place for a
              meal any time of the day.
            </Typography>
            <Typography pb={3} variant="body1">
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant. To craft the menu, Mario relies on family
              recipes and his experience as a chef in Italy. Adrian does all the
              marketing for the restaurant and led the effort to expand the menu
              beyond classic Italian to incorporate additional cuisines from the
              Mediterranean region.
            </Typography>
          </Grid>
          {isMd && (
            <Grid size={8} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <img
                loading="lazy"
                src={marioAndAdrian[1]}
                alt="mario looking at adrian talking while they are in the kitchen"
              />
            </Grid>
          )}
        </Grid>
      </Container>

      <Container
        sx={{ py: isMd ? 6 : 4, backgroundColor: "secondary.main" }}
        maxWidth={false}
        component="footer"
      >
        <Stack
          spacing={2}
          divider={
            <Divider
              sx={{ borderColor: "info.light" }}
              orientation="vertical"
              flexItem
            />
          }
          direction="row"
          justifyContent="flex-end"
          maxWidth="md"
          mx="auto"
        >
          <Box color="white">
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">
              1395 Hickman Street, Chicago, IL
            </Typography>
            <Typography variant="body2">
              <Link component="a" href="tel:3573326378">
                (357)-332-6378
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link component="a" href="mailto:eat@littlelemon.com">
                eat@littlelemon.com
              </Link>
            </Typography>
          </Box>
          <Box alignSelf="center" width="fit-content" p={1} bgcolor="white">
            <Logo />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

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

const ReviewCard = ({ avatarColor, name, rating, review }) => {
  return (
    <Card elevation={0} component="article" sx={{ height: "100%" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: avatarColor }}>{name[0]}</Avatar>}
        title={name}
        subheader={<Rating value={rating} readOnly />}
        sx={{ px: { xs: 3, md: 2 }, pt: { xs: 3, md: 2 }, pb: 0 }}
      />
      <CardContent sx={{ px: { xs: 3, md: 2 } }}>
        <Typography textAlign="justify" variant="body2">
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
