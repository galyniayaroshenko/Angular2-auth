import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'home',
  directives: [ CORE_DIRECTIVES ],
  template: './src/home/home.html',
  styles: [ './src/home/home.css' ]
})

export class Home {}