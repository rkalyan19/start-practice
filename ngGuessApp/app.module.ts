import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GuessAppComponent } from './guess-app/guess-app.component';
import {FormsModule} from '@angular/forms';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailsComponent } from './player-details/player-details.component'
@NgModule({
  declarations: [
    AppComponent,
    
    GuessAppComponent,
    
    PlayersComponent,
    
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
