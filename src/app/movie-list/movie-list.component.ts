import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  // @ts-ignore
  movieList: any = [];
  constructor(public commonserviceService: CommonServiceService, private router: Router) { }

  ngOnInit() {
    this.commonserviceService.getAll('movie?pageNo=0&pageSize=100&sortBy=id').subscribe((data: any) => {
      this.movieList = data.content;
    });
  }

  bookTicket() {
    this.router.navigate(["app/book-ticket"]);
  }

}
