
import { Injectable } from '@angular/core';
import { SPEECH_DATA} from './data'
import { BehaviorSubject } from 'rxjs/BehaviorSubject' ;

@Injectable()
export class DataService {

  private speechList=new BehaviorSubject(SPEECH_DATA);


  constructor() {


   }

   getSpeechList(){

    return this.speechList;
   }

   getSpeech(id){
      return this.speechList.value.find(x=>x.id==id);

   }
      addSpeech(speech){
           console.log(speech);
            let sp=this.speechList.value;
            speech["id"]=new Date().getTime();
            sp.push(speech);
          this.speechList.next(sp) ;
      }

   removeSpeech(speech){
      let sp=this.speechList.value.filter(x=>x.id!=speech["id"]);
      this.speechList.next(sp);
   }

   updateSpeech(speech){
     console.log(speech);
    let sp=this.speechList.value.map(x=>{
      if(x.id!=speech["id"])
        return x ;
      else
        return speech ;
  });

  console.log(sp);
  this.speechList.next(sp);
   }

   filter(keyword){
  if(keyword.length>0)
    return this.speechList.value.filter(x=>{
      let name=x.name.toLowerCase();
      let keywords=x.keywords.toLowerCase();
      keyword=keyword.toLowerCase();
      if(name.indexOf(keyword)>=0||keywords.indexOf(keyword)>=0)
        return true
      else
        return false ;
    })
  else
    return []
}


}
