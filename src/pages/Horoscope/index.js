import { useEffect, useState } from "react";
import { Container, Typography, Box, Tabs, Tab, Button } from "@mui/material";
import { useStyles } from "./style";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner/";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Horoscope = () => {
  const classes = useStyles();
  const location = useLocation();
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const changeTabsHandler = (e, newValue) => {
    setValue(newValue);
    let day;
    if (newValue === 0) day = "Yesterday";
    else if (newValue === 1) day = "Today";
    else day = "Tomorrow";
    navigate(`/horoscope?sign=${query.sign}&day=${day}`);
  };

  const query = {};
  location.search
    .slice(1)
    .split("&")
    .forEach((el) => {
      const arr = el.split("=");
      query[arr[0]] = arr[1];
    });

  useEffect(() => {
    switch (query.day.toLowerCase()) {
      case "yesterday":
        setValue(0);
        break;
      case "today":
        setValue(1);
        break;
      case "tomorrow":
        setValue(2);
        break;
      default:
    }

    (async () => {
      var options = {
        method: "POST",
        url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
        params: { sign: query.sign, day: query.day },
        headers: {
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "20ba396acemshc7d7f57dbb4ef18p1c7bdajsn09700493909b",
        },
      };

      setLoading(true);

      try {
        var res = await axios.request(options);
        setHoroscope(res.data);
      } catch (error) {
        navigate("/", { replace: true });
      }

      setLoading(false);
    })();
  }, [location.search]);

  if (loading)
    return (
      <div className={classes.spinner}>
        <Spinner />
      </div>
    );

  return (
    <Container maxWidth="xl" component="main">
      <Box marginTop={4}></Box>
      <Button variant="outlined" color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>

      <section className={classes.hero}>
        <Typography variant="h4">{query.sign}</Typography>
        <Typography>{horoscope?.date_range}</Typography>
      </section>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={changeTabsHandler}
            aria-label="basic tabs example"
          >
            <Tab label="Yesterday" {...a11yProps(0)} />
            <Tab label="Today" {...a11yProps(1)} />
            <Tab label="Tomorrow" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <section className={classes.panel}>
          <Typography>{horoscope?.current_date}</Typography>
          <Typography className={classes.description}>
            {horoscope?.description}
          </Typography>
          <Typography>
            <strong>Compatibility:</strong> {horoscope?.compatibility}
          </Typography>
          <Typography>
            <strong>Mood:</strong> {horoscope?.mood}
          </Typography>
          <Typography>
            <strong>Lucky Color:</strong> {horoscope?.color}
          </Typography>
          <Typography>
            <strong>Lucky Number:</strong> {horoscope?.lucky_number}
          </Typography>
          <Typography>
            <strong>Lucky Time:</strong> {horoscope?.lucky_time}
          </Typography>
        </section>
      </Box>
    </Container>
  );
};
