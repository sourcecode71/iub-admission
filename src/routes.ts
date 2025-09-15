import { Routes } from '@angular/router';
import { App } from './main';
import { HomeComponent } from './app/components/home.component';
import { LoginComponent } from './app/components/login.component';
import { RegistrationComponent } from './app/components/registration.component';
import { ForgotPasswordComponent } from './app/components/forgot-password.component';
import { ContactComponent } from './app/components/contact.component';
import { AdmissionFormComponent } from './app/components/admission-form.component';
import { PersonalInformationComponent } from './app/components/personal-information.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'admission', component: AdmissionFormComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'basic-info', component: PersonalInformationComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];