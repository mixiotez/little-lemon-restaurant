import { forwardRef } from "react";
import { createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;

  return <NavLink ref={ref} to={href} {...other} />;
});
LinkBehavior.displayName = "LinkBehavior";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Markazi Text",
    },
    h2: {
      fontFamily: "Markazi Text",
    },
    h3: {
      fontFamily: "Markazi Text",
    },
    h4: {
      fontFamily: "Markazi Text",
    },
    fontFamily: "Karla",
    color: "#333333",
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
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
    info: {
      light: "#FBDABB",
      main: "#EE9972",
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
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
