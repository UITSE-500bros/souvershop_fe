import Header from "../components/Header";
import DiscountBanner from "../components/DiscountBanner";

const Home = () => {
  return (
    <div>
      <DiscountBanner text="Đăng ký và nhận giảm giá 20% cho đơn hàng đầu tiên của bạn. Đăng ký ngay" />
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Home;
