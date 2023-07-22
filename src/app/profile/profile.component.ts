import { Component, OnInit } from '@angular/core';

import { IUser, CognitoService } from '../cognito.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  user: IUser;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public ngOnInit(): void {
    this.cognitoService.getUser()
      .then((user: any) => {
        this.user = user.attributes;
        if (this.user && this.user.name) {
          this.router.navigate(['/app/home']);
        }
      });
  }

  public update(): void {
    this.loading = true;

    this.cognitoService.updateUser(this.user)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/app/home']);
      }).catch(() => {
      this.loading = false;
    });
  }

  home() {
    this.router.navigate(['/app/home']);
  }
}
