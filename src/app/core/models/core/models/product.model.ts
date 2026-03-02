export interface Product {
  title: any;
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  rating: { rate: number; count: number };
}


