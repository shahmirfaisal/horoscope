import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  hero: {
    marginTop: "100px",
  },
  heading: {
    width: "100%",
    maxWidth: "440px",
    margin: "0 auto",
    textAlign: "center",
    textTransform: "uppercase",
    "& > h3": {
      fontWeight: 700,
    },
    "& > p": {
      fontSize: "0.9rem",
      wordSpacing: "3px",
      fontWeight: 500,
    },
  },

  form: {
    width: "100%",
    maxWidth: "440px",
    margin: "50px auto 0 auto",
    "& > *": {
      width: "100%",
    },

    "& button": {
      marginTop: "20px",
    },
  },
});
