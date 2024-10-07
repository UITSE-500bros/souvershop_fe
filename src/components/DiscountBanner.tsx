import React from 'react'

export default function DiscountBanner({text}:{text:string}) {
  return (
    <div className="fixed left-0 top-0 z-10 w-full flex-1 items-start justify-end bg-[#7B5D44] p-1 text-white">
    {text}
  </div>
  )
}
