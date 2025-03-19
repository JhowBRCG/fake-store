import Link from "next/link";
import ProductCard from "../UI/ProductCard";
import { productProps } from "@/lib/@types/productProps";

type productListProps = {
  products: productProps[];
};

export default function ProductList({ products }: productListProps) {
  return (
    <div className="mt-[20px] grid grid-cols-2 gap-[2px] overflow-hidden rounded-lg md:grid-cols-3">
      {products?.map((product: productProps) => (
        <Link href="" key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
