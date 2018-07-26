import { Component } from '@angular/core';
import { simpleTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [simpleTransition],
})
export class AppComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
