import React, { useEffect, useState } from 'react'
import './MainHomePage.css'
import NewsCard from '../components/NewsCard/NewsCard'
import ProfileCard from '../components/ProfileCard/ProfileCard'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import NoteCard from '../components/NoteCard/NoteCard'
import TimerCard from '../components/TimerCard/TimerCard'
import { useNavigate } from 'react-router';

export default function Home() {

  const navigate = useNavigate();

  const [time, setTime] = useState('')

  const toggleBrowse = ()=>{
    navigate('/browse');
  }

  useEffect(() => {

    const getTime = () => {
      const time = {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),

        hour: new Date().toLocaleString([], { hour: 'numeric', minute: 'numeric', hour12: true })
      }
      setTime(time)
    }
    getTime();
  }, [])

  return (
    <div className='container'>
      <div className='profile_3_box'>
        <div className='profile_weather_box'>
          <ProfileCard />
          { <WeatherCard time={time} /> }
        </div>
        <NoteCard />
        <TimerCard />
      </div>
      <NewsCard time={time} />
      <button className='toggle_btn' onClick={toggleBrowse}>Browse</button>
    </div>
  )
}