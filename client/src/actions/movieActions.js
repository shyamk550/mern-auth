import axios from "axios";

import {GET_ALL_MOVIES , ADD_NEW_MOVIE} from "./types";

export const getAllMovies = userData => dispatch => {
  axios
    .get("/api/movies/getmovies", userData)
    .then(res => {
      const { movies } = res.data;
     dispatch({
        type: GET_ALL_MOVIES, 
        payload: movies});
    })
    
};

export const fetchMovies = () => dispatch => {
console.log("movies fetching....")
        fetch("/api/movies/getmovies")
        .then(res =>res.json())
        .then(movies => 
            dispatch({
                type: GET_ALL_MOVIES, 
                payload: movies
            }));
    

}