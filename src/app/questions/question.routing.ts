import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './question.component';

const questionRoutes: Routes = [
  { path: 'questions', component: QuestionComponent},
];

export const questionRouting: ModuleWithProviders = RouterModule.forChild(questionRoutes);