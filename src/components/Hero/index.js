import { useState } from "react";
import {
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

const signs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const days = ["Yesterday", "Today", "Tomorrow"];

export const Hero = () => {
  const classes = useStyles();
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");
  const navigate = useNavigate();

  const changeSignHandler = (e) => setSign(e.target.value);
  const changeDayHandler = (e) => setDay(e.target.value);

  const getHoroscope = (e) => {
    e.preventDefault();
    if (!signs.includes(sign) || !days.includes(day)) {
      NotificationManager.error("Please provide the sign and day!");
      return;
    }
    navigate(`/horoscope?sign=${sign}&day=${day}`);
  };

  return (
    <Container maxWidth="lg" className={classes.hero}>
      <div className={classes.heading}>
        <Typography variant="h3">get your daily</Typography>
        <Typography>horoscope, lucky number, lucky time and color.</Typography>
      </div>

      <form className={classes.form} onSubmit={getHoroscope}>
        <TextField
          select
          label="Sign"
          value={sign}
          onChange={changeSignHandler}
        >
          {signs.map((sign) => (
            <MenuItem key={sign} value={sign}>
              {sign}
            </MenuItem>
          ))}
        </TextField>

        <Box marginBottom={3}></Box>

        <TextField select label="Day" value={day} onChange={changeDayHandler}>
          {days.map((day) => (
            <MenuItem key={day} value={day}>
              {day}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="outlined" color="primary" type="submit">
          get horoscope
        </Button>
      </form>
    </Container>
  );
};
