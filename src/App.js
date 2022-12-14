import logo from './logo.svg';
import './App.css';
import Row from "./Row"
import request from "./requests"
import Banner from "./Banner"
import Nav from "./Nav"
function App() {
  return (
    <>
      <div className="app">
        <Nav />

        <Banner />
        <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} islargerow />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="Top Rate" fetchUrl={request.fetchTopRated} />

        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />

        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />

        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />

        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />

        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      </div>
    </>
  );
}

export default App;
