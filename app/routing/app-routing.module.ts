import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StoryComponent} from "../components/story.component";
import {StatisticsComponent} from "../components/stories-statistics.component";

const routes: Routes = [
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: 'stories',     component: StoryComponent },
  { path: 'statisticsPath',  component: StatisticsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
