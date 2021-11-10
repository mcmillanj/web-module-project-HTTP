import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const initialValues = {
    title: "",
    director: "",
    genre: "", 
    metascore: 0,
    description: "",
};

const AddMovieForm = (props) => {
    const {push} = useHistory();
    const [movie, setMovie] = useState(initialValues);

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/api/movies", movie)
        .then(response => {props.setMovies(response.data)
            push("/movies");
        })
        .catch(error => {console.log(error)
        });
       
    };

    const { title, director, genre, metascore, description } = movie;
    return (
        <form onSubmit = {handleSubmit}>
            <label> Title: </label>
            <input
            name="title"
            value={movie.title}
            onChange={handleChange}
            type="text"
            />

            <label> Director: </label>
            <input
            name = "director"
            value = {movie.director}
            onChange = {handleChange}
            type = "text"
            />

            <label> Genre: </label>
            <input
            name="genre"
            value = {movie.genre}
            onChange = {handleChange}
            type = "text"
            />

            <label> Metascore: </label>
            <input
            name = "metascore"
            value = {movie.metascore}
            onChange = {handleChange}
            type = "number"
            />

            <label> Description: </label>
            <input
            name = "description"
            value = {movie.description}
            onChange = {handleChange}
            type="text"
            />
            <div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Save"/>
					<Link to={`/movies/`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
				</div>
            <button onClick={handleChange}>Submit</button>
        </form>
    );
}; 

export default AddMovieForm; 