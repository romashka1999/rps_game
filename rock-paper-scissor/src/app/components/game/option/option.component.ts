import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() option: string;
  @Output() choice = new EventEmitter<string>();

  readonly rpsImgPathes = {
    rock: '../../../../assets/images/rock.PNG',
    paper: '../../../../assets/images/paper.PNG',
    scissor: '../../../../assets/images/scissor.PNG'
  }

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.choice.emit(this.option);
  }

}
