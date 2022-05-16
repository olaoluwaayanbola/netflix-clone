import "./listItem.scss";
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useState } from "react";
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "data:image/png;base64,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"
      return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <img
      src='https://wallpaperaccess.com/full/1544609.jpg'
      alt='mario'
    ></img>
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowSharpIcon className="icon" />
              <AddSharpIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
