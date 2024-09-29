import { forwardRef } from "react";
import { createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;

  return <NavLink ref={ref} to={href} {...other} />;
});
LinkBehavior.displayName = "LinkBehavior";
LinkBehavior.propTypes = { href: "string" };

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Markazi Text",
    },
    h2: {
      fontFamily: "Markazi Text",
    },
    fontFamily: "Karla",
    color: "#333333",
  },
  palette: {
    primary: {
      main: "#F4CE14",
      contrastText: "#333333",
    },
    secondary: {
      main: "#495E57",
      contrastText: "#FFFFFF",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default theme;
