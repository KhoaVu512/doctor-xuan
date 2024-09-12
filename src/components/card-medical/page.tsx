'use client'
import EmblaCarousel from '@/components/card-doctor/embla-carousel'
import CardMedical from '@/components/card-medical/card-medical'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function PageMedical() {
  return (
    <div className="bg-[#0D74B1] my-4">
      <div className="flex justify-center text-[42px] font-semibold">
        Bài viết về bệnh xương khớp
      </div>
      <CardMedical />
      {/* <EmblaCarousel
        slides={SLIDES}
        options={OPTIONS}
      /> */}
    </div>
  )
}

export default PageMedical
