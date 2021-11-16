import SwiperCore, { Mousewheel, Navigation, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/effect-cards/effect-cards.scss';
import 'swiper/modules/navigation/navigation.scss';

SwiperCore.use([Mousewheel, Navigation, EffectCards]);

export default function ({ keyword }) {
  return (
    <Swiper
      effect={'cards'}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      grabCursor={true}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}
