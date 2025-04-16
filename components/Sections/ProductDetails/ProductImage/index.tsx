import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
};

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <Image
      className="mx-auto h-[228px] object-contain pb-7 md:w-[270px] lg:row-span-4 lg:h-[500px] lg:w-[500px]"
      src={src ?? ""}
      alt={alt}
      width={400}
      height={400}
      priority
    />
  );
}
