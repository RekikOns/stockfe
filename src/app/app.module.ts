import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesModule } from './articles/articles.module';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ArticlesModule,
    HttpClientModule,
    CategoriesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
