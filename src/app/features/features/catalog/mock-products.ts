import { Product } from "../../../core/models/core/models/product.model";




export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise-canceling feature.',
    price: 3199.99,
    images: [
      'assets/images/headphones_1.jpg',
      'assets/images/headphones_2.jpg',
      'assets/images/headphones_3.jpg',
      'assets/images/headphones_4.jpg'
    ],
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smartwatch',
    description: 'Stay connected with this sleek smartwatch Memory storage capacity	4 GB,Battery capacity	400.',
    price: 2499.99,
    images: [
      'assets/images/smartwatch_1.png',
      'assets/images/smartwatch_2.png',
      'assets/images/smartwatch_3.png',
      'assets/images/smartwatch_4.jpg'
    ],
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Running Shoes',
    description: 'Lightweight running shoes designed for comfort.',
    price: 2599.99,
    images: [
      'assets/images/shoes_1.webp',
      'assets/images/shoes_2.webp',
      'assets/images/shoes_3.webp',
      'assets/images/shoes_4.webp'

    ],
    category: 'Sportswear'
  },
  {
    id: 4,
    name: 'Backpack',
    description: 'Durable backpack for daily commute or travel.',
    price: 1999.99,
    images: [
      'assets/images/backpack_11.webp',
      'assets/images/backpack_12.webp',
      'assets/images/backpack_13.webp',
      'assets/images/backpack_14.webp'
    ],
    category: 'Accessories'
  }
];
