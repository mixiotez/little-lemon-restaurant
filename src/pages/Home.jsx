import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@/components/Container/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import crostini from "@/assets/crostini.jpg?w=400;600&format=webp";

import "./Home.css";

const Home = () => {
  const isXs = useMediaQuery("(max-width:600px)");
  const isMd = useMediaQuery("(min-width:900px)");

  return (
    <Container
      component="section"
      sx={{ backgroundColor: "secondary.main" }}
      maxWidth={false}
    >
      <Grid
        sx={{ mx: "auto", py: 5, maxWidth: "lg", justifyContent: "center" }}
        container
      >
        <Grid size={isMd ? 4 : 12}>
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
          <Button fullWidth={isXs} variant="contained" color="primary">
            <Link color="black" underline="none" href="/reserve">
              Reserve a table
            </Link>
          </Button>
        </Grid>
        {isMd && (
          <Grid size={4}>
            <img
              className="medium-img"
              src={crostini[1]}
              alt="four pieces of crostini on a plate"
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
