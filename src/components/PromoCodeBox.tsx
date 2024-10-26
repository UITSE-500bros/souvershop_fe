import { Box, Typography, InputBase, Button } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 

const PromoCodeBox = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}> 
      <Box display="flex" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          px={2}
          py={1}
          bgcolor="#efefef"
          borderRadius="62px"
          overflow="hidden"
          width={326}
          height={48}
        >
          <LocalOfferIcon style={{ width: 24, height: 24, color: 'gray' }} />
          <Typography
            variant="body1"
            color="textSecondary"
            style={{
              fontFamily: 'Inter-Regular'
            }}
          >
          </Typography>
          <InputBase
            placeholder="Enter promo code"
            style={{
              width: '100%',
              height: '100%',
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: '#efefef'
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '62px',
            padding: '10px 20px',
            marginLeft: '12px',
            width: '119px',
            height: '48px',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Apply
        </Button>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '30px',  
          padding: '10px 20px',
          width: '457px',  
          height: '60px',  
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px', 
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Go to Checkout
        <ArrowForwardIcon style={{ width: 24, height: 24 }} /> {/* Mũi tên */}
      </Button>
    </Box>
  );
};

export default PromoCodeBox;
