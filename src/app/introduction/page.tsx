import ButtonBook from '@/components/elements/button-book'

function IntroDoctor () {
  return (
    <div className="flex flex-col w-[100%] justify-center items-center bg-green-200">
      <div className="flex justify-center text-[36px] font-extrabold my-4 text-black">Giới thiệu phòng khám</div>
      <div>
        <img
          src="https://i.pinimg.com/564x/8d/60/2e/8d602e478e989239be1ad9db9419d864.jpg"
          alt="img-doctor"
          className='w-[70%] h-auto rounded-2xl'
        />
      </div>
      <div className='text-[18px] font-semibold text-black w-[60%] my-4'>Mô tả phòng khám <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam accusamus, voluptates debitis laboriosam tempore ipsa eos placeat soluta mollitia, sint fugiat, alias quo aut voluptate suscipit? Autem adipisci aperiam harum?
      <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio iste rerum praesentium fugit reiciendis optio autem pariatur nemo, placeat quo dolores, atque id iusto inventore excepturi corrupti voluptates modi fuga?
      </div>
      <ButtonBook />
    </div>
  )
}
export default IntroDoctor