import React, { useState, useEffect } from 'react';
import  './BrowseEntertainment.css';
import config from '../config';
import MovieCard from '../components/MovieCard/MovieCard';
import { useNavigate } from 'react-router';


export default function BrowseEntertainment() {

  const navigate =useNavigate()

  const [animation, setAnimation] = useState()
  const [horror, setHorror] = useState()
  const [action, setAction] = useState()

  const toggleHome = ()=>{
    navigate('/MainHomePage')
  }

  useEffect(() => {

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.movieKey}&language=en-US`
    const fetchMovies = async () => {

      const animeRes = await fetch(`${url}&with_genres=16`)
        .then(async response => await response.json())
        .catch(err => console.error(err));

        if (animeRes.page > 0) {
        
          setAnimation(animeRes);
        }


      const horrorRes = await fetch(`${url}&with_genres=27`)
        .then(async response => await response.json())
        .catch(err => console.error(err));

        if (horrorRes.page>0) {
          
          setHorror(horrorRes);
        }

      const actionRes = await fetch(`${url}&with_genres=28`)
        .then(async response => await response.json())
        .catch(err => console.error(err));

        if (actionRes.page>0) {
          
          setAction(actionRes);
        }
    }
    fetchMovies();
  }, [])

  return (
    <div className='browser-container'>
    <div className='profile-browser'>
      <div className='app-title'>Super app</div>
      <div className='profile-btn' onClick={toggleHome}></div>
    </div>
      <div className='movies_container'>
        <p>Entertainment according to your choice</p>
        <div className='category_box'>
          <h1>Animation</h1>
          <div className='movies_box'>
            {animation && animation.results.slice(0, 6).map((e) => {
              return <MovieCard key={e.id} img={e.poster_path} {...e} />
            })}
          </div>
        </div>
        <div className='category_box'>
          <h1>Horror</h1>
          <div className='movies_box'>
            {horror && horror.results.slice(0, 6).map((e) => {
              return <MovieCard key={e.id} img={e.poster_path} {...e} />
            })}
          </div>
        </div>
        <div className='category_box'>
          <h1>Action</h1>
          <div className='movies_box'>
            {action && action.results.slice(0, 6).map((e) => {
              return <MovieCard key={e.id} img={e.poster_path} {...e} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
