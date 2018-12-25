import { Injectable } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  firstClick() {
    return console.log(`clicked`);
  }
}
