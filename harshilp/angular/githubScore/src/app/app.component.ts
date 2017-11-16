import { Component } from '@angular/core';
import { FindUserService } from './find-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  score: number = 0;
  username: string = '';
  exists: boolean = null;

  constructor(private _findUserService: FindUserService) {}

  findUser(formData) {
    this.username = formData.value.username;
    this._findUserService.findUser(this.username)
      .subscribe(
      (response) => {
        let res = response.json();
        console.log(res)
        this.exists = true;
        this.score = res.public_repos + res.followers;
        formData.reset();
      },
      (error) => {
        this.exists = false;
        console.log(error);
      }
      );
  }
}
