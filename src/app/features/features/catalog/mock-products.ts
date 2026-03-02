import { Product } from '../../../core/models/core/models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise-canceling feature.',
    price: 3199.99,
    category: 'Electronics',
    image: 'assets/images/headphones_1.jpg',
    images: [
      'assets/images/headphones_1.jpg',
      'assets/images/headphones_2.jpg',
      'assets/images/headphones_3.jpg',
      'assets/images/headphones_4.jpg'
    ],
    rating: { rate: 4.5, count: 120 },
    name: ''
  },
  {
    id: 2,
    title: 'Smartwatch',
    description: 'Stay connected with this sleek smartwatch.',
    price: 2499.99,
    category: 'Electronics',
    image: 'assets/images/smartwatch_1.png',
    images: [
      'assets/images/smartwatch_1.png',
      'assets/images/smartwatch_2.png',
      'assets/images/smartwatch_3.png',
      'assets/images/smartwatch_4.jpg'
    ],
    rating: { rate: 4.2, count: 89 },
    name: ''
  },
  {
    id: 3,
    title: 'Running Shoes',
    description: 'Lightweight running shoes designed for comfort.',
    price: 2599.99,
    category: 'Sportswear',
    image: 'assets/images/shoes_1.webp',
    images: [
      'assets/images/shoes_1.webp',
      'assets/images/shoes_2.webp',
      'assets/images/shoes_3.webp',
      'assets/images/shoes_4.webp'
    ],
    rating: { rate: 4.7, count: 230 },
    name: ''
  },
  {
    id: 4,
    title: 'Backpack',
    description: 'Durable backpack for daily commute or travel.',
    price: 1999.99,
    category: 'Accessories',
    image: 'assets/images/backpack_11.webp',
    images: [
      'assets/images/backpack_11.webp',
      'assets/images/backpack_12.webp',
      'assets/images/backpack_13.webp',
      'assets/images/backpack_14.webp'
    ],
    rating: { rate: 4.1, count: 54 },
    name: ''
  }
];
