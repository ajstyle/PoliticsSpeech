import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SpeechViewComponent } from './speech-view/speech-view.component';
import { SpeechSubmitComponent } from './speech-submit/speech-submit.component';
import { SpeechSearchComponent } from './speech-search/speech-search.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }   from '@angular/forms';
import {DataService} from './data.service' ;
@NgModule({
  declarations: [
    AppComponent,
    SpeechViewComponent,
    SpeechSubmitComponent,
    SpeechSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
