import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesService } from '../../services/games-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-edit-game',
  imports: [ CommonModule, FormsModule],
  templateUrl: './edit-game.html',
  styleUrl: './edit-game.css',
})
export class EditGame {
  id = 0;

  game = {
    title: '',
    releaseYear: null as number | null,
    genres: [],
    genresText: '',
    comment: '',
    imageUrl: '',
    description: ''
  };

  constructor(private route: ActivatedRoute,
    private gameService: GamesService,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (!idStr) return;

    this.id = Number(idStr);

    this.gameService.getGameById(this.id).subscribe({
      next: (data) => {
        // rellenamos el form con lo que viene de la API
        this.game = {
          title: data.title ?? '',
          releaseYear: data.releaseYear ?? null,
          genres: data.genres ?? [],
          genresText: data.genres?.join(', ') ?? '',
          comment: data.comment ?? '',
          imageUrl: data.imageUrl ?? '',
          description: data.description ?? ''
        };
        this.cdr.detectChanges();
      },
      error: (e) => console.error(e),
    });
  }

  submit() {
    const genresArray = (this.game.genresText ?? '')
      .split(',')
      .map(g => g.trim())
      .filter(g => g.length > 0);

    const payload = {
      title: this.game.title,
      releaseYear: this.game.releaseYear,
      genres: genresArray,
      comment: this.game.comment,
      imageUrl: this.game.imageUrl,
      description: this.game.description
    };

    this.gameService.updateGame(this.id, payload).subscribe({
      next: () => {
        // actualiza lista en memoria si existe
        const i = this.gameService.games.findIndex(g => g.id === this.id);
        if (i !== -1) {
          this.gameService.games[i] = {
            ...this.gameService.games[i],
            ...payload,
            genres: genresArray
          };
        }

        // vuelve al detalle
        this.router.navigate(['/game', this.id]);
      },
      error: (e) => console.error(e),
    });
  }

  reset() {
    this.game = {
      title: '',
      releaseYear: null,
      genres: [],
      genresText: '',
      comment: '',
      imageUrl: '',
      description: ''
    };
  }

}