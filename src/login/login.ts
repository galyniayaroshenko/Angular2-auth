import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'login',
  directives: [ ROUTER_DIRECTIVES ],
  template: './src/login/login.html',
  styles: [ './src/login/login.css' ]
})

export class Login {
  constructor(public router: Router) {
  }
}