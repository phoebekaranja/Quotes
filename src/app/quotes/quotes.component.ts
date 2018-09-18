import { Component, OnInit } from '@angular/core';
import {Quoteclass} from '../quoteclass';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
      new Quoteclass(1, 'River ','JamesGichuru') 
    ]
  constructor() { }

  ngOnInit() {
  }

}        