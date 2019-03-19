import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions'

class MoviesList extends React.Component {
    componentWillMount() {
        this.props.fetchMovies();
    }
    render() {
        const allmovies = Array.from(this.props.allmovies);
        const movieItems = allmovies.map(movies => (

        <div key={movies.id}>
            <h4>{movies.name}</h4> 
            <span  style={{ color: "red"}}>{movies.genre}</span>
            <p><b>Plot: </b> {movies.story}</p>
        </div>
    ))
        return (
            <>{movieItems}</>
               
        )
    }
}

const mapStateToProps = state => ({
    allmovies: state.movieslist.movies
});

export default connect(mapStateToProps, { fetchMovies })(MoviesList)