export default function DiscountPercentage({ discount }: { discount: number }) {
  return (
    <div className="w-fit rounded-md bg-[#EBEBEB] px-[2px] py-[1px]">
      <p className="text-center text-[10px]">-{discount}%</p>
    </div>
  );
}
