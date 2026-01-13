import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AppStore } from '../store/app.store';
import { UserRegistration } from '../interfaces/user.interface';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  template: `
    <app-layout [showHeaderActions]="false">
      <div class="registration-container">
        <div class="registration-card">
          <!-- Header -->
          <div class="registration-header">
            <div class="university-logo">
              <img src="assets/iub_logo.png" alt="IUB Logo" class="logo-image">
            </div>
            <h1 class="registration-title">Create Your Account</h1>
            <p class="registration-subtitle">Join Independent University, Bangladesh</p>
          </div>

          <!-- Registration Form -->
          <form class="registration-form" (ngSubmit)="onRegister()">
            <!-- Personal Information -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">person</span>
                Personal Information
              </h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName" class="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    [(ngModel)]="registrationData.firstName"
                    class="form-input"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    [(ngModel)]="registrationData.lastName"
                    class="form-input"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="registrationData.email"
                  class="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    [(ngModel)]="registrationData.phone"
                    class="form-input"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="dateOfBirth" class="form-label">Date of Birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    [(ngModel)]="registrationData.dateOfBirth"
                    class="form-input"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Account Security -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">security</span>
                Account Security
              </h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="password" class="form-label">Password</label>
                  <div class="password-input-container">
                    <input
                      [type]="showPassword ? 'text' : 'password'"
                      id="password"
                      name="password"
                      [(ngModel)]="registrationData.password"
                      class="form-input"
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      class="password-toggle"
                      (click)="togglePassword()"
                    >
                      <span class="material-icons">
                        {{ showPassword ? 'visibility_off' : 'visibility' }}
                      </span>
                    </button>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="confirmPassword" class="form-label">Confirm Password</label>
                  <div class="password-input-container">
                    <input
                      [type]="showConfirmPassword ? 'text' : 'password'"
                      id="confirmPassword"
                      name="confirmPassword"
                      [(ngModel)]="registrationData.confirmPassword"
                      class="form-input"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      class="password-toggle"
                      (click)="toggleConfirmPassword()"
                    >
                      <span class="material-icons">
                        {{ showConfirmPassword ? 'visibility_off' : 'visibility' }}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Program Selection -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">school</span>
                Program Selection
              </h3>
              
              <div class="form-group">
                <label for="programType" class="form-label">Program Type</label>
                <select
                  id="programType"
                  name="programType"
                  [(ngModel)]="registrationData.programType"
                  class="form-input"
                  required
                >
                  <option value="">Select program type</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="program" class="form-label">Preferred Program</label>
                <select
                  id="program"
                  name="program"
                  [(ngModel)]="registrationData.program"
                  class="form-input"
                  required
                >
                  <option value="">Select your preferred program</option>
                  <option value="cse">Computer Science & Engineering</option>
                  <option value="eee">Electrical & Electronic Engineering</option>
                  <option value="bba">Business Administration</option>
                  <option value="law">Law</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>

            <!-- Terms and Conditions -->
            <div class="form-section">
              <div class="terms-group">
                <label class="terms-checkbox">
                  <input
                    type="checkbox"
                    [(ngModel)]="acceptTerms"
                    name="acceptTerms"
                    required
                  >
                  <span class="checkmark"></span>
                  I accept the 
                  <a href="#" class="terms-link">Terms and Conditions</a> and 
                  <a href="#" class="terms-link">Privacy Policy</a>
                </label>
                
                <label class="terms-checkbox">
                  <input
                    type="checkbox"
                    [(ngModel)]="newsletter"
                    name="newsletter"
                  >
                  <span class="checkmark"></span>
                  I want to receive updates and newsletters
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="register-button" [disabled]="!acceptTerms">
              <span class="material-icons">person_add</span>
              Create Account
            </button>
          </form>

          <!-- Footer -->
          <div class="registration-footer">
            <p>Already have an account? 
              <a routerLink="/login" class="login-link">
                <span class="material-icons">check_circle_outline</span>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    .registration-container {
      min-height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      background: transparent;
    }

    .registration-card {
      background: white;
      border-radius: 4px;
      padding: 32px;
      width: 100%;
      max-width: 700px;
      border: 1px solid #e5e7eb;
    }

    .registration-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .university-logo {
      width: 80px;
      height: 80px;
      background: white;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      padding: 8px;
      border: 2px solid #e5e7eb;
    }

    .logo-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .registration-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .registration-subtitle {
      font-size: 1.1rem;
      color: #8b5cf6;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .registration-form {
      margin-bottom: 32px;
    }

    .form-section {
      margin-bottom: 32px;
      padding-bottom: 32px;
      border-bottom: 1px solid #e5e7eb;
    }

    .form-section:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.25rem;
      font-weight: 600;
      color: #374151;
      margin-bottom: 24px;
    }

    .section-title .material-icons {
      color: #8b5cf6;
      font-size: 20px;
    }

    .form-row {
      display: flex;
      gap: 24px;
    }

    .form-group {
      flex: 1;
      margin-bottom: 24px;
    }

    .form-group:last-child {
      margin-bottom: 0;
    }

    .form-label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
      font-size: 0.9rem;
    }

    .form-input {
      width: 100%;
      padding: 8px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #f9fafb;
    }

    .form-input:focus {
      outline: none;
      border-color: #8b5cf6;
      background: white;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    .password-input-container {
      position: relative;
    }

    .password-toggle {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: #6b7280;
      padding: 4px;
      border-radius: 4px;
      transition: color 0.3s ease;
    }

    .password-toggle:hover {
      color: #8b5cf6;
    }

    .password-toggle .material-icons {
      font-size: 20px;
    }

    .terms-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .terms-checkbox {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 0.9rem;
      color: #374151;
      cursor: pointer;
      line-height: 1.5;
    }

    .terms-checkbox input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #8b5cf6;
      margin-top: 2px;
    }

    .terms-link {
      color: #8b5cf6;
      text-decoration: none;
      font-weight: 600;
    }

    .terms-link:hover {
      text-decoration: underline;
    }

    .register-button {
      width: 100%;
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
      color: white;
      border: none;
      padding: 16px;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
      margin-top: 20px;
    }

    .register-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
    }

    .register-button:active:not(:disabled) {
      transform: translateY(0);
    }

    .register-button:disabled {
      background: #d1d5db;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    .registration-footer {
      text-align: center;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
    }

    .registration-footer p {
      color: #6b7280;
      font-size: 0.9rem;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .login-link {
      color: #8b5cf6;
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: color 0.3s ease;
    }

    .login-link:hover {
      color: #7c3aed;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .registration-card {
        padding: 32px 24px;
      }

      .registration-title {
        font-size: 1.75rem;
      }

      .university-logo {
        width: 70px;
        height: 70px;
      }

      .form-row {
        flex-direction: column;
        gap: 0;
      }

      .registration-container {
        padding: 20px 16px;
      }
    }

    @media (max-width: 480px) {
      .registration-card {
        padding: 24px 16px;
      }

      .section-title {
        font-size: 1.1rem;
      }

      .form-section {
        margin-bottom: 24px;
        padding-bottom: 24px;
      }
    }
  `]
})
export class RegistrationComponent {
  private store = inject(AppStore);

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
      programId: 0, // Map from program
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