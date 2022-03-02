import React, { useState, useEffect } from 'react'
import { CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PenIcon from '@material-ui/icons/Create'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import PersonList from './components/PersonList';
import PersonProfile from './components/PersonProfile'
import PersonAdd from './components/PersonAdd';

import { fetchPersons } from './actions/person';
const useStyles = makeStyles((theme) =>
({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3)
  }
})
)

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersons());
  }, [dispatch])

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar
          position="static"
          color="inherit"
          elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
            </IconButton>
            <Typography
              variant="h6"
              color="secondary"
              className={classes.title}
            >
              <a href="/persons">QRCODE RESUME</a>
            </Typography>
            <Button color="primary" variant="outlined" startIcon={<PenIcon />} onClick={handleOpen}>New Person</Button>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12} >
            <Router>
              <Switch>
                <Route exact path="/persons" component={PersonList}></Route>
                <Route exact path="/persons/:id" component={PersonProfile}></Route>
              </Switch>
              <Redirect from="/" to="/persons" ></Redirect>
            </Router>
          </Grid>
        </Grid>
      </Container>
      <PersonAdd open={open} handleClose={handleClose} />
    </>
  )
}

export default App;