import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addShow() {
    this.router.navigate(["/show-list"]);
  }
  addTheater() {
    this.router.navigate(["/theater-list"]);
  }
  bookingHistory() {
    this.router.navigate(["/booking-history"]);
  }
}
