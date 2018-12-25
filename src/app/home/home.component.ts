import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // h1Style = false;

  users: Object;
  // users: any[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( data =>
      this.users = data);
      console.log(this.users);
  }

  // firstClick() {
  //   // this.h1Style = true;
  //   // this.data.firstClick();
  // }

}
