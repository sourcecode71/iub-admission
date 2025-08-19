import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LayoutComponent } from './layout.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  template: `
    <app-layout [showHeaderActions]="false">
      <div class="forgot-password-container">
        <div class="forgot-password-card">
          <!-- Header -->
          <div class="forgot-password-header">
            <div class="university-logo">
              <img src="assets/iub_logo.png" alt="IUB Logo" class="logo-image">
            </div>
            <h1 class="forgot-password-title">Forgot Password?</h1>
            <p class="forgot-password-subtitle">Enter your email address and we'll send you a link to reset your password.</p>
          </div>

          <!-- Forgot Password Form -->
          <form class="forgot-password-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="email" class="form-label">
                <span class="material-icons">email</span>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="email"
                class="form-input"
                placeholder="Enter your email address"
                required
              />
            </div>

            <button type="submit" class="submit-button">
              <span class="material-icons">send</span>
              Send Reset Link
            </button>
          </form>

          <!-- Footer -->
          <div class="forgot-password-footer">
            <p>
              <a routerLink="/login" class="back-to-login">
                <span class="material-icons">arrow_back</span>
                Back to Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    .forgot-password-container {
      min-height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      background: transparent;
    }

    .forgot-password-card {
      background: white;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 450px;
      border: 1px solid #e5e7eb;
    }

    .forgot-password-header {
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

    .forgot-password-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .forgot-password-subtitle {
      font-size: 1.1rem;
      color: rgb(46, 50, 142);
      font-weight: 600;
      margin-bottom: 4px;
    }

    .forgot-password-form {
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
      color: rgb(46, 50, 142);
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
      border-color: rgb(46, 50, 142);
      background: white;
      box-shadow: 0 0 0 3px rgba(46, 50, 142, 0.1);
    }

    .submit-button {
      width: 100%;
      background: linear-gradient(135deg, rgb(46, 50, 142), #2e328e);
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
      box-shadow: 0 4px 12px rgba(46, 50, 142, 0.3);
    }

    .submit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(46, 50, 142, 0.4);
    }

    .submit-button:active {
      transform: translateY(0);
    }

    .forgot-password-footer {
      text-align: center;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
    }

    .back-to-login {
      color: rgb(46, 50, 142);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .back-to-login:hover {
      color: #25287d;
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      .forgot-password-card {
        padding: 32px 24px;
      }

      .forgot-password-title {
        font-size: 1.75rem;
      }

      .university-logo {
        width: 70px;
        height: 70px;
      }

      .university-logo .material-icons {
        font-size: 35px;
      }

      .forgot-password-container {
        padding: 20px 16px;
      }
    }
  `]
})
export class ForgotPasswordComponent {
  email = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Reset password request for:', this.email);
    // Add your forgot password logic here
    alert('Password reset link would be sent to your email address');
    // Navigate back to login after submission
    this.router.navigate(['/login']);
  }
}