import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListIcon from "@mui/icons-material/List";
import axiosInstance from "@/services/AxiosInstance";


const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
useEffect(()=>{
  const fetchCategories = async () => {
    const res = await axiosInstance.get("/category");
    setCategories(res.data);
  }
  fetchCategories();
},[])
console.log(categories)

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mr-4">
      <Link
        className="font-base w-full text-center text-base text-black"
        to={"/category"}
        onMouseEnter={handleMouseOver}
      >
        <ListIcon />
        <span className="ml-1">Danh mục</span>
      </Link>
      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/category">Tất cả</Link>
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.category_id} onClick={handleClose}>
            <Link to={`/category/${category.category_id}`}>
              {category.category_name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CategoryMenu;
