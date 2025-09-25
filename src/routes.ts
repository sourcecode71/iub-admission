import { Routes } from '@angular/router';
import { App } from './main';
import { HomeComponent } from './app/components/home.component';
import { LoginComponent } from './app/components/login.component';
import { RegistrationComponent } from './app/components/registration.component';
import { ForgotPasswordComponent } from './app/components/forgot-password.component';
import { ContactComponent } from './app/components/contact.component';
import { AdmissionFormComponent } from './app/components/admission-form.component';
import { PersonalInformationComponent } from './app/components/personal-information.component';
import { FinancialGuarantorComponent } from './app/components/financial-guarantor.component';
import { AcademicInformationComponent } from './app/components/academic-information.component';

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
  { path: 'financial-guarantor', component: FinancialGuarantorComponent },
  { path: 'academic-info', component: AcademicInformationComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];