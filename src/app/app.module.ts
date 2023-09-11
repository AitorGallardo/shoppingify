import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { NavSideBarComponent } from './components/nav-side-bar/nav-side-bar.component';
import { ListSideBarComponent } from './components/list-side-bar/list-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ItemsListComponent,
    NavSideBarComponent,
    ListSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
