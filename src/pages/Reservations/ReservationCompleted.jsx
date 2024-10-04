import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Container from "@/components/Container";

const ReservationCompleted = () => {
  return (
    <Container
      component="section"
      sx={{
        height: "calc(100vh - 70px)",
        position: "absolute",
        top: 0,
        alignContent: "center",
      }}
    >
      <Stack textAlign="center" mx="auto" maxWidth="500px" spacing={3}>
        <Typography
          color="secondary.main"
          variant="h3"
          component="h1"
          fontFamily="Karla"
          fontWeight="bold"
        >
          Successful Reservation!
        </Typography>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            We will soon send you an email confirming your reservation.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Thank you for choosing Little Lemon!
          </Typography>
        </Box>
        <Button component={Link} size="large" variant="contained" href="/">
          Close
        </Button>
      </Stack>
    </Container>
  );
};

export default ReservationCompleted;
