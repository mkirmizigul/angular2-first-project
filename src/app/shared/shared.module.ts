import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RestApiService} from './restapi.service'

@NgModule({
    providers: [RestApiService]
})
export class SharedModule { }
