import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeatailsComponent } from './components/deatails/deatails.component';
import { DemoComponent } from './components/demo/demo.component';
import { DisplayAllEmployeesComponent } from './components/display-all-employees/display-all-employees.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UpdateComponent } from './components/update/update.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'demo', component: DemoComponent,canActivate:[GuardService] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'details/:name', component: DeatailsComponent },
  { path: 'employees', component: DisplayAllEmployeesComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'profile', component: ProfileComponent,canActivate:[GuardService] },
  
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
