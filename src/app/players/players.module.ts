import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PlayerListComponent} from './player-list/player-list.component'
import {PlayersRoutingModule} from './players.routing'
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { PlayersProfileComponent } from './players-profile/players-profile.component';
import { RegistrationComponent } from './registration/registration.component'

@NgModule(
    {
        imports:[FormsModule,PlayersRoutingModule,SharedModule,CommonModule],
        declarations:[PlayerListComponent, PlayersProfileComponent, RegistrationComponent]
    }
)
export class PlayersModule{

}



