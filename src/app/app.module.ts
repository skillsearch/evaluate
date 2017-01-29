import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuestionModule } from './questions/question.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home.component';
import { routing } from './app.routing';

const myComponents = [ AppComponent, HomeComponent ]

@NgModule({
  declarations: [...myComponents ],
  imports: [ BrowserModule, FormsModule, HttpModule, QuestionModule, RecruiterModule, routing ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
