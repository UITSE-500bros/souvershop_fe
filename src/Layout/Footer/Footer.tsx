import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SubscribeBanner from "./SubscribeBanner";

export default function Footer() {

  const isLogin = true
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
        <div className="left-[1177px] absolute z-10 top-[407px] flex h-[38px] w-[250px] space-x-4">
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
                SOUVERSHOP
              </div>
              <div className="w-[248px] font-['Inter'] text-sm font-normal leading-snug text-[#f2f0f1]">
                Kỷ niệm khó quên
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      {!isLogin &&  <SubscribeBanner/>}
    
    </div>
  );
}
