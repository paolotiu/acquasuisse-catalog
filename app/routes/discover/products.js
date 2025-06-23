// reference: import { newProducts } from "./products"; 
// 2 things: 1) filter does not work, 2) cannot click on items yet
// useeffect from React

export const bestSellers = [
  {
    id: 1,
    name: "Army",
    description: "AROMATIC, WOODY, CITRUS, LAVENDER",
    price: "PHP 594.00",
    image: "/images/ARMY.png",
    tags: ["bestseller"], // NEEDED FOR FILTERING FUNCTION
  },
  {
    id: 3,
    name: "Cracko",
    description: "WOODY, FRUITY, EARTHY, WARM, SPICY",
    price: "PHP 594.00",
    image: "/images/CRACKO.png", 
    tags: ["bestseller"],
  },
  {
    // HAVE TO DOUBLE CHECK PRICE HERE
    id: 5,
    name: "Knight",
    description: "WOODY, FRUITY, EARTHY, WARM, SPICY",
    price: "PHP 504.00",
    image: "/images/KNIGHT.png", 
    tags: ["bestseller"],
  },
  {
    id: 6,
    name: "Purple Quartz",
    description: "POWDERY, IRIS, VANILLA, WOODY, ALMOND, FLORAL, VIOLET, GREEN, EARTHY, CITRUS",
    price: "PHP 504.00",
    image: "/images/PURPLE-QUARTZ.png", 
    tags: ["bestseller"],
  },
  {
    id: 4,
    name: "Freesia",
    description: "FLORAL, FRUITY, SWEET, ROSE, AQUATIC, MUSKY, FRESH, PATCHOULI, GREEN, POWDERY",
    price: "PHP 504.00",
    image: "/images/FREESIA.png", 
    tags: ["bestseller"],
  },
  {
    id: 2,
    name: "Black Luxe",
    description: "SWEET, FRUITY, VANILLA, ROSE",
    price: "PHP 504.00",
    image: "/images/BLACK-LUXE.png", 
    tags: ["bestseller"],
  },
];

// new products
export const newProducts = [
  {
    id: 56,
    name: "New Product Placeholder",
    description: "AMBER, MUSKY, FRESH, SPICY",
    price: "PHP 990.00",
    image: "/images/PLACEHOLDER.png",
    tags: ["new"],
  },
  {
    id: 57,
    name: "Ocean Bloom",
    description: "AQUATIC, FLORAL, FRESH, CLEAN",
    price: "PHP 1,200.00",
    image: "/images/PLACEHOLDER.png",
    tags: ["new"],
  },
  
];
