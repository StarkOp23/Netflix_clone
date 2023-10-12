import React from 'react'
import './watch.scss'
// import { Link } from 'react-router-dom'
import { ArrowBackOutlined } from '@material-ui/icons'
import ReactPlayer from 'react-player'
const Watch = () => {
    return (
        <div className='watch'>

            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>

            <ReactPlayer className='video' autoPlay progress controls={true} url="./mixkit-stunning-sunset-seen-from-the-sea-4119.mp4" />
        </div>
    )
}

export default Watch

