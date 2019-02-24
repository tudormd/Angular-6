import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserModel } from '../models/user-model';
import { LocalStorageService } from 'angular-2-local-storage';
import { HttpClient } from '@angular/common/http';

import { CoreService } from './core-service';

@Injectable()
export class UserService extends CoreService {
    USER_URL = '/user';


    constructor(
        private http: HttpClient,
        localStorageService: LocalStorageService,
    ) {
        super(localStorageService);
    }

    public getList(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.API_URL + this.USER_URL, {
            headers: this.getAuthTokenAndContentType(),
        });
    }

    public get(id: number): Observable<UserModel> {
        return this.http.get<UserModel>(this.API_URL + this.USER_URL + '/' + id, {
            headers: this.getAuthTokenAndContentType()
        });
    }
    public create(user: UserModel): Observable<UserModel> {
        return this.http
            .post<UserModel>(this.API_URL + this.USER_URL, user, {
                headers: this.getAuthTokenAndContentType(),
            });
    }
    public update(id: number, user: UserModel): Observable<UserModel> {
        return this.http
            .put<UserModel>(this.API_URL + this.USER_URL + '/' + id, user, {
                headers: this.getAuthTokenAndContentType(),
            });
    }
}
