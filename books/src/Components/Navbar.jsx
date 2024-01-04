import React from 'react'
import logo from '../assets/Kalvium-Logo-SVG.svg'
import { useDispatch } from 'react-redux'
import { searchBooks } from '../utils/Redux/action'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const dispatch = useDispatch()
  return (
    <div id='navbar'>
        <Link style={{textDecoration:"none", color:"black", display:"flex",alignItems:"center"}} to={"/"}>
            <div id='logo'>
                <img src={logo} alt="" />
                <span className='logo-text'>Books</span>
            </div>
        </Link>
        <div id='search'>
            
            <input onChange={(e)=>{
                dispatch(searchBooks(e.target.value))
            }} type="text" placeholder='Search Books' />
            {/* <button>SEARCH</button> */}
        </div>
        <div id='register-btn'>
            <Link to={'/register'}><button>Register</button></Link>
        </div>
    </div>
  )
}
