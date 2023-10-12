import React, { useState } from 'react'
import './listItem.scss'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
const ListItem = ({ index }) => {

  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://player.vimeo.com/video/411458540"
  return (
    <div>
      <div className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60
        " alt="" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>

              <div className="itemInfoTop">
                <span>1 Hour 14 Mins</span>
                <span className='limit'>20+</span>
                <span>2000</span>
              </div>
              <div className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis enim in eat
                nventore, doloribus sapiente dolores reprehenderit blanditiis itaque.
              </div>
              <div className="genere">Action</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ListItem
