import { TopReview } from "@/models/TopReview";
import { Button, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import MainBanner from "../../assets/TranhDongHo.png";
import ProductSlider from "../../components/ProductSlider";
import ReviewCard from "../../components/ReviewCard";
import useProductStore from "../Category/store/category.store";
import { getBannerApi, getRandomProductsApi, getTopReviewApi } from "./Home.service";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [reviews, setReviews] = useState<TopReview[]>([]);
  const fetchReview = async () => {
    try{
      const res = await getTopReviewApi();
      setReviews(res);
    }
    catch(error){
      console.log(error);
    }
  }

  const isSale=true
  
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
    const fetchNewArrivals = async () => {
      try {
        const res = await getRandomProductsApi();
        setNewArrivals(res);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchBestSellers = async () => {
      try {
        const res = await getRandomProductsApi();
        setBestSellers(res);
      } catch (err) {
        console.log(err);
      }
    };


    useProductStore.getState().setProductList();
    fetchNewArrivals();
    fetchBestSellers();
    fetchBanners();
    fetchReview();
  }, []);

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
          onClick={() => navigate("/category")}
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

      {isSale && (
        <img
          src='https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/09/25085120/khuyen-mai-20-10-spa.png'
          alt="sale"
          className="h-[400px] w-2/3 self-center my-5"
        />
      )}


      <ProductSlider navigate={navigate} data={newArrivals} text="Sản phẩm mới" />

      <div className="my-3 h-[1px] w-full bg-black" />
      {/* best seller */}

      <ProductSlider navigate={navigate} data={bestSellers} text="Bán chạy nhất" />

      {/* Customer Reviews Section */}
      <div className="reviews-section my-8">
        <h2 className="mb-6 text-center text-5xl font-bold text-black">
          Đánh giá của khách hàng
        </h2>
        <div
          className="reviews scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex gap-6 overflow-x-auto px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reviews.map((review) => (
            <div
              key={review.customer_id}
              className="w-[300px] flex-shrink-0"
              style={{ scrollSnapAlign: "center" }}
            >
              <ReviewCard
                name={review.user_name}
                review={review.review_text}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      {true ? (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
        >
          {Object.values(banners).map((banner) => (
            <div key={banner as string} className="h-[300px] w-full">
              <img
                src={banner as string}
                alt="banner"
                className="h-[300px] w-full"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <Skeleton variant="rectangular" width="100%" height={300} />
      )}

      {/* Footer */}
    </div>
  );
};

export default Home;