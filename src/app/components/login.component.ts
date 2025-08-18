import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent],
  template: `
    <app-layout [showHeaderActions]="false">
      <div class="login-container">
        <div class="login-card">
          <!-- Header -->
          <div class="login-header">
            <div class="university-logo">
              <img src="src/assets/iub_logo.png" alt="IUB Logo" class="logo-image">
            </div>
            <h1 class="login-title">Welcome Back</h1>
            <p class="login-subtitle">Sign in to your admission portal</p>
          </div>

          <!-- Login Form -->
          <form class="login-form" (ngSubmit)="onLogin()">
            <div class="form-group">
              <label for="email" class="form-label">
                <span class="material-icons">email</span>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="loginData.email"
                class="form-input"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div class="form-group">
              <label for="password" class="form-label">
                <span class="material-icons">lock</span>
                Password
              </label>
              <div class="password-input-container">
                <input
                  [type]="showPassword ? 'text' : 'password'"
                  id="password"
                  name="password"
                  [(ngModel)]="loginData.password"
                  class="form-input"
                  placeholder="Enter your password"
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

            <div class="form-options">
              <label class="remember-me">
                <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe">
                <span class="checkmark"></span>
                Remember me
              </label>
              <a href="#" class="forgot-password" (click)="onForgotPassword($event)">
                Forgot Password?
              </a>
            </div>

            <button type="submit" class="login-button">
              <span class="material-icons">login</span>
              Sign In
            </button>
          </form>

          <!-- Footer -->
          <div class="login-footer">
            <p>Don't have an account? 
              <a href="#" class="register-link" (click)="onRegister($event)">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    .login-container {
      min-height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      background: transparent;
    }

    .login-card {
      background: white;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 450px;
      border: 1px solid #e5e7eb;
    }

    .login-header {
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

    .login-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .login-subtitle {
      font-size: 1.1rem;
      color: #8b5cf6;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .login-form {
      margin-bottom: 32px;
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

    .form-label .material-icons {
      font-size: 18px;
      color: #8b5cf6;
    }

    .form-input {
      width: 100%;
      padding: 14px 16px;
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

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }

    .remember-me {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: #374151;
      cursor: pointer;
    }

    .remember-me input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: #8b5cf6;
    }

    .forgot-password {
      color: #8b5cf6;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .forgot-password:hover {
      color: #7c3aed;
      text-decoration: underline;
    }

    .login-button {
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
    }

    .login-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
    }

    .login-button:active {
      transform: translateY(0);
    }

    .login-footer {
      text-align: center;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
    }

    .login-footer p {
      color: #6b7280;
      font-size: 0.9rem;
      margin: 0;
    }

    .register-link {
      color: #8b5cf6;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .register-link:hover {
      color: #7c3aed;
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      .login-card {
        padding: 32px 24px;
      }

      .login-title {
        font-size: 1.75rem;
      }

      .university-logo {
        width: 70px;
        height: 70px;
      }

      .university-logo .material-icons {
        font-size: 35px;
      }

      .login-container {
        padding: 20px 16px;
      }
    }
  `]
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  
  showPassword = false;
  rememberMe = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    console.log('Login attempt:', this.loginData);
    // Add your login logic here
    alert('Login functionality would be implemented here');
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    console.log('Forgot password clicked');
    // Add forgot password logic here
    alert('Forgot password functionality would be implemented here');
  }

  onRegister(event: Event) {
    event.preventDefault();
    console.log('Register clicked');
    // Add navigation to register page logic here
    alert('Register functionality would be implemented here');
  }
}