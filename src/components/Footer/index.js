import { Container, Typography } from "@mui/material";
// import { useStyles } from "./style";

export const Footer = () => {
  //   const classes = useStyles();

  return (
    <Container maxWidth="xl" style={{ marginTop: "auto" }}>
      <Typography align="center">
        Created with &hearts; by Shahmir Faisal
      </Typography>
    </Container>
  );
};
