import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  moviesName: string[] = [];
  searchEnabled: boolean = false;
  updatedMovieList: any;

  public updateMessage = new Subject<string>()

  constructor() { }

  updateMessages(message: any) {
    this.updateMessage.next(message);
  }

  movieList = [
    { url: '../../assets/image/movies/movie1.jpg', name: 'KK', location: 'Chennai', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie2.jpg', name: 'Geetha Govindam', location: 'All location', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie3.jpg', name: 'Pyar prema kadhal', location: 'Chennai', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie4.jpg', name: 'KKS', location: 'Chennai', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie5.jpg', name: 'Alpha', location: 'World wide', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie6.jpg', name: 'Vishvaroopam 2', location: 'Chennai', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie7.jpg', name: 'HPJ', location: 'Chennai', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie8.jpg', name: 'MI', location: 'Chennai', date: 'Sep 7-8' },
  ]

  getMovieList() {
    return this.updatedMovieList;
  }

  getMovieListName() {
    this.moviesName = [];
    this.movieList.forEach(movielist => {
      this.moviesName.push(movielist.name);
    })
    return this.moviesName;
  }
  updateMovieList(updatedMovie: any) {
    this.updatedMovieList = []
    for (let flag = 0; flag < updatedMovie.length; flag++) {
      this.updatedMovieList.push(this.movieList.filter(x => x.name.toLocaleLowerCase() == updatedMovie[flag].toLocaleLowerCase()));
    }
  }

  addNewMovie(newMovie: any) {
    this.movieList.push(newMovie);
  }
  deleteMovie(index: any) {
    this.movieList.splice(index, 1);
  }
}
