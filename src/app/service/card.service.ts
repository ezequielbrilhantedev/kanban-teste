import { Card } from './../module/card';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:5000/cards';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${API}`, card);
  }
}
