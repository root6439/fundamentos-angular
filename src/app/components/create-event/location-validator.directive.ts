import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}
  ]
})
export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } | null {
    let address = formGroup.controls['address'];
    let city = formGroup.controls['city'];
    let country = formGroup.controls['country'];
    let onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if (
      (address &&
        address.value &&
        city &&
        city.value &&
        country &&
        country.value) ||
      (onlineUrl && onlineUrl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false }
    }
  }
}
