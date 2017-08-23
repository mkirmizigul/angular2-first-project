import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PlayerListComponent} from './player-list/player-list.component'
import {PlayersRoutingModule} from './players.routing'
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'

@NgModule(
    {
        imports:[BrowserModule,FormsModule,PlayersRoutingModule,SharedModule,CommonModule],
        declarations:[PlayerListComponent]
    }
)
export class PlayersModule{

}



