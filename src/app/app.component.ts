import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styles: [],
  imports: [RouterOutlet],
  template: `
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'e-shop';
}
