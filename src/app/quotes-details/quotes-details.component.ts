import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  // @Input() quote:quote;
  // @Output() isComplete= new EventEmitter<boolean>();

  @Input() parentdata:Quote;
  

  quoteComplete(complete:boolean){
    // this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
