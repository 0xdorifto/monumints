"use client";

import { Monument } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import DetailedCard from "./detailedCard";

interface CardProps {
  monument: Monument;
}

const Card: React.FC<CardProps> = ({ monument }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      className="border-2 rounded-lg m-4"
      onClick={() => setShowDetail(true)}
    >
      <Image src={monument.image_url} alt="monument" width={300} height={300} />
      <h2>{monument.name}</h2>
      <p>{monument.poem}</p>
      {showDetail && (
        <DetailedCard
          monument={monument}
          onClose={() => setShowDetail(false)}
        />
      )}
    </div>
  );
};

export default Card;
