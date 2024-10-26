import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainBanner from "../../assets/TranhDongHo.png";
import { Footer } from "../../components";
import Header from "../../components/Header/Header";
import ProductSlider from "../../components/ProductSlider";

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
    // {
    //   id: 5,
    //   name: "Bình hoa sứ",
    //   price: 300000,
    //   imageUrl: "https://picsum.photos/seed/picsum/200/300",
    //   rating: 5,
    // },
    // {
    //   id: 6,
    //   name: "Bình hoa sứ",
    //   price: 300000,
    //   imageUrl: "https://picsum.photos/seed/picsum/200/300",
    //   rating: 4,
    // },
  ];
  return (
    <div className="flex flex-col">
      <Header />

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
      <div className="flex justify-center gap-4 mt-4"> 
      <Button
          variant="contained"
          onClick={() => navigate("/category")} 
          sx={{
            width: 210,
            height: 50,
            backgroundColor: "#dbad34",
            fontWeight: 500,
            fontSize: 18,
            color: "white",
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          go to CategoryPage
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/cart")} 
          sx={{
            width: 210,
            height: 50,
            backgroundColor: "#dbad34",
            fontWeight: 500,
            fontSize: 18,
            color: "white",
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          go to CartPage
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/customer-info")}  
          sx={{
            width: 210,
            height: 50,
            backgroundColor: "#dbad34",
            fontWeight: 500,
            fontSize: 18,
            color: "white",
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          go to customerpage
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/checkout")}
          sx={{
            width: 210,
            height: 50,
            backgroundColor: "#dbad34",
            fontWeight: 500,
            fontSize: 18,
            color: "white",
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          Go to CheckoutPage
        </Button>
        
</div>

      {/*Banner*/}
      <div className="my-5 h-[750px] w-full border">
        <img
          src="https://picsum.photos/seed/picsum/2000/750"
          alt="banner"
          className="h-full w-full"
        />
      </div>
      

      {/*Footer*/}
      <div className="my-20 h-[1px] w-full bg-black" />

      <Footer />
    </div>
  );
};

export default Home;
