import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShowListComponent} from "./show-list/show-list.component";
import {SelectSeatComponent} from "./select-seat/select-seat.component";
import {TheatreListComponent} from "./theatre-list/theatre-list.component";
import {BookingHistoryComponent} from "./booking-history/booking-history.component";
import {BookTicketComponent} from "./book-ticket/book-ticket.component";

const routes: Routes = [
  { path: 'user/:id', component: HomeComponent},
  {path: 'show-list', component: ShowListComponent},
  {path: 'theater-list', component: TheatreListComponent},
  {path: 'booking-history', component: BookingHistoryComponent},
  {path: 'book-ticket', component: BookTicketComponent},
  {path: 'select-seat', component: SelectSeatComponent},
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
