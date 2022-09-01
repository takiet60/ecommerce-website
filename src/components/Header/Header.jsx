import React from 'react'
import './Header.scss'

import { images } from '../../constants'


const Header = () => {
    return (
        <header className='header container-fluid'>
            <a href='#' className='h3 header--left'>LOGO</a>
            <section className="header--middle">
                <div className="search__container">
                    <button className="search__icon">
                        <img src={images.search} alt="search icon" />
                    </button>
                    <input type="text" className="search__input" />
                </div>
                <nav className="header__navigation">
                    <a href="#">HOME</a>
                    <a href="#">PRODUCTS</a>
                    <a href="#">ABOUT</a>
                    <a href="#">EVENTS</a>
                    <a href="#">CONTACT</a>
                </nav>
            </section>
            <section className="header--right">
                <button className='btn'>
                    <img src={images.cart} alt="cart icon" className='icon' />
                    <span className='btn__number'>1</span>
                </button>
                <button className='btn'>
                    <img src={images.person} alt="cart icon" className='icon' />

                </button>
                <button className="btn btn--small-screen">
                    <img src={images.menu} alt="menu icon" className='icon' />
                </button>
            </section>
        </header>
    )
}

export default Header