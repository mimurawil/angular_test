import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksService } from './services/books.service';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}), // add necessary states
    EffectsModule.forRoot([]), // add necessary effects
  ],
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
