import React from 'react'
import './css/home.css'

const Home = () => {
  return (
    <div className='home-template'>
        <h2 className='header2'>Welcome to the your planning app</h2>
        <h4 className='header4'>Description</h4>
        <h3> (1)go to the create tab.</h3>
        <h3>(2)after submiting the form.</h3>
        <h3>(3)page will redirect to view page and there would be number of list of habbits that you plan.</h3>
        <h3>(4)for each individual list you can update and delete itslef.</h3>
    </div>
  )
}

export default Home