import Image from "next/image";
import bigSale from "@/public/imgs/banner-1.jpeg";
import cyberMonday from "@/public/imgs/banner-2.jpeg";
import SimpleSlider from "@/components/ui/SimpleSlider";

const bannerImages = [bigSale, cyberMonday];

export default function HeaderBanner() {
  return (
    <section className="mb-4">
      <SimpleSlider>
        {bannerImages.map((img, i) => (
          <div
            key={i}
            className="relative h-[200px] w-full md:h-[300px] lg:h-[400px]"
          >
            <Image
              className="object-cover object-top"
              src={img}
              alt="banner image"
              fill
              priority
            />
          </div>
        ))}
      </SimpleSlider>
    </section>
  );
}
