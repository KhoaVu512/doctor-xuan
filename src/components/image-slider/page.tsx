'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

import { images } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/thumbs'
import './image-slider.css'

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  
  return (
    <section className="my-4 bg-black container-slider">
      <div className="container ">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="h-full w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className=" h-full w-full object-cover items-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        {/* <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-32 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  )
}
