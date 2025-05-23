import Link from "next/link";
import ProductCard from "../ProductCard";
import { productProps } from "@/lib/@types/productProps";

type productListProps = {
  products: productProps[];
};

export default function ProductList({ products }: productListProps) {
  return (
    <div className="mt-[20px] grid grid-cols-2 gap-[2px] overflow-hidden rounded-lg md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
      {products?.map((product: productProps) => (
        <Link href={`/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
