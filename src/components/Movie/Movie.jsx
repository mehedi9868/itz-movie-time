import React from 'react';

const Movie = ({ movie }) => {
    const { category, description, imdbRating, movieName, poster, watchTime } = movie;
    console.log(movie);
    return (
        <div className="col">
            <div className="card h-100">
                <img src={poster} className="h-50 w-50 mx-auto card-img-top" alt="..." />
                <div className="card-body position-relative">
                    <h5 className="card-title">{movieName}</h5>
                    <small>{category}</small>
                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-around'>
                        <p>Watch Time: {watchTime}</p>
                        <p>IMDB Rating: {imdbRating}</p>
                    </div>
                    <div className='text-center position-absolute fixed-bottom'>
                        <button className='btn btn-secondary w-75'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;