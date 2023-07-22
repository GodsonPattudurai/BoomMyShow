import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CognitoService, IUser} from "../cognito.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: IUser;
  constructor(private router: Router, private cognitoService: CognitoService) {
    this.user = {} as IUser;
  }

  ngOnInit() {
    this.cognitoService.getUser()
      .then((user: any) => {
        this.user = user.attributes;
      });
  }

  addShow() {
    this.router.navigate(["app/show-list"]);
  }
  addTheater() {
    this.router.navigate(["app/theater-list"]);
  }
  bookingHistory() {
    this.router.navigate(["app/booking-history"]);
  }
  public signOut(): void {
    this.cognitoService.signOut()
      .then(() => {
        this.router.navigate(['/signIn']);
      });
  }
}
