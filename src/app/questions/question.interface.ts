export interface Answer {
    answer: string | number;
    selected: boolean;
}

export interface Question {
    readonly codeSnippet?: string;
    readonly correctAnswer?: string | number;
    readonly possibleAnswers: (string | number)[];
    answers?: Answer[];
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