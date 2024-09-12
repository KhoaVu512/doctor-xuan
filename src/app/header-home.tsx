'use client'
import HeaderApp from '@/components/layout/header'
import BloodtypeIcon from '@mui/icons-material/Bloodtype'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

function HeaderHome() {
  return (
    <div className="bg-[#B8ACAA]">
      <div className="header-address">
        <div className="header-between">
          <div>
            <BloodtypeIcon /> Địa chỉ: 907/9 Trần Hưng Đạo, P1, Q5, TP.HCM
          </div>
          <div>
            <LocalPhoneIcon /> Sđt:
            <a
              href="tel:+0123456789"
              className="text-blue-600"
            >
              {' '}
              +84968 846 306
            </a>
          </div>
        </div>
      </div>
      <HeaderApp />
    </div>
  )
}

export default HeaderHome
