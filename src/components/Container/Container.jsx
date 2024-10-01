import MUIContainer from "@mui/material/Container";

const Container = ({ children, sx, ...rest }) => (
  <MUIContainer sx={{ ...sx, px: { xs: 3, md: "70px" } }} {...rest}>
    {children}
  </MUIContainer>
);

export default Container;
