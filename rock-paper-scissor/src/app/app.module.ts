import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { OptionComponent } from './components/game/option/option.component';
import { ControlComponent } from './components/game/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    OptionComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
