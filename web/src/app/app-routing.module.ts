import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './pages/apply/apply.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeDetailComponent } from './pages/homes-list/home-detail/home-detail.component';
import { HomesListComponent } from './pages/homes-list/homes-list.component';
import { AboutComponent } from './pages/misc/about/about.component';
import { FeaturesComponent } from './pages/misc/features/features.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'homes',
    component: HomesListComponent,
  },
  {
    path: 'apply',
    component: ApplyComponent,
  },
  {
    path: 'homes/:homeId/detail',
    component: HomeDetailComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
