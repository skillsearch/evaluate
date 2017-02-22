import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Question, QuestionGroup } from './question.interface';
import { QuestionService } from './question.service';

@Component({
    templateUrl: './question.component.html',
    providers: [QuestionService]
})
export class QuestionComponent implements OnInit {

    invitationCode: string;
    questionGroups: QuestionGroup[];

    constructor(private questionService: QuestionService, private route: ActivatedRoute) {  }

    ngOnInit() {
        this.invitationCode = this.route.snapshot.params['invitationCode'];

        this.questionService.getQuestions(this.invitationCode)
            .subscribe(
                data => {
                    this.questionGroups = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
            });
    }

    submitAnswers() {
        this.questionService.submitAnswers(this.invitationCode, this.questionGroups)
            .subscribe(
                data => {                    
                    console.log(data);
                },
                error => {
                    console.log(error);
            });
    }
}