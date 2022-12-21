import '../App.css';
import React from 'react';
import Layout from './layout/Layout';
import BookContainer from './book/BookContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './user/Login';
import Register from './user/Register';
import { SnackbarProvider } from 'notistack';
import Auth from './auth';


const App = () => {

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/login'><Login /></Route>
            <Route path='/register'> <Register /></Route>
            <Route exact path='/'>
              <Auth>
                <BookContainer />
              </Auth>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </SnackbarProvider>
  );
}


export default App;
