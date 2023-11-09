// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import sliderImage1 from '../../../assets/home/slide1.jpg'
import sliderImage2 from '../../../assets/home/slide2.jpg'
import sliderImage3 from '../../../assets/home/slide3.jpg'
import sliderImage4 from '../../../assets/home/slide4.jpg'
import sliderImage5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/Section Title/SectionTitle';

const Category = () => {
    return (
        <div className='mb-24'>
            <SectionTitle subHeading={'From 11:00 am to 10:00 pm'}
                heading={'Order Online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={sliderImage1} alt="" />
                    <h3 className='text-4xl text-white -mt-12 uppercase mx-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage2} alt="" />
                    <h3 className='text-4xl text-white -mt-12 uppercase mx-16'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage3} alt="" />
                    <h3 className='text-4xl text-white -mt-12 uppercase mx-16'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage4} alt="" />
                    <h3 className='text-4xl text-white -mt-12 uppercase mx-16'>Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage5} alt="" />
                    <h3 className='text-4xl text-white -mt-12 uppercase mx-16'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;