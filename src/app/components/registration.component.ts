import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent],
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
            <!-- Name Fields Row -->
            <div class="form-row">
              <div class="form-group">
                <label for="firstName" class="form-label required">
                  <span class="material-icons">person</span>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  [(ngModel)]="registrationData.firstName"
                  class="form-input"
                  placeholder="Enter your first name"
                  required
                />
                <div class="field-info">
                  <span class="material-icons info-icon">info</span>
                  <span class="info-text">Your name must be as per certificate.</span>
                </div>
              </div>

              <div class="form-group">
                <label for="lastName" class="form-label">
                  <span class="material-icons">person_outline</span>
                  Last Name (Surname)
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  [(ngModel)]="registrationData.lastName"
                  class="form-input"
                  placeholder="Enter your last name"
                />
                <div class="field-info">
                  <span class="material-icons info-icon">info</span>
                  <span class="info-text">Your name must be as per certificate.</span>
                </div>
              </div>
            </div>

            <!-- Email Field -->
            <div class="form-group">
              <label for="email" class="form-label required">
                <span class="material-icons">email</span>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="registrationData.email"
                class="form-input"
                placeholder="Enter your email address"
                required
              />
              <div class="field-info">
                <span class="material-icons info-icon">info</span>
                <span class="info-text">We'll use this email for all communications.</span>
              </div>
            </div>

            <!-- Country and Phone Row -->
            <div class="form-row">
              <div class="form-group">
                <label for="country" class="form-label required">
                  <span class="material-icons">public</span>
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  [(ngModel)]="registrationData.country"
                  class="form-select"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="BD">Bangladesh</option>
                  <option value="IN">India</option>
                  <option value="PK">Pakistan</option>
                  <option value="NP">Nepal</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="MY">Malaysia</option>
                  <option value="SG">Singapore</option>
                  <option value="TH">Thailand</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="KR">South Korea</option>
                  <option value="CN">China</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="cellPhone" class="form-label required">
                  <span class="material-icons">phone</span>
                  Cell Phone
                </label>
                <input
                  type="tel"
                  id="cellPhone"
                  name="cellPhone"
                  [(ngModel)]="registrationData.cellPhone"
                  class="form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <!-- Password Fields -->
            <div class="form-group">
              <label for="password" class="form-label required">
                <span class="material-icons">lock</span>
                Password
              </label>
              <div class="password-input-container">
                <input
                  [type]="showPassword ? 'text' : 'password'"
                  id="password"
                  name="password"
                  [(ngModel)]="registrationData.password"
                  class="form-input"
                  placeholder="Create a password"
                  required
                  minlength="6"
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
              <div class="field-info">
                <span class="material-icons info-icon">info</span>
                <span class="info-text">Use 6 or more characters</span>
              </div>
            </div>

            <div class="form-group">
              <label for="confirmPassword" class="form-label required">
                <span class="material-icons">lock_outline</span>
                Confirm Password
              </label>
              <div class="password-input-container">
                <input
                  [type]="showConfirmPassword ? 'text' : 'password'"
                  id="confirmPassword"
                  name="confirmPassword"
                  [(ngModel)]="registrationData.confirmPassword"
                  class="form-input"
                  placeholder="Confirm your password"
                  required
                  minlength="6"
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
              <div class="password-match-indicator" *ngIf="registrationData.confirmPassword">
                <span class="material-icons" [class]="passwordsMatch ? 'match' : 'no-match'">
                  {{ passwordsMatch ? 'check_circle' : 'cancel' }}
                </span>
                <span class="match-text" [class]="passwordsMatch ? 'match' : 'no-match'">
                  {{ passwordsMatch ? 'Passwords match' : 'Passwords do not match' }}
                </span>
              </div>
            </div>

            <!-- Terms and Conditions -->
            <div class="form-group">
              <label class="checkbox-label">
                <input 
                  type="checkbox" 
                  [(ngModel)]="acceptTerms" 
                  name="acceptTerms"
                  required
                >
                <span class="checkmark"></span>
                I agree to the <a href="#" class="terms-link">Terms and Conditions</a> and <a href="#" class="terms-link">Privacy Policy</a>
              </label>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              class="registration-button"
              [disabled]="!isFormValid()"
              [class.disabled]="!isFormValid()"
            >
              <span class="material-icons">person_add</span>
              Create Account
            </button>
          </form>

          <!-- Footer -->
          <div class="registration-footer">
            <p>Already have an account? 
              <a href="#" class="login-link" (click)="onLogin($event)">
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
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 600px;
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

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }

    .form-group {
      margin-bottom: 24px;
    }

    .form-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
      font-size: 0.9rem;
    }

    .form-label.required::after {
      content: '*';
      color: #ef4444;
      margin-left: 4px;
    }

    .form-label .material-icons {
      font-size: 18px;
      color: #8b5cf6;
    }

    .form-input,
    .form-select {
      width: 100%;
      padding: 14px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #f9fafb;
    }

    .form-input:focus,
    .form-select:focus {
      outline: none;
      border-color: #8b5cf6;
      background: white;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    .form-select {
      cursor: pointer;
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

    .field-info {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 6px;
      font-size: 0.8rem;
      color: #6b7280;
    }

    .info-icon {
      font-size: 14px !important;
      color: #8b5cf6;
    }

    .password-match-indicator {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      font-size: 0.85rem;
    }

    .password-match-indicator .material-icons {
      font-size: 16px;
    }

    .password-match-indicator .match {
      color: #059669;
    }

    .password-match-indicator .no-match {
      color: #ef4444;
    }

    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 0.9rem;
      color: #374151;
      cursor: pointer;
      line-height: 1.5;
    }

    .checkbox-label input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #8b5cf6;
      margin-top: 2px;
    }

    .terms-link {
      color: #8b5cf6;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .terms-link:hover {
      color: #7c3aed;
      text-decoration: underline;
    }

    .registration-button {
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
      margin-top: 32px;
    }

    .registration-button:hover:not(.disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
    }

    .registration-button:active:not(.disabled) {
      transform: translateY(0);
    }

    .registration-button.disabled {
      background: #9ca3af;
      cursor: not-allowed;
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
    }

    .login-link {
      color: #8b5cf6;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .login-link:hover {
      color: #7c3aed;
      text-decoration: underline;
    }

    .login-link .material-icons {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      .registration-card {
        padding: 32px 24px;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .registration-title {
        font-size: 1.75rem;
      }

      .university-logo {
        width: 70px;
        height: 70px;
      }

      .registration-container {
        padding: 20px 16px;
      }
    }

    @media (max-width: 480px) {
      .registration-card {
        padding: 24px 20px;
      }

      .registration-title {
        font-size: 1.5rem;
      }

      .university-logo {
        width: 60px;
        height: 60px;
      }
    }
  `]
})
export class RegistrationComponent {
  registrationData = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    cellPhone: '',
    password: '',
    confirmPassword: ''
  };
  
  showPassword = false;
  showConfirmPassword = false;
  acceptTerms = false;

  get passwordsMatch(): boolean {
    return this.registrationData.password === this.registrationData.confirmPassword && 
           this.registrationData.confirmPassword.length > 0;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  isFormValid(): boolean {
    return this.registrationData.firstName.trim() !== '' &&
           this.registrationData.email.trim() !== '' &&
           this.registrationData.country !== '' &&
           this.registrationData.cellPhone.trim() !== '' &&
           this.registrationData.password.length >= 6 &&
           this.passwordsMatch &&
           this.acceptTerms;
  }

  onRegister() {
    if (this.isFormValid()) {
      console.log('Registration attempt:', this.registrationData);
      // Add your registration logic here
      alert('Registration functionality would be implemented here');
    }
  }

  onLogin(event: Event) {
    event.preventDefault();
    console.log('Login clicked');
    // Add navigation to login page logic here
    alert('Navigate to login page');
  }
}