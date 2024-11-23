import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div className="relative h-[588px] w-full">
      {/* Footer */}
      <div className="absolute left-0 top-[88px] h-[500px] w-full">
        <div className="absolute left-0 top-[1px] h-[500px] w-full">
          <div className="absolute left-0 top-0 h-[499px] w-full bg-[#7b5c43]" />
          <div className="absolute left-[101px] top-[367px] h-[0px] w-[1240px] border border-black/10"></div>
          <div className="absolute left-[84px] top-[392px] text-right font-['Inter'] text-sm font-normal text-black/60">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
        </div>
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
        <div className="absolute left-[1177px] top-[407px] flex h-[38px] w-[164px] space-x-4">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/20 bg-white">
            <FacebookIcon className="text-[#3b5998]" />
          </div>
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/20 bg-white">
            <InstagramIcon className="text-[#E4405F]" />
          </div>
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/20 bg-white">
            <TwitterIcon className="text-[#1DA1F2]" />
          </div>
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/20 bg-white">
            <LinkedInIcon className="text-[#0077B5]" />
          </div>
        </div>
        <div className="absolute left-[1px] top-0 inline-flex w-[369px] flex-col items-center justify-start pl-[100px] pr-[21px] pt-[146px]">
          <div className="inline-flex flex-col items-start justify-start gap-[35px] self-stretch">
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <div className="font-['Inter'] text-[33.45px] font-bold text-white">
                SHOP.CO
              </div>
              <div className="w-[248px] font-['Inter'] text-sm font-normal leading-snug text-[#f2f0f1]">
                Kỷ niệm khó quên
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="absolute left-[133px] top-0 inline-flex w-[1240px] items-center justify-between rounded-[20px] bg-[#dbad34] px-16 py-9">
        <div className="h-[94px] w-[551px] font-['Inter'] text-[40px] font-bold leading-[45px] text-white">
          Đăng ký để nhận được những thông tin mới nhất
        </div>
        <div className="inline-flex flex-col items-start justify-start gap-3.5">
          <div className="inline-flex w-[349px] items-start justify-start gap-3 rounded-[62px] bg-white px-4 py-3">
            <input
              type="email"
              placeholder="Nhập email"
              className="w-full font-['Inter'] text-base font-normal text-black/40"
            />
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
