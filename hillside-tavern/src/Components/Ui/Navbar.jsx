import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>LOGO</div>
			<div className='nav-links'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/menu'>Menu</Link></li>
				<li><Link to='/beers'>Beers</Link></li>
				<li><Link to='/contact'>Contact</Link></li>
			</div>
			<div className='reservation'>
				<button className='reservation-btn'>Resservation</button>
			</div>

		</div>
	)
}

export default Navbar