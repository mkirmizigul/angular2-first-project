import { Component, Input } from '@angular/core';
import {Player} from "../../shared/players/player"
@Component({
  selector: 'app-players-profile',
  templateUrl: './players-profile.component.html',
  styleUrls: ['./players-profile.component.css']
})
export class PlayersProfileComponent  {
  
  @Input()
  selectedPlayer:Player;

  constructor() { 
    
  }

}
