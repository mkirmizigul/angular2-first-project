import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {TeamListComponent} from './team-list/team-list.component'
import {TeamssRoutingModule} from './teams.routing'
import {CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { TeamEditComponent } from './team-edit/team-edit.component'

@NgModule(
    {
        imports:[FormsModule,TeamssRoutingModule,SharedModule,CommonModule],
        declarations:[TeamListComponent, TeamEditComponent]
    }
)
export class TeamsModule{

}



