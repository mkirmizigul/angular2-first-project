import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TeamListComponent} from './team-list/team-list.component'
import {TeamssRoutingModule} from './teams.routing'

@NgModule(
    {
        imports:[BrowserModule,FormsModule,TeamssRoutingModule],
        declarations:[TeamListComponent]
    }
)
export class TeamsModule{

}



