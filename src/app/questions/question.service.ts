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

    private apiEndPoint = '/api';

    constructor(private http: Http) { }

    getQuestions(invitationCode: string): Observable<QuestionGroup[]> {
        return this.http.get(this.apiEndPoint + '/questions?invitationCode=' + invitationCode)
            .map(data => this.extractData(data))
            .catch(error => this.handleError(error));
    }

    private extractData(response: Response) {
        // TODO AF20170205 This check seems redundant.
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' + response.status);
        }

        let questionGroups: QuestionGroup[] = response.json();
        questionGroups.forEach(questionGroup => {
            questionGroup.questionList.forEach(question => {
                question.answers = [];
                question.possibleAnswers.forEach(possibleAnswer => {
                    question.answers.push({
                        answer: possibleAnswer,
                        selected: false,
                    });
                });
            });
        });
        return questionGroups;
    }

    private handleError(error: any) {
        let errorMessage = error.message || 'Server error';
        console.error(errorMessage); // log to console instead
        return Observable.throw(errorMessage);
    }

    submitAnswers(invitationCode: string, questionGroups: QuestionGroup[]) {
        let body = {
            invitationCode: invitationCode,
            answers: questionGroups,
        };

        this.http.post(this.apiEndPoint + '/save-answers', body)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
}