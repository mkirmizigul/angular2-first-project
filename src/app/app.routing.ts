import { NgModule } from '@angular/core';
import { PreloadAllModules,Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { PlayerListComponent } from './players/player-list/player-list.component';

const routes: Routes = [
  { 
    path: 'teams',
    loadChildren:'app/teams/teams.module#TeamsModule'
  },
  { 
    path: '**',
    component: NotFoundComponent 
  },
  { 
    path: '', 
    component: PlayerListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

