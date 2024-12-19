import http from "@/lib/Http";
import { Category } from "@/models/Category";
import ListIcon from "@mui/icons-material/List";
import { Menu, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await http.get("category");
      

        if (res) {
          setCategories(res);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const categoryNames = categories.map((category) => category.category_name);
  categoryNames.unshift("Tất cả");

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
        onClose={() => handleClose()}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        {categoryNames.map((category) => (
          <MenuItem key={category} onClick={handleClose}>
            <Link to={`/category/${category}`}>{category}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default CategoryMenu;
