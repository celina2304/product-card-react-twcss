import React from "react";
import { ProductCardProps } from "./ProductCard.d"; // import interface defined inside ProdctCard.d.ts

const ProductCard: React.FC<ProductCardProps> = ({
  cardId,
  imageUrl,
  imageAlt,
  heading,
  description,
  price,
  handleCardClick,
}) => {
  return (
    <div
      id={cardId}
      className="max-w-sm mx-auto rounded overflow-hidden shadow-custom"
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={imageAlt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 hover:cursor-default">
          {heading}
        </div>
        {description && (
          <p className="text-gray-700 text-base hover:cursor-default">
            {description}
          </p>
        )}
        <p className="text-gray-900 font-semibold mt-2 hover:cursor-default">
          Rs. {price.toFixed(2)}
        </p>
      </div>
      <div className="px-6 pb-4 flex items-center justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCardClick}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
