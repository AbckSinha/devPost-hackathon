import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function UseridMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.useridMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value === matchingControl.value) {
            matchingControl.setErrors({ useridMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}
