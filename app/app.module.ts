import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './routing/app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DataService }          from './services/data.service';
import {StoryComponent} from "./components/story.component";
import {StoryListComponent} from "./components/stories-list.component";
import {StoryAddComponent} from "./components/story-add.component";
import {MyTestStoryComponent} from "./components/test-one-story.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StoryComponent,
    StoryListComponent,
    StoryAddComponent,
    MyTestStoryComponent
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
