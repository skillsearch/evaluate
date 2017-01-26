import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuestionModule } from './questions/question.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home.component';
import { routing } from './app.routing';

const myComponents = [ AppComponent, HomeComponent ]

@NgModule({
  declarations: [...myComponents ],
  imports: [ BrowserModule, FormsModule, HttpModule, QuestionModule, routing ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
