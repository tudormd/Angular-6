import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GroupModel } from '../models/group-model';
import { LocalStorageService } from 'angular-2-local-storage';
import { HttpClient } from '@angular/common/http';

import { CoreService } from './core-service';

@Injectable()
export class GroupService extends CoreService {
    GROUP_URL = '/group';


    constructor(
        private http: HttpClient,
        localStorageService: LocalStorageService,
    ) {
        super(localStorageService);
    }

    public getList(): Observable<GroupModel[]> {
        return this.http.get<GroupModel[]>(this.API_URL + this.GROUP_URL, {
            headers: this.getAuthTokenAndContentType(),
        });
    }

    public get(id: number): Observable<GroupModel> {
        return this.http.get<GroupModel>(this.API_URL + this.GROUP_URL + '/' + id, {
            headers: this.getAuthTokenAndContentType()
        });
    }
    public create(group: GroupModel): Observable<GroupModel> {
        return this.http
            .post<GroupModel>(this.API_URL + this.GROUP_URL, group, {
                headers: this.getAuthTokenAndContentType(),
            });
    }
    public update(id: number, group: GroupModel): Observable<GroupModel> {
        return this.http
            .put<GroupModel>(this.API_URL + this.GROUP_URL + '/' + id, group, {
                headers: this.getAuthTokenAndContentType(),
            });
    }
}
