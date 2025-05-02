"use client";

import { useProductsByID } from "@/lib/hooks/queries/useProductsByID";
import { formatRating } from "@/lib/utils";
import { RatingStars, Accordion, ErrorMessage } from "@/components/uis";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";
import BuyButton from "./BuyButton";

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

  return (
    <section className="rounded-sm bg-white lg:grid lg:grid-cols-[60%_40%]">
      <div className="flex items-center justify-center gap-1 py-7">
        <p className="text-sm">{ratingFormatted}</p>
        <RatingStars rating={rating} />
      </div>
      <h1 className="text-center text-lg lg:py-7">{data?.title}</h1>

      <ProductImage src={data.images[0]} alt={data.title} />
      <ProductInfo discount={discountPercentage} stock={data.stock} />
      <ProductPrice discount={discountPercentage} price={price} />

      <div className="col-start-2 mb-[50px] flex gap-3 p-4 lg:flex-col">
        <AddToCartButton product={data} />
        <BuyButton />
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
