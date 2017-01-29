import { Component, OnInit } from '@angular/core';
import { RecruiterService } from './recruiter.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'recruiter',
    templateUrl: './recruiter.component.html'
})
export class RecruiterComponent implements OnInit {

    title = 'Recruiter module';
    inviteForm: FormGroup;
    recruiterEmail:FormControl;
    candidateEmail:FormControl;
    invitationHash: string = null;

    constructor(private _fb:FormBuilder, private _recruiterService: RecruiterService, private _router:Router) { }

    ngOnInit() { 
        this.recruiterEmail = new FormControl('', [Validators.minLength(3), Validators.maxLength(50), Validators.required]);
        this.candidateEmail = new FormControl('', [Validators.minLength(3), Validators.maxLength(50), Validators.required]);
        this.inviteForm = this._fb.group({
            'recruiterEmail':this.recruiterEmail,
            'candidateEmail': this.candidateEmail
        });
    }

    onInvite() {
        console.log(this.inviteForm.value);
        this.invitationHash = null;
        this._recruiterService.inviteCandidate(this.inviteForm.value)
            .subscribe(
                data => {
                            console.log('Candidate Email Sent'); //success
                            console.log(data);
                            this.invitationHash = data;                           
                        },
                err => console.log(err), //catch
                () => console.log('Candidate Email Post Complete')//finally
            );
        //this._router.navigateByUrl('/home');
    } 
}