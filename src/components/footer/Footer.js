import React from 'react'
import "./Footer.css"
import footerlogo from "../../assets/images/Footer Left.svg"
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__rapper">
                    <div className="foter">
                        <h3>Finsweet</h3>
                        <h2>Bespoke software solutions</h2>
                        <div className="icons">
                            <FaFacebookF className='icon' />
                            <FaYoutube className='icon' />
                            <FaInstagram className='icon' />
                            <FaTwitter className='icon' />
                        </div>
                        <p>© All rights reserved – Finsweet</p>
                    </div>
                    <div className="footer__right">
                        <div className="foter">
                            <h3>Company</h3>
                            <h4>About Us</h4>
                            <h4>Careers</h4>
                            <h4>Services</h4>
                            <h4>Blog</h4>
                        </div>
                        <div className="foter">
                            <h3>Finsweet</h3>
                            <h4>hi@finsweet.com</h4>
                            <h4>+(123) 456-7890</h4>
                        </div>
                        <div className="foter">
                            <h3>Join Newsletter</h3>
                            <input className='footer__imput' type="text" placeholder='Type email here' />
                            <button className='submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer