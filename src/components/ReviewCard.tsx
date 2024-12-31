import React from "react";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
    name: string;      
    review: string;   
    rating: number;   
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, rating }) => {
    return (
        <div className="review-card border rounded-lg shadow-lg p-6 my-6 bg-white w-full max-w-xl mx-auto text-center"> {/* Tăng padding, max-width, căn giữa */}
            <h3 className="font-bold text-xl mb-4">{name}</h3> 
            <p className="text-xl mb-6">{review}</p> 
            <div className="flex justify-center items-center gap-2"> 
                {[...Array(5)].map((_, index) => (
                    <FaStar 
                        key={index} 
                        className={index < rating ? "text-yellow-500" : "text-gray-300"} 
                        size={20} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewCard;
