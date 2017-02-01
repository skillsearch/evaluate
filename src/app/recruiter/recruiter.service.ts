import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RecruiterService {

    private apiEndPoint: string = "http://localhost:4200/api/invite";
    invitationHash:string;

    constructor(private http: Http) { }

    inviteCandidate(inviteFormValue: any):Observable<string> {
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url:string = this.apiEndPoint;
        let body = JSON.stringify(inviteFormValue);        
        let options:RequestOptionsArgs = { headers:headers };
        
        return this.http
            .post(url, body, options)
            .map(data=>{ 
                this.invitationHash = data["_body"]; 
                return this.invitationHash; 
            });
    }
}