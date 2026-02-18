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
  ) { }
  ngOnInit(): void {
    this.getGames();
  }
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
  goToDetail(id: number) {
    this.router.navigate(['/game', id]);
  }
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