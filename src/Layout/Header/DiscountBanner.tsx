import { Link } from "react-router-dom";

export default function DiscountBanner() {
  return (
    <div className="w-full flex items-center justify-center bg-[#7B5D44] text-center text-white p-2">
      <div className="flex items-center space-x-2">
        <p className="font-normal m-0">
          Đăng ký và nhận giảm giá 20% cho đơn hàng đầu tiên của bạn.
        </p>
        <Link to={'register'} className="font-bold text-white underline font-normal">
          Đăng ký ngay
        </Link>
      </div>
    </div>
  );
}