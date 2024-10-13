import React from "react";

function Footer() {
  return (
    <div className="">
      <footer className="flex h-[400px] flex-shrink-0 flex-row bg-[#7B5D44] text-center text-white">
        <div
          className="brandname inline-flex flex-shrink-0 flex-col items-center"
          style={{ padding: "146px 21px 283px 100px" }}
        >
          <div className="text-3xl font-bold leading-10 text-white">
            SouverShop
          </div>
          <div className="text-sm font-normal text-white">Kỷ niệm khó quên</div>
        </div>

        {/* contact block */}
        <div>
          <div className="inline-flex h-[194px] flex-col items-start justify-start gap-[26px]">
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
