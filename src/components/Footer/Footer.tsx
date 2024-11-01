function Footer() {
  return (
    <div className="relative h-[588px] w-full">
      {/* Main footer container */}
      <div className="absolute bottom-0 left-0 top-[88px] h-[500px] w-full">
        <div className="absolute left-0 top-[70px] h-[499px] w-full">
          {/* Background and border */}
          <div className="absolute left-0 top-0 h-[499px] w-full bg-[#7b5c43]" />
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
        <div className="absolute left-[1177px] top-[407px] flex space-x-4">
          <div className="h-[38px] w-[31.03px] rounded-full border border-black/20 bg-white" />
          <div className="h-[38px] w-[31.03px] rounded-full border border-black/20 bg-white" />
          <div className="h-[38px] w-[31.03px] rounded-full border border-black/20 bg-white" />
          <div className="h-[38px] w-[31.03px] rounded-full border border-black/20 bg-white" />
        </div>

        {/* Brand name and slogan */}
        <div className="absolute left-[1px] top-0 flex flex-col items-center justify-start pb-[283px] pl-[100px] pr-[21px] pt-[146px]">
          <div className="text-3xl font-bold text-white">SHOP.CO</div>
          <div className="text-sm font-normal text-[#f2f0f1]">
            Kỷ niệm khó quên
          </div>
        </div>
      </div>

      {/* Subscription section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] inline-flex w-[1240px] items-center justify-between rounded-[20px] bg-[#dbad34] px-16 py-9">
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