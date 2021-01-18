import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const api=process.env.API_KEY;


const MOVIE_API_URL = `https://www.omdbapi.com/?s=Science&apikey=8e9d3f61`; 


const App = () => {
  //Loading the state renders loading..
  const [loading, setLoading] = useState(true);
  ////Movies array obtained from the api
  const [movies, setMovies] = useState([]);
  //Error while making API call!!
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${api}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};

    
    return (
     <div className="App">
      <Header text="Search Your fav movie!!" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
{loading && !errorMessage ? (<span>loading...</span>) : errorMessage ? (<div className="errorMessage">{errorMessage}</div>) :(movies.map((movie, index) => (<Movie movie={movie}  key={`${index}-${movie.Title}`} />
          ))
        )}
      </div>
    </div>
  );
};


export default App;