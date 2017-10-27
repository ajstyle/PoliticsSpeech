import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeechViewComponent } from '../speech-view/speech-view.component' ;
import { SpeechSubmitComponent} from '../speech-submit/speech-submit.component' ;
import { SpeechSearchComponent } from '../speech-search/speech-search.component' ;

const routes: Routes = [


      {
        path: 'submit-speech',
        component: SpeechSubmitComponent,
    },
      {
        path: 'search-speech',
        component: SpeechSearchComponent,
    },
      {
        path: '',
        component: SpeechViewComponent,
        children:[
          {path:":id",component:SpeechSubmitComponent }
        ]

    }


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
