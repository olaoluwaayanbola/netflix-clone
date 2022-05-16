import React from 'react'
import '../Styles/Home.scss'
import NavBar from '../Components/NavBar'
import Featured from '../Components/Featured'
import List from "../Components/list/List"
const Home = () => {
  return (
    <div className='Container'>
      <NavBar ></NavBar>
      <Featured value="Series"></Featured>
      <List></List>
      <List></List>
      <List></List>
    </div>
  )
}

export default Home