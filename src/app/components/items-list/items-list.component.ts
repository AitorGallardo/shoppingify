import { Component } from '@angular/core';

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

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  displayedList: [string, GroceryItem[]][] | [] = [];
  supermarketItems: GroceryItem[] = [
    { id: 1, name: 'Bread', category: 'Bakery' },
    { id: 2, name: 'Milk', category: 'Dairy' },
    { id: 3, name: 'Eggs', category: 'Dairy' },
    { id: 4, name: 'Cheese', category: 'Dairy' },
    { id: 5, name: 'Cereal', category: 'Cereal' },
    { id: 6, name: 'Fresh Vegetables', category: 'Produce' },
    { id: 7, name: 'Fresh Fruits', category: 'Produce' },
    { id: 8, name: 'Meat (Chicken, Beef, Pork)', category: 'Meat' },
    { id: 9, name: 'Fish and Seafood', category: 'Seafood' },
    { id: 10, name: 'Rice', category: 'Grains' },
    { id: 11, name: 'Pasta', category: 'Grains' },
    { id: 12, name: 'Canned Soup', category: 'Canned Goods' },
    { id: 13, name: 'Canned Vegetables', category: 'Canned Goods' },
    { id: 14, name: 'Canned Fruits', category: 'Canned Goods' },
    { id: 15, name: 'Peanut Butter', category: 'Condiments' },
    { id: 16, name: 'Jam or Jelly', category: 'Condiments' },
    { id: 17, name: 'Cooking Oil', category: 'Cooking Essentials' },
    { id: 18, name: 'Spices and Seasonings', category: 'Cooking Essentials' },
    {
      id: 19,
      name: 'Condiments (Ketchup, Mustard, Mayo)',
      category: 'Condiments',
    },
    { id: 20, name: 'Snack Chips', category: 'Snacks' },
    { id: 21, name: 'Cookies', category: 'Snacks' },
    { id: 22, name: 'Soft Drinks', category: 'Beverages' },
    { id: 23, name: 'Water', category: 'Beverages' },
    { id: 24, name: 'Juice', category: 'Beverages' },
    { id: 25, name: 'Frozen Pizza', category: 'Frozen Foods' },
    { id: 26, name: 'Ice Cream', category: 'Frozen Foods' },
    { id: 27, name: 'Yogurt', category: 'Dairy' },
    { id: 28, name: 'Toilet Paper', category: 'Household' },
    { id: 29, name: 'Shampoo', category: 'Personal Care' },
    { id: 30, name: 'Soap', category: 'Personal Care' },
  ];

  ngOnInit() {
    console.log(this.groupItemsByCategory(this.supermarketItems));
    this.displayedList = this.groupItemsByCategory(this.supermarketItems);
  }

  groupItemsByCategory(items: GroceryItem[]) {
    const groupedObjectByCategory = items.reduce(
      (result: Record<string, GroceryItem[]>, item: GroceryItem) => {
        const { category } = item;

        if (!result[category]) {
          result[category] = [];
        }

        result[category].push(item);

        return result;
      },
      {}
    );
    const groupedArrayByCategory = Object.entries(groupedObjectByCategory);
    return groupedArrayByCategory;
  }
}
