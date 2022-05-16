import React from 'react'
import '../Styles/Watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Watch = () => {
  return (
    <div>
        <div className="watch">
            <div className="back">
                <ArrowBackOutlinedIcon></ArrowBackOutlinedIcon>
                <h2>Home</h2>
            </div>
            <video className='video' autoPlay progress controls src=''/>
        </div>
    </div>
  )
}

export default Watch