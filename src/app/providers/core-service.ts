import { LocalStorageService } from 'angular-2-local-storage';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export abstract class CoreService {
    API_URL = environment.apiUrl;
    HOST_URL = environment.host;

    constructor(
        private localStorageService: LocalStorageService,
    ) { }

    protected getAuthTokenAndContentType(token = null) {
        const tkn = token ? token : <string>this.localStorageService.get('token');
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-access-token': tkn
        });
        return headers;
    }
}
