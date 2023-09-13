import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { NavSideBarComponent } from './components/nav-side-bar/nav-side-bar.component';
import { ListSideBarComponent } from './components/list-side-bar/list-side-bar.component';
import { CartAlertIconComponent } from './components/cart-alert-icon/cart-alert-icon.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.reducers';
import { EffectsArray } from './store/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    HttpClientModule, 
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(EffectsArray)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
