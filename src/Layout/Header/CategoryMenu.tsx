import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";

function CategoryMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement>) => {
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
        onClose={() => handleClose()}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to={"/category"}>
            Christmas
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={"/category"}>
            Birthday
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={"/category"}>
            Wedding
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={"/category"}>
            Anniversary
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={"/category"}>
            Graduation
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default CategoryMenu;
