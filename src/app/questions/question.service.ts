import { Injectable } from '@angular/core';

import { IQuestion } from './question.interface';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class QuestionService {

    questions: IQuestion[];
    private apiEndPoint: string = "http://localhost:4200/api/questions";

    constructor(private _http:Http) { }

    getQuestions():Observable<IQuestion[]>{
        return this._http.get(this.apiEndPoint)
                    .map(data=>this.extractData(data))
                    .catch(error=>this.handleError(error));
    }

    private extractData(response: Response) {
       if (response.status < 200 || response.status >= 300) {
             throw new Error('Bad response status: ' + response.status);
       }
       return response.json();
    }

    private handleError (error: any) {
        let errorMessage = error.message || 'Server error';
        console.error(errorMessage); // log to console instead
        return Observable.throw(errorMessage);
    }
}