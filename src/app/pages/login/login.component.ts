import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LayoutComponent } from '../../shared/layout.component';
import { AppStore } from '../../core/store/app.store';
import { LoginRequest } from '../../core/models/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private store = inject(AppStore);
  private router = inject(Router);

  loginData = {
    email: '',
    password: ''
  };

  showPassword = false;
  rememberMe = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async onLogin() {
    const request: LoginRequest = {
      email: this.loginData.email,
      password: this.loginData.password
    };

    try {
      await this.store.login(request);
      alert('Login successful!');
      // Navigate to dashboard or home
      this.router.navigate(['/']);
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  }
}