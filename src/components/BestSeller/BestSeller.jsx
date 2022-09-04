import React from 'react'
import './BestSeller.scss'
import { images } from '../../constants'
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const BestSeller = () => {

    return (
        <section id="best-seller" className='section'>
            <div className="container">
                <div className="best-seller--left">
                    <h4 className='section__header'>Best seller</h4>
                    <p class="text-small section__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ad inventore quia aliquid accusamus esse vero magnam quos suscipit ipsam?</p>
                </div>
                <div className="best-seller--right">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <article className="card">
                                <header className="card__header">
                                    <img src={images.laptop} alt="laptop image" />
                                    <span className="card__icon">
                                        <AiOutlineHeart />
                                    </span>
                                </header>
                                <main className="card__body">
                                    <p className="card__product-name ">Product name</p>
                                    <p className="bold">$45.54 <span className="line-through">$49.94</span></p>
                                    <div className="card__info">
                                        <div className="card__rate">
                                            <AiFillStar className="icon icon--yellow" />
                                            <p className="card__rating">4.8</p>
                                        </div>
                                        <span className="chip chip--error chip--small">
                                            10% off
                                        </span>
                                    </div>
                                </main>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className="card">
                                <header className="card__header">
                                    <img src={images.laptop} alt="laptop image" />
                                    <span className="card__icon">
                                        <AiOutlineHeart />
                                    </span>
                                </header>
                                <main className="card__body">
                                    <p className="card__product-name ">Product name</p>
                                    <p className="bold">$45.54 <span className="line-through">$49.94</span></p>
                                    <div className="card__info">
                                        <div className="card__rate">
                                            <AiFillStar className="icon icon--yellow" />
                                            <p className="card__rating">4.8</p>
                                        </div>
                                        <span className="chip chip--error chip--small">
                                            10% off
                                        </span>
                                    </div>
                                </main>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className="card">
                                <header className="card__header">
                                    <img src={images.laptop} alt="laptop image" />
                                    <span className="card__icon">
                                        <AiOutlineHeart />
                                    </span>
                                </header>
                                <main className="card__body">
                                    <p className="card__product-name ">Product name</p>
                                    <p className="bold">$45.54 <span className="line-through">$49.94</span></p>
                                    <div className="card__info">
                                        <div className="card__rate">
                                            <AiFillStar className="icon icon--yellow" />
                                            <p className="card__rating">4.8</p>
                                        </div>
                                        <span className="chip chip--error chip--small">
                                            10% off
                                        </span>
                                    </div>
                                </main>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className="card">
                                <header className="card__header">
                                    <img src={images.laptop} alt="laptop image" />
                                    <span className="card__icon">
                                        <AiOutlineHeart />
                                    </span>
                                </header>
                                <main className="card__body">
                                    <p className="card__product-name ">Product name</p>
                                    <p className="bold">$45.54 <span className="line-through">$49.94</span></p>
                                    <div className="card__info">
                                        <div className="card__rate">
                                            <AiFillStar className="icon icon--yellow" />
                                            <p className="card__rating">4.8</p>
                                        </div>
                                        <span className="chip chip--error chip--small">
                                            10% off
                                        </span>
                                    </div>
                                </main>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className="card">
                                <header className="card__header">
                                    <img src={images.laptop} alt="laptop image" />
                                    <span className="card__icon">
                                        <AiOutlineHeart />
                                    </span>
                                </header>
                                <main className="card__body">
                                    <p className="card__product-name ">Product name</p>
                                    <p className="bold">$45.54 <span className="line-through">$49.94</span></p>
                                    <div className="card__info">
                                        <div className="card__rate">
                                            <AiFillStar className="icon icon--yellow" />
                                            <p className="card__rating">4.8</p>
                                        </div>
                                        <span className="chip chip--error chip--small">
                                            10% off
                                        </span>
                                    </div>
                                </main>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className="card">
                                <header className="card__header">
                                    <img src={images.laptop} alt="laptop image" />
                                    <span className="card__icon">
                                        <AiOutlineHeart />
                                    </span>
                                </header>
                                <main className="card__body">
                                    <p className="card__product-name ">Product name</p>
                                    <p className="bold">$45.54 <span className="line-through">$49.94</span></p>
                                    <div className="card__info">
                                        <div className="card__rate">
                                            <AiFillStar className="icon icon--yellow" />
                                            <p className="card__rating">4.8</p>
                                        </div>
                                        <span className="chip chip--error chip--small">
                                            10% off
                                        </span>
                                    </div>
                                </main>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className="card">
                                <header className="card__header">
                                    <img src={images.laptop} alt="laptop image" />
                                    <span className="card__icon">
                                        <AiOutlineHeart />
                                    </span>
                                </header>
                                <main className="card__body">
                                    <p className="card__product-name ">Product name</p>
                                    <p className="bold">$45.54 <span className="line-through">$49.94</span></p>
                                    <div className="card__info">
                                        <div className="card__rate">
                                            <AiFillStar className="icon icon--yellow" />
                                            <p className="card__rating">4.8</p>
                                        </div>
                                        <span className="chip chip--error chip--small">
                                            10% off
                                        </span>
                                    </div>
                                </main>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className="card">
                                <header className="card__header">
                                    <img src={images.laptop} alt="laptop image" />
                                    <span className="card__icon">
                                        <AiOutlineHeart />
                                    </span>
                                </header>
                                <main className="card__body">
                                    <p className="card__product-name ">Product name</p>
                                    <p className="bold">$45.54 <span className="line-through">$49.94</span></p>
                                    <div className="card__info">
                                        <div className="card__rate">
                                            <AiFillStar className="icon icon--yellow" />
                                            <p className="card__rating">4.8</p>
                                        </div>
                                        <span className="chip chip--error chip--small">
                                            10% off
                                        </span>
                                    </div>
                                </main>
                            </article>
                        </SwiperSlide>

                    </Swiper>


                </div>
            </div>

        </section >
    )
}

export default BestSeller