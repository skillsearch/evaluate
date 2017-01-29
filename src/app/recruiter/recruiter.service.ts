import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { IEmailInvite } from './email.invite.interface';

@Injectable()
export class RecruiterService {

    private apiEndPoint: string = "http://localhost:4200/api/invite";
    invitationHash:string;

    constructor(private _http: Http) { }

    inviteCandidate(emailInvite:IEmailInvite):Observable<any> {
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url:string = this.apiEndPoint;
        let body = JSON.stringify({recruiterEmail:"vladp@live.ca", candidateEmail: "andreyf@live.ca"});        
        let options:RequestOptionsArgs = { headers:headers };
        
        return this._http
            .post(url, body, options).map(data=>{ this.invitationHash = data["_body"]; return this.invitationHash; });
    }
}