import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function latitudeAndLongitudeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = /^-?\d+(\.\d+)?$/.test(control.value);

    if (control.value && !isValid) {
      return { invalidLatitudeOrLongitude: { value: control.value } };
    }

    return null;
  };
}
