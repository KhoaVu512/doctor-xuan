import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react'

export default function CardElement() {
  return (
    <div>
      <Card className="max-w-[400px] bg-[#0099CF] mx-4 my-4 card-element">
        <CardHeader className="flex gap-3 flex-col">
          <Image
            alt="nextui logo"
            height={180}
            radius="sm"
            src="https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg"
            width={320}
          />
          <div className="flex flex-col">
            <p className="text-[20px] font-bold">Tên dịch vụ</p>
            {/* <p className="text-small text-default-500">Chuyên khoa</p> */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Kinh nghiệm làm việc. </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit ad
            aperiam a accusamus veniam minus alias!{' '}
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="bg-green-500 hover:bg-green-300">
          <Link
            showAnchorIcon
            href="/service-medic"
            className='font-semibold'
          >
            Chi tiết về bác sĩ
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
