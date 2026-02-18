import { Component } from '@angular/core';
import { GameList } from '../../components/game-list/game-list';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GameList],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

} 
