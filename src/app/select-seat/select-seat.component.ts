import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent  implements OnInit{
  seatlist = ['A', 'B'];
  seatlistBasic = [ 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  constructor() { }

  ngOnInit() {
  }

  payTicket() {
    
  }
}
