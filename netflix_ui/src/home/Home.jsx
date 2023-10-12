import React from 'react'
import './home.scss'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/navbar/featured/Featured'
import List from '../components/list/List'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured type="movie" />
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
