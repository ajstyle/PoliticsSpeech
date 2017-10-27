import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech-search',
  templateUrl: './speech-search.component.html',
  styleUrls: ['./speech-search.component.css']
})
export class SpeechSearchComponent implements OnInit {
results=[]
  constructor(public  dataService : DataService ) { }

  ngOnInit() {
  }

}
