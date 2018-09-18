import { Component } from '@angular/core';
import {Quoteclass } from './quoteclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public  title = 'quotes';
  quotes=[
    new Quoteclass(1, 'JamesGichuru ','desvtoof')
  ]
}