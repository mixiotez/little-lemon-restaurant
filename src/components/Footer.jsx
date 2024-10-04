import Typography from "@mui/material/Typography";

const year = new Date().getFullYear();

const Footer = () => (
  <Typography variant="subtitle2" py={1} textAlign="center" component="footer">
    &copy; Little Lemon {year}. All rights reserved.
  </Typography>
);

export default Footer;
