import { Component, OnInit } from '@angular/core';
import { homeTransition } from './transition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [homeTransition],
  host: {
    '[@homeTransition]': ''
  }
})
export class HomeComponent implements OnInit {
  images = Array(50).fill('');
  constructor() { }

  ngOnInit() {
  }

}
