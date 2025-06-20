// reference: import { newProducts } from "./products"; 
// 2 things: 1) filter does not work, 2) cannot click on items yet
// useeffect from React

export const men = [
  {
    id: 7,
    name: "Adrenaline",
    description: "CITRUS, WARM SPICY, COFFEE, WOODY",
    price: "PHP 660.00-1,070.00",
    image: "/images/ADRENALINE.png",
    tags: ["men"], // NEEDED FOR FILTERING FUNCTION
  },
  {
    id: 8,
    name: "Aquatic",
    description: "MARINE, FRESH SPICY, AMBER, WOODY",
    price: "PHP 660.00-1,070.00",
    image: "/images/AQUATIC.png", 
    tags: ["men"],
  },
  {
    // HAVE TO DOUBLE CHECK PRICE HERE
    id: 1,
    name: "Army",
    description: "AROMATIC, WOODY, CITRUS, LAVENDER",
    price: "PHP 660.00-1,070.00",
    image: "/images/ARMY.png", 
    tags: ["men"],
  },
  {
    id: 10,
    name: "Carrera",
    description: "FRUITY, VANILLA, CINNAMON, POWDERY, WOODY",
    price: "PHP 660.00-1,070.00",
    image: "/images/CARRERA.png", 
    tags: ["men"],
  },
  {
    id: 11,
    name: "Cavalier",
    description: "CITRUS, AROMATIC, FRESH SPICY, WOODY, FLORAL",
    price: "PHP 660.00-1,070.00",
    image: "/images/CAVALIER.png", 
    tags: ["men"],
  },
  {
    id: 12,
    name: "Cool",
    description: "AROMATIC, LAVENDER, WOODY,",
    price: "PHP 660.00-1,070.00",
    image: "/images/COOL.png", 
    tags: ["men"],
  },
    {
        id: 3,
        name: "Cracko",
        description: "WOODY, FRUITY, EARTHY, WARM, SPICY",
        price: "PHP 660.00-1,070.00",
        image: "/images/CRACKO.png", 
        tags: ["men"]
    },
        {
        id: 13,
        name: "Deep Blue",
        description: "AROMATIC, AQUATIC, OZONIC, CITRUS, EARTHY",
        price: "PHP 660.00-1,070.00",
        image:"/images/DEEP-BLUE.png", 
        tags: ["men"]
    },
        {
        id: 14,
        name: "Game",
        description: "AQUATIC, CITRUS, FRESH SPICY, FRUITY, WOODY",
        price: "PHP 660.00-1,070.00",
        image: "/images/GAME.png", 
        tags: ["men"]
    },
        {
        id: 15,
        name: "Invincible",
        description: "CITRUS, MARINE, FRESH SPICY, WOODY, AMBER",
        price: "PHP 660.00-1,070.00",
        image: "/images/INVINCIBLE.png", 
        tags: ["men"]
    },
        {
        id: 5,
        name: "Knight",
        description: "CITRUS, GREEN FRESH, POWDERY, WARM SPICY", 
        price:"PHP 660.00-1,070.00",
        image: "/images/INIGHT.png", 
        tags: ["men"]
    },    {
        id: 17,
        name: "Marine",
        description: "AQUATIC, CITRUS, AROMATIC, MARINE, FRESH SPICY, WOODY", 
        price:"PHP 660.00-1,070.00",
        image: "/images/MARINE.png", 
        tags: ["men"]
    },    {
        id: 18,
        name: "Playtime",
        description: "POWDERY, FRESH SPICY, LEATHER, VANILLA, MUSKY",
        price:"PHP 660.00-1,070.00",
        image: "/images/PLAYTIME.png", 
        tags: ["men"]
    },    {
        id: 19,
        name: "Power",
        description: "AROMATIC, GREEN, SOFT SPICY, ROSE, PATCHOULI",
        price:"PHP 660.00-1,070.00",
        image: "/images/POWER.png", 
        tags: ["men"]
    },
        {
        id: 20,
        name: "Quest",
        description: "CITRUS, VANILLA, FRUITY, FRESH, ROSE, WOODY, POWDERY", 
        price:"PHP 660.00-1,070.00",
        image: "/images/QUEST.png", 
        tags: ["men"]
    },    {
        id: 21,
        name: "Refreshing",
        description: "GREEN, POWDERY, VIOLET, EARTHY, FLORAL", 
        price:"PHP 129.00-560.00",
        image: "/images/REFRESHING.png", 
        tags: ["men"]
    },    {
        id: 22,
        name: "Sex Appeal",
        description: "WOODY, AQUATIC, FRESH SPICY, CHOCOLATE, PATCHOULI", 
        price:"PHP 660.00-1,070.00",
        image: "/images/SEX-APPEAL.png", 
        tags: ["men"]
    },
        {
        id: 23,
        name: "Sporty",
        description: "AROMATIC, FRESH, WOODY, LAVENDER, MARINE",
        price:"PHP 660.00-1,070.00",
        image: "/images/SPORTY.png", 
        tags: ["men"]
    },    {
        id: 24,
        name: "Summertime",
        description: "AROMATIC, SWEET, MUSKY, WOODY, POWDERY",
        price:"PHP 660.00-1,070.00",
        image: "/images/SUMMERTIME.png", 
        tags: ["men"]
    },    {
        id: 25,
        name: "White Armour",
        description: "WOODY, YELLOW FLORAL, FRESH SPICY, LEATHER, SWEET",
        price:"PHP 660.00-1,070.00",
        image: "/images/WHITE-ARMOR.png", 
        tags: ["men"]
    },    {
        id: 16,
        name: "Infinity",
        description: "AROMATIC, CITRUS, SPICY, WOODY, LAVENDER, WHITE FLORAL, HERBAL",
        price:"PHP 660.00-1,070.00",
        image: "/images/INFINITY.png", 
        tags: ["men"]
    },    {
        id: 9,
        name: "Bliss",
        description: "CITRUS, GREEN, AROMATIC, MARINE, WOODY",
        price:"PHP 660.00-1,070.00",
        image: "/images/BLISS.png", 
        tags: ["men"]
    },    {
        id: 58,
        name: "Cupid",
        description: "VANILLA, AROMATIC, GREEN, FRESH SPICY, AMBER, FRUITY, CITRUS, SWEET, WOODY, FRESH",
        price:"PHP 660.00-1,070.00",
        image: "/images/CUPID.png", 
        tags: ["men"]
    },    {
        id: 26,
        name: "Wilde",
        description: "FRESH SPICY, AMBER, CITRUS, AROMATIC, MUSKY, WOODY, LAVENDER, HERBAL, WARM SPICY",
        price:"PHP 660.00-1,070.00",
        image: "/images/WILDE.png", 
        tags: ["men"]
    },
];

// women
export const women = [
     {
        id: 27,
        name: "Always",
        description: "FLORAL, WHITE FLORAL, AQUATIC, FRUITY, TUBEROSE, SWEET, POWDERY, MUSKYWOODY, FRESH, CITRUS",
        price: "PHP 660.00-1,070.00",
        image: "/images/ALWAYS.png",
        tags: [""],
    },
        {
        id: 2,
        name: "Black Luxe",
        description: "SWEET, FRUITY, VANILLA, ROSE",
        price: "PHP 660.00-1,070.00",
        image: "/images/BLACK-LUXE.png",
        tags: [""],
    },    {
        id: 28,
        name: "Blossom",
        description: "FRUITY, SWEET, GREEN, POWDERY, FRESH, WHITE FLORAL",
        price: "PHP 660.00-1,070.00",
        image: "/images/BLOSSOM.png",
        tags: [""],
    },    {
        id: 29,
        name: "Blue Sky",
        description: "CITRUS, WOODY, FRESH, FRUITY, AROMATIC, MUSKY, POWDERY, GREEN",
        price: "PHP 660.00-1,070.00",
        image: "/images/BLUE-SKY.png",
        tags: [""],
    },    {
        id: 30,
        name: "Care Free",
        description: "FRUITY, VANILLA, SWEET, POWDERY, WHITE FLORAL, FRESH, MUSKY, PATCHOULI, AMBER, CITRUS",
        price: "PHP 660.00-1,070.00",
        image: "/images/CAREFREE.png",
        tags: [""],
    },    {
        id: 31,
        name: "Desire",
        description: "GREEN, FRUITY, AQUATIC, OZONIC, FRESH, CITRUS, WHITE FLORAL, FLORAL, FRESH SPICY, WOODY",
        price: "PHP 660.00-1,070.00",
        image: "/images/DESIRE.png",
        tags: [""],
    },
        {
        id: 32,
        name: "Destiny",
        description: "MUSKY, PATCHOULI, POWDERY, WHITE FLORAL, WOODY, SOFT SPICY, EARTHY, VANILLA, WARM SPICY, IRIS",
        price: "PHP 660.00-1,070.00",
        image: "/images/DESTINY.png",
        tags: [""],
    },    {
        id: 33,
        name: "Empress",
        description: "FRUITY, WHITE FLORAL, FRESH, FLORAL, SWEET, POWDERY, OZONIC, AQUATIC, GREEN, YELLOW FLORAL",
        price: "PHP 660.00-1,070.00",
        image: "/images/EMPRESS.png",
        tags: [""],
    },    {
        id: 34,
        name: "Enchanted",
        description: "FRUITY, SWEET, TROPICAL, FRESH, FLORAL, CITRUS, POWDERY",
        price: "PHP 660.00-1,070.00",
        image: "/images/ENCHANTED.png",
        tags: [""],
    },    {
        id: 35,
        name: "Famous",
        description: "FLORAL, HONEY, SWEET, FRUITY, AMBER, POWDERY, SMOKY, WARM SPICY, WHITE FLORAL, LACTONIC",
        price: "PHP 660.00-1,070.00",
        image: "/images/FAMOUS.png",
        tags: [""],
    },    {
        id: 36,
        name: "Fantasy",
        description: "SWEET, FRUITY, TROPICAL, FRESH, CHOCOLATE",
        price: "PHP 660.00-1,070.00",
        image: "/images/FANTASY.png",
        tags: [""],
    },    {
        id: 37,
        name: "Flirt",
        description: "FRUITY, SWEET, VANILLA, FLORAL, FRESH, POWDERY, MUSKY, SOUR, CITRUS",
        price: "PHP 660.00-1,070.00",
        image: "/images/FLIRT.png",
        tags: [""],
    },    {
        id: 38,
        name: "Flower",
        description: "POWDERY, FLORAL, VIOLET, ROSE, AMBER, VANILLA, MUSKY, SWEET, BALSAMIC, WOODY",
        price: "PHP 660.00-1,070.00",
        image: "/images/FLOWER.png",
        tags: [""],
    },    {
        id: 39,
        name: "Freesia",
        description: "FLORAL, FRUITY, SWEET, ROSE, AQUATIC, MUSKY, FRESH, PATCHOULI, GREEN, POWDERY",
        price: "PHP 660.00-1,070.00",
        image: "/images/FREESIA.png",
        tags: [""],
    },    {
        id: 40,
        name: "Glad",
        description: "CITRUS, FLORAL, WHITE FLORAL, SWEET, FRESH SPICY, GREEN",
        price: "PHP 660.00-1,070.00",
        image: "/images/GLAD.png",
        tags: [""],
    },    {
        id: 41,
        name: "Green Tea",
        description: "CITRUS, GREEN, AROMATIC, FRESH SPICY, FRESH",
        price: "PHP 660.00-1,070.00",
        image: "/images/GREEN-TEA.png",
        tags: [""],
    },    {
        id: 42,
        name: "Heaven",
        description: "FRUITY, FRESH, FLORAL, POWDERY, CITRUS, GREEN, FRESH SPICY, WHITE FLORAL, MUSKY, ROSE",
        price: "PHP 660.00-1,070.00",
        image: "/images/HEAVEN.png",
        tags: [""],
    },    {
        id: 44,
        name: "Kitty",
        description: "VANILLA, WHITE FLORAL, SWEET, FRUITY, POWDERY, CITRUS, AQUATIC, AMBER, FRESH, MUSKY",
        price: "PHP 660.00-1,070.00",
        image: "/images/KITTY.png",
        tags: [""],
    },    {
        id: 45,
        name: "Moment",
        description: "FRUITY, WOODY, FLORAL, CITRUS, SOFT SPICY, MUSKY, SOUR, FRESH, TROPICAL",
        price: "PHP 660.00-1,070.00",
        image: "/images/MOMENT.png",
        tags: [""],
    },    {
        id: 46,
        name: "Pink Affection",
        description: "CITRUS, FLORAL, FRUITY, SWEET, VANILLA, TROPICAL, WHITE FLORAL, POWDERY, FRESH",
        price: "PHP 660.00-1,070.00",
        image: "/images/PINK-AFFECTION.png",
        tags: [""],
    },    {
        id: 47,
        name: "Precise",
        description: "FRUITY, SWEET, FRESH, FLORAL, MUSKY, GREEN, TROPICAL, POWDERY",
        price: "PHP 660.00-1,070.00",
        image: "/images/PRECISE.png",
        tags: [""],
    },    {
        id: 6,
        name: "Purple Quartz",
        description: "POWDERY, IRIS, VANILLA, WOODY, ALMOND, FLORAL, VIOLET, GREEN, EARTHY, CITRUS",
        price: "PHP 660.00-1,070.00",
        image: "/images/PURPLE-QUARTZ.png",
        tags: [""],
    },    {
        id: 49,
        name: "Seduction",
        description: "FRUITY, SWEET, WOODY, VANILLA, CITRUS, POWDERY, WHITE FLORAL, RUM",
        price: "PHP 660.00-1,070.00",
        image: "/images/SEDUCTION.png",
        tags: [""],
    },    {
        id: 24,
        name: "Serendipity",
        description: "WARM SPICY, MUSKY, COCONUT, OZONIC, WOODY, AQUATIC, WHITE FLORAL, POWDERY, SWEET, CITRUS",
        price: "PHP 660.00-1,070.00",
        image: "/images/SERENDIPITY.png",
        tags: [""],
    },    {
        id: 50,
        name: "Sexy",
        description: "FLORAL, FRUITY, WOODY, YELLOW FLORAL, SWEET, FRESH, FRESH SPICY, GREEN, HERBAL",
        price: "PHP 660.00-1,070.00",
        image: "/images/SEXY.png",
        tags: [""],
    },    {
        id: 52,
        name: "Stylish",
        description: "FLORAL, FRESH, GREEN",
        price: "PHP 660.00-1,070.00",
        image: "/images/STYLISH.png",
        tags: [""],
    },    {
        id: 53,
        name: "Sundown",
        description: "TROPICAL, FRUITY, SWEET",
        price: "PHP 660.00-1,070.00",
        image: "/images/SUNDOWN.png",
        tags: [""],
    },    {
        id: 54,
        name: "Sweet Heart",
        description: "FRUITY, SWEET, FLORAL, CITRUS, WHITE FLORAL, POWDERY",
        price: "PHP 660.00-1,070.00",
        image: "/images/SWEET-HEART.png",
        tags: [""],
    },    {
        id: 48,
        name: "Scarlet",
        description: "CITRUS, FLORAL, WHITE FLORAL, FRUITY, AROMATIC, ROSE, GREEN, POWDERY, WOODY, FRESH SPICY",
        price: "PHP 660.00-1,070.00",
        image: "/images/SCARLET.png",
        tags: [""],
    },    {
        id: 43,
        name: "Instinct",
        description: "FRUITY, POWDERY, WOODY, VANILLA, SWEET, MUSKY",
        price: "PHP 660.00-1,070.00",
        image: "/images/INSTINCT.png",
        tags: [""],
    },    {
        id: 58,
        name: "Feel Me",
        description: "FRUITY, SWEET, TROPICAL, VANILLA, CHOCOLATE",
        price: "PHP 660.00-1,070.00",
        image: "/images/CARRERA.png",
        tags: ["/images/FEEL-ME.png"],
    },    {
        id: 55,
        name: "Tiffany",
        description: "CITRUS, WOODY, FRESH. FRUITY, AROMATIC, MUSKY, POWDERY, GREEN",
        price: "PHP 660.00-1,070.00",
        image: "/images/TIFFANY.png",
        tags: [""],
    },
        {
        id: 39,
        name: "Girl Crush",
        description: "SWEET, WHITE FLORAL, WARM SPICY, VANILLA, CACAO, AMBER, WOODY, TUBEROSE, ALMOND, POWDERY",
        price: "PHP 660.00-1,070.00",
        image: "/images/GIRL-CRUSH.png",
        tags: [""],
    },
  
];

//unisex
export const unisex = [
    {
        id: 59,
        name: "Sandalwood",
        description: "WOODY, POWDERY, WARM SPICY, VIOLET",
        price: "PHP 129-560",
        image: "/images/SANDALWOOD.png",
        tags: [""],
    },
    {
        id: 60,
        name: "Baccarat",
        description: "WOODY, AMBER, WARM SPICY, FRESH SPICY, METALLIC, AROMATIC, WHITE FLORAL, ANIMALIC",
        price: "PHP 660-1,070",
        image: "/images/BACCARAT.png",
        tags: [""],
    },
]
