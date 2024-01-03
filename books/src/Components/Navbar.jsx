import React from 'react'
import logo from '../assets/Kalvium-Logo-SVG.svg'
import { useDispatch } from 'react-redux'
import { searchBooks } from '../utils/Redux/action'
export default function Navbar() {
    const dispatch = useDispatch()
  return (
    <div id='navbar'>
        <div id='logo'>
            <img src={logo} alt="" />
            <span className='logo-text'>Books</span>
        </div>
        <div id='search'>
            
            <input onChange={(e)=>{
                dispatch(searchBooks(e.target.value))
            }} type="text" placeholder='Search Books' />
            {/* <button>SEARCH</button> */}
        </div>
        <div id='register-btn'>
            <button>Register</button>
        </div>
    </div>
  )
}
