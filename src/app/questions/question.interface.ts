export interface Question {
    readonly codeSnippet?: string;
    readonly correctAnswer?: string | number;
    readonly possibleAnswers: (string | number)[];
    readonly questionText: string;
}

export interface QuestionGroup {
    readonly questionList: Question[];
    readonly questionType: string;
}

export interface AllowedQuestionTypes {
    js: 'js';
    sql: 'sql';
    general: 'general';
}