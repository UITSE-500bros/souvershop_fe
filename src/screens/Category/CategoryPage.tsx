import { Product } from "@/models/Product";
import axiosInstance from "@/services/AxiosInstance";
import {
  Breadcrumbs,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

import useProductStore from "./store/category.store";

const CategoryPage: React.FC = () => {
  const allProducts = useProductStore((state) => state.product_list);
  console.log(allProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts); // Products to display
  const [categories, setCategories] = useState<{ category_id: string; category_name: string }[]>([]); // List of categories
  const [selectedCategory, setSelectedCategory] = useState(""); // Currently selected category

  useEffect(() => {
    // Fetch all categories
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("category");
        setCategories(res.data); // Assuming categories have `id` and `name`
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    
    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);

    // Filter products locally
    if (categoryId === "") {
      setFilteredProducts(allProducts); // Show all products if no category is selected
    } else {
      const filtered = allProducts.filter(
        (product) => product.category_id === categoryId,
      );
      setFilteredProducts(filtered);
    }
  };

  // if (filteredProducts.length === 0 && allProducts.length === 0) {
  //   return <Loading />;
  // }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F2E5]">
      {/* Breadcrumb */}
      <Breadcrumbs separator={<FaChevronRight />} className="p-4">
        <Link to="/">Trang chủ</Link>
        <Typography>Danh mục</Typography>
      </Breadcrumbs>

      {/* Filter Section */}
      <div className="mb-6 w-full rounded-md p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Bộ lọc</h2>
          <FormControl variant="outlined" className="w-1/4">
            <InputLabel id="category-filter-label">Chọn danh mục</InputLabel>
            <Select
              labelId="category-filter-label"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              label="Chọn danh mục"
            >
              <MenuItem value="">Tất cả sản phẩm</MenuItem>
              {categories.map((category: any) => (
                <MenuItem
                  key={category.category_id}
                  value={category.category_id}
                >
                  {category.category_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-grow">
        <h2 className="ml-4 text-2xl font-bold">
          {selectedCategory
            ? categories.find(
                (category) => category.category_id === selectedCategory,
              )?.category_name || "Danh mục"
            : "Tất cả sản phẩm"}
        </h2>
        <div className="mx-auto grid w-full grid-cols-4 gap-1 p-2">
          {filteredProducts.length === 0
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={300}
                  height={452}
                />
              ))
            : filteredProducts.map((product) => (
                <ProductCard key={product.product_id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
