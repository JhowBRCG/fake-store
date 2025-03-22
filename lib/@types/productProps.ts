export type productProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
};

export type apiResponse = {
  products: productProps[];
  total: number;
};
