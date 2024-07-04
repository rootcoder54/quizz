export interface Question {
    question:string;
    options:options[];
}

export interface options{
    text: string;
    isCorrect: boolean;
    select: boolean;
}
