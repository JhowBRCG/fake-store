import { formatPrice, calculateOriginalPrice } from "@/lib/utils";

type ProductPriceProps = {
  discount: number;
  price: number;
};

export default function ProductPrice({ discount, price }: ProductPriceProps) {
  const discountFormatted = Math.floor(discount);
  const priceFormatted = formatPrice(price);
  const originalPrice = formatPrice(
    calculateOriginalPrice(price, discountFormatted),
  );

  return (
    <div className="p-5 lg:col-start-2">
      {discountFormatted > 0 && (
        <p
          className="text-sm text-[#7F858D] line-through"
          data-testid="original-price"
        >
          {originalPrice}
        </p>
      )}
      <p className="text-2xl">{priceFormatted}</p>
    </div>
  );
}
