import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="layout-container">
      <!-- Header -->
      <header class="header">
        <div class="container">
          <div class="header-content">
            <div class="header-brand">
              <div class="university-logo">
                <img src="assets/iub_logo.png" alt="IUB Logo" class="logo-image">
              </div>
              <div class="brand-info">
                <h1 class="brand-title">Independent University, Bangladesh</h1>
              </div>
            </div>
            
            <!-- Navigation Menu -->
            <nav class="main-navigation" *ngIf="showHeaderActions">
              <ul class="nav-menu">
                <li class="nav-item">
                  <a routerLink="" class="nav-link">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link" (click)="$event.preventDefault()">
                    <span>Undergraduate</span>
                    <span class="material-icons dropdown-icon">keyboard_arrow_down</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="#" class="dropdown-link">Calendar</a></li>
                    <li><a href="#" class="dropdown-link">Exam Schedule</a></li>
                    <li><a href="#" class="dropdown-link">Sample Question</a></li>
                    <li><a href="#" class="dropdown-link">Undergraduate Program</a></li>
                  </ul>
                </li>
                
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link" (click)="$event.preventDefault()">
                    <span>Graduate</span>
                    <span class="material-icons dropdown-icon">keyboard_arrow_down</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="#" class="dropdown-link">MBA Eligibility</a></li>
                    <li><a href="#" class="dropdown-link">EMBA Eligibility</a></li>
                    <li><a href="#" class="dropdown-link">MSc Eligibility</a></li>
                    <li><a href="#" class="dropdown-link">Development Studies Eligibility</a></li>
                  </ul>
                </li>
                
                <li class="nav-item">
                  <a routerLink="/contact" class="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
           
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content">
        <ng-content></ng-content>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3 class="footer-title">Contact Information</h3>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons">location_on</span>
                  <span>Plot 16, Block B, Bashundhara R/A, Dhaka-1229, Bangladesh</span>
                </div>
                <div class="contact-item">
                  <span class="material-icons">phone</span>
                  <span>+880-2-9291204-6</span>
                </div>
                <div class="contact-item">
                  <span class="material-icons">email</span>
                  <span>admission&#64;iub.edu.bd</span>
                </div>
              </div>
            </div>
            
            <div class="footer-section">
              <h3 class="footer-title">Quick Links</h3>
              <ul class="footer-links">
                <li><a href="#" class="footer-link">Academic Programs</a></li>
                <li><a href="#" class="footer-link">Admission Requirements</a></li>
                <li><a href="#" class="footer-link">Tuition & Fees</a></li>
                <li><a href="#" class="footer-link">Campus Life</a></li>
                <li><a href="#" class="footer-link">Student Support</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3 class="footer-title">Important Dates</h3>
              <ul class="footer-links">
                <li><span class="date-label">Application Deadline:</span> August 25, 2025</li>
                <li><span class="date-label">Admission Test:</span> August 29, 2025</li>
                <li><span class="date-label">Result Publication:</span> September 4, 2025</li>
                <li><span class="date-label">Classes Begin:</span> September 15, 2025</li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-bottom-content">
              <p class="copyright">
                © 2025 Independent University, Bangladesh. All rights reserved.
              </p>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Facebook">
                  <span class="material-icons">facebook</span>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <span class="material-icons">alternate_email</span>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <span class="material-icons">business</span>
                </a>
                <a href="#" class="social-link" aria-label="YouTube">
                  <span class="material-icons">play_circle</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .layout-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #f8f9fa;
    }

    .header {
      background: rgb(46, 50, 142);
      color: white;
      padding: 16px 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
    }

    .header-brand {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .university-logo {
      width: 50px;
      height: 50px;
      background: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
    }

    .logo-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .brand-info h1 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0 0 4px 0;
      line-height: 1.2;
    }

    .brand-info p {
      font-size: 0.9rem;
      opacity: 0.9;
      margin: 0;
    }

    .main-navigation {
      flex: 1;
      display: flex;
      justify-content: center;
      margin: 0 32px;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 32px;
      align-items: center;
    }

    .nav-item {
      position: relative;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 4px;
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      padding: 8px 12px;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .dropdown-icon {
      font-size: 18px;
      transition: transform 0.3s ease;
    }

    .dropdown:hover .dropdown-icon {
      transform: rotate(180deg);
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border-radius: 8px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      border: 1px solid #e5e7eb;
      min-width: 220px;
      padding: 8px 0;
      list-style: none;
      margin: 8px 0 0 0;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      z-index: 1000;
    }

    .dropdown:hover .dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .dropdown-link {
      display: block;
      color: #374151;
      text-decoration: none;
      padding: 12px 20px;
      font-size: 0.95rem;
      font-weight: 500;
      transition: all 0.3s ease;
      border-left: 3px solid transparent;
    }

    .dropdown-link:hover {
      background: #f8fafc;
      color: rgb(46, 50, 142);
      border-left-color: rgb(46, 50, 142);
    }

    .header-actions {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-shrink: 0;
    }

    .header-btn {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .header-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
    }

    .header-btn.primary {
      background: #f59e0b;
      border-color: #f59e0b;
    }

    .header-btn.primary:hover {
      background: #d97706;
      border-color: #d97706;
    }

    .main-content {
      flex: 1;
      width: 100%;
    }

    .footer {
      background: #1f2937;
      color: white;
      margin-top: auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
      padding: 48px 0 32px;
    }

    .footer-section {
      display: flex;
      flex-direction: column;
    }

    .footer-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #8b5cf6;
      margin-bottom: 20px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .contact-item .material-icons {
      color: #8b5cf6;
      font-size: 20px;
      margin-top: 2px;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer-links li {
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .footer-link {
      color: #d1d5db;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-link:hover {
      color: #8b5cf6;
    }

    .date-label {
      color: #8b5cf6;
      font-weight: 500;
    }

    .footer-bottom {
      border-top: 1px solid #374151;
      padding: 24px 0;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .copyright {
      font-size: 0.9rem;
      color: #9ca3af;
      margin: 0;
    }

    .social-links {
      display: flex;
      gap: 12px;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid rgba(139, 92, 246, 0.2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #8b5cf6;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #8b5cf6;
      color: white;
      transform: translateY(-2px);
    }

    .social-link .material-icons {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 16px;
      }

      .header-content {
        flex-wrap: wrap;
        text-align: center;
        gap: 12px;
      }

      .header-brand {
        flex-direction: row;
        gap: 12px;
        width: 100%;
        justify-content: center;
      }

      .main-navigation {
        order: 3;
        width: 100%;
        margin: 16px 0 0 0;
        justify-content: center;
      }

      .nav-menu {
        flex-direction: column;
        gap: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 12px 0;
      }

      .nav-item {
        width: 100%;
      }

      .nav-link {
        justify-content: center;
        width: 100%;
        padding: 12px 20px;
      }

      .dropdown-menu {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        background: rgba(255, 255, 255, 0.05);
        margin: 0;
        border-radius: 0;
        display: none;
      }

      .dropdown:hover .dropdown-menu {
        display: block;
      }

      .dropdown-link {
        color: rgba(255, 255, 255, 0.9);
        border-left: none;
        padding: 8px 40px;
        font-size: 0.9rem;
      }

      .dropdown-link:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
      }

      .brand-info h1 {
        font-size: 1.3rem;
      }

      .header-actions {
        order: 2;
        width: 100%;
        justify-content: center;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 32px 0 24px;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .brand-info h1 {
        font-size: 1.1rem;
      }

      .brand-info p {
        font-size: 0.8rem;
      }

      .university-logo {
        width: 45px;
        height: 45px;
      }

      .university-logo .material-icons {
        font-size: 24px;
      }

      .nav-link {
        font-size: 0.9rem;
        padding: 10px 16px;
      }

      .dropdown-link {
        padding: 8px 32px;
        font-size: 0.85rem;
      }
    }
  `]
})
export class LayoutComponent {
  @Input() showHeaderActions = true;

  onLogin() {
    // Emit event or handle login navigation
    console.log('Login clicked');
  }

  onRegister() {
    // Emit event or handle register navigation
    console.log('Register clicked');
  }
}