import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import axiosInstance from "@/services/AxiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface Product {
  product_id: string;
  product_name: string;
  product_import_price: number;
  product_quantity: number;
}

export default function AddOrder() {
  const [products, setProducts] = useState<Product[]>([]); // List of products
  const [open, setOpen] = useState(false); // Dialog visibility
  const [selectedProductId, setSelectedProductId] = useState<string>(""); // ID of the selected product
  const [quantity, setQuantity] = useState<number | string>("1"); // Quantity for the selected product
  const [data, setData] = useState<Product[]>([]); // Data fetched from API
  const [totalAmount, setTotalAmount] = useState<number>(0); // Total amount of the order

  const nav = useNavigate();
  // Fetch product data from API
  useEffect(() => {
    axiosInstance
      .get("product/lookup")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Handle open/close dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedProductId("");
    setQuantity("");
  };
  const handleAddOrder = () => {
    if (products.length === 0) {
      toast.error("Không có sản phẩm nào được thêm");
      return;
    }

    let totalAmount = products.reduce(
      (total, product) =>
        total + product.product_import_price * product.product_quantity,
      0,
    );

    axiosInstance
      .post("grn", {
        grn_total: totalAmount,
        product_list: products.map((product) => ({
          product_id: product.product_id,
          product_quantity: product.product_quantity,
          product_total:
            product.product_import_price * product.product_quantity,
        })),
      })
      .then((res) => {
        console.log(res);
        setProducts([]);
      })
      .then(() => {
        toast.success("Thêm phiếu nhập hàng thành công");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Add product to the list
  const handleAddProduct = () => {
    const selectedProduct = data.find(
      (product) => product.product_id === selectedProductId,
    );

    if (selectedProduct && quantity) {
      const newProduct: Product = {
        product_id: selectedProduct.product_id,
        product_name: selectedProduct.product_name,
        product_import_price: selectedProduct.product_import_price,
        product_quantity: Number(quantity),
      };

      setProducts([...products, newProduct]);
      handleClose();
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-4 text-2xl font-bold">Quản lý phiếu nhập hàng</h1>

      {/* Button to open form */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Thêm sản phẩm
      </Button>
      {/* Button to add order */}
      <Button
        onClick={handleAddOrder}
        variant="contained"
        color="secondary"
        sx={{ marginLeft: "10px" }}
      >
        Thêm phiếu nhập
      </Button>

      {/* Button to navigate back to orders list */}
      <Button
        variant="contained"
        color="success"
        onClick={() => nav("/admin/orders")}
        sx={{ marginLeft: "10px" }}
      >
        Trở về danh sách đơn hàng
      </Button>

      {/* Table to display products */}
      <div className="mt-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Giá nhập (VNĐ)</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Thành tiền (VNĐ)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.product_id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.product_name}</TableCell>
                <TableCell>
                  {product.product_import_price.toLocaleString()}
                </TableCell>
                <TableCell>{product.product_quantity}</TableCell>
                <TableCell>
                  {(
                    product.product_import_price * product.product_quantity
                  ).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {products.length === 0 && (
          <p className="mt-4 text-center text-gray-500">
            Chưa có sản phẩm nào được thêm.
          </p>
        )}
        {/* Display total amount */}
        <div className="mt-4 text-right">
          <h2 className="text-xl font-bold">
            Tổng cộng:{" "}
            {products
              .reduce(
                (total, product) =>
                  total +
                  product.product_import_price * product.product_quantity,
                0,
              )
              .toLocaleString()}{" "}
            VNĐ
          </h2>
        </div>
      </div>

      {/* Dialog for adding a new product */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thêm sản phẩm</DialogTitle>
        <DialogContent>
          {/* Select product */}
          <FormControl fullWidth margin="dense">
            <InputLabel id="product-select-label">Tên sản phẩm</InputLabel>
            <Select
              labelId="product-select-label"
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
            >
              {data.map((product) => (
                <MenuItem key={product.product_id} value={product.product_id}>
                  {product.product_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Display selected product's import price */}
          <TextField
            margin="dense"
            label="Giá nhập (VNĐ)"
            type="text"
            fullWidth
            disabled
            value={
              data
                .find((product) => product.product_id === selectedProductId)
                ?.product_import_price?.toLocaleString() || ""
            }
          />

          {/* Quantity input */}
          <TextField
            margin="dense"
            label="Số lượng"
            type="number"
            fullWidth
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > 0) {
                setQuantity(value);
              }
            }}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Hủy
          </Button>
          <Button onClick={handleAddProduct} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
