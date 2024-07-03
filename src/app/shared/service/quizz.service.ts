import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

    private apiUrl = 'http://localhost:3000/quizzes';

  constructor(private http: HttpClient) { }

  
  getQuizzes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getQuizzesId(id:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  
  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }


  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
