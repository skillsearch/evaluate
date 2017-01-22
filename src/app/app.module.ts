import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home.component';
import { QuestionComponent } from './questions/question.component';
import { routing } from './app.routing';

const myComponents = [ AppComponent, QuestionComponent, HomeComponent ]

@NgModule({
  declarations: [...myComponents ],
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
