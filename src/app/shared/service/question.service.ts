import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Question } from '../interface/question';


@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  private apiUrl = 'http://localhost:3000/questions';

  constructor(private http: HttpClient) {}


  getQuetions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  getById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/${id}`);
  }


}
