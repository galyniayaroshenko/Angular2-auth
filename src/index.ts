import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';

bootstrap( App, [
   provideRouter(routes)
]);
