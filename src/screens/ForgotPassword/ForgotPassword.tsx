import React from "react";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[535px] w-[657px] gap-8 bg-[#F8F2E5] px-[60px] py-[80px]">
        <div className="text-[32px] font-bold text-[#153060]">SouverShop</div>

        <div className="font-['Open Sans'] w-[537px] text-[45px] font-normal leading-[52px] text-[#153060]">
          Quên mật khẩu
        </div>

        <div className="font-['Open Sans'] w-[537px] text-base font-normal text-[#828282]">
          Nhập email bạn đã đăng ký, chúng tôi sẽ gửi đường link để xác nhận
        </div>

        
      </div>
    </div>
  );
}
