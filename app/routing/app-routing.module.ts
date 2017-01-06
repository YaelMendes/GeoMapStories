import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquationComponent } from '../equa/equation.component';
import {QuestionComponent} from "../quest/question.component";

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions',     component: QuestionComponent },
  { path: 'equations',     component: EquationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
