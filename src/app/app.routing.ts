import { NgModule } from '@angular/core';
import { PreloadAllModules,Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { 
    path: 'teams',
    loadChildren:'app/teams/teams.module#TeamsModule'
  },
  { 
    path: '', 
    loadChildren: 'app/players/players.module#PlayersModule' 
  },
  { 
    path: 'players', 
    loadChildren: 'app/players/players.module#PlayersModule' 
  },
  { 
    path: '**',
    component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

