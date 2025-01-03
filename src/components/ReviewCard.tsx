import React from "react";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
    name: string;
    review: string;
    rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, rating }) => {
    return (
        <div className="review-card border rounded-lg shadow-lg p-6 bg-white w-full max-w-sm mx-auto text-center">
            <h3 className="font-bold text-xl mb-4">{name}</h3>
            <p className="text-lg mb-6 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-2">
                {review}
            </p>
            <div className="flex justify-center items-center gap-1">
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
