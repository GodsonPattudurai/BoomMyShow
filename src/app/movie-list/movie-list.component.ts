import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, DoCheck {

  // @ts-ignore
  movieList: Array<any>;
  constructor(public commonserviceService: CommonServiceService, private router: Router) { }

  ngOnInit() {
    this.commonserviceService.updateMessage.subscribe(
      (message)=>{
        console.log('message in movie list component--'+message)
      }
    );
  }

  ngDoCheck() {
    //getting movie from common service
    this.movieList = this.commonserviceService.getMovieList();
  }

  bookTicket() {
    this.router.navigate(["/book-ticket"]);
  }

}
