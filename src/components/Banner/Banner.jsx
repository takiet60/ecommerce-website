import React from 'react'
import './Banner.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { images } from '../../constants'
import { Pagination, Navigation } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            key="banner"
        >
            <SwiperSlide key="banner1">
                <img src={images.banner1} alt="laptop background" />
            </SwiperSlide>
            <SwiperSlide key="banner2">
                <img src={images.banner2} alt="laptop background" />
            </SwiperSlide>
            <SwiperSlide key="banner3">
                <img src={images.banner3} alt="laptop background" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner