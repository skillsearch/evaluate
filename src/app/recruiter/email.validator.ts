import { AbstractControl } from '@angular/forms';

export const emailValidator = (control:AbstractControl): {[key: string]: boolean} => {

    // const recruiterEmail = control.get('recruiterEmail');
    // const candidateEmail = control.get('candidateEmail');
    // console.log(recruiterEmail.hasError('pattern'));
    // const emailRegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    // if (recruiterEmail!=null && recruiterEmail.value != "" && emailRegExp.test(recruiterEmail.value)) {
    //     return { "incorrectRecruiterEmailFormat": true };
    // }
    // if (candidateEmail!=null && candidateEmail.value != "" && emailRegExp.test(candidateEmail.value)) {
    //     return { "incorrectCandidateEmailFormat": true };
    // }

    return null;
};