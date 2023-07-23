import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonServiceService} from "../services/common-service.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  theaterList: any = [];
  movieList: any = [];
  screenList: any = [];
  seatList: any = [];
  seatTmpList: any = [];
  showObj: any = {};

  constructor(private fb: FormBuilder, private router: Router, private commonserviceService: CommonServiceService) { }

  ngOnInit(){
    this.commonserviceService.getAll('movie?pageNo=0&pageSize=100&sortBy=id').subscribe((data: any) => {
      this.movieList = data.content;
    });
    this.commonserviceService.getAll('seat-type?pageNo=0&pageSize=100&sortBy=name').subscribe((data: any) => {
      this.seatList = data.content;
    });
    this.loadTheater();
  }
  loadTheater(){
    this.commonserviceService.getAll('theater?pageNo=0&pageSize=100&sortBy=id').subscribe((data: any) => {
      this.theaterList = data.content;
    });
  }

  loadScreen(id :any) {
    this.commonserviceService.getById('screen/', id).subscribe((data: any) => {
      this.screenList = data;
    });
  }

  saveScreen(showObj :any, seatTmpList :any) {
    const obj = {
      name: showObj.name,
      theaterId: parseInt(showObj.theaterId),
      viewTypeName: showObj.viewTypeName,
      audioTypeName: showObj.audioTypeName,
      screenSeatTypes: []
    };
    const screenSeatTypes :any[] = []
    if (seatTmpList && seatTmpList.length > 0) {
      seatTmpList.forEach((seat :any) => {
        const seats :any[] = [];
        for (let i = 1; i <= seat.seatColNum; i++) {
          for (let j = 1; j <= seat.seatRowNum; j++) {
            seats.push({
              rowNum: j,
              columnNum: i
            })
          }
        }
        screenSeatTypes.push({
          seatTypeName: seat.seatTypeName,
          seats: seats
        })
      });
    }
    // @ts-ignore
    obj.screenSeatTypes = screenSeatTypes;
    this.commonserviceService.save('screen', obj).subscribe((data: any) => {
      this.router.navigate(["app/screen-list"]);
    });
  }

  addSeat() {
    this.seatTmpList.push({
      seatTypeName: '',
      seatRowNum: 0,
      seatColNum: 0
    })
  }

  cancelScreen() {
    this.router.navigate(["app/screen-list"]);
  }
}
