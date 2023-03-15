import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DeatailsComponent } from './components/deatails/deatails.component';
import { DisplayAllEmployeesComponent } from './components/display-all-employees/display-all-employees.component';
import { SearchPipe } from './pipes/search.pipe';
import { EmployeeService } from './service/employee.service';
import { UpperPipe } from './pipes/upper.pipe';
import { SortPipe } from './pipes/sort.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DemoComponent,
    HomeComponent,
    PageNotFoundComponent,
    DeatailsComponent,
    DisplayAllEmployeesComponent,
    SearchPipe,
    UpperPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
