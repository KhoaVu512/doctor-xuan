import React from 'react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

export default function CardMedical() {
  const list = [
    {
      title: 'Orange',
      img: 'https://i.pinimg.com/564x/dc/ed/49/dced49f9523b72f09d9cc765fa1ccff5.jpg',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: 'https://i.pinimg.com/564x/dc/ed/49/dced49f9523b72f09d9cc765fa1ccff5.jpg',
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: 'https://i.pinimg.com/564x/dc/ed/49/dced49f9523b72f09d9cc765fa1ccff5.jpg',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: 'https://i.pinimg.com/564x/dc/ed/49/dced49f9523b72f09d9cc765fa1ccff5.jpg',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: 'https://i.pinimg.com/564x/dc/ed/49/dced49f9523b72f09d9cc765fa1ccff5.jpg',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: 'https://i.pinimg.com/564x/dc/ed/49/dced49f9523b72f09d9cc765fa1ccff5.jpg',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: 'https://i.pinimg.com/564x/dc/ed/49/dced49f9523b72f09d9cc765fa1ccff5.jpg',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: 'https://i.pinimg.com/564x/dc/ed/49/dced49f9523b72f09d9cc765fa1ccff5.jpg',
      price: '$12.20',
    },
  ]

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 py-8">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log('item pressed')}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b className="text-[#101732]">{item.title}</b>
            {/* <p className="text-500 text-[#101732]">{item.price}</p> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
