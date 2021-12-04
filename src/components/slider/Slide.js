import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import spoon from "../image/spoon.jpeg";
import box from "../image/Box_450_g.jpeg";
import glass from "../image/glasss.jpeg";
import frontBack from "../image/front_back.jpeg";
import s_m from "../image/box_s_m_Mug.jpeg";
import beans from "../image/Beans.jpeg";

import { slideData } from "../../Data/data";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./slide.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);
export default function Slide() {
  let imageSlid = [glass, frontBack, s_m, beans, box, spoon];
  return (
    <div className="Slide">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        {slideData.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              {/* <img src={`url(${slide.image})`} alt="" /> */}

              <div>
                <h1> {slide.title} </h1>
                <h2>{slide.description}</h2>
                <button>Buy Now</button>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <img src={spoon} alt="img" />
          <div>
            <h1>
              NUKE COFFEE Whole Beans 16 Oz, Arabica and Robusta Strongest &
              Most Delicious Coffee Beans In The World Gathered From The Heart
              Of Sumatra Volcanic Mountains
            </h1>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={box} alt="img" style={{ width: "160%" }} />
          <div>
            <h1>
              NUKE COFFEE Whole Beans 16 Oz, Arabica and Robusta Strongest &
              Most Delicious Coffee Beans In The World Gathered From The Heart
              Of Sumatra Volcanic Mountains
            </h1>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={glass} alt="img" style={{ width: "100%" }} />
          <div>
            <h1>
              NUKE COFFEE Whole Beans 16 Oz, Arabica and Robusta Strongest &
              Most Delicious Coffee Beans In The World Gathered From The Heart
              Of Sumatra Volcanic Mountains
            </h1>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={frontBack} alt="img" style={{ width: "150%" }} />
          <div>
            <h1>
              NUKE COFFEE Whole Beans 16 Oz, Arabica and Robusta Strongest &
              Most Delicious Coffee Beans In The World Gathered From The Heart
              Of Sumatra Volcanic Mountains
            </h1>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s_m} alt="img" style={{ width: "50%" }} />
          <div>
            <h1>
              NUKE COFFEE Whole Beans 16 Oz, Arabica and Robusta Strongest &
              Most Delicious Coffee Beans In The World Gathered From The Heart
              Of Sumatra Volcanic Mountains
            </h1>
            <button>Buy Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: "80%" }}>
            <img src={beans} alt="img" style={{ width: "100%" }} />
            <button>Buy Now</button>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
