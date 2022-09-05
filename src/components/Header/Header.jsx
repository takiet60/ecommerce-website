import React, { useState } from 'react'
import './Header.scss'

import { AiOutlineClose } from 'react-icons/ai'
import { images } from '../../constants'


const Header = () => {

    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

    return (
        <>
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
                        <img src={images.menu} alt="menu icon" className='icon' onClick={() => setIsShowMobileMenu(true)} />
                    </button>
                </section>
            </header>


            <header className={isShowMobileMenu ? "header--mobile" : "header--mobile hide"} >
                <AiOutlineClose className='header--mobile__icon' onClick={() => setIsShowMobileMenu(false)} />
                <div className="header--mobile__overlay" onClick={() => setIsShowMobileMenu(false)}></div>
                <ul className="header--mobile__nav">
                    <li><a href="#" className="header--mobile__link" onClick={() => setIsShowMobileMenu(false)}>HOME</a></li>
                    <li><a href="#" className="header--mobile__link" onClick={() => setIsShowMobileMenu(false)}>PRODUCTS</a></li>
                    <li><a href="#" className="header--mobile__link" onClick={() => setIsShowMobileMenu(false)}>EVENT</a></li>
                    <li><a href="#" className="header--mobile__link" onClick={() => setIsShowMobileMenu(false)}>CONTACT</a></li>
                    <li><a href="#" className="header--mobile__link" onClick={() => setIsShowMobileMenu(false)}>ABOUT</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header