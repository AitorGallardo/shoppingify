import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category, DisplayedGroceriesList, Grocery, GroceryItem } from '../models/grocery';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private url = 'https://l.in/api';

  displayedList: [string, GroceryItem[]][] | [] = [];
  supermarketItems: Grocery[] = [
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

  constructor(private http: HttpClient) {}

  getAllGroceries(): Observable<Grocery[]> {
    return of(this.supermarketItems);

    // return this.http.get(`${ this.url }/users?per_page=6&delay=3`)
    //       .pipe(
    //         map( (resp:any) => resp['data'])
    //       );
  }

  // TODO
  createGrocery(id: string) {
    return this.http
      .get(`${this.url}/users/${id}`)
      .pipe(map((resp: any) => resp['data']));
  }

  getGroupedGroceries(): Observable<[string, GroceryItem[]][]> {
    if (this.displayedList.length > 0) {
      return of(this.displayedList);
    }
    this.displayedList = this.groupItemsByCategory(this.supermarketItems);
    return of(this.displayedList);

    // return this.http.get(`${ this.url }/users?per_page=6&delay=3`)
    //       .pipe(
    //         map( (resp:any) => resp['data'])
    //       );
  }

  groupItemsByCategory(items: Grocery[]): any {
    const groupedObjectByCategory = items.reduce(
      (result: Record<string, GroceryItem[]>, item: Grocery) => {
        const { category } = item;

        if (!result[category]) {
          result[category] = [];
        }
        if (result[category].some((i) => i.id === item.id)) {
          result[category].map((i) => {
            if (i.id === item.id) {
              i.quantity++;
            }
          });
        } else {
          result[category].push(new GroceryItem(item));
        }
        return result;
      },
      {}
    );
    const groupedArrayByCategory = Object.entries(groupedObjectByCategory);
    return groupedArrayByCategory;
  }
}
