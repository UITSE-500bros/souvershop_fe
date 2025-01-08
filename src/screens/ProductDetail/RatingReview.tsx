import { Button, Rating } from "@mui/material";

export type ReviewFrameProps = {
  content: string;
  name: string;
  date: string;
  rating: number;
};
type ReviewProps = {
  Reviews: ReviewFrameProps[];
};

export default function RatingReview({ Reviews }: ReviewProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="font-['Inter'] text-2xl font-bold text-black">
          All Reviews(413)
        </div>
        <Button
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
          <div key={review.content} className="w-1/2 p-2">
            <div className="flex h-[241.58px] w-[610px] flex-col items-start justify-start rounded-[20px] border border-black/10 px-8 py-7">
              <Rating name="read-only" value={4} readOnly />
              <div className="font-['Inter'] text-xl font-bold text-black">
                Samantha D.
              </div>
              <span className="text-base font-thin leading-snug">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                unde blanditiis perspiciatis sunt a harum assumenda officia
                officiis veritatis ea fugit, ab iusto quaerat ex ratione id
                nobis dolorum cupiditate?
              </span>
              <div className="w-[546px] font-['Inter'] text-base font-medium leading-snug text-black/60">
                Posted on August 16, 2023
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
