import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../providers/auth-register-service';

@Component({
  selector: 'ebs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide: Boolean = true;
  formErrors = true;

  constructor(
    public fb: FormBuilder,
    public localStorageService: LocalStorageService,
    public router: Router,
    public activateroute: ActivatedRoute,
    public loginService: LoginService,


  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.form.get('email');
  } 
   ngOnInit(): void {
  }

  onSubmit(form) {
    this.loginService.login(form).toPromise().then(() => { }).catch(() => {
      this.formErrors = false;
    });
  }

}
