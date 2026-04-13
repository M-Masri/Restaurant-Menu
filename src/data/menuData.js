import adanaKebabMeatImg from '../assets/Adana Kebab (Meat) .webp'
import charcoalDonerChickenImg from '../assets/Charcoal Doner Sandwich (Chicken) .webp'
import charcoalDonerMeatImg from '../assets/Charcoal Doner Sandwich (Meat) .webp'
import cheeseSalamiPideImg from '../assets/Cheese & Salami Pide .webp'
import cheesePideImg from '../assets/Cheese Pide .webp'
import chickenKebabSandwichImg from '../assets/Chicken Kebab Sandwich .webp'
import chickenWingsImg from '../assets/Chicken Wings (6 pcs) .webp'
import creamyShishTawookImg from '../assets/Creamy Shish Tawook .webp'
import dawoodBashaImg from '../assets/Dawood Basha (Clay Pot) .webp'
import eggplantMutabalImg from '../assets/Eggplant Mutabal .webp'
import koftaTahiniImg from '../assets/Kofta with Tahini .webp'
import koftaTomatoImg from '../assets/Kofta with Tomato Sauce .webp'
import kunafaImg from '../assets/Kunafa .webp'
import lahmacunImg from '../assets/Lahmacun.webp'
import meatPideImg from '../assets/Meat Pide .webp'
import mixedPideImg from '../assets/Mixed Pide (Lahmacun, Cheese, Muhammara) .webp'
import shishTawookPlatterImg from '../assets/Shish Tawook Platter.webp'
import shishTawookSandwichImg from '../assets/Shish Tawook Sandwich .webp'
import signatureMeatKebabSandwichImg from '../assets/Signature Meat Kebab Sandwich .webp'
import turkishChickenKebabImg from '../assets/Turkish Chicken Kebab .webp'
import turkishEzmeSaladImg from '../assets/Turkish Ezme Salad .webp'
import turkishRedRiceImg from '../assets/Turkish Red Rice .webp'
import ustaChickenImg from '../assets/Usta Chicken .webp'
import ustaMixedGrillImg from '../assets/Usta Mixed Grill .webp'
import ustaSignatureDishImg from '../assets/Usta Signature Dish .webp'
import vermicelliRiceImg from '../assets/Vermicelli Rice .webp'

export const menuCategories = [
  'From the Stone Oven',
  'Cold Appetizers',
  'Hot Appetizers',
  'Signature Sandwiches',
  'Charcoal Grills',
  'Usta Special Dishes',
  'Traditional Oven Dishes',
  'Side Dishes',
  'Turkish Desserts',
  'Beverages',
]

export const menuItems = [
  {
    id: 1,
    name: 'Meat Pide',
    category: 'From the Stone Oven',
    price: '20 AED',
    image: meatPideImg,
  },
  {
    id: 2,
    name: 'Cheese Pide',
    category: 'From the Stone Oven',
    price: '18 AED',
    image: cheesePideImg,
  },
  {
    id: 3,
    name: 'Cheese & Salami Pide',
    category: 'From the Stone Oven',
    price: '20 AED',
    image: cheeseSalamiPideImg,
  },
  {
    id: 4,
    name: 'Cheese & Muhammara Pide',
    category: 'From the Stone Oven',
    price: '18 AED',
    image: null,
  },
  {
    id: 5,
    name: 'Mixed Pide (Lahmacun, Cheese, Muhammara)',
    category: 'From the Stone Oven',
    price: '20 AED',
    image: mixedPideImg,
  },
  {
    id: 6,
    name: 'Lahmacun',
    category: 'From the Stone Oven',
    price: '16 AED',
    description:
      'Thin Turkish flatbread topped with minced meat and spices.',
    image: lahmacunImg,
  },
  {
    id: 7,
    name: 'Turkish Ezme Salad',
    category: 'Cold Appetizers',
    price: '15 AED',
    description:
      'A traditional finely chopped salad made with fresh tomatoes, herbs, onions, and green peppers, mixed with pomegranate molasses, olive oil, and spices.',
    image: turkishEzmeSaladImg,
  },
  {
    id: 8,
    name: 'Eggplant Mutabal',
    category: 'Cold Appetizers',
    price: '15 AED',
    description:
      'Charcoal-grilled eggplant with tahini and yogurt, garnished with pomegranate seeds.',
    image: eggplantMutabalImg,
  },
  {
    id: 9,
    name: 'Hummus',
    category: 'Cold Appetizers',
    price: '15 AED',
    description: 'Smooth mashed chickpeas blended with tahini and lemon juice.',
    image: null,
  },
  {
    id: 10,
    name: 'Chicken Wings (6 pcs)',
    category: 'Hot Appetizers',
    price: '18 AED',
    description:
      'Fresh marinated grilled chicken wings served with onions, parsley, and garlic sauce.',
    image: chickenWingsImg,
  },
  {
    id: 11,
    name: 'Mini Lahmacun (3 pcs)',
    category: 'Hot Appetizers',
    price: '20 AED',
    description: 'Served with lemon slices and pomegranate molasses.',
    image: null,
  },
  {
    id: 12,
    name: 'French Fries',
    category: 'Hot Appetizers',
    price: '14 AED',
    image: null,
  },
  {
    id: 13,
    name: 'Usta Kebab Sandwich',
    category: 'Signature Sandwiches',
    price: '22 AED',
    description:
      'Fresh Turkish bread stuffed with freshly minced kebab, onions, parsley, sumac, and Turkish salad.',
    image: signatureMeatKebabSandwichImg,
  },
  {
    id: 14,
    name: 'Usta Kebab Sandwich (Double)',
    category: 'Signature Sandwiches',
    price: '32 AED',
    description:
      'Fresh Turkish bread stuffed with freshly minced kebab, onions, parsley, sumac, and Turkish salad.',
    image: signatureMeatKebabSandwichImg,
  },
  {
    id: 15,
    name: 'Shish Tawook Sandwich',
    category: 'Signature Sandwiches',
    price: '22 AED',
    description:
      'Fresh Turkish bread with marinated grilled chicken, garlic sauce, fries, and pickles.',
    image: shishTawookSandwichImg,
  },
  {
    id: 16,
    name: 'Chicken Kebab Sandwich',
    category: 'Signature Sandwiches',
    price: '22 AED',
    description:
      'Fresh Turkish bread stuffed with freshly minced chicken kebab, onions, parsley, sumac, and Turkish salad.',
    image: chickenKebabSandwichImg,
  },
  {
    id: 17,
    name: 'Charcoal Doner Sandwich (Beef)',
    category: 'Signature Sandwiches',
    price: '14 AED',
    description:
      'With onions, parsley, tomatoes, pickles, and tahini sauce.',
    image: charcoalDonerMeatImg,
  },
  {
    id: 18,
    name: 'Charcoal Doner Sandwich (Chicken)',
    category: 'Signature Sandwiches',
    price: '14 AED',
    description: 'With onions, parsley, pickles, and garlic sauce.',
    image: charcoalDonerChickenImg,
  },
  {
    id: 19,
    name: 'Charcoal Doner Meal (Beef or Chicken)',
    category: 'Signature Sandwiches',
    price: '24 AED',
    description: 'Served with fries and Ayran yogurt drink.',
    image: null,
  },
  {
    id: 20,
    name: 'Usta Chicken (Half - 7 pcs)',
    category: 'Charcoal Grills',
    price: '39 AED',
    description:
      'Fresh chicken marinated with authentic Turkish spices, grilled over charcoal, served with rice or fries, Turkish salad, eggplant mutabal or hummus, and fresh Turkish bread.',
    image: ustaChickenImg,
  },
  {
    id: 21,
    name: 'Usta Chicken (Full - 14 pcs)',
    category: 'Charcoal Grills',
    price: '70 AED',
    description:
      'Fresh chicken marinated with authentic Turkish spices, grilled over charcoal, served with rice or fries, Turkish salad, eggplant mutabal or hummus, and fresh Turkish bread.',
    image: ustaChickenImg,
  },
  {
    id: 22,
    name: 'Adana Kebab (Beef)',
    category: 'Charcoal Grills',
    price: '48 AED',
    description:
      'Fresh minced meat with vegetables and Turkish spices, grilled over charcoal, served with rice or fries, Turkish salad, eggplant mutabal or hummus, pickles, and Turkish bread.',
    image: adanaKebabMeatImg,
  },
  {
    id: 23,
    name: 'Turkish Chicken Kebab',
    category: 'Charcoal Grills',
    price: '44 AED',
    description:
      'Marinated chicken with vegetables, grilled over charcoal, served with rice or fries, Turkish salad, eggplant mutabal or hummus, garlic sauce, pickles, and Turkish bread.',
    image: turkishChickenKebabImg,
  },
  {
    id: 24,
    name: 'Shish Tawook',
    category: 'Charcoal Grills',
    price: '48 AED',
    description:
      'Marinated chicken cubes grilled over charcoal, served with rice or fries, Turkish salad, eggplant mutabal or hummus, garlic sauce, pickles, and Turkish bread.',
    image: shishTawookPlatterImg,
  },
  {
    id: 25,
    name: 'Usta Mixed Grill',
    category: 'Charcoal Grills',
    price: '56 AED',
    description:
      'Selection of beef kebab, chicken kebab, and shish tawook, served with rice or fries, Turkish salad, eggplant mutabal or hummus, pickles, garlic sauce, and Turkish bread.',
    image: ustaMixedGrillImg,
  },
  {
    id: 26,
    name: 'Dawood Basha (Clay Pot)',
    category: 'Usta Special Dishes',
    price: '44 AED',
    description:
      'Fresh meatballs cooked Turkish-style in rich tomato sauce with vegetables, served with vermicelli rice, Turkish salad, eggplant mutabal or hummus, and pickles.',
    image: dawoodBashaImg,
  },
  {
    id: 27,
    name: 'Creamy Shish Tawook (Clay Pot)',
    category: 'Usta Special Dishes',
    price: '44 AED',
    description:
      'Marinated chicken cubes cooked with tomato sauce, cream, and mozzarella cheese, served with vermicelli rice, Turkish salad, eggplant mutabal or hummus, and pickles.',
    image: creamyShishTawookImg,
  },
  {
    id: 28,
    name: 'Usta Special Plate',
    category: 'Usta Special Dishes',
    price: '48 AED',
    description:
      'Turkish-style meatballs in rich tomato sauce served over herbed mashed potatoes, topped with mozzarella, pine nuts, and chopped parsley, with Turkish salad, eggplant mutabal or hummus, pickles, and fresh bread.',
    image: ustaSignatureDishImg,
  },
  {
    id: 29,
    name: 'Kofta in Tomato Sauce',
    category: 'Traditional Oven Dishes',
    price: '48 AED',
    description:
      'Turkish-style seasoned minced meat baked in the oven with rich tomato sauce, served with Turkish salad, eggplant mutabal or hummus, pickles, and fresh bread.',
    image: koftaTomatoImg,
  },
  {
    id: 30,
    name: 'Kofta with Tahini',
    category: 'Traditional Oven Dishes',
    price: '48 AED',
    description:
      'Turkish-style seasoned minced meat baked in the oven with tahini sauce, served with Turkish salad, eggplant mutabal or hummus, pickles, and fresh bread.',
    image: koftaTahiniImg,
  },
  {
    id: 31,
    name: 'Turkish Red Rice',
    category: 'Side Dishes',
    price: '12 AED',
    image: turkishRedRiceImg,
  },
  {
    id: 32,
    name: 'Vermicelli Rice',
    category: 'Side Dishes',
    price: '12 AED',
    image: vermicelliRiceImg,
  },
  {
    id: 33,
    name: 'Mashed Potatoes',
    category: 'Side Dishes',
    price: '12 AED',
    image: null,
  },
  {
    id: 34,
    name: 'Garlic Sauce',
    category: 'Side Dishes',
    price: '4 AED',
    image: null,
  },
  {
    id: 35,
    name: 'Mixed Pickles',
    category: 'Side Dishes',
    price: '4 AED',
    image: null,
  },
  {
    id: 36,
    name: 'Kunafa',
    category: 'Turkish Desserts',
    price: '18 AED',
    image: kunafaImg,
  },
  {
    id: 37,
    name: 'Ayran (Yogurt Drink)',
    category: 'Beverages',
    price: '6 AED',
    image: null,
  },
  {
    id: 38,
    name: 'Fresh Orange Juice',
    category: 'Beverages',
    price: '14 AED',
    image: null,
  },
  {
    id: 39,
    name: 'Soft Drinks (Pepsi, 7Up, Mirinda)',
    category: 'Beverages',
    price: '5 AED',
    image: null,
  },
  {
    id: 40,
    name: 'Turkish Coffee',
    category: 'Beverages',
    price: '10 AED',
    image: null,
  },
  {
    id: 41,
    name: 'Tea',
    category: 'Beverages',
    price: '3 AED',
    image: null,
  },
  {
    id: 42,
    name: 'Water',
    category: 'Beverages',
    price: '4 AED',
    image: null,
  },
]