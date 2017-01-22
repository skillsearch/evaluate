import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home.component';
import { QuestionComponent } from './questions/question.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'questions',  component: QuestionComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);