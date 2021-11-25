import { Container, Typography } from "@mui/material";
import { useStyles } from "./style";

export const Header = () => {
  const classes = useStyles();

  return (
    <Container component="header" maxWidth="xl" className={classes.header}>
      <Typography
        variant="h4"
        className={classes.heading}
        style={{ fontWeight: 600 }}
      >
        Horoscope
      </Typography>
    </Container>
  );
};
