import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './routing/app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DataService }          from './services/data.service';
import {StoryComponent} from './components/story.component';
import {StoryListComponent} from './components/stories-list.component';
import {ShowStoryComponent} from './components/story-selected.component';
import {StoryAddFormComponent} from './components/story-add-form.component';
import {StatisticsComponent} from './components/stories-statistics.component';
import {SandBoxComponent} from './components/sandbox.component';
import {StoryNgxOlComponent} from './components/story-ngx-ol.component';

import { AngularOpenlayersModule } from 'ngx-openlayers';
import {MenuBarComponent} from './components/menu-bar.component';
import {WindowRef} from './components/WindowRef';
import {StoryPipe} from './pipes/story-pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    AppRoutingModule,
    AngularOpenlayersModule
  ],
  declarations: [
    AppComponent,
    StoryComponent,
    StoryListComponent,
    ShowStoryComponent,
    StoryAddFormComponent,
    StatisticsComponent,
    SandBoxComponent,
    StoryNgxOlComponent,
    MenuBarComponent,
    StoryPipe
  ],
  providers: [ DataService, WindowRef ],
  bootstrap: [ AppComponent ],
  exports: [ StoryComponent ]
})
export class AppModule { }
