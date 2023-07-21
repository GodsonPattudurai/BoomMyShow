import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {LowerBannerSlideComponent} from "./lower-banner-slide/lower-banner-slide.component";
import {SearchMovieComponent} from "./search-movie/search-movie.component";
import {SearchMoviePipe} from "./search-movie/search-movie.pipe";
import {HeaderComponent} from "./header/header.component";
import {ShowListComponent} from "./show-list/show-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { TheatreListComponent } from './theatre-list/theatre-list.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LowerBannerSlideComponent,
    MovieListComponent,
    SearchMovieComponent,
    SearchMoviePipe,
    ShowListComponent,
    HomeComponent,
    SelectSeatComponent,
    TheatreListComponent,
    BookingHistoryComponent,
    BookTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
