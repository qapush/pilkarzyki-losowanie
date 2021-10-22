import React, { Component } from "react";
import Randomizer from "../randomizer/Randomizer";
import Result from "../result/Result";
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';

import {
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
} from "@mui/material";

export default class App extends Component {
  state = {
    players: [
      { name: "Ola", checked: true },
      { name: "Mateusz", checked: true },
      { name: "Basia", checked: true },
      { name: "Sławek", checked: true },
      { name: "Maksim", checked: true },
    ],
    result: [],
  };

  randomizer = new Randomizer();

  onSelectToggle = (index) => {
    this.setState(({ players }) => ({
      players: players.map((item, i) => {
        if (i === index) {
          return { ...item, checked: !item.checked };
        }
        return item;
      }),
    }));
  };

  shuffle = () => {
    const toShuffle = this.state.players
      .filter((item) => {
        return item.checked;
      })
      .map((item) => {
        return item.name;
      });
    this.setState({
      result: this.randomizer.shuffle(toShuffle),
    });
  };

  render() {
    return (
      <>
        <Typography variant="h4" gutterBottom component="div" sx={{textAlign: 'center', mb:5, mt:5}}>
          Wybierz graczy:
        </Typography>
        <Grid container sx={{pl:4, pr:4}}>
          {this.state.players.map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <FormControlLabel
                  control={<Checkbox checked={item.checked} />}
                  label={item.name}
                  onChange={() => this.onSelectToggle(index)}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container 
  justifyContent="center">
          <Grid item sx={{justifyContent:'center'}}>
            <Button
              size="large"
              variant="contained"
              sx={{mt: 3, mb: 3 }}
              onClick={this.shuffle}
            >
             <CasinoOutlinedIcon sx={{mr:1}}/> Losuj 
            </Button>
          </Grid>
        </Grid>
        {this.state.result.length === 0 ? null : (
          <Result players={this.state.result} />
        )}
      </>
    );
  }
}
