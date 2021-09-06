import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    lastName: new FormControl(this.authService.currentUser.lastName,
      Validators.required)
  })

  save(values: any): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(values.firstName, values.lastName);
      this.router.navigate(['/events']);
    }
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  validateFirstName(): boolean {
    return this.profileForm.controls.firstName.invalid
      && this.profileForm.controls.firstName.touched;
  }

  validateLastName(): boolean {
    return this.profileForm.controls.lastName.invalid
      && this.profileForm.controls.lastName.touched;
  }

}