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
import { CandidateComponent } from './candidate/candidate.component';

const myComponents = [ AppComponent, HomeComponent, CandidateComponent ]

@NgModule({
  declarations: [...myComponents ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, QuestionModule, RecruiterModule, routing ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
