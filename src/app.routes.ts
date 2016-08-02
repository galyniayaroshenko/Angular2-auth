import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { Start } from './startPage';

export const routes: RouterConfig = [
  { path: '',       component:  Start },
  { path: 'start',       component:  Start },
  { path: 'login',  component: Login },
  { path: 'signup', component: Signup },
  { path: 'home',   component: Home},
  { path: '**',     component: Start }
];