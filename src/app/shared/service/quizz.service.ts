import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quizz } from '../interface/quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

    private apiUrl = 'http://localhost:3000/quizzes';

  constructor(private http: HttpClient) { }

  
  getQuizzes(): Observable<Quizz[]> {
    return this.http.get<Quizz[]>(`${this.apiUrl}`);
  }

  getQuizzesId(id:string): Observable<Quizz> {
    return this.http.get<Quizz>(`${this.apiUrl}/${id}`);
  }

  
  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }


  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateQuiz(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}
