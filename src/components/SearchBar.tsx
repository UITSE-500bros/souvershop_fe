
import { Box, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={12}
      px={2}
      py={1}
      bgcolor="#efefef"
      borderRadius="62px"
      overflow="hidden"
      width={300}
    >
      <SearchIcon style={{ width: 24, height: 24 }} />
      <Typography
        variant="body1"
        color="textSecondary"
        style={{ fontFamily: 'Inter-Regular', marginTop: '-1px' }}
      >
        Tìm sản phẩm
      </Typography>
    </Box>
  );
};

export default SearchBar;
