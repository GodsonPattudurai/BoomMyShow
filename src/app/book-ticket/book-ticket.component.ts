import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent {
  constructor(private router: Router) { }
  selectSeat() {
    this.router.navigate(["/select-seat"]);
  }
}
