import React from "react";
import { Typography, Divider, Grid } from "@mui/material";
import { red, blue } from "@mui/material/colors";
import BoltIcon from '@mui/icons-material/Bolt';
import ShieldIcon from '@mui/icons-material/Shield';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function Result(props) {
  const colorRed = red[800],
    colorBlue = blue[900];

  const kibice = props.players.slice(4);

  return (
    <>
      <Divider />
      <Typography variant="h5" gutterBottom component="div" sx={{ mt: 2, textAlign: 'center' }}>
        Wynik losowania:
      </Typography>

      <Grid container sx={{ textAlign: 'center'}}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ mt: 2, color: `${colorRed}` }}
          >
            Czerwona drużyna:
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ mt: 2, color: `${colorRed}` }}
          >
            <BoltIcon sx={{mb:-0.7}}/> Atak: {props.players[0]}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ mt: 2, color: `${colorRed}` }}
          >
            <ShieldIcon sx={{mb:-0.7}}/>  Obrona: {props.players[2]}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ mt: 2, color: `${colorBlue}` }}
          >
            Niebieska drużyna:
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ mt: 2, color: `${colorBlue}` }}
          >
            <BoltIcon sx={{mb:-0.7}}/> Atak: {props.players[1]}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ mt: 2, color: `${colorBlue}` }}
          >
            <ShieldIcon sx={{mb:-0.7}}/> Obrona: {props.players[3]}
          </Typography>
        </Grid>
      </Grid>

      <Divider />
      <Typography variant="h5" gutterBottom component="div" sx={{ mt: 2, textAlign: 'center' }}>
        Kibice:
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mt: 2, textAlign: 'center' }}>
        <ul style={{listStyle:'none', margin:0, padding:0}}>
          {kibice.map((item, index) => {
            return <li key={index}><RemoveRedEyeIcon sx={{mb:-0.7}}/> {item}</li>;
          })}
        </ul>
      </Typography>
    </>
  );
}

export default Result;
