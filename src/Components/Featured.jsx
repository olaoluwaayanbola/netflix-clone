import React from "react";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "../Styles/Featured.scss";
const Featured = ({ value }) => {
  return (
    <div className="Conatianer">
      <div className="dynamictitle">
        {value && (
          <div className="dynamic">
            <span>{value === "Movie" ? "Movie" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="Adventure<">Adventure</option>
              <option value="Comdey">Comdey</option>
              <option value="Crime">Crime</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Animation">Animation</option>
              <option value="Western">Western</option>
              <option value="Thriller">Thriller</option>
              <option value="Sci-fi">Sci-fi</option>
            </select>
          </div>
        )}
      </div>
      <img
        src="https://mcdn.wallpapersafari.com/medium/10/71/ZnTMSD.jpg"
        alt="Profile image"
      ></img>
      <div className="detail">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/2560px-Mario_Series_Logo.svg.png"
          alt=""
        />
        <span className="desc">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowSharpIcon></PlayArrowSharpIcon>
            <span>Play</span>
          </button>
          <button className="moreinfo">
            <InfoOutlinedIcon></InfoOutlinedIcon>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
