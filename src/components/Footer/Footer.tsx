import React from "react";

function Footer() {
  return (
    <div className="relative h-[588px] w-[1441px]">
      {/* Main footer container */}
      <div className="absolute left-0 top-[88px] h-[500px] w-full">
        <div className="absolute left-0 top-[1px] h-[499px] w-[100%]">
          {/* Background and border */}
          <div className="absolute left-0 top-0 h-[499px] w-[100%] bg-[#7b5c43]" />
        </div>

        {/* Store system section */}
        <div className="absolute left-[624px] top-[145px] inline-flex flex-col items-start justify-start gap-[26px]">
          <div className="font-['Inter'] text-base font-medium uppercase leading-[18px] tracking-[3px] text-white">
            Hệ thống cửa hàng
          </div>
          <div className="font-['Inter'] text-base font-normal leading-[25px] tracking-wide text-white">
            -1 Võ Văn Ngân,phường 14
            <br />
            Thủ Đức,HCM
            <br />
            -1 Võ Văn Ngân,phường 14
            <br />
            Thủ Đức,HCM
            <br />
          </div>
        </div>

        {/* Contact section */}
        <div className="absolute left-[384px] top-[145px] inline-flex flex-col items-start justify-start gap-[26px]">
          <div className="font-['Inter'] text-base font-medium uppercase leading-[18px] tracking-[3px] text-white">
            Liên hệ
          </div>
          <div className="font-['Inter'] text-base font-normal leading-[25px] tracking-wide text-white">
            Điện thoại:
            <br />
            090 1234 123
            <br />
            Email:
            <br />
            cskh@gmail.com
            <br />
            Thứ Hai - Chủ Nhật
            <br />
            9:00-21:00
          </div>
        </div>

        {/* Social media icons */}
        <div className="absolute left-[1177px] top-[407px] h-[38px] w-[164px]">
          <div className="absolute left-0 top-0 h-[38px] w-[31.03px]">
            <div className="absolute left-0 top-0 h-[38px] w-[31.03px] rounded-full border border-black/20 bg-white" />
          </div>
          <div className="absolute left-[44.32px] top-[-0px] h-[38px] w-[31.03px]">
            <div className="absolute left-0 top-0 h-[38px] w-[31.03px] rounded-full bg-white" />
          </div>
          <div className="absolute left-[88.65px] top-[-0px] h-[38px] w-[31.03px]">
            <div className="absolute left-0 top-0 h-[38px] w-[31.03px] rounded-full border border-black/20 bg-white" />
            <div className="absolute left-[8.01px] top-[9.81px] h-[18.39px] w-[15.01px]"></div>
          </div>
          <div className="absolute left-[132.97px] top-[-0px] h-[38px] w-[31.03px]">
            <div className="absolute left-0 top-0 h-[38px] w-[31.03px] rounded-full border border-black/20 bg-white" />
          </div>
        </div>

        {/* Brand name and slogan */}
        <div className="absolute left-[1px] top-0 inline-flex w-[369px] flex-col items-center justify-start pb-[283px] pl-[100px] pr-[21px] pt-[146px]">
          <div className="inline-flex flex-col items-start justify-start gap-[35px] self-stretch">
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <div className="font-['Inter'] text-[33.45px] font-bold text-white">
                SouverShop
              </div>
              <div className="w-[248px] font-['Inter'] text-sm font-normal leading-snug text-[#f2f0f1]">
                Kỷ niệm khó quên
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription section */}
      <div className="absolute left-[133px] top-0 inline-flex w-[1240px] items-center justify-between rounded-[20px] bg-[#dbad34] px-16 py-9">
        <div className="h-[94px] w-[551px] font-['Inter'] text-[40px] font-bold leading-[45px] text-white">
          Đăng ký để nhận được những thông tin mới nhất
        </div>
        <div className="inline-flex flex-col items-start justify-start gap-3.5">
          <div className="inline-flex w-[349px] items-start justify-start gap-3 rounded-[62px] bg-white px-4 py-3">
            <div className="relative h-6 w-6" />
            <div className="font-['Inter'] text-base font-normal text-black/40">
              Nhập email
            </div>
          </div>
          <div className="inline-flex w-[349px] items-center justify-center gap-3 rounded-[62px] bg-white px-4 py-3">
            <div className="font-['Inter'] text-base font-medium text-black">
              Đăng ký thành viên mới
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
