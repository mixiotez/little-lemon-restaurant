import MUIContainer from "@mui/material/Container";

const Container = ({ children, sx, ...rest }) => (
  <MUIContainer
    sx={{
      ...sx,
      px: { xs: 3, md: "70px" },
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
    }}
    {...rest}
  >
    {children}
  </MUIContainer>
);

export default Container;
