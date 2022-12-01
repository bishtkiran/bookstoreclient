import axios from 'axios';
import '../App.css';
import React from 'react';
import Layout from './layout/Layout';
import BookContainer from './book/BookContainer';
import baseUrl from '../config';


  const App = () => {
    axios.get(`${baseUrl}/api/v1/books`).then(books => {
      console.log("Books", books);
    })
      return (
        <Layout>
         <BookContainer />
        </Layout>
      );
    }


export default App;
