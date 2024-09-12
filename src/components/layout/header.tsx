import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react'
import { AcmeLogo } from './AcmeLogo'
import { usePathname } from 'next/navigation'

export default function HeaderApp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#1040C5]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <Link
            href="/"
            className="font-bold text-inherit"
          >
            Tên phòng khám
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarItem>
          <Link
            href="/"
            className={`text-green-500 ${pathname == '/' ? 'active ' : 'text-white'}`}
          >
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/introduction"
            className={`text-green-500 ${
              pathname == '/introduction' ? 'active ' : 'text-white'
            }`}
          >
            Giới thiệu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/service-medic"
            className={`text-green-500 ${
              pathname == '/service-medic' ? 'active ' : 'text-white'
            }`}
          >
            Dịch vụ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Đặt lịch ngay</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="flat"
            className="bg-[#17C964]"
          >
            <div className="text-[18px] font-semibold">Đặt lịch ngay</div>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
