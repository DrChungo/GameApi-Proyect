import { ChangeDetectorRef, Component } from '@angular/core';
import { GamesService } from '../../services/games-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  imports: [],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {


  constructor(public gamesService: GamesService
    , private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
  //metodo para inicializar el componente
  ngOnInit(): void {
    this.getGames();
  }
  //metodo para obtener los juegos
  getGames() {
    this.gamesService.getGames().subscribe({
      next: (data: any[]) => {
        this.gamesService.games = data;
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.log('Error obteniendo juegos:', e);
      },
    });
  }
  //metodo para ir a la pagina de detalle de un juego
  goToDetail(id: number) {
    this.router.navigate(['/game', id]);
  }
  //metodo para eliminar un juego
  delete(id: number) {
    const ok = confirm('¿Eliminar juego?');
    if (!ok) return;

    this.gamesService.deleteGame(id).subscribe({
      next: () => {
        this.gamesService.games = this.gamesService.games.filter((g) => g.id !== id);
        this.cdr.detectChanges();
      },
      error: (e) => console.error(e),
    });
  }


}