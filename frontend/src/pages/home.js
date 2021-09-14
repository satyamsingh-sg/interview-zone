import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect,Route , Router , Switch } from 'react-router';
import { Link } from 'react-router-dom';
import {v4} from 'uuid'

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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function HomePage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Interview-Zone
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

        <div className={classes.heroContent}>
          <Container maxWidth="xl" style={{margin: 'auto', padding: '15%', justifyContent:'center'} }>
            <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
                   Let's do it !   
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">

            {/* <Router>
            <Switch>
            <Route path="/" exact > 
            <Redirect to={`/documents/${v4()}`} />
            </Route>
            <Route path="/documents/:id" >
            </Route>
            </Switch>
            </Router> */}

           

                  <Link  to = {`/interview/${v4()}`} > 
                      <Button variant="contained" color="primary" style={{padding: '3%'}}>
                  Hello
                  </Button>
                   </Link> 
               


              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">      
        </Container>
      </main>

    </React.Fragment>
  );
}