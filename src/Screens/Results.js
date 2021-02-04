import React, { useState }  from "react";
import {useLocation} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import SportsEsports from '@material-ui/icons/SportsEsports';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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



export default function Results(props) {

    const [marvel, setMarvel] = useState([]);
    const [description, setDescription] = useState([]);
    const [cards, setCards] = useState([]);
    var namesArray = [];
    var descriptionArray = [];

    // var cards = [
    //     {id: 1, title: marvel[0], content: description[0] },
    //     {id: 2, title: marvel[1], content:  description[1]}
    //   ];

    function loadHero(name){
        var CryptoJS = require("crypto-js");
        var PUBLIC_KEY = "96130fdcf77ccc6de1842a0dd8b3d38f";
        var PRIV_KEY = "3f074ab597b77f48f43cd835b5df9bd7bbc376f5";
    
        var hash = CryptoJS.MD5("1"+PRIV_KEY+PUBLIC_KEY).toString();
        var apiUrl = 'http://gateway.marvel.com/v1/public/characters?limit=10&nameStartsWith=' + name + '&ts=1&apikey='+PUBLIC_KEY+'&hash='+hash;
        fetch(apiUrl)
        .then(res => res.json())
        .then((data) => {
        const array1 = data.data.results;
        setCards(array1)

    })
        .catch(console.log)
    
    }

    console.log("Cards --> "+cards);

    const classes = useStyles();
    let location = useLocation();
    let name = location.state.name;

    console.log(marvel)
    //const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    loadHero(name[0])

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
                    {name}
                </Typography>
                
                
                <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                      {/* <Link to={{
                            pathname: "/",
                        }}> */}
                        <Button  onClick={() => loadHero(name[0])} variant="contained" color="primary">
                            Check Results
                        </Button>
                      {/* </Link> */}
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                    <img src = {card.thumbnail.path+'.'+card.thumbnail.extension} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
          </main>
        </React.Fragment>
      );
}
  