import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'
function Banner() {
    const [movie, setmovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            // console.log(request)
            // console.log(Math.
            //     floor(Math.random() * request.data.results.length - 1))
            setmovie(request.data.results[
                Math.
                    floor(Math.random() * request.data.results.length - 1)
            ]
            )

            return request
        }
        fetchData()
    }, [])
    console.log(movie)
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__button">
                    <button className="banner__buttons">Play</button>
                    <button className="banner__buttons">Myluist</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadebottom" />
        </header>
    )
}

export default Banner
