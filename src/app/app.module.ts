import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    PlayersModule,
    TeamsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
