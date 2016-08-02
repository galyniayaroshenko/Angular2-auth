import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  directives: [],
  template: './src/signup/signup.html',
  styles: ['./src/signup/signup.css']
})

export class Signup {
  constructor(public router: Router) {
  }
}