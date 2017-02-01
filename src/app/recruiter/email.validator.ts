import { AbstractControl } from '@angular/forms';

export const emailValidator = (control:AbstractControl): {[key: string]: boolean} => {

    const recruiterEmail = control.get('recruiterEmail');
    console.log(recruiterEmail.value);
    const candidateEmail = control.get('candidateEmail');
    console.log(candidateEmail.value);

    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    // if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
    //     return { "incorrectMailFormat": true };
    // }

    return null;
};