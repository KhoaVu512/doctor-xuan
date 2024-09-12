import Link from 'next/link'
import './button-book.css'
function ButtonBook() {
  return (
    <div className="w-[100] flex justify-center py-8 ">
      <Link
        href=""
        className="rounded-2xl py-[20px] text-[24px] bg-gradient-to-r from-green-500 to-blue-500 animate-pulse "
      >
        <p className="text-black font-semibold px-[80px]">Đặt lịch ngay</p>
      </Link>
    </div>
  )
}
export default ButtonBook