import { TopReview } from "@/models/TopReview";
import { Button, Rating } from "@mui/material";
import axios from "axios";


type ReviewProps = {
  Reviews: TopReview[];
};

export default function RatingReview({ Reviews }: ReviewProps) {
  // const handleWriteReview = () => {
  //   axios.post("review", {
  //     product_id: Reviews[0].product_id,
  //     review_text: "Good product",
  //     rating: 5,
  //   });
  // }
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="font-['Inter'] text-2xl font-bold text-black">
          All Reviews({Reviews.length})
        </div>
        <Button
        // onClick={handleWriteReview}
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#000",
            color: "#ffff",
            borderRadius: "20px",
            width: "200px",
            height: "52px",
            marginLeft: "20px",
          }}
        >
          Write a Review
        </Button>
      </div>
      <div className="flex flex-wrap">
        {Reviews.map((review) => (
          <div key={review.product_id} className="w-1/2 p-2">
            <div className="flex h-[241.58px] w-[610px] flex-col items-start justify-start rounded-[20px] border border-black/10 px-8 py-7">
              <Rating name="read-only" value={review.rating} readOnly />
              <div className="font-['Inter'] text-xl font-bold text-black">
                {review.user_name}
              </div>
              <span className="text-base font-thin leading-snug">
                {review.review_text}
              </span>
              <div className="w-[546px] font-['Inter'] text-base font-medium leading-snug text-black/60">
                {review.create_date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
