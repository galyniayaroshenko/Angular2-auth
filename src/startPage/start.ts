import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'start',
  directives: [],
  template: './src/start/start.html',
  styles: ['./src/start/start.css']
})

export class Start {
  constructor(public router: Router) {
  }
}