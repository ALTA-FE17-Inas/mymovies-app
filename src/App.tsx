import React from 'react';
// import axios from 'axios';
import Header from './components/Header';
import DisplayItems from './components/DisplayItems';
import { trendingShows, apiKey, popular, popularShows, top_rated_shows } from './modules/apiLinks';

const itemsProps = {
  numberOfmovies: 10,
  moviesOn: false,
  tvShowsOn: true,
  showButtons: true,
  tvShowOn: true,
};
function App() {
 
  return (
    <>
    <Header/>

    <DisplayItems {...itemsProps}
      apiEndpoint = {`${popularShows}?api_key=${apiKey}`}
      itemHeading="Popular Shows"/> 

    <DisplayItems {...itemsProps}
      apiEndpoint = {`${top_rated_shows}?api_key=${apiKey}`}
      itemHeading="Top Rated Shows"/> 
    </>
  );
}

export default App;
