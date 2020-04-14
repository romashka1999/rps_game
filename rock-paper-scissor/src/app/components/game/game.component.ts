import { Component, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/services/game-state.service';
import { GAME_ROUNDS } from '../../models/constants';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  draws: number = 0;
  playerWins: number = 0;
  computerWIns: number = 0;
  gameRounds: number = GAME_ROUNDS;
  gameIsRunning: boolean = false;

  constructor(private readonly gameStateService: GameStateService) { }

  ngOnInit() {
  }

  onChoice(choice: string) {
    console.log(this.gameRounds);
    console.log(this.draws + this.playerWins + this.computerWIns);
    if (!this.gameIsRunning) {
      alert('game is not running');
      return;
    }
    if(this.draws + this.playerWins + this.computerWIns === this.gameRounds) {
      this.gameIsRunning = false;
      if(this.playerWins === this.computerWIns) {
        alert('DRAW');
        return;
      } else if(this.playerWins > this.computerWIns) {
        alert('PLAYER WIN');
        return;
      } else {
        alert('COMPUTER WIN');
        return;
      }
    } 
    switch (this.gameStateService.playerChoice(choice)) {
      case 'WIN':
        this.playerWins++;
        break;
      case 'DRAW':
        this.draws++;
        break;
      case 'LOSE':
        this.computerWIns++;
        break;
    }
  }


  onGameStarted(gameRounds: number) {
    this.gameIsRunning = true;
    this.computerWIns = 0;
    this.playerWins = 0;
    this.draws = 0;
    this.gameRounds = gameRounds ? gameRounds : GAME_ROUNDS;
  }

  

}
