import ProductSlider from "@/components/ProductSlider";
import { Product } from "@/models/Product";
import { formatPrice } from "@/utils/FormatPrice";
import {
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonGroup from "../../components/ButtonGroup";
import ImageSlider from "./ImageSlider";
import RatingReview from "./RatingReview";
import { getProductById } from "./service/ProductDetail.service";

import { Loading } from "@/components/Loading";
import { Link } from "react-router-dom";
import axiosInstance from "@/services/AxiosInstance";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ProductDetail() {
  const [product, setProduct] = useState<Product>();
  const { productId } = useParams<{ productId: string }>();
  console.log(productId);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      const product = await getProductById(productId);
      if (!product) return;
      setProduct(product);
    };
    fetchProduct();
  }, [productId]);
  console.log(product);

  const [ratingvValue, setRatingValue] = React.useState<number | null>(2);

  const [quantity, setQuantity] = React.useState<number>(1);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };
  console.log(product);
  

  if (product) {
    return (
      <div className="flex flex-col px-[80px]">
        <Breadcrumbs>
          <Link to="/">Trang chủ</Link>
          <Link to="/category">Danh muc sản phẩm</Link>
          <Typography sx={{ color: "text.primary" }}>
            {product.product_name}
          </Typography>
        </Breadcrumbs>

        {/* Product Detail */}
        <div className="mt-10 flex w-full flex-row items-center justify-center">
          <div className="h-[530px] w-[152px] object-cover">
            <ImageSlider imageURLS={product?.product_image} />
          </div>

          <img
            className="ml-3 h-[530px] w-[444px] rounded-[20px] p-4"
            src={product.product_image[0]}
          />

          {/* Product Info */}
          <div className="ml-10 flex h-[530px] w-[590px] flex-col gap-2">
            <div className="font-['Inter'] text-[40px] font-bold text-black">
              {product?.product_name}
            </div>
            <Rating
              name="controlled"
              value={ratingvValue}
              onChange={(event, newvalue) => {
                setRatingValue(newvalue);
              }}
            />

            {/* Price */}
            <div className="flex flex-row items-center justify-start gap-4">
              <div className="font-['Inter'] text-[32px] font-bold text-black">
                {formatPrice(product.product_selling_price)}
              </div>
              <div className="font-['Inter'] text-[32px] font-bold text-black/30 line-through">
                $300
              </div>
              <div className="inline-flex h-[31px] items-center justify-center gap-3 rounded-[62px] bg-[#ff3333]/10 px-3.5 py-1.5">
                <div className="font-['Inter'] text-base font-medium text-[#ff3333]">
                  -40%
                </div>
              </div>
            </div>

            {/* Description */}
            {/* <div className="w-[590px] font-['Inter'] text-base font-normal leading-snug text-black/60">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </div> */}
            <hr />

            <hr />
            {/*Quantity*/}
            <div className="mt-auto flex items-center justify-center">
              <div className="flex h-[52px] w-[170px] flex-row items-center justify-between rounded-[62px] bg-[#efefef] px-5 py-4">
                <ButtonGroup value={quantity} />
              </div>
              <>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000",
                    color: "#ffff",
                    borderRadius: "20px",
                    width: "400px",
                    height: "52px",
                    marginLeft: "20px",
                  }}
                >
                  Add to cart
                </Button>
              </>
            </div>
          </div>
        </div>
        {/* Product Detail Tabs */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            aria-label="product detail tabs"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="fullWidth"
          >
            <Tab label="Product Details" sx={{ width: "30%" }} />
            <Tab label="Rating & Reviews" sx={{ width: "30%" }} />
          </Tabs>

          <TabPanel value={tabIndex} index={0}>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.5",
                color: "#333",
              }}
            >
              {product.product_describe}
            </Typography>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <div className="h-[990px] w-full">
              <RatingReview />
            </div>
          </TabPanel>
        </Box>

        {/* Related Products */}
        {/* <ProductSlider data={images_data} text="Sản phẩm liên quan" /> */}
      </div>
    );
  }
}

export default ProductDetail;
