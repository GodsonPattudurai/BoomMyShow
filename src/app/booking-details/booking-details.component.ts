import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonServiceService} from "../services/common-service.service";

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  movieObj: any = {};
  theaterObj: any = {};
  bookingObj: any = {};
  showCalendar: any = {};
  constructor(private fb: FormBuilder, private router: Router, private commonserviceService: CommonServiceService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( paramMap => {
      this.commonserviceService.getById('booking', parseInt(paramMap.get('bookingId') || '0')).subscribe((data: any) => {
          this.bookingObj = data;
          this.load();
      });
    })
  }

  ngOnInit() {
  }

  load(){
    this.commonserviceService.getAll('show?pageNo=0&pageSize=100&sortBy=id').subscribe((data: any) => {
      this.movieObj = data.content.filter((a:any) => a.id == this.bookingObj.showId)[0];
      this.showCalendar = this.movieObj.showCalendars.filter((a:any) => a.id === this.bookingObj.showCalendarId)[0];
    });
  }
}
