import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Question, QuestionGroup } from './question.interface';
import { QuestionService } from './question.service';

@Component({
    templateUrl: './question.component.html',
    providers: [QuestionService]
})
export class QuestionComponent implements OnInit {

    questionGroups: QuestionGroup[];

    constructor(private questionService: QuestionService, private route: ActivatedRoute) { }

    ngOnInit() {
        let invitationCode = this.route.snapshot.params['invitationCode'];

        this.questionService.getQuestions(invitationCode)
            .subscribe(
            data => {
                this.questionGroups = data;
                console.log(data);
            },
            error => console.log(error)
            );
    }
}