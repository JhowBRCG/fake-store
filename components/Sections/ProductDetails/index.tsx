"use client";

import { useProductsByID } from "@/lib/hooks/queries/useProductsByID";
import { formatRating, calculateOriginalPrice, formatPrice } from "@/lib/utils";
import { RatingStars, Accordion, ErrorMessage } from "@/components/ui";
import { AddToCartButton } from "@/components/products";
import ProductImage from "./ProductImage";

export default function ProductDetails({ productID }: { productID: string }) {
  const { data, isLoading, isError } = useProductsByID(productID);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data)
    return (
      <ErrorMessage
        message="NO PRODUCT FOUND :/"
        goHome={true}
        className="mt-4 p-5"
      />
    );

  const { rating = 0, discountPercentage = 0, price = 0 } = data ?? {};

  const ratingFormatted = formatRating(rating);
  const discount = Math.floor(discountPercentage);
  const priceFormatted = formatPrice(price);
  const originalPrice = formatPrice(calculateOriginalPrice(price, discount));

  return (
    <section className="rounded-sm bg-white lg:grid lg:grid-cols-[60%_40%]">
      <div className="flex items-center justify-center gap-1 py-7">
        <p className="text-sm">{ratingFormatted}</p>
        <RatingStars rating={rating} />
      </div>
      <h1 className="text-center text-lg lg:py-7">{data?.title}</h1>

      <ProductImage src={data.images[0]} alt={data.title} />

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

      <div className="p-5 lg:col-start-2">
        {discount > 0 && (
          <p className="text-sm text-[#7F858D] line-through">{originalPrice}</p>
        )}
        <p className="text-2xl">{priceFormatted}</p>
      </div>

      <div className="col-start-2 mb-[50px] flex gap-3 p-4 lg:flex-col">
        <AddToCartButton product={data} />
        <button className="w-full cursor-pointer rounded-md bg-[#81B29A] p-[9px] font-semibold">
          BUY
        </button>
      </div>

      <div className="divide-y-2 lg:col-span-full">
        <Accordion title="description">
          <p>{data?.description}</p>
        </Accordion>
        <Accordion title="brand">
          <p>{data?.brand ?? "No brand"}</p>
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
