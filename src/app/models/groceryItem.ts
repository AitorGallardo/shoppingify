export interface GroceryItem {
    id: number;
    name: string;
    category: Category;
  }
  
  export type Category =
    | 'Bakery'
    | 'Dairy'
    | 'Cereal'
    | 'Produce'
    | 'Meat'
    | 'Seafood'
    | 'Grains'
    | 'Canned Goods'
    | 'Condiments'
    | 'Cooking Essentials'
    | 'Snacks'
    | 'Beverages'
    | 'Frozen Foods'
    | 'Household'
    | 'Personal Care';