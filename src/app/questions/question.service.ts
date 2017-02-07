import { Injectable } from '@angular/core';

import { QuestionGroup, AllowedQuestionTypes } from './question.interface';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export const QuestionTypes: AllowedQuestionTypes = {
    js: 'js',
    sql: 'sql',
    general: 'general',
};

@Injectable()
export class QuestionService {

    private apiEndPoint: string = "/api/questions";

    constructor(private http: Http) { }

    getQuestions(invitationCode: string): Observable<QuestionGroup[]> {
        return this.http.get(this.apiEndPoint + '?invitationCode=' + invitationCode)
            .map(data => this.extractData(data))
            .catch(error => this.handleError(error));
    }

    private extractData(response: Response) {
        // TODO AF20170205 This check seems redundant.
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' + response.status);
        }
        return response.json();
    }

    private handleError(error: any) {
        let errorMessage = error.message || 'Server error';
        console.error(errorMessage); // log to console instead
        return Observable.throw(errorMessage);
    }
}