import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
      new Quote(1,"river","Big ideals","jamses"),
      new Quote(2,"introduction","books","rubies"),
      new Quote(3,"church","siemens","rails"),
      new Quote(4,"Body","price view","chania"),
      new Quote(5,"End source","quick view","Nile"),
      
             
       
    ]

    toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}        