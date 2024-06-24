import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  questions = [
    {
      id: 1,
      question: 'Quelle est la capitale de la France ?',
      options: [
        {
          text: 'Berlin',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Madrid',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Paris',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Rome',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 2,
      question: "Qui a écrit 'Les Misérables' ?",
      options: [
        {
          text: 'Victor Hugo',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Émile Zola',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Gustave Flaubert',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Honoré de Balzac',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Quel est le plus grand océan du monde ?',
      options: [
        {
          text: 'Océan Atlantique',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Océan Pacifique',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Océan Indien',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Océan Arctique',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 4,
      question: "Quelle est la formule chimique de l'eau ?",
      options: [
        {
          text: 'H2O',
          isCorrect: true,
          select: false,
        },
        {
          text: 'CO2',
          isCorrect: false,
          select: false,
        },
        {
          text: 'O2',
          isCorrect: false,
          select: false,
        },
        {
          text: 'NaCl',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 5,
      question: 'En quelle année a eu lieu la Révolution française ?',
      options: [
        {
          text: '1776',
          isCorrect: false,
          select: false,
        },
        {
          text: '1789',
          isCorrect: true,
          select: false,
        },
        {
          text: '1815',
          isCorrect: false,
          select: false,
        },
        {
          text: '1848',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 6,
      question: "Quel est le symbole chimique de l'or ?",
      options: [
        {
          text: 'Au',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Ag',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Fe',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Hg',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 7,
      question: "Qui a peint 'La Joconde' ?",
      options: [
        {
          text: 'Vincent van Gogh',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Claude Monet',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Pablo Picasso',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Leonardo da Vinci',
          isCorrect: true,
          select: false,
        },
      ],
    },
    {
      id: 8,
      question: 'Quel est le plus long fleuve du monde ?',
      options: [
        {
          text: 'Amazone',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Nil',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Yangtsé',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Mississippi',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 9,
      question: "Quelle est la capitale de l'Espagne ?",
      options: [
        {
          text: 'Berlin',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Madrid',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Paris',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Rome',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 10,
      question: "Qui a écrit 'Romeo and Juliet' ?",
      options: [
        {
          text: 'William Shakespeare',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Jane Austen',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Charles Dickens',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Mark Twain',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 11,
      question: 'Quel est le plus haut sommet du monde ?',
      options: [
        {
          text: 'Mont Everest',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Mont Kilimandjaro',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Mont McKinley',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Mont Blanc',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 12,
      question: 'Quelle est la formule chimique du dioxyde de carbone ?',
      options: [
        {
          text: 'CO2',
          isCorrect: true,
          select: false,
        },
        {
          text: 'H2O',
          isCorrect: false,
          select: false,
        },
        {
          text: 'O2',
          isCorrect: false,
          select: false,
        },
        {
          text: 'NaCl',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 13,
      question: 'En quelle année a eu lieu la Première Guerre mondiale ?',
      options: [
        {
          text: '1914',
          isCorrect: true,
          select: false,
        },
        {
          text: '1918',
          isCorrect: false,
          select: false,
        },
        {
          text: '1939',
          isCorrect: false,
          select: false,
        },
        {
          text: '1945',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 14,
      question: 'Quelle est la capitale de l\'Italie ?',
      options: [
        {
          text: 'Berlin',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Madrid',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Rome',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Paris',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 15,
      question: 'Quel est le plus grand désert du monde ?',
      options: [
        {
          text: 'Sahara',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Gobi',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Kalahari',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Atacama',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 16,
      question: 'Quelle est la capitale de l\'Allemagne ?',
      options: [
        {
          text: 'Berlin',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Madrid',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Paris',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Rome',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 17,
      question: 'Quel est le plus grand pays du monde ?',
      options: [
        {
          text: 'Russie',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Canada',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Chine',
          isCorrect: false,
          select: false,
        },
        {
          text: 'États-Unis',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 18,
      question: 'Quel est le plus grand animal terrestre ?',
      options: [
        {
          text: 'Éléphant',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Girafe',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Hippopotame',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Rhinocéros',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 19,
      question: 'Quel est le plus grand continent du monde ?',
      options: [
        {
          text: 'Asie',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Afrique',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Amérique',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Europe',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 20,
      question: 'Quel est le plus grand lac du monde ?',
      options: [
        {
          text: 'Mer Caspienne',
          isCorrect: true,
          select: false,
        },
        {
          text: 'lac Supérieur',
          isCorrect: false,
          select: false,
        },
        {
          text: 'lac Victoria',
          isCorrect: false,
          select: false,
        },
        {
          text: 'lac Baïkal',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 21,
      question: 'Quel est le plus grand pays d\'Amérique du Sud ?',
      options: [
        {
          text: 'Brésil',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Argentine',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Colombie',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Pérou',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 22,
      question: 'Quel est le plus grand océan du monde ?',
      options: [
        {
          text: 'Océan Pacifique',
          isCorrect: true,
          select: false,
        },
        {
          text: 'Océan Atlantique',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Océan Indien',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Océan Arctique',
          isCorrect: false,
          select: false,
        },
      ],
    },
    {
      id: 23,
      question: 'Quel est le plus grand pays d\'Afrique ?',
      options: [
        {
          text: 'Algérie',
          isCorrect: true,
          select: false,
        },
        {
          text: 'République démocratique du Congo',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Soudan',
          isCorrect: false,
          select: false,
        },
        {
          text: 'Libye',
          isCorrect: false,
          select: false,
        },
      ],
    },
  ];

  getQuestions() {
    return this.questions;
  }

  getById(id: number) {
    return this.questions.find((question) => question.id === id);
  }
}
