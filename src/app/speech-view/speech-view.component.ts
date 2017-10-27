import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service' ;
@Component({
  selector: 'app-speech-view',
  templateUrl: './speech-view.component.html',
  styleUrls: ['./speech-view.component.css']
})
export class SpeechViewComponent implements OnInit {

results =[];
 constructor(private http: HttpClient , private DataService : DataService) {

this.DataService.getSpeechList().subscribe((data)=> {
      this.results = data ;
   }) ;

 }

  ngOnInit() : void {
    // this.http.get('../assets/api/speech.json').subscribe(data => {
    //   this.results = data['results'];
    // });

  }
}
