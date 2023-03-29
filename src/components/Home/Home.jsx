import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Home = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const loadMovies = async () => {
            const res = await fetch('data.json');
            const data = await res.json();
            setMovies(data);
        }
        loadMovies();
    }, [])
    return (
        <div className='col-8 d-flex'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    movies.map((movie, index) => <Movie
                        key={index}
                        movie={movie}
                    ></Movie>)
                }
            </div>

        </div>
    );
};

export default Home;