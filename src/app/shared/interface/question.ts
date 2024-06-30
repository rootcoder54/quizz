export interface Question {
    question:string;
    options:options[];
}

interface options{
    text: string;
    isCorrect: boolean;
    select: boolean;
}