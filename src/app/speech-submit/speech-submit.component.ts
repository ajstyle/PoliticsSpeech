import { Component, OnInit , ViewChild  } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router' ;
import {DataService} from '../data.service' ;
import {FormGroup} from '@angular/forms' ;
@Component({
  selector: 'app-speech-submit',
  templateUrl: './speech-submit.component.html',
  styleUrls: ['./speech-submit.component.css']
})
export class SpeechSubmitComponent implements OnInit {
public speech:any ={

author :"",
 keyword: '' ,
  date : '' ,
  id:'',name:''
}
id :any;
  @ViewChild('f') form : FormGroup ;
constructor(public activatedRoute : ActivatedRoute , private router:Router,  public DataService : DataService ) {

}
  ngOnInit() {

    console.log(this.form);

    this.activatedRoute.params.subscribe((params)=>{
  this.id = params['id'] ;
  if(this.id)
  this.speech = this.DataService.getSpeech(this.id) ;
})
  }

save(speech) {

this.DataService.addSpeech(speech) ;
this.router.navigate(["/"]);
}

delete() {
this.DataService.removeSpeech(this.speech);
this.router.navigate(["/"]);
}

update(speech) {
  speech["id"]=this.id;
console.log(speech);
this.DataService.updateSpeech(speech) ;
}

}
