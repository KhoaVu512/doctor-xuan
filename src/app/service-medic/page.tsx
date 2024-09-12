import ButtonBook from '@/components/elements/button-book'
import './style.css'
function PageMedic () {
  return (
    <div className="service-container">
      <div className="name-service">Tên dịch vụ</div>
      <div className="des-service">Mô tả dịch vụ</div>
      <div className="img-service">
        <img
          src="https://i.pinimg.com/564x/0b/d6/36/0bd636f823fa849b2d3a8a07c8bab0f7.jpg"
          alt=""
        />
      </div>
      <div className="content-service">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        doloribus pariatur numquam unde modi! Eaque corrupti laborum totam,
        dolores quia amet deleniti sapiente accusantium dignissimos sunt ad
        saepe maiores voluptatum?( Nội dung bài viết)
      </div>
      <button className='bg-green-700 p-2 rounded-lg hover:bg-green-300 text-black'>Bài viet tiep theo</button>
      <ButtonBook />
    </div>
  )
}
export default PageMedic