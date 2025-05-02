type ProductInfoProps = {
  discount: number;
  stock: number;
};

export default function ProductInfo({ discount, stock }: ProductInfoProps) {
  const discountFormatted = Math.floor(discount);

  return (
    <div className="flex divide-x-[1px] border-y py-3 text-center">
      <div className="flex-1">
        <p>Discount: </p>
        <p>{discountFormatted}%</p>
      </div>
      <div className="flex-1">
        <p>Remaining: </p>
        <p>{stock}</p>
      </div>
    </div>
  );
}
