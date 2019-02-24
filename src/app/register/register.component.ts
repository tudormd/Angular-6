import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

import { LoginService } from '../providers/auth-register-service';
import { AuthModel } from '../models/auth-model';


@Component({
  selector: 'ebs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  hide: Boolean = true;

  constructor(
    public fb: FormBuilder,
    private loginService: LoginService,
    public localStorageService: LocalStorageService,
    public router: Router,
    public activateroute?: ActivatedRoute,
  ) {

    this.form = this.fb.group({
      firstName: [
        '',
        { validators: [Validators.minLength(5)], updateOn: 'blur' }
      ],
      lastName: [
        '',
        { validators: [Validators.minLength(5)], updateOn: 'blur' }
      ],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }
  get email() {
    return this.form.get('email');
  }

  onSubmit(form) {
    const password = this.form.get('password').value;
    const confirmPassword = this.form.get('confirmPassword').value;

    if (password === confirmPassword) {
      this.loginService.register(form).subscribe((token) => {
        this.localStorageService.set('Token', (<AuthModel>token).data);
      });
    } else {
      this.form.get('confirmPassword').setErrors({ MatchPassword: true });
    }
  }

}
