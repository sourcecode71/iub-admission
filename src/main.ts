import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UndergraduateSectionComponent } from './app/components/undergraduate-section.component';
import { PostgraduateSectionComponent } from './app/components/postgraduate-section.component';
import { LoginComponent } from './app/components/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    UndergraduateSectionComponent,
    PostgraduateSectionComponent,
    LoginComponent
  ],
  template: `
    <div class="app-container" *ngIf="!showLogin">
      <!-- Header -->
      <div class="header-section">
        <div class="container">
          <div class="header-content">
            <div class="header-info">
              <h1>Independent University, Bangladesh</h1>
              <p>Admission Portal - Academic Year 2025</p>
            </div>
            <div class="header-actions">
              <button class="header-btn" (click)="showLoginPage()">
                <span class="material-icons">login</span>
                Login
              </button>
              <button class="header-btn primary">
                <span class="material-icons">person_add</span>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <!-- Hero Section -->
        <div class="hero-section">
          <h1 class="hero-title">Available Programs For Admission</h1>
          <p class="hero-description">
            Welcome to the Independent University, Bangladesh admission portal. 
            Choose from our comprehensive range of undergraduate and postgraduate programs 
            designed to shape tomorrow's leaders and innovators.
          </p>
        </div>

        <!-- Undergraduate Programs -->
        <app-undergraduate-section></app-undergraduate-section>

        <!-- Postgraduate Programs -->
        <div class="postgraduate-section">
          <h2 class="section-title">Postgraduate Programs</h2>
          <app-postgraduate-section></app-postgraduate-section>
        </div>

        <!-- Important Notice -->
        <div class="notice-section">
          <span class="material-icons notice-icon">warning</span>
          <div class="notice-content">
            <h4>Important Notice</h4>
            <p>Admission will be invalidated if false information is given. Please ensure all information provided during application is accurate and complete.</p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section">
          <h2 class="cta-title">Ready to Start Your Journey?</h2>
          <p class="cta-description">
            Join our comprehensive academic programs and embark on an exciting journey 
            to master your chosen field of study at Independent University, Bangladesh.
          </p>
          <div class="cta-buttons">
            <button class="btn-primary">
              <span class="material-icons">send</span>
              Apply Now
            </button>
            <button class="btn-secondary">
              <span class="material-icons">info</span>
              View All Programs
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Login Page -->
    <app-login *ngIf="showLogin"></app-login>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f8f9fa;
    }
  `]
})
export class App implements OnInit {
  showLogin = false;
  
  ngOnInit() {
    // Component initialization
  }

  showLoginPage() {
    this.showLogin = true;
  }
}

bootstrapApplication(App);