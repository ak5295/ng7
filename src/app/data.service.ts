import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // firstClick() {
  //   return console.log(`clicked`);
  // }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
