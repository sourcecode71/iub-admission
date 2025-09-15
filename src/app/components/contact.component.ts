import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  template: `
    <app-layout>
      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="hero-title">Contact Information</h1>
        <p class="hero-description">
          Get in touch with our admission offices for specific programs. 
          Our dedicated teams are here to help you with your academic journey.
        </p>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <!-- Undergraduate Programs -->
        <div class="contact-section">
          <div class="section-header">
            <div class="section-icon undergraduate">
              <span class="material-icons">school</span>
            </div>
            <div>
              <h2 class="section-title">Undergraduate Programs</h2>
              <p class="section-subtitle">Bachelor's Degree Admissions</p>
            </div>
          </div>
          
          <div class="contact-cards">
            <div class="contact-card">
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">phone</span>
                  <div class="contact-details">
                    <span class="contact-label">Phone:</span>
                    <span class="contact-value">+880-2-8431645</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">extension</span>
                  <div class="contact-details">
                    <span class="contact-label">Extensions:</span>
                    <span class="contact-value">1354, 1355, 1356</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Cell Phone:</span>
                    <span class="contact-value">+8801780185006</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Graduate Business Programs -->
        <div class="contact-section">
          <div class="section-header">
            <div class="section-icon business">
              <span class="material-icons">business_center</span>
            </div>
            <div>
              <h2 class="section-title">MBA / EMBA Programs</h2>
              <p class="section-subtitle">Graduate School of Business</p>
            </div>
          </div>
          
          <div class="contact-cards">
            <div class="contact-card">
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">phone</span>
                  <div class="contact-details">
                    <span class="contact-label">Phone:</span>
                    <span class="contact-value">009612939393</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">extension</span>
                  <div class="contact-details">
                    <span class="contact-label">Extensions:</span>
                    <span class="contact-value">2111, 2119</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">email</span>
                  <div class="contact-details">
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">gsb&#64;iub.edu.bd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Development Studies -->
        <div class="contact-section">
          <div class="section-header">
            <div class="section-icon development">
              <span class="material-icons">public</span>
            </div>
            <div>
              <h2 class="section-title">Development Studies</h2>
              <p class="section-subtitle">Master in Development Studies</p>
            </div>
          </div>
          
          <div class="contact-cards">
            <div class="contact-card">
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">phone</span>
                  <div class="contact-details">
                    <span class="contact-label">Phone:</span>
                    <span class="contact-value">+88-02-8431645-53, 8432065-76</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">extension</span>
                  <div class="contact-details">
                    <span class="contact-label">Extension:</span>
                    <span class="contact-value">2417</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Cell Phone:</span>
                    <span class="contact-value">01715212790</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Engineering Programs -->
        <div class="contact-section">
          <div class="section-header">
            <div class="section-icon engineering">
              <span class="material-icons">engineering</span>
            </div>
            <div>
              <h2 class="section-title">Engineering Programs</h2>
              <p class="section-subtitle">Master of Science in Engineering</p>
            </div>
          </div>
          
          <div class="contact-cards">
            <div class="contact-card">
              <h4 class="program-title">Computer Science</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Contact Numbers:</span>
                    <span class="contact-value">01855922580, 01670046181</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Telecommunication Engineering</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Contact Number:</span>
                    <span class="contact-value">01762321231</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Computer Networks & Communications</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Contact Numbers:</span>
                    <span class="contact-value">01855922580, 01670046181</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Software Engineering</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Contact Numbers:</span>
                    <span class="contact-value">01855922580, 01670046181</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Electrical & Electronic Engineering</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Contact Number:</span>
                    <span class="contact-value">01762321231</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Health & Science Programs -->
        <div class="contact-section">
          <div class="section-header">
            <div class="section-icon health">
              <span class="material-icons">local_hospital</span>
            </div>
            <div>
              <h2 class="section-title">Health & Science Programs</h2>
              <p class="section-subtitle">Public Health, Pharmacy & Life Sciences</p>
            </div>
          </div>
          
          <div class="contact-cards">
            <div class="contact-card">
              <h4 class="program-title">Master of Public Health</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Cell Phone:</span>
                    <span class="contact-value">01913370770</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Master of Pharmacy</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Cell Phone:</span>
                    <span class="contact-value">01670-776962, 01884-373484</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Biotechnology & Bioinformatics</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Cell Phone:</span>
                    <span class="contact-value">+8801335484851</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">phone</span>
                  <div class="contact-details">
                    <span class="contact-label">Phone:</span>
                    <span class="contact-value">+88-09612-939393</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">extension</span>
                  <div class="contact-details">
                    <span class="contact-label">Extensions:</span>
                    <span class="contact-value">2617, 2612</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">email</span>
                  <div class="contact-details">
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">shahina&#64;iub.edu.bd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Programs -->
        <div class="contact-section">
          <div class="section-header">
            <div class="section-icon other">
              <span class="material-icons">menu_book</span>
            </div>
            <div>
              <h2 class="section-title">Other Programs</h2>
              <p class="section-subtitle">Arts, Economics, Environment & Media</p>
            </div>
          </div>
          
          <div class="contact-cards">
            <div class="contact-card">
              <h4 class="program-title">Environment Management</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Phone:</span>
                    <span class="contact-value">+88-01817136563</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">extension</span>
                  <div class="contact-details">
                    <span class="contact-label">Extension:</span>
                    <span class="contact-value">2315</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">email</span>
                  <div class="contact-details">
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">barin&#64;iub.edu.bd</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Master of Arts (English)</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Cell Phone:</span>
                    <span class="contact-value">01744297216</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">email</span>
                  <div class="contact-details">
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">english&#64;iub.edu.bd</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Economics</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Cell Phone:</span>
                    <span class="contact-value">01682220000</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h4 class="program-title">Media and Communication</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">smartphone</span>
                  <div class="contact-details">
                    <span class="contact-label">Cell Phone:</span>
                    <span class="contact-value">01904606484</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">email</span>
                  <div class="contact-details">
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">mediacomm&#64;iub.edu.bd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- General Contact Information -->
        <div class="contact-section">
          <div class="section-header">
            <div class="section-icon general">
              <span class="material-icons">contact_support</span>
            </div>
            <div>
              <h2 class="section-title">General Information</h2>
              <p class="section-subtitle">Main Campus & Administration</p>
            </div>
          </div>
          
          <div class="contact-cards">
            <div class="contact-card general-info">
              <div class="contact-info">
                <div class="contact-item">
                  <span class="material-icons contact-icon">location_on</span>
                  <div class="contact-details">
                    <span class="contact-label">Address:</span>
                    <span class="contact-value">Plot 16, Block B, Bashundhara R/A, Dhaka-1229, Bangladesh</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">phone</span>
                  <div class="contact-details">
                    <span class="contact-label">Main Phone:</span>
                    <span class="contact-value">+880-2-9291204-6</span>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="material-icons contact-icon">email</span>
                  <div class="contact-details">
                    <span class="contact-label">General Email:</span>
                    <span class="contact-value">"admission&#64;iub.edu.bd"</span>
                  </div>
                </div>
              </div>
            </div>
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
      background: linear-gradient(135deg, #e0f2fe, #b3e5fc);
      border-radius: 16px;
      margin: 0 24px 60px;
    }

    .hero-title {
      font-size: 2.5rem;
      font-weight: 400;
      color: #0277bd;
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
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px 40px;
    }

    .contact-section {
      margin-bottom: 60px;
    }

    .section-header {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
      gap: 16px;
    }

    .section-icon {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .section-icon.undergraduate {
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
    }

    .section-icon.business {
      background: linear-gradient(135deg, #059669, #10b981);
    }

    .section-icon.development {
      background: linear-gradient(135deg, #dc2626, #ef4444);
    }

    .section-icon.engineering {
      background: linear-gradient(135deg, #ea580c, #f97316);
    }

    .section-icon.health {
      background: linear-gradient(135deg, #0891b2, #06b6d4);
    }

    .section-icon.other {
      background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    }

    .section-icon.general {
      background: linear-gradient(135deg, #1f2937, #374151);
    }

    .section-icon .material-icons {
      color: white;
      font-size: 28px;
    }

    .section-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 4px 0;
    }

    .section-subtitle {
      font-size: 1rem;
      color: #6b7280;
      margin: 0;
    }

    .contact-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
    }

    .contact-card {
      background: white;
      border-radius: 4px;
      padding: 20px;
      border: 1px solid #e5e7eb;
    }

    .contact-card.general-info {
      grid-column: 1 / -1;
      max-width: 600px;
      margin: 0 auto;
    }

    .program-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 16px 0;
      padding-bottom: 12px;
      border-bottom: 2px solid #e5e7eb;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .contact-icon {
      color: #0277bd;
      font-size: 20px;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
    }

    .contact-label {
      font-size: 0.9rem;
      font-weight: 600;
      color: #374151;
    }

    .contact-value {
      font-size: 0.95rem;
      color: #1f2937;
      font-weight: 500;
      line-height: 1.4;
    }

    &#64;media (max-width: 768px) {
      .main-content {
        padding: 0 16px 32px;
      }

      .hero-section {
        margin: 0 16px 40px;
        padding: 40px 16px 32px;
      }

      .hero-title {
        font-size: 2rem;
      }

      .section-header {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }

      .section-icon {
        width: 50px;
        height: 50px;
      }

      .section-icon .material-icons {
        font-size: 24px;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .contact-cards {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .contact-card {
        padding: 20px;
      }

      .contact-item {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }

      .contact-details {
        gap: 2px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.8rem;
      }

      .section-title {
        font-size: 1.3rem;
      }

      .contact-card {
        padding: 16px;
      }
    }
  `]
})
export class ContactComponent {
}