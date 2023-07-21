import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonServiceService} from "../services/common-service.service";

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.css']
})
export class TheatreListComponent implements OnInit {

  // @ts-ignore
  movieForm: FormGroup;
  movieList: any;

  constructor(private fb: FormBuilder, private router: Router, private commonserviceService: CommonServiceService) { }

  ngOnInit() {
    this.movieList =  this.commonserviceService.getMovieListName();
    console.log(this.movieList);
    console.log(JSON.stringify('list---'+this.movieList))
    this.buildForm();
  }

  buildForm() {
    this.movieForm = this.fb.group({
      url: '',
      name: '',
      location: '',
      date: '',
    });

  }

  updateMovieList() {
    //console.log('value-->'+ JSON.stringify(this.movieForm.value))
    this.commonserviceService.addNewMovie(this.movieForm.value);
  }
  backToHome() {
    this.router.navigate(["/home"]);
  }
  deleteMovie(index: any) {
    this.commonserviceService.deleteMovie(index);
    this.movieList =  this.commonserviceService.getMovieListName();
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
