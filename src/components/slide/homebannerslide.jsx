import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../../assets/japanlogo.jpg"

export default function Homepagbanner() {


    return (
        <div className="swiper-container" style={{ width: '80%', margin: '0 auto', overflow: 'hidden' }}>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{ height: '400px' }}
            >
                <SwiperSlide >
                    <div style={{ height: '400px', display: 'flex', alignItems: 'center' }}>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                <div style={{ 
                        height: '400px', 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img src={img1} alt='picture1' tyle={{
                    width: '100%', height: '100%', objectFit: 'cover', // 이미지가 컨테이너를 꽉 채우도록
                    objectPosition: 'center' // 이미지 중앙 정렬
                }} />
                </div>
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>
    );

}