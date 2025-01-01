import { Button, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainBanner from "../../assets/TranhDongHo.png";
import { Footer } from "../../components";
import Header from "../../Layout/Header/Header";
import ProductSlider from "../../components/ProductSlider";
import { useEffect, useState } from "react";
import { getBannerApi } from "./Home.service";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const navigate = useNavigate();
  const [banners, setBanners] = useState({});

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

  useEffect(() => {
    const fetchBanners = async () => {
      getBannerApi()
        .then((res) => {
          setBanners(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchBanners();
  }, []);
 console.log(banners)

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
      {/*Banner*/}
      {true ? (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
        >
          {Object.values(banners).map((banner) => (
            <div key={banner as string} className="h-[300px] w-full">
              <img src={banner as string} alt="banner" className="h-[300px] w-full" />
            </div>
          ))}
        </Carousel>
      ) : (
        <Skeleton variant="rectangular" width="100%" height={300} />
      )}

      {/*Footer*/}
    </div>
  );
};

export default Home;
