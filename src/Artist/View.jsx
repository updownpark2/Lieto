import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./artist.css";

import { artist } from "./artistDummy.js";
import { Pagination, Navigation } from "swiper/modules";
import styled, { keyframes } from "styled-components";
import React from "react";
import "swiper/swiper-bundle.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "../Loader.jsx";

const frameInAnimation = keyframes`
  0% {
    opacity: 0;

  }

  100%{
    opacity: 1;
 
  }
`;
const Fake = styled.div`
  background-color: #f7e1e2;
  z-index: -1;
  height: 130vh;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 130vh;
  @media (max-width: 768px) {
    height: fit-content;
  }
`;

const SliderContainer = styled.div`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  animation: ${(props) => (props.inView ? frameInAnimation : null)} 1.5s
    forwards;
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
  margin-bottom: 8px;
  font-weight: 330;
`;
export default function ArtistView() {
  const { ref, inView, entry } = useInView({ threshold: 0.2 });
  const [imgArr, setImgArr] = useState(null);

  let isInitialGetImg = true;

  // 해당 ref가 적용된 태그의 정보를 가져오는데
  // 만약 해당 컴포넌트가 viewpoint에 보인다면 inView가 true

  useEffect(() => {
    const getImgData = async () => {
      const { imgArrDummy } = await import("./imgDummy.js");
      setImgArr(imgArrDummy);
    };
    inView && isInitialGetImg && getImgData();

    isInitialGetImg = false;
  }, [inView]);

  return (
    <Fake>
      <Container>
        <Title>Artist</Title>
        <SliderContainer ref={ref} inView={inView}>
          {imgArr === null ? (
            <Loader />
          ) : (
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
                    <NameDescription>pf. {artist[i][0]}</NameDescription>
                    {artist[i][1].map((info, _i) => (
                      <Description key={_i}>{info}</Description>
                    ))}
                  </DescriptionContainer>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
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
