import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonServiceService} from "../services/common-service.service";

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  movieObj: any = {};
  theaterObj: any = {};
  constructor(private fb: FormBuilder, private router: Router, private commonserviceService: CommonServiceService) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.commonserviceService.getAll('movie?pageNo=0&pageSize=100&sortBy=id').subscribe((data: any) => {
      this.movieObj = data.content[0];
    });
    this.commonserviceService.getAll('theater?pageNo=0&pageSize=100&sortBy=id').subscribe((data: any) => {
      this.theaterObj = data.content[0];
    });
  }
}
