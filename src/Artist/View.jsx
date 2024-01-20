import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./artist.css";
import image1 from "./img/1.jpeg";
import image2 from "./img/2.jpeg";
import image3 from "./img/3.jpeg";
import image4 from "./img/4.jpeg";
import image5 from "./img/5.jpeg";
import image6 from "./img/6.jpeg";
import image7 from "./img/7.jpeg";
import image8 from "./img/8.jpeg";
import image9 from "./img/9.jpeg";
import image10 from "./img/10.jpeg";
import image11 from "./img/11.jpeg";
import image12 from "./img/12.jpeg";
import image13 from "./img/13.jpeg";
import image14 from "./img/14.jpeg";
import image15 from "./img/15.jpeg";
import image16 from "./img/16.jpeg";
import image17 from "./img/17.jpeg";
import image18 from "./img/18.jpeg";
import image19 from "./img/19.jpeg";
import image20 from "./img/20.jpeg";
import image21 from "./img/21.jpeg";
import image22 from "./img/22.jpeg";
import image23 from "./img/23.jpeg";
import image24 from "./img/24.jpeg";
import { artist } from "./artistDummy.js";
import { Pagination, Navigation } from "swiper/modules";
import styled, { keyframes } from "styled-components";
import React from "react";
import "swiper/swiper-bundle.css";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const imgArr = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
];

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }

  100%{
    opacity: 1;
    transform: translateY(0%);
  }
`;
const Fake = styled.div`
  background-color: #f7e1e2;
  z-index: -1;
  height: 130vh;
  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const Container = styled.div`
  height: 130vh;
  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const SliderContainer = styled.div`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  animation: ${(props) => (props.inView ? frameInAnimation : null)} 2s forwards;
  width: 100%;
  display: flex;
  padding-top: 20px;
`;

const Title = styled.span`
  width: max-content;
  padding: 10px;
  color: black;
  font-size: 32px;
  font-weight: 330;
  margin-bottom: 10px;
  margin-left: 20px;
`;
const Image = styled.img`
  width: 100%;

  border-radius: 10%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  margin: 0 5px;
`;
const NameDescription = styled.p`
  color: black;
  font-size: 20px;
  text-align: left;
  margin-top: 2px;
  margin-bottom: 10px;
  margin-left: 6px;
  font-weight: 360;
`;

const Description = styled.p`
  color: black;
  opacity: 0.78;
  font-size: 14px;
  text-align: left;
  margin-top: 2px;
  margin-left: 10px;
  margin-left: 5px;
  margin-bottom: 15px;
  font-weight: 330;
`;
export default function ArtistView() {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });

  // 해당 ref가 적용된 태그의 정보를 가져오는데
  // 만약 해당 컴포넌트가 viewpoint에 보인다면 inView가 true

  return (
    <Fake>
      <Container>
        <Title>Artist</Title>
        <SliderContainer ref={ref} inView={inView}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              767: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            navigation
          >
            {imgArr.map((img, i) => (
              <SwiperSlide>
                <Image src={img} />
                <DescriptionContainer>
                  <NameDescription>{artist[i][0]} pf.</NameDescription>
                  {artist[i][1].map((info) => (
                    <Description>{info}</Description>
                  ))}
                </DescriptionContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderContainer>
      </Container>
    </Fake>
  );
}

/**const ImageContainer = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 30%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const DescriptionContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px 0;
  width: auto;
`;

const Description = styled.p`
  color: #333;
  font-size: 14px;
  text-align: center;
  margin: 4px 0;
`;



const Wrpper = styled.div`
  padding: 12px;
  border-radius: 12px;
`; */
