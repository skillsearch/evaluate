import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Question } from './question.interface';
import { QuestionService } from './question.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css'],
    providers:[ QuestionService ]
})
export class QuestionComponent implements OnInit {

    questions:Question[];

    constructor(private questionService: QuestionService, private http: Http) { }

    ngOnInit() { 
        this.questionService.getQuestions()
                .subscribe(
                    data => { this.questions = data; console.log(data); },
                    error => console.log(error)
                ); 
    }    
}