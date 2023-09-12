import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { NavSideBarComponent } from './components/nav-side-bar/nav-side-bar.component';
import { ListSideBarComponent } from './components/list-side-bar/list-side-bar.component';
import { CartAlertIconComponent } from './components/cart-alert-icon/cart-alert-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ItemsListComponent,
    NavSideBarComponent,
    ListSideBarComponent,
    CartAlertIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
