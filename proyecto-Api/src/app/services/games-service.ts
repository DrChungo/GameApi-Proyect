import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly apiUrl = 'https://698e1568aded595c2531079c.mockapi.io/games';
  games: any[];
  selectedGame: any = null;
  constructor(private http: HttpClient) {
    this.games = [];
  }
  getGames() {
    return this.http.get<any[]>(this.apiUrl);
  }
  getGameById(id: string | number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  addGame(game: any) {
    return this.http.post<any>('https://698e1568aded595c2531079c.mockapi.io/games', game);
  }
  deleteGame(id: string | number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  updateGame(id: string | number, game: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, game);
  }
}
