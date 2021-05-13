import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerStyles: {
    fontSize: "13.5px",
    padding: "10px",
  },

  deviceContainer: {
    display: "inherit",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  cellStyles: {
    fontSize: "13.5px",
  },

  paramsContainer: {
    display: "flex",
  },

  menuContainer: {
    margin: "0px",
  },

  menuTitleContainer: {
    padding: "2.5px",
  },

  buttonCrear: {
    margin: "20px",
  },

  buttonCancel: {
    margin: "10px 0px",
  },

  formStyles: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
  },

  inputStyles: {
    maxWidth: "75%",
    width: "auto",
    height: "26px",
    margin: "10px 0px 0px 0px",
    padding: "0px 0px 0px 5px",
    "&::placeHolder": {
      fontSize: "15px",
      color: "#7d8182b0",
      fontStyle: "oblique",
    },
  },

  labelStyles: {
    margin: "20px 0px 0px 0px",
  },

  linkStyles: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "none",
    },
    "&:active": {
      textDecoration: "none",
    },
  },

  textListStyles: {
    fontSize: "15px",
  },

  iconStyles: {
    color: "black",
    minWidth: "30px",
    fontSize: "18px",
  },
}));
