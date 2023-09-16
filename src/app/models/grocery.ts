export interface Grocery {
  id: number;
  name: string;
  category: Category;
}

export type DisplayedGroceriesList = [Category, GroceryItem []][] | [];

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

export class GroceryItem implements Grocery {
  id: number;
  name: string;
  category: Category;
  private _quantity: number;

  constructor(groceryItem?: Grocery | GroceryItem) {
    this.id = groceryItem?.id ?? 0;
    this.name = groceryItem?.name ?? '';
    this.category = groceryItem?.category ?? 'Bakery';

    if (groceryItem && 'quantity' in groceryItem) {
      this._quantity = groceryItem.quantity || 1;
    } else {
      this._quantity = 1; 
    }
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    if (value >= 0) {
      this._quantity = value;
    } else {
      console.error('Quantity cannot be negative.');
    }
  }

  add(_grocery: Grocery) {
    this.quantity++;
  }

  remove(_grocery: Grocery) {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
