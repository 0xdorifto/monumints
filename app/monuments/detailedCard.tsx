"use client";

import { Monument } from "@prisma/client";
import Image from "next/image";

interface DetailedCardProps {
  monument: Monument;
  onClose: () => void;
}

const DetailedCard: React.FC<DetailedCardProps> = ({ monument, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-0 right-0 mt-2 mr-2 text-black text-lg leading-none font-semibold py-1 px-1 bg-transparent rounded hover:bg-gray-200"
          >
            &times;
          </button>
          <Image
            src={monument.image_url}
            alt="monument"
            width={300}
            height={300}
          />
          <h2>{monument.name}</h2>
          <p>
            Location: {monument.city}, {monument.country}
          </p>
          <p>Year: {monument.year}</p>
          <p>Description: {monument.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
