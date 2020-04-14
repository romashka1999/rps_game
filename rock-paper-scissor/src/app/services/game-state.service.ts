import { Injectable } from '@angular/core';
import { OPTIONS } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  constructor() { }

  playerChoice(choice: string): string {
    return this.checkPlayerChoice(choice, this.computerChoce());
  }

  computerChoce(): string {
    const randomIndex = Math.floor(Math.random() * 3);
    return OPTIONS[randomIndex];
  }

  checkPlayerChoice(playerChoice: string, computerChoice: string) {
    if (playerChoice == computerChoice) {
      return 'DRAW';
    }
    switch (playerChoice) {
      case 'rock':
        if (computerChoice === 'scissor') {
          return 'WIN'
        } else {
          return 'LOSE'
        }
      case 'paper':
        if (computerChoice === 'rock') {
          return 'WIN'
        } else {
          return 'LOSE'
        }
      case 'scissor':
        if (computerChoice === 'paper') {
          return 'WIN'
        } else {
          return 'LOSE'
        }
    }
  }

}
