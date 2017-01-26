import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QuestionComponent }   from './question.component';
import { questionRouting } from './question.routing';

@NgModule({
    imports: [  BrowserModule, FormsModule, HttpModule, questionRouting],
    exports: [ ],
    declarations: [QuestionComponent],
    providers: [],
})
export class QuestionModule { }
