import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import SportsEsports from '@material-ui/icons/SportsEsports';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function Questions() {

    const classes = useStyles();
    const [name, setName] = useState('');

    const handleChangeName = event => {
        setName(event.target.value);
    };

    return (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <SportsEsports className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                ArcadeQuest Dev Test
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    ArcadeQuest
                </Typography>
                <TextField
                    id="filled-full-width"
                    label="What's your name?"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    value={name}
                    onChange={handleChangeName}
                />
                
                <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Link to={{
                            pathname: "/Results",
                            state: { name: name }
                        }}>
                        <Button variant="contained" color="primary">
                            Check Result
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </main>
        </React.Fragment>
      );
}
  