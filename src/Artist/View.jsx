import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./artist.css";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import { Pagination, Navigation } from "swiper/modules";
import styled, { keyframes } from "styled-components";
import React from "react";
import "swiper/swiper-bundle.css";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Arrow from "./Arrow.png";
import ReverseArrow from "./Arrow2.png";

const imgArr = [
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
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
`;

const Container = styled.div`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  animation: ${(props) => (props.inView ? frameInAnimation : null)} 2s forwards;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SliderContainer = styled.div`
  width: 100%;
`;

const Title = styled.span`
  width: max-content;
  padding: 10px;
  border-radius: 5px;
  color: black;
  font-size: 32px;
  font-weight: 360;
  margin-bottom: 10px;
  margin-left: 20px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 10%;
  object-fit: cover;
`;
const NavigatorButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ArrowImage = styled.img`
  width: 2em;
  height: 2em;
`;
const DescriptionContainer = styled.div`
  border-radius: 20px;
  padding: 10px 0;
  width: auto;
`;
const Description = styled.p`
  color: black;
  font-size: 14px;
  text-align: center;
  margin: 1px 0;
  font-weight: 360;
`;
export default function ArtistView() {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });
  // 해당 ref가 적용된 태그의 정보를 가져오는데
  // 만약 해당 컴포넌트가 viewpoint에 보인다면 inView가 true

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Fake>
      <Container ref={ref} inView={inView}>
        <Title>Artist</Title>
        <SliderContainer>
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
            pagination={{
              clickable: true,
            }}
          >
            {imgArr.map((img) => (
              <SwiperSlide>
                <Image src={img} />
                <DescriptionContainer>
                  <Description>최혜지</Description>
                  <Description>최혜지,우승</Description>
                  <Description>최혜지,우승</Description>
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
