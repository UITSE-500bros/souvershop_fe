import {
    Box,
    Breadcrumbs,
    Skeleton,
    Tab,
    Tabs
} from "@mui/material";

function ProductDetailSkeleton() {
  return (
    <div className="flex flex-col px-[80px]">
      {/* Breadcrumbs */}
      <Breadcrumbs>
        <Skeleton variant="text" width={100} height={24} />
        <Skeleton variant="text" width={150} height={24} />
        <Skeleton variant="text" width={200} height={24} />
      </Breadcrumbs>

      {/* Product Detail */}
      <div className="mt-10 flex w-full flex-row items-center justify-center">
        {/* Image Slider Skeleton */}
        <div className="h-[530px] w-[152px]">
          <Skeleton variant="rectangular" width={152} height={530} />
        </div>

        <Skeleton
          variant="rectangular"
          className="ml-3 h-[530px] w-[444px] rounded-[20px]"
        />

        {/* Product Info Skeleton */}
        <div className="ml-10 flex h-[530px] w-[590px] flex-col gap-4">
          <Skeleton variant="text" width={400} height={48} />
          <Skeleton variant="text" width={200} height={24} />

          {/* Price */}
          <div className="flex flex-row items-center justify-start gap-4">
            <Skeleton variant="text" width={150} height={40} />
            <Skeleton variant="text" width={100} height={40} />
            <Skeleton
              variant="rectangular"
              width={50}
              height={31}
              style={{ borderRadius: "16px" }}
            />
          </div>

          {/* Quantity & Add to Cart */}
          <div className="mt-auto flex items-center justify-center">
            <Skeleton
              variant="rectangular"
              width={170}
              height={52}
              style={{ borderRadius: "31px" }}
            />
            <Skeleton
              variant="rectangular"
              width={400}
              height={52}
              style={{ borderRadius: "20px", marginLeft: "20px" }}
            />
          </div>
        </div>
      </div>

      {/* Product Detail Tabs Skeleton */}
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
          value={0}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="fullWidth"
        >
          <Tab label={<Skeleton variant="text" width={120} />} />
          <Tab label={<Skeleton variant="text" width={160} />} />
        </Tabs>

        <Box sx={{ p: 3, width: "100%" }}>
          <Skeleton variant="rectangular" width="100%" height={200} />
        </Box>
      </Box>
    </div>
  );
}

export default ProductDetailSkeleton;
