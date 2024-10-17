import Header from "../components/Header/Header";
import MainBanner from "../assets/TranhDongHo.png";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>

      <div className="relative h-[665px] w-full">
        <img
          src={MainBanner}
          alt="home-banner"
          className="absolute left-0 top-0 h-[550px] w-full"
        />
        <div className="absolute left-[53px] top-[48px] flex w-[635px] h-60 text-black font-[700] text-6xl">
          Khám phá những xu hướng mới nhất
        </div>
        <Button
        variant="contained"
        sx={{
          width:210,
          height:50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default Home;
