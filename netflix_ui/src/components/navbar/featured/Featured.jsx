import React from 'react'
import "./featured.scss"
import { InfoOutlined, PlayArrow } from '@material-ui/icons'
const Featured = ({ type }) => {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>
            {type === "movie" ? "Movie" : "Series"}
          </span>
          <select name="genere" id="genere">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}




      <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
      <div className="info">
        <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeeMILAyu161f6TSuh-poQWNKfIo_pl9aeifrQ7noJsTYX78AbLCLDsPzCHSp7N0OfCGrU3nGDFtynNnZ3lKQbXuPgpbRObPUCcAPFgwtp2K.png?r=df1" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. In accusantium
          fugiat iste debitis id autem,
          esse labore pariatur eaque eos cum quibusdam!
          Esse id eius dolores temporibus ullam, sequi consectetur.
        </span>
        <div className="buttons">
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
