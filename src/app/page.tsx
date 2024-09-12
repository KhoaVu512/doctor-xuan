'use client'
// import Image from "next/image";
import PageCard from '@/components/card-doctor/page'
import PageMedical from '@/components/card-medical/page'
import PageSlider from '@/components/image-slider/page'
import ButtonBook from '@/components/elements/button-book'
import DoctorXuan from '@/components/elements/doctor-xuan'

export default function Home() {
  return (
    <div>
      <PageSlider />
      <ButtonBook/>
      <DoctorXuan />
      <PageCard />
      <PageMedical />
    </div>
  )
}
