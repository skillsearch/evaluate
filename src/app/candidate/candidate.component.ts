import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './candidate.component.html',
})
export class CandidateComponent implements OnInit {

  invitationCodeForm: FormGroup;
  private invitationCode: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    // dmxhZEBsaXZlLmNhL2FuZHJleUBsaXZlLmNh
    let pattern = '^[a-zA-Z0-9+/]+={0,2}$';
    this.invitationCode = new FormControl('', [Validators.required, Validators.pattern(pattern)]);
    this.invitationCodeForm = new FormGroup({
      invitationCode: this.invitationCode,
    });
  }

  validateInvitationCode() {
    return this.invitationCode.valid || this.invitationCode.untouched;
  }

  goToQuestions(formValues) {
    if (this.invitationCodeForm.valid || true) {
      console.log(formValues.invitationCode);
      this.router.navigate(['/questions', formValues.invitationCode]);  
    }
  }
}
