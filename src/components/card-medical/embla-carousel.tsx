import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import ImageTest from '../../../public/images/medical-doctor.jpg'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={index}
            >
              <div className="embla__slide__number ">
                <div>
                  <Image
                    src={ImageTest}
                    alt={'test hello'}
                    className=" h-full w-full object-cover items-center"
                    width={500}
                    height={500}
                  />
                  <div>Hello</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
