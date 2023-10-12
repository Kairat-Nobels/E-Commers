import React from 'react'
import './Footer.scss'
const Footer = () =>
{
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quis sit velit odit illum deleniti veniam quae fugit! At exercitationem nemo nesciunt veniam ducimus dolores dolore, ipsum porro iste eligendi.</span>
                </div>
                <div className="item">
                    <h1>Contacts</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quis sit velit odit illum deleniti veniam quae fugit! At exercitationem nemo nesciunt veniam ducimus dolores dolore, ipsum porro iste eligendi.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Kairastore</span>
                    <span className="copyright">© Copyright 2023. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Footer