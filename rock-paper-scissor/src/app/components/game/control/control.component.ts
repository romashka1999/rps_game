import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GAME_ROUNDS } from '../../../models/constants';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();
  gameRounds: number = GAME_ROUNDS;

  constructor() { }

  ngOnInit() {
  }

  onSatrtGame() {
    this.gameStarted.emit(this.gameRounds);
  }

}
