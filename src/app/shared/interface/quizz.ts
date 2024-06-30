export interface Quizz{
    question:string;
    reponses?: { text: string; isCorrect: boolean; select: boolean; }[];
    repondu: boolean;
    resultat: boolean;
}