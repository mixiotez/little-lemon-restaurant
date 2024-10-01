import { Fragment } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import MopedIcon from "@mui/icons-material/Moped";

import Container from "@/components/Container/Container";

import crostini from "@/assets/crostini.jpg?w=300;600&format=webp";
import greekSalad from "@/assets/greek-salad.jpg?w=300;600&format=webp";
import bruschetta from "@/assets/bruschetta.jpg?w=300;600&format=webp";
import lemonDessert from "@/assets/lemon-dessert.jpg?w=200;600&format=webp";

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
            >
              <Link color="black" underline="none" href="/reserve">
                Reserve a table
              </Link>
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

      <Container>
        <Grid
          container
          spacing={isMd ? 4 : 2}
          component="section"
          sx={{ m: "96px auto 0", maxWidth: "md" }}
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
              alignItems: "flex-end",
            }}
          >
            <Button variant="contained">
              <Link color="black" underline="none" href="/menu">
                Online Menu
              </Link>
            </Button>
          </Grid>

          {cards.map((card) => (
            <Fragment key={card.name}>
              <FoodCard {...card} isVertical={isMd} />
              {!isMd && <Divider sx={{ width: "100%" }} />}
            </Fragment>
          ))}
        </Grid>
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

export default Home;
