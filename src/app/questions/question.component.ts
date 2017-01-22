import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IQuestion } from './question.interface';
import { QuestionService } from './question.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
     styleUrls: ['./question.component.css'],
    providers:[ QuestionService ]
})
export class QuestionComponent implements OnInit {

    questions:IQuestion[];

    constructor(private _questionService: QuestionService) { }

    ngOnInit() { 
        this._questionService.getQuestions()
                .subscribe(
                    data => { this.questions = data; console.log(data); },
                    error => console.log(error)
                ); 
    }
}