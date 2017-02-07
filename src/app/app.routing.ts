import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home.component';
import { CandidateComponent } from './candidate/candidate.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'candidate',  component: CandidateComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);