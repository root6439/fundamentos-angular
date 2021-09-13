import { AuthService } from './../auth.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public mouseOverLogin: boolean;
  loginInvalid: boolean = false;

  public form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.authService
      .login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe((resp) => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['/events']);
        }
      });
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
