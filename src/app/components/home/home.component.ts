import { DataService } from '../../services/data-service/data.service';
import { Component, OnInit } from '@angular/core';
import {UserResponse} from '../../model/user-response';
import { User } from '../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // h1Style = false;

  // users: Object;
  users: User[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( (dataresult: UserResponse) => {
      this.users = dataresult.data;
      console.log(this.users);
  });
}

  // firstClick() {
  //   // this.h1Style = true;
  //   // this.data.firstClick();
  // }

}
