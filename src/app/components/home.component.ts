import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UndergraduateSectionComponent } from './undergraduate-section.component';
import { PostgraduateSectionComponent } from './postgraduate-section.component';
import { AppStore } from '../store/app.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LayoutComponent,
    UndergraduateSectionComponent,
    PostgraduateSectionComponent
  ],
  template: `
    <app-layout>
      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="hero-title">Available Programs For Admission</h1>
        <p class="hero-description">
          Welcome to the Independent University, Bangladesh admission portal. 
          Choose from our comprehensive range of undergraduate and postgraduate programs 
          designed to shape tomorrow's leaders and innovators.
        </p>
      </div>

      <!-- Programs from API -->
      <div class="programs-section" *ngIf="availablePrograms.length > 0">
        <h2 class="section-title">Available Programs</h2>
        <div class="programs-grid">
          <div *ngFor="let program of availablePrograms" class="program-card">
            <h3>{{ program.programName }}</h3>
            <p>{{ program.description }}</p>
            <p>Form Fee: {{ program.formFee }}</p>
            <p>Academic Session: {{ program.academicSession }}</p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="main-content">
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
            <button class="btn-primary" routerLink="/register">
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
    </app-layout>
  `,
  styles: [`
    .hero-section {
      text-align: center;
      margin-bottom: 60px;
      padding: 60px 24px 40px;
      background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
      border-radius: 16px;
      margin: 0 24px 60px;
    }

    .hero-title {
      font-size: 2.5rem;
      font-weight: 400;
      color: #8b5cf6;
      margin-bottom: 24px;
      line-height: 1.2;
    }

    .hero-description {
      font-size: 1.1rem;
      color: #6b7280;
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .main-content {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 24px 40px;
    }

    .postgraduate-section {
      margin-bottom: 60px;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 400;
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 40px;
    }

    .notice-section {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
      border: 1px solid #f59e0b;
      border-radius: 12px;
      padding: 24px;
      margin: 40px 0;
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }

    .notice-icon {
      color: #d97706;
      font-size: 24px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .notice-content h4 {
      color: #92400e;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .notice-content p {
      color: #92400e;
      line-height: 1.5;
      margin: 0;
    }

    .cta-section {
      text-align: center;
      margin: 60px 0;
      padding: 40px;
      background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
      border-radius: 16px;
    }

    .cta-title {
      font-size: 1.8rem;
      font-weight: 400;
      color: #8b5cf6;
      margin-bottom: 16px;
    }

    .cta-description {
      font-size: 1.1rem;
      color: #6b7280;
      margin-bottom: 32px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: #8b5cf6;
      border: 2px solid #8b5cf6;
      padding: 10px 24px;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .btn-secondary:hover {
      background: #8b5cf6;
      color: white;
    }

    @media (max-width: 768px) {
      .hero-section {
        margin: 0 16px 40px;
        padding: 40px 16px 32px;
      }

      .hero-title {
        font-size: 2rem;
      }

      .main-content {
        padding: 0 16px 32px;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .cta-buttons .btn-primary,
      .cta-buttons .btn-secondary {
        width: 200px;
        justify-content: center;
      }

      .section-title {
        font-size: 1.6rem;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.8rem;
      }
    }

    .programs-section {
      margin: 40px 24px;
    }

    .programs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .program-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      border: 1px solid #e5e7eb;
    }

    .program-card h3 {
      color: #8b5cf6;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }

    .program-card p {
      margin: 5px 0;
      color: #6b7280;
      font-size: 0.9rem;
    }
  `]
})
export class HomeComponent implements OnInit {
  store = inject(AppStore);

  ngOnInit() {
    this.store.loadAcademicInfo();
  }

  get availablePrograms() {
    return this.store.academicSettings()?.masterSetting?.filter(p => p.openClose != 0) || [];
  }

  showLoginPage() {
    // For now, we'll just log this. Later we'll implement proper routing.
    console.log('Show login page');
  }
}