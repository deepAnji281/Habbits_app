import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  
  
  
  return (
    <div className='nav-bar'>
       <Link  to={'/'} style={{textDecoration:'none'}}><h2 >Home</h2></Link>
        <div className='nav-item'>
          
          <Link to={'/create'} style={{textDecoration:'none'}}><h3>Create</h3></Link>
           <Link to={'/view'} style={{textDecoration:'none'}}><h3>View</h3></Link>
         
           
        </div>
        <h1>Daily Habbit</h1>
        { 
          
          props.total===undefined?<></>:<h4>progress report :{props.total>0?props.total:0}</h4>
        }
        

      

    </div>
  )
}

export default NavBar