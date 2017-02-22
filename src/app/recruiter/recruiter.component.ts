import { Component, OnInit } from '@angular/core';
import { RecruiterService } from './recruiter.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from './email.validator';

@Component({
    templateUrl: './recruiter.component.html'
})
export class RecruiterComponent implements OnInit {

    title = 'Recruiter module';
    inviteForm: FormGroup;
    recruiterEmail:FormControl;
    candidateEmail:FormControl;
    base64Emails: string = null;

    emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor(private fb:FormBuilder, private recruiterService: RecruiterService, private router:Router) { }

    ngOnInit() {         
        this.recruiterEmail = new FormControl(null, [Validators.required, Validators.pattern(this.emailRegExp)]);
        this.candidateEmail = new FormControl(null, [Validators.compose([Validators.required, Validators.pattern(this.emailRegExp)])]);
        this.inviteForm = this.fb.group({
            'recruiterEmail': this.recruiterEmail,
            'candidateEmail': this.candidateEmail
        });//, { validator: emailValidator }
    }

    onInvite(inviteFormValue: any):void {
        this.base64Emails = null;
        this.recruiterService.inviteCandidate(inviteFormValue)
            .subscribe(
                data => {
                            console.log('Candidate Email Sent'); //success
                            console.log(data);
                            this.base64Emails = data;                           
                        },
                err => console.log(err), //catch
                () => console.log('Candidate Email Post Complete')//finally
            );
    } 

    onValidate(control: FormControl){
        if(control.touched){
            console.log(control.hasError('pattern'));
        }
        return true;
    }
}