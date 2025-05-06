import { Accordion } from "@/components/ui";
import ProductInfo from "../ProductInfo";
import ProductPrice from "../ProductPrice";
import AddToCartButton from "../AddToCartButton";
import BuyButton from "../BuyButton";

export default function LoadingSkeleton() {
  return (
    <section className="rounded-sm bg-white lg:grid lg:grid-cols-[60%_40%]">
      <div className="flex items-center justify-center gap-1 py-7">
        <p className="text-sm"></p>
      </div>
      <h1 className="text-center text-lg lg:py-7"></h1>

      <div className="flex h-[228px] items-center justify-center pb-7 md:w-[270px] lg:row-span-4 lg:h-[500px] lg:w-[500px]">
        <p className="">loading...</p>
      </div>
      <ProductInfo discount={0} stock={0} />
      <ProductPrice discount={0} price={0} />

      <div className="col-start-2 mb-[50px] flex gap-3 p-4 lg:flex-col">
        <AddToCartButton />
        <BuyButton />
      </div>

      <div className="divide-y-2 lg:col-span-full">
        <Accordion title="description">
          <p></p>
        </Accordion>
        <Accordion title="brand">
          <p></p>
        </Accordion>
        <Accordion title="dimensions">
          <p>Width: </p>
          <p>Height: </p>
          <p>Depth: </p>
        </Accordion>
        <Accordion title="warranty">
          <p></p>
        </Accordion>
      </div>
    </section>
  );
}
