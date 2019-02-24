import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserModel } from '../models/user-model';
import { AuthModel } from '../models/auth-model';
import { LocalStorageService } from 'angular-2-local-storage';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    HOST_URL = environment.host;
    REGISTER_URL = '/register';
    LOGIN_URL = '/login';


    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService,
        private router: Router,

    ) { }

    clear(): void {
        this.localStorageService.clearAll();
    }
    isAuthenticated(): boolean {
        return this.localStorageService.get('token') != null && !this.isTokenExpired();
    }

    isTokenExpired(): boolean {
        return false;
    }

    public register(user: UserModel): Observable<UserModel> {
        return this.http
            .post<UserModel>(this.HOST_URL + this.REGISTER_URL, user).pipe(
                map((res: AuthModel) => {
                    this.localStorageService.set('token', res.data);
                    return <UserModel>res;
                })
            );
    }

    public login(user: UserModel): Observable<UserModel> {
        return this.http
            .post<UserModel>(this.HOST_URL + this.LOGIN_URL, user).pipe(
                map((res: AuthModel) => {
                    this.localStorageService.set('token', res.data);
                    this.router.navigate(['/auth']);

                    return <UserModel>res;
                })
            );
    }

    logout(): void {
        this.clear();
        this.router.navigate(['/login']);
    }
}
