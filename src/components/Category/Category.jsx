import React from 'react'
import { images } from '../../constants'

import './Category.scss'

const Category = () => {
    return (
        <section className="section section--fill">
            <div className="container">
                <h4 className='section__header'>Category</h4>
                <main className='category__container'>
                    <article className='category category--small'>
                        <img src={images.laptop} alt="laptop" className='category__img' />
                        <div className="category__overlay"></div>
                        <div className="category__description">
                            <h5>Laptop</h5>
                            <a href="#">See more -></a>
                        </div>
                    </article>
                    <article className='category category--small'>
                        <img src={images.laptop} alt="laptop" className='category__img' />
                        <div className="category__overlay"></div>
                        <div className="category__description">
                            <h5>Laptop</h5>
                            <a href="#">See more -></a>
                        </div>
                    </article>
                    <article className='category category--large'>
                        <img src={images.laptop} alt="laptop" className='category__img' />
                        <div className="category__overlay"></div>
                        <div className="category__description">
                            <h5>Laptop</h5>
                            <a href="#">See more -></a>
                        </div>
                    </article>
                    <article className='category category--small'>
                        <img src={images.laptop} alt="laptop" className='category__img' />
                        <div className="category__overlay"></div>
                        <div className="category__description">
                            <h5>Laptop</h5>
                            <a href="#">See more -></a>
                        </div>
                    </article>
                    <article className='category category--small'>
                        <img src={images.laptop} alt="laptop" className='category__img' />
                        <div className="category__overlay"></div>
                        <div className="category__description">
                            <h5>Laptop</h5>
                            <a href="#">See more -></a>
                        </div>
                    </article>
                </main>
            </div>
        </section>
    )
}

export default Category