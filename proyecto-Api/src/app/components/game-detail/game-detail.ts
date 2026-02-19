import { ChangeDetectorRef, Component } from '@angular/core';
import { GamesService } from '../../services/games-service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  imports: [],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.css',
})
export class GameDetail {
  game: any = {};
  //constructor para obtener el juego por id
  constructor(public gamesService: GamesService,
     private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private r: Router
  ) { }
  //metodo para inicializar el componente
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (!id) return;

    this.loadGame(id);
  }

  //metodo para obtener el juego por id
  loadGame(id: string) {

    this.gamesService.getGameById(id).subscribe({
      next: (data) => {
        this.game = data;
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.log('Error obteniendo juegos:', e);
      },
    });
  }

  goToEdit(id: number) {
    this.r.navigate(['/game', id, 'edit']);
  }





}
