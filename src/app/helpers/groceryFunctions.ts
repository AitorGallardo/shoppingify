import { Grocery } from 'src/app/models/grocery';
import { GroceriesState } from './../store/reducers/grocery.reducer';
import { GroceryItem } from '../models/grocery';
import { UpdateSelectedGroceryOptions } from '../store/actions';

export const findGroceryAndUpdate = (state:GroceriesState, groceryId:number, option: UpdateSelectedGroceryOptions): GroceryItem[] => {
    const { selectedGroceries } = state;
    const updatedSelectedGroceries = selectedGroceries.map( (grocery,index) => {

        if (grocery.id === groceryId) {
            const updatedGrocery = new GroceryItem(grocery); // Create a copy of the grocery object
            switch (option) {
              case 'add':
                updatedGrocery.quantity++;
                break;
              case 'remove':
                updatedGrocery.quantity--;
                break;
              case 'delete':
                selectedGroceries.splice(index, 1);
                break;
            }
      
            return updatedGrocery;
          } else {
            return grocery; // Return unmodified groceries
          }
    });
    return [...updatedSelectedGroceries];
}