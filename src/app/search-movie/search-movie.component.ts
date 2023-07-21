import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { Router } from "@angular/router";
import { SearchMoviePipe } from './search-movie.pipe'

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  providers: [ SearchMoviePipe ]
})
export class SearchMovieComponent implements OnInit, DoCheck {

  // @ts-ignore
  movieList: Array<string>;
  // @ts-ignore
  searchText: string;

  constructor(public commonserviceService: CommonServiceService, private searchMoviePipe: SearchMoviePipe) { }

  ngOnInit() {
    this.movieList = this.commonserviceService.getMovieListName();
  }
  ngDoCheck() {
    this.commonserviceService.updateMovieList(this.searchMoviePipe.transform(this.movieList,this.searchText));
  }
  updateEvent(message: any) {
    this.commonserviceService.updateMessages(message);
  }

  filterList() {

  }
}
