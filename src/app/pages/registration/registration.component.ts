import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LayoutComponent } from '../../shared/layout.component';
import { AppStore } from '../../core/store/app.store';
import { UserRegistration } from '../../core/models/user.interface';
import { UserService } from '../../core/services/user.service';
import { APPMasterDTO } from '../../core/models/admission.interface';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private store = inject(AppStore);

  ngOnInit() {
    this.registrationData.programType = this.store.selectedProgramType();
    this.registrationData.program = this.store.selectedProgram();
  }

  registrationData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    programType: '',
    program: ''
  };

  showPassword = false;
  showConfirmPassword = false;
  acceptTerms = false;
  newsletter = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async onRegister() {
    if (!this.acceptTerms) {
      alert('Please accept the Terms and Conditions to proceed.');
      return;
    }

    if (this.registrationData.password !== this.registrationData.confirmPassword) {
      alert('Passwords do not match. Please check and try again.');
      return;
    }

    const request: UserRegistration = {
      id: 0,
      userEmail: this.registrationData.email,
      newPassword: this.registrationData.password,
      confirmPassword: this.registrationData.confirmPassword,
      firstName: this.registrationData.firstName,
      fullName: `${this.registrationData.firstName} ${this.registrationData.lastName}`,
      lastName: this.registrationData.lastName,
      countryCode: '+880', // Assuming Bangladesh
      cellPhone: this.registrationData.phone,
      dateOfBirth: new Date(this.registrationData.dateOfBirth),
      token: '',
      programId: this.registrationData.programType === '1' ? 1 : parseInt(this.registrationData.program, 10),
      firstMajor: '',
      degreeId: '',
      majorId: '',
      authCode: '',
      authCodeStatus: ''
    };

    try {
      await this.store.register(request);
      alert('Registration successful!');
      // Perhaps navigate to login
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  }

  onLogin(event: Event) {
    event.preventDefault();
    console.log('Login clicked');
    // Add navigation to login page logic here
    alert('Login functionality would be implemented here');
  }
}