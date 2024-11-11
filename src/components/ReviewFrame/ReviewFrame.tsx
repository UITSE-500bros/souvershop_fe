import { Rating } from '@mui/material'
import React from 'react'

export default function ReviewFrame() {
  return (
    <div  className="w-[610px] h-[241.58px] px-8 py-7 flex-col rounded-[20px] border border-black/10 justify-start items-start flex">
      <Rating name="read-only" value={4} readOnly />
      <div className="text-black text-xl font-bold font-['Inter'] ">Samantha D.</div>
      <span className='text-base font-thin  leading-snug' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde blanditiis perspiciatis sunt a harum assumenda officia officiis veritatis ea fugit, ab iusto quaerat ex ratione id nobis dolorum cupiditate?</span>
      <div className="w-[546px] text-black/60 text-base font-medium font-['Inter'] leading-snug">Posted on August 16, 2023</div>

    </div>
  )
}
