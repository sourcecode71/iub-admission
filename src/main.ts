import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});