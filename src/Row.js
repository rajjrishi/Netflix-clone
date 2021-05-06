import axios from 'axios';
import react, {useState,useEffect} from 'react';
import './row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const bse_url ="https://image.tmdb.org/t/p/original/";

function Row({title,url,islarge="false"}){
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState('');

    useEffect(() => {
        axios.get(url)
        .then((data) => {
            setMovies(data.data.results);
        })
    },[url])

    const opts = {
        height : "390",
        width : "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
    } 

    const clickHandler = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    };

    return (
        <div className="parent_row">
            {console.log(movies)}
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {
                    islarge === "true" ?
                    movies.map(movie => (
                        (<img key={movie.id} onClick={clickHandler(movie)} className="poster_bada" src={`${bse_url}${movie.poster_path}`} alt={movie.name} />)
                    ))
                    : movies.map(movie => (
                        (<img key={movie.id} className="poster" src={`${bse_url}${movie.backdrop_path}`} alt={movie.name} />)
                    ))
                }
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> }
        </div>

    )
}

export default Row;