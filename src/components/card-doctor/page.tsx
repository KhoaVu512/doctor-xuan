'use client'
import './card-doctor-style.css'
import EmblaCarousel from '@/components/card-doctor/embla-carousel'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function PageCard() {
  return (
    <div className="  card-contain">
      <div>
        <div className="intro-card">
          <p className="">Dịch vụ phòng khám</p>
        </div>
      </div>
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
        />
    </div>
  )
}
