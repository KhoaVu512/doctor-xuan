import ButtonBook from '@/components/elements/button-book'
import Image from 'next/image'

function DoctorXuan() {
  return (
    <div className="flex flex-col  bg-blue-600 ">
      <div className="flex justify-center flex-col">
        <div className=" flex justify-center">
          <div className="text-[36px] font-bold py-2 max-lg:text-[24px]">
            Bác sĩ của chúng tôi
          </div>
        </div>
        <div className="flex justify-center w-[100%]">
          <div className="flex justify-center w-[60%] max-lg:w-[100%] max-lg:flex-col">
            <div className="flex flex-col justify-start max-lg:items-center w-[50%]  max-lg:w-[100%]">
              <div>
                <img
                  src="https://i.pinimg.com/564x/8d/60/2e/8d602e478e989239be1ad9db9419d864.jpg"
                  alt="img-doctor"
                  className="w-auto h-[600px] rounded-xl max-sm:h-[400px]"
                />
              </div>
              <div className="text-[24px] font-semibold">
                Bác sĩ Xuân
              </div>
              <div>Chuyên khoa của bác sĩ</div>
            </div>
            <div className="max-lg:none " >
              <hr className='text-[white] border-[1px] my-2 '/>
            </div>

            <div className="flex flex-col w-[50%] max-lg:w-[100%] max-lg:justify-center">
              <div className="text-[20px]">
                (Dòng giới thiệu bác sĩ) Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Libero, molestiae? Qui tempore nisi voluptas a
                alias aspernatur debitis nemo nobis nulla maxime, odio sapiente!
                Asperiores velit maiores laborum fugit accusantium.
              </div>
              <ButtonBook />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DoctorXuan
