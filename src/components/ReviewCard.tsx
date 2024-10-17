import React from "react";
import { FaStar } from "react-icons/fa";
interface ReviewCardProps {
    name: string;      
    review: string;   
    rating: number;   
  }
  
  
  const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, rating }) => {
    return (
        <div className="review-card border rounded-lg shadow-md p-4 my-4 bg-white w-full max-w-lg">
      <h3 className="font-bold">{name}</h3>
      <p>{review}</p>
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"} />
        ))}
      </div>
    </div>
    );
  };
  
  export default ReviewCard;