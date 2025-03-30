"use client";

import { useProductsByID } from "@/lib/hooks/queries/useProductsByID";
import { formatRating } from "@/lib/utils/formatRating";
import { CalculateOriginalPrice } from "@/lib/utils/calculateOriginalPrice";
import { formatPrice } from "@/lib/utils/formatPrice";
import Image from "next/image";
import RatingStars from "@/components/UI/RatingStars";
import Accordion from "@/components/UI/Accordion";

export default function ProductDetails({ productID }: { productID: string }) {
  const { data, isLoading } = useProductsByID(productID);
  const { rating = 0, discountPercentage = 0, price = 0 } = data || {};

  const ratingFormatted = formatRating(rating);
  const discount = Math.floor(discountPercentage);
  const priceFormatted = formatPrice(price);
  const originalPrice = formatPrice(CalculateOriginalPrice(price, discount));

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="rounded-sm bg-white">
      <div className="flex items-center justify-center gap-1 py-7">
        <p className="text-sm">{ratingFormatted}</p>
        <RatingStars rating={rating} />
      </div>
      <h1 className="text-center text-lg">{data?.title}</h1>
      <div className="relative m-auto h-[228px] max-w-[200px] md:h-[270px] md:max-w-[300px]">
        {data && (
          <Image
            src={data?.images[0]}
            className="object-contain pb-7"
            fill
            priority
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
            alt={data?.title}
          />
        )}
      </div>
      <div className="flex divide-x-[1px] border-y py-3 text-center">
        <div className="flex-1">
          <p>Discount: </p>
          <p>{discount}%</p>
        </div>
        <div className="flex-1">
          <p>Remaining: </p>
          <p>{data?.stock}</p>
        </div>
      </div>
      <div className="p-5">
        {discount > 0 && (
          <p className="text-sm text-[#7F858D] line-through">{originalPrice}</p>
        )}
        <p className="text-2xl">{priceFormatted}</p>
      </div>
      <div className="mb-[50px] flex gap-3 p-4">
        <button className="flex-1 cursor-pointer rounded-md bg-[#81B29A] p-[9px] font-semibold">
          BUY
        </button>
        <button className="flex-1 cursor-pointer rounded-md bg-[#F2CC8F] p-[9px] font-semibold">
          ADD TO CART
        </button>
      </div>
      <div className="divide-y-2">
        <Accordion title="description">
          <p>{data?.description}</p>
        </Accordion>
        <Accordion title="brand">
          <p>{data?.brand || "No brand"}</p>
        </Accordion>
        <Accordion title="dimensions">
          <p>Width: {data?.dimensions.width}</p>
          <p>Height: {data?.dimensions.height}</p>
          <p>Depth: {data?.dimensions.depth}</p>
        </Accordion>
        <Accordion title="warranty">
          <p>{data?.warrantyInformation}</p>
        </Accordion>
      </div>
    </section>
  );
}
