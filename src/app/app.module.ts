import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ItemChipComponent } from './components/items-list/item-chip/item-chip.component';
import { ItemSelectedComponent } from './components/list-side-bar/item-selected/item-selected.component';
import { TuiCarouselComponent, TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ItemsListComponent,
    NavSideBarComponent,
    ListSideBarComponent,
    CartAlertIconComponent,
    ItemChipComponent,
    ItemSelectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }),
    EffectsModule.forRoot(EffectsArray),
    BrowserAnimationsModule,
    TuiRootModule,
    TuiCarouselModule,
    TuiPaginationModule,
    TuiDialogModule,
    TuiAlertModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
