import React, { useState } from 'react';
import SwiperCore, { Mousewheel, Navigation, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/effect-cards/effect-cards.scss';
import 'swiper/modules/navigation/navigation.scss';
import { Badge, Button, Card, CardHeader, IconButton } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import styled from 'styled-components';

SwiperCore.use([Mousewheel, Navigation, EffectCards]);

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
  width: 100%;
  min-height: 0;
  margin-top: 20px;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const Keyword = styled.div`
  font-size: max(30px, 5vmin);
`;

const Title = styled.div`
  font-size: max(10px, 2vmin);
  width: 100%;
`;

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'black',
  width: '50%',
  backgroundColor: 'white',
  fontSize: 'max(14px, 2vmin)',
  // marginBottom: '50px',
  '&:hover': {
    backgroundColor: 'rgb(224, 224, 224)'
  }
}));

// const ColorButton = styled(Button)`
//   color: black;
//   background: white;
//   border: 0px;
//   borderradius: 0px;
//   &:hover {
//     background: rgb(224, 224, 224);
//   }
// `;

export default function ({ keyword }) {
  const [open, setOpen] = useState([]);
  const changeHandler = (checked, idx) => {
    if (checked) {
      setOpen([...open, idx]);
    } else {
      setOpen(open.filter(el => el !== idx));
    }
  };

  return (
    <Swiper
      effect={'cards'}
      navigation={true}
      mousewheel={false}
      keyboard={true}
      className="mySwiper"
    >
      {keyword.map((el, idx) => (
        <SwiperSlide key={idx}>
          <ContentContainer>
            {open.includes(idx) ? (
              <KeywordContainer style={{ flex: 5 }}>
                {el.data
                  .sort((a, b) => b.like - a.like)
                  .slice(0, 5)
                  .map((el2, idx2) => (
                    <Card
                      key={idx2}
                      sx={{
                        display: 'flex',
                        flex: '0 0 auto',
                        padding: '10px',
                        width: '80%',
                        alignItems: 'center'
                      }}
                    >
                      <Title class="title">{el2.title}</Title>
                      <IconButton
                        aria-label="settings"
                        onClick={() =>
                          window.open(
                            `https://n.news.naver.com/mnews/article/${el2.company}/${el2.id}?sid=${el2.sid}`
                          )
                        }
                      >
                        <Badge badgeContent={el2.like} color="error" max={999}>
                          <ReadMoreIcon fontSize="small" />
                        </Badge>
                      </IconButton>
                      <div style={{ width: '10px' }} />
                    </Card>
                  ))}
              </KeywordContainer>
            ) : (
              <KeywordContainer style={{ flex: 5, justifyContent: 'center' }}>
                {el.keyword.map((el2, idx2) => (
                  <Keyword key={idx2}>{el2[0]}</Keyword>
                ))}
              </KeywordContainer>
            )}
            <KeywordContainer style={{ flex: 1 }}>
              <ColorButton
                variant="contained"
                onClick={e => changeHandler(!e.target.checked, idx)}
                checked={open.includes(idx) ? true : false}
              >
                {open.includes(idx) ? 'Go back' : 'View more'}
              </ColorButton>
            </KeywordContainer>
          </ContentContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
