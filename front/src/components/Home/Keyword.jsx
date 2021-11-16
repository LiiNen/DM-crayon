import SwiperCore, { Mousewheel, Navigation, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/effect-cards/effect-cards.scss';
import 'swiper/modules/navigation/navigation.scss';
import { Button } from '@mui/material';
import styled from 'styled-components';

SwiperCore.use([Mousewheel, Navigation, EffectCards]);

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const Keyword = styled.div`
  font-size: max(30px, 5vmin);
`;

const ButtonWord = styled.div`
  font-size: max(16px, 2vmin);
`;

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'black',
  backgroundColor: 'white',
  border: 0,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:hover': {
    backgroundColor: 'white'
  }
}));

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
      {keyword.map((el, idx) => (
        <SwiperSlide key={idx}>
          <ContentContainer>
            <KeywordContainer style={{ flex: 6 }}>
              {el.keyword.map((el2, idx2) => (
                <Keyword key={idx2}>{el2}</Keyword>
              ))}
            </KeywordContainer>
            <KeywordContainer style={{ flex: 4, justifyContent: 'center' }}>
              <ColorButton color="secondary" variant="contained">
                <ButtonWord>View more</ButtonWord>
              </ColorButton>
            </KeywordContainer>
          </ContentContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
