import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecruiterService } from './recruiter.service';
import { recruiterRouting } from './recruiter.routing';
import { RecruiterComponent }   from './recruiter.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, recruiterRouting ],
    exports: [],
    declarations: [ RecruiterComponent ],
    providers: [ RecruiterService ],
})
export class RecruiterModule { }
