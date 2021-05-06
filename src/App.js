import './App.css';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
const API_KEY = "dc11281ae0ec879a6ded67f219979d64";
const trending = 'https://api.themoviedb.org/3/trending/all/week?api_key=dc11281ae0ec879a6ded67f219979d64&language=en-US';
const netflix = 'https://api.themoviedb.org/3/discover/tv?api_key=dc11281ae0ec879a6ded67f219979d64&with_networks=213';
const toprated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=dc11281ae0ec879a6ded67f219979d64&language=en-US';
const action ='https://api.themoviedb.org/3/discover/movie?api_key=dc11281ae0ec879a6ded67f219979d64&with_genres=28';
const comedy ='https://api.themoviedb.org/3/discover/movie?api_key=dc11281ae0ec879a6ded67f219979d64&with_genres=35';
const horror ='https://api.themoviedb.org/3/discover/movie?api_key=dc11281ae0ec879a6ded67f219979d64&with_genres=27';
const romance ='https://api.themoviedb.org/3/discover/movie?api_key=dc11281ae0ec879a6ded67f219979d64&with_genres=10749';
const documentaries ='https://api.themoviedb.org/3/discover/movie?api_key=dc11281ae0ec879a6ded67f219979d64&with_genres=99';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title = "NETFLIX ORIGINALS" url={netflix} islarge="true" />
      <Row title = "Trending Now" url={trending}/>
      <Row title = "Top Rated" url={toprated}/>
      <Row title = "Action movies" url={action}/>
      <Row title = "Comedy movies" url={comedy}/>
      <Row title = "Horror Movies" url={horror}/>
      <Row title = "Romance Movies" url={romance}/>
      <Row title = "Documentaries" url={documentaries}/>
      
    </div>
  );
}

export default App;
