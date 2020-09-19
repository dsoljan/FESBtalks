import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import Alerts from './components/layout/Alerts';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
// redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Paper } from '@material-ui/core';
import Image from './img/showcase.jpg';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      dark: '#354874',
      main: '#9700d9',
      light: '#7085b7',
      contrastText: '#ffffff',
    },
    secondary: {
      dark: '#460070',
      main: '#6400a1',
      light: '#8333b3',
    },
  },
});
const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    maxHeight: 'maxContent',
    minHeight: '100vh',
  },
};

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); //[] brackets make it run once, not in a loop, sort of like componentDidMount

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={styles.paperContainer}>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <Fragment>
              <Navbar />
              <Route exact path='/' component={Landing} />
              <section>
                <Alerts />
                <Switch>
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/profiles' component={Profiles} />
                  <Route exact path='/profile/:id' component={Profile} />
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                  <PrivateRoute
                    exact
                    path='/create-profile'
                    component={CreateProfile}
                  />
                  <PrivateRoute
                    exact
                    path='/edit-profile'
                    component={EditProfile}
                  />
                  <PrivateRoute
                    exact
                    path='/add-experience'
                    component={AddExperience}
                  />
                  <PrivateRoute
                    exact
                    path='/add-education'
                    component={AddEducation}
                  />
                  <PrivateRoute exact path='/posts' component={Posts} />
                  <PrivateRoute exact path='/posts/:id' component={Post} />
                </Switch>
              </section>
            </Fragment>
          </Router>
        </Provider>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
