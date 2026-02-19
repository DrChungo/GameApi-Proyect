import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//servicio para obtener los juegos
export class GamesService {
  //url de la API
  private readonly apiUrl = 'https://698e1568aded595c2531079c.mockapi.io/games';
  
  games: any[];

  selectedGame: any = null;
  constructor(private http: HttpClient) {
    this.games = [];
  }
  //metodo para obtener los juegos
  getGames() {
    return this.http.get<any[]>(this.apiUrl);
  }
  //metodo para obtener un juego por id
  getGameById(id: string | number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  //metodo para agregar un juego
  addGame(game: any) {
    return this.http.post<any>('https://698e1568aded595c2531079c.mockapi.io/games', game);
  }
  //metodo para eliminar un juego
  deleteGame(id: string | number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  } 
  //metodo para actualizar un juego
  updateGame(id: string | number, game: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, game);
  }
}
