import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruiterComponent } from './recruiter.component';

const recruiterRoutes: Routes = [
  { path: 'recruiter', component: RecruiterComponent},
];

export const recruiterRouting: ModuleWithProviders = RouterModule.forChild(recruiterRoutes);