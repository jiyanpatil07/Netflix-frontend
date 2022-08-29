import React, { useState, useEffect } from 'react'
import axios from './axios'
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
const baseurl = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, islargerow }) {
    const [movies, setmovies] = useState([])
    const [trailerUrl, settrailerUrl] = useState()
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request
            // console.log(request)
        }
        fetchData()
    }, [fetchUrl])
    // console.log(movies)
    const opts = {
        height: '390',
        width: '1500',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovieClick = (movie) => {
        if (trailerUrl) {
            settrailerUrl('')
        }
        else {
            movieTrailer(movie?.name || "").then(url => {
                const urlprms = new URLSearchParams(new URL(url).search)
                settrailerUrl(urlprms.get('v'))
            })
                .catch((error) => {
                    console.log(error)
                })
        }
    }


    return (
        <>
            <div className="row">
                <h2>{title}</h2>
                <div className="row__posters">
                    {movies.map((movie) =>
                        <img key={movie.id} onClick={() => handleMovieClick(movie)} src={`${baseurl}${islargerow ? movie.poster_path : movie.backdrop_path}`}
                            className={`row__poster ${islargerow && "row__pasterlarge"}`} alt={movie.name} />
                        // console.log(movie.name)

                    )}
                </div>

                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
        </>
    )
}

export default Row
