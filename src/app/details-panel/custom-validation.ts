import {AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function greaterThanZero(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        return Number(control.value)===0 ? {greaterThanZero:true}: null;
    }
}