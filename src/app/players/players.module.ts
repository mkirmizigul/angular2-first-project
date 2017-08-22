import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PlayerListComponent} from './player-list/player-list.component'
import {PlayersRoutingModule} from './players.routing'

@NgModule(
    {
        imports:[BrowserModule,FormsModule,PlayersRoutingModule],
        declarations:[PlayerListComponent]
    }
)
export class PlayersModule{

}


