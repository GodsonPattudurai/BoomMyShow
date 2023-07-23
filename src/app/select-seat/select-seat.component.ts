import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonServiceService} from "../services/common-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent  implements OnInit, AfterViewInit{
  seatlist = ['A', 'B'];
  seatlistBasic = [ 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  noOfTicket = 0;
  showObj :any = {};
  screenObj :any = {};
  constructor(public commonserviceService: CommonServiceService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( paramMap => {
      this.commonserviceService.getById('show', parseInt(paramMap.get('showId') || '0')).subscribe((data: any) => {
        this.showObj = data;
        this.commonserviceService.getById('screen', this.showObj.theaterId + '/' + this.showObj.screenName).subscribe((data1: any) => {
          this.screenObj = data1;
          this.screenObj.screenSeatTypes.forEach((o:any) => {
            o.screenMap = this.groupBy(o.seats, (seat :any) => seat.columnNum);
          })
          console.log(this.screenObj.screenSeatTypes)
        });
        const seats = this.showObj.showCalendars.filter((a:any) => a.id === parseInt(paramMap.get('calenderId') || '0'));
      });
    })
  }
  groupBy(list :any, keyGetter :any) {
    const map  = new Map();
    list.forEach((item :any) => {
      const key = keyGetter(item);
      item.selected = false;
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  payTicket() {

  }

  protected readonly Array = Array;

  selectSeat(se:any) {
    se.selected = !se.selected;
    if (se.selected) {
      this.noOfTicket = this.noOfTicket + 1;
    } else {
      this.noOfTicket = this.noOfTicket - 1;
    }
  }
}
