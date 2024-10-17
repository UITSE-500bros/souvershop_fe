import Header from "../components/Header/Header";
import MainBanner from "../assets/TranhDongHo.png";
import { Button } from "@mui/material";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "Đồng hồ treo tường",
      price: 500000,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 2,
      name: "Tranh nghệ thuật",
      price: 1200000,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 3,
      name: "Bình hoa sứ",
      price: 300000,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 4,
      name: "Bình hoa sứ",
      price: 300000,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
    },
  ];
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>

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
      <div className="flex h-[530px] w-full flex-col items-center justify-center">
        <div className="text-center text-5xl font-bold text-black">
          Sản phẩm mới
        </div>
        <div className="flex w-full flex-row justify-between gap-x-5">
          {data.map((item) => (
            <div key={item.id} className="w-[300]">
              <ProductCard
                name={item.name}
                rating={4}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            </div>
          ))}
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
          px: 7,
          py: 1,
          backgroundColor: "#dbad34",
          borderRadius: "60px",
          overflow: "hidden",
          fontWeight: 500,
          fontSize: 20,
          color: "black",
          textTransform: "none",
        }}
        >Xem thêm</Button>
      </div>
    </div>
  );
};

export default Home;
