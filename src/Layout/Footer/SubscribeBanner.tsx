import React from 'react'
import { Link } from 'react-router-dom'

export default function SubscribeBanner() {
  return (
    <div className="absolute left-[133px] top-0 inline-flex w-[1240px] items-center justify-between rounded-[20px] bg-[#dbad34] px-16 py-9">
    <div className="h-[94px] w-[551px] font-['Inter'] text-[40px] font-bold leading-[45px] text-white">
      Đăng ký để nhận được những thông tin mới nhất
    </div>
    <div className="inline-flex flex-col items-start justify-start gap-3.5">
      
      <div className="inline-flex w-[349px] items-center justify-center gap-3 rounded-[62px] bg-white px-4 py-3">
        <Link to={'register'} className="font-['Inter'] text-base font-medium text-black">
          Đăng ký thành viên mới
        </Link>
      </div>
    </div>
  </div>
  )
}
