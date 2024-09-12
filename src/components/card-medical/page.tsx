'use client'
import CardMedical from '@/components/card-medical/card-medical'
import './embla.css'


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
