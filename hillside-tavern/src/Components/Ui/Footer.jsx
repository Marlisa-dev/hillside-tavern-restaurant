import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaYelp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<section class="footer">
		<div class="container">
			<div class="footer-top">

				<div class="grid">
					<div class="footer-location" >
						<div class="footer-top-heading">
							<h5>Our Location</h5>
						</div>
						<div class="footer-top-body">
							<p><span>Hillside Tavern: </span>123 E. 12th St, Austin, Tx 78702</p>
							<p><span>Restaurant Reservations: </span>512-273-7804</p>
							<p><span>Brewery: </span>512-273-7806</p>
							<p><span>Events: </span>512-273-7808</p>
							<p><span>Email: </span>contact@hillsidetavern.com</p>
						</div>
					</div>
				</div>
				<div class="grid">
					<div class="footer-hours ">
						<div class="footer-top-heading">
							<h5>Hours</h5>
						</div>

						<div class="footer-top-body">
							<div class="days">
								<div class="date-day">Monday</div>
								<div class="day-hours"> 8AM - 11PM</div>
							</div>
	
							<div class="days">
								<div class="date-day">Tuesday</div>
								<div class="day-hours">8AM - 11PM</div>
							</div>
	
							<div class="days">
								<div class="date-day">Wednesday</div>
								<div class="day-hours">8AM - 11PM</div>
							</div>
	
							<div class="days">
								<div class="date-day">Thursday</div>
								<div class="day-hours">8AM - 11PM</div>
							</div>
	
							<div class="days">
								<div class="date-day">Friday</div>
								<div class="day-hours">8AM - 11PM</div>
							</div>
	
							<div class="days">
								<div class="date-day">Saturday</div>
								<div class="day-hours">8AM - 11PM</div>
							</div>
	
							<div class="days">
								<div class="date-day">Sunday</div>
								<div class="day-hours">Closed</div>
							</div>
						</div>
					</div>		
				</div>
			</div>


			<div class="footer-bottom">
				<h1 class="footer-name">Hillside Tavern</h1>
				<h3 class="footer-tagline">Brewery & Restaurant</h3>
				<div class="social-media">
					<Link to='https://www.facebook.com/' target="_blank"><FaFacebookF /></Link>

					<Link to='https://www.twitter.com/' target="_blank"><BsTwitter /></Link>

					<Link to='https://www.instagram.com/' target="_blank"><BsInstagram /></Link>

					<Link to='https://www.yelp.com/' target="_blank"><FaYelp /></Link>
				
				</div>
				<h6 class="reserved">2021 All Rights Reserved. Developed by Marlisa Odokara</h6>
			</div>
		</div>
	</section>
	)
}

export default Footer