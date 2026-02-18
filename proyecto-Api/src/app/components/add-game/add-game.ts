import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GamesService } from '../../services/games-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-game.html',
  styleUrl: './add-game.css',
})
export class AddGame {

  game = {
    title: '',
    releaseYear: null as number | null,
    genres: [],
    genresText: '',
    comment: '',
    imageUrl: '',
    description: ''
  };

  constructor(private gameService: GamesService, private cdr: ChangeDetectorRef,private router: Router) { }

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

    this.gameService.addGame(payload).subscribe(() => {
      this.gameService.getGames().subscribe(data => {
        this.gameService.games = data;
        this.cdr.detectChanges();
        this.goToMain();

      });
      this.reset();
    });
  }

  goToMain() {
    this.router.navigate(['/']);
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