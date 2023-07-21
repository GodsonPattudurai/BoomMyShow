import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

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
