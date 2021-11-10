import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteMovieList = (props) => {
    const { favoriteMovies } = props;

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favoriteMovies.map(movie=>{
                return <Link key={props.movie.id} className="btn btn-light savedButton" to={`/movies/${props.movie.id}`}>{props.movie.title}</Link>
            })
        }
    </div>);
}

export default FavoriteMovieList;