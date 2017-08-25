import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListComponent } from './player-list/player-list.component';

import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: '', component: PlayerListComponent },
  { path: 'register/player', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule { }

export const routedComponents = [PlayerListComponent];