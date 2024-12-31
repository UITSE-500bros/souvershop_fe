import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainBanner from "../../assets/TranhDongHo.png";
import { Footer } from "../../components";
import Header from "../../Layout/Header/Header";
import ProductSlider from "../../components/ProductSlider";
import ReviewCard from "../../components/ReviewCard"; 

const Home = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "Đồng hồ treo tường",
      price: 500000,
      discountPrice: 300000,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      rating: 4,
    },
    {
      id: 2,
      name: "Tranh nghệ thuật",
      price: 1200000,
      discountPrice: 800000,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      rating: 5,
    },
    {
      id: 3,
      name: "Bình hoa sứ",
      price: 300000,
      discountPrice: 100000,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      rating: 3,
    },
    {
      id: 4,
      name: "Bình hoa sứ",
      price: 300000,
      discountPrice: 250000,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      rating: 4,
    },
  ];

  const reviews = [
    { name: "Nguyễn Văn A", review: "Sản phẩm rất đẹp, chất lượng tốt!", rating: 5 },
    { name: "Trần Thị B", review: "Rất hài lòng, sẽ mua thêm", rating: 4 },
    { name: "Lê Minh C", review: "Giá hợp lý, giao hàng nhanh chóng", rating: 4 },
    { name: "Phạm Hoàng D", review: "Mua lần 2, sản phẩm rất chất lượng!", rating: 5 },
    { name: "Vũ Thị E", review: "Giao hàng nhanh, đóng gói cẩn thận", rating: 3 },
  ];

  return (
    <div className="flex flex-col">
      {/* banner block */}
      <div className="relative h-[550px] w-full">
        <img
          src={MainBanner}
          alt="home-banner"
          className="absolute left-0 top-0 h-[550px] w-full"
        />
        <div className="absolute left-[53px] top-[48px] flex h-60 w-[635px] text-center text-6xl font-[700] text-black">
          Khám phá những xu hướng mới nhất
        </div>
        <Button
          variant="contained"
          sx={{
            width: 210,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            px: 6,
            py: 1,
            backgroundColor: "#dbad34",
            borderRadius: "20px",
            overflow: "hidden",
            fontWeight: 500,
            fontSize: 20,
            color: "white",
            textTransform: "none",
            position: "absolute",
            marginLeft: "243px",
            marginTop: 35,
          }}
        >
          Mua ngay
        </Button>

        <div className="absolute left-[100px] top-[400px] inline-flex h-[68] items-center gap-8">
          <div className="flex-col items-start justify-start">
            <div className="text-[40px] font-bold text-black">200+</div>
            <div className="text-base font-normal leading-snug text-black/60">
              Nhãn hiệu
            </div>
          </div>
          <div className="flex-col items-start justify-start">
            <div className="text-[40px] font-bold text-black">2,000+</div>
            <div className="text-base font-normal leading-snug text-black/60">
              Sản phẩm chất lượng cao
            </div>
          </div>
          <div className="flex-col items-start justify-start">
            <div className="text-[40px] font-bold text-black">30,000+</div>
            <div className="text-base font-normal leading-snug text-black/60">
              Khách hàng hài lòng
            </div>
          </div>
        </div>
      </div>

      {/* empty space */}
      <div className="h-[100px] w-full bg-[#7b5c43]" />

      {/* new products */}
      <ProductSlider data={data} text="Sản phẩm mới" />

      <div className="my-3 h-[1px] w-full bg-black" />

      {/* best seller */}
      <ProductSlider data={data} text="Bán chạy nhất" />

      {/* Customer Reviews Section */}
      <div className="reviews-section my-8">
        <h2 className="text-center text-5xl font-bold text-black">Đánh giá của khách hàng</h2>
        <div className="reviews flex flex-wrap justify-between gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="w-[48%]"> 
              <ReviewCard
                name={review.name}
                review={review.review}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="my-5 h-[750px] w-full border">
        <img
          src="https://picsum.photos/seed/picsum/2000/750"
          alt="banner"
          className="h-full w-full"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
