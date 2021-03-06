import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import SportsEsports from '@material-ui/icons/SportsEsports';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
  }
}));


export default function Home() {

    const classes = useStyles();

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
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Something short and leading about the collection below—its contents, the creator, etc.
                  Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                  entirely.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Link to="/Questions" >
                        <Button  variant="contained" color="primary">
                            Start
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
  