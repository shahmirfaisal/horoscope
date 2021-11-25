import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  hero: {
    marginTop: "50px",
    "& > h4": {
      fontWeight: 600,
    },
    marginBottom: "30px",
  },

  panel: {
    marginTop: "30px",

    "& p": {
      fontSize: "0.96rem",
      marginBottom: "20px",
    },
  },

  description: {
    width: "100%",
    maxWidth: "600px",
  },

  spinner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
});
