import { Component, Input } from '@angular/core';
import { GroceryItem } from 'src/app/models/grocery';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.css']
})
export class ItemSelectedComponent {
  @Input() item: GroceryItem = new GroceryItem();

  showOptions = false;
  showOptionsTest = false;

  showOptionsToggle() {
    this.showOptions = !this.showOptions;
  }

  showOptionsWithDelay() {
    this.showOptions = !this.showOptions;
    if(this.showOptions){
      // maybe is cleaner to acces to animation end in the other element
      setTimeout(() => {
        this.showOptionsTest = true;
      }, 300);
    }else{
      this.showOptionsTest = false;
    }
  }

}
