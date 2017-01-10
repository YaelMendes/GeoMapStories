import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StoryComponent} from "../components/story.component";

const routes: Routes = [
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: 'stories',     component: StoryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
