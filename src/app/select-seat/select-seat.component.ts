import {Component, OnInit} from '@angular/core';
import {CommonServiceService} from "../services/common-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent  implements OnInit{
  seatlist = ['A', 'B'];
  seatlistBasic = [ 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  noOfTicket = 0;
  constructor(public commonserviceService: CommonServiceService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( paramMap => {
      console.log(paramMap.get('calenderId'));
      console.log(paramMap.get('showId'));
      this.commonserviceService.getById('show', parseInt(paramMap.get('showId') || '0')).subscribe((data: any) => {

      });
    })
  }

  ngOnInit() {
  }

  payTicket() {

  }
}
