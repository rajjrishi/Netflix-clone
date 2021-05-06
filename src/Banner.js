import axios from 'axios';
import React, {useState,useEffect} from 'react'
import TextTruncate from 'react-text-truncate'
import './Banner.css'

function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=dc11281ae0ec879a6ded67f219979d64&with_networks=213')
        .then(data => {
            setMovie(data.data.results[
                Math.floor(Math.random() * data.data.results.length )
            ])
        })
    },[])

    return (
        <div className="banner" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundSize: "Cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner_content">
                <h1 className="banner_name">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <div className="description"><TextTruncate line={3} text={movie.overview} /></div>
            </div>
            <div className="banner_fade" />
        </div>
    )
}

export default Banner;
