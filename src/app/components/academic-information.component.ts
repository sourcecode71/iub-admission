import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AcademicInformation } from '../interfaces/admission.interface';

@Component({
  selector: 'app-academic-information',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  template: `
    <app-layout [showHeaderActions]="false">
      <div class="admission-container">
        <div class="admission-card">
          <!-- Header -->
          <div class="admission-header">
            <div class="university-logo">
              <img src="assets/iub_logo.png" alt="IUB Logo" class="logo-image">
            </div>
            <h1 class="admission-title">Admission Form</h1>
            <p class="admission-subtitle">Step 3: Academic Information</p>
            
            <!-- Progress Bar -->
            <div class="progress-bar">
              <div class="progress-step completed">
                <div class="step-number">1</div>
                <div class="step-label">Personal</div>
              </div>
              <div class="progress-line completed"></div>
              <div class="progress-step completed">
                <div class="step-number">2</div>
                <div class="step-label">Financial</div>
              </div>
              <div class="progress-line completed"></div>
              <div class="progress-step active">
                <div class="step-number">3</div>
                <div class="step-label">Academic</div>
              </div>
            </div>
          </div>

          <!-- Academic Information Form -->
          <form class="admission-form" (ngSubmit)="onSubmit()">
            <!-- SSC Information -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">school</span>
                SSC/O-Level Information
              </h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="sscExamName" class="form-label">Examination Name *</label>
                  <input
                    type="text"
                    id="sscExamName"
                    name="sscExamName"
                    [(ngModel)]="academicInfo.ssc!.examName"
                    class="form-input"
                    placeholder="e.g., SSC, O-Level"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="sscBoard" class="form-label">Board/Institution *</label>
                  <input
                    type="text"
                    id="sscBoard"
                    name="sscBoard"
                    [(ngModel)]="academicInfo.ssc!.board"
                    class="form-input"
                    placeholder="e.g., Dhaka, Cambridge"
                    required
                  />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="sscRoll" class="form-label">Roll No. *</label>
                  <input
                    type="text"
                    id="sscRoll"
                    name="sscRoll"
                    [(ngModel)]="academicInfo.ssc!.roll"
                    class="form-input"
                    placeholder="Enter roll number"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="sscRegistration" class="form-label">Registration No. *</label>
                  <input
                    type="text"
                    id="sscRegistration"
                    name="sscRegistration"
                    [(ngModel)]="academicInfo.ssc!.registration"
                    class="form-input"
                    placeholder="Enter registration number"
                    required
                  />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="sscPassingYear" class="form-label">Passing Year *</label>
                  <input
                    type="text"
                    id="sscPassingYear"
                    name="sscPassingYear"
                    [(ngModel)]="academicInfo.ssc!.passingYear"
                    class="form-input"
                    placeholder="e.g., 2020"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="sscResult" class="form-label">Result *</label>
                  <select
                    id="sscResult"
                    name="sscResult"
                    [(ngModel)]="academicInfo.ssc!.result"
                    class="form-input"
                    required
                  >
                    <option value="">Select Result</option>
                    <option value="passed">Passed</option>
                    <option value="awaited">Awaited</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="sscGpa" class="form-label">GPA/Grade *</label>
                <input
                  type="text"
                  id="sscGpa"
                  name="sscGpa"
                  [(ngModel)]="academicInfo.ssc!.gpa"
                  class="form-input"
                  placeholder="e.g., 5.00, A*"
                  required
                />
              </div>
            </div>
            
            <!-- HSC Information -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">school</span>
                HSC/A-Level Information
              </h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="hscExamName" class="form-label">Examination Name *</label>
                  <input
                    type="text"
                    id="hscExamName"
                    name="hscExamName"
                    [(ngModel)]="academicInfo.hsc!.examName"
                    class="form-input"
                    placeholder="e.g., HSC, A-Level"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="hscBoard" class="form-label">Board/Institution *</label>
                  <input
                    type="text"
                    id="hscBoard"
                    name="hscBoard"
                    [(ngModel)]="academicInfo.hsc!.board"
                    class="form-input"
                    placeholder="e.g., Dhaka, Cambridge"
                    required
                  />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="hscRoll" class="form-label">Roll No. *</label>
                  <input
                    type="text"
                    id="hscRoll"
                    name="hscRoll"
                    [(ngModel)]="academicInfo.hsc!.roll"
                    class="form-input"
                    placeholder="Enter roll number"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="hscRegistration" class="form-label">Registration No. *</label>
                  <input
                    type="text"
                    id="hscRegistration"
                    name="hscRegistration"
                    [(ngModel)]="academicInfo.hsc!.registration"
                    class="form-input"
                    placeholder="Enter registration number"
                    required
                  />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="hscPassingYear" class="form-label">Passing Year *</label>
                  <input
                    type="text"
                    id="hscPassingYear"
                    name="hscPassingYear"
                    [(ngModel)]="academicInfo.hsc!.passingYear"
                    class="form-input"
                    placeholder="e.g., 2022"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="hscResult" class="form-label">Result *</label>
                  <select
                    id="hscResult"
                    name="hscResult"
                    [(ngModel)]="academicInfo.hsc!.result"
                    class="form-input"
                    required
                  >
                    <option value="">Select Result</option>
                    <option value="passed">Passed</option>
                    <option value="awaited">Awaited</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="hscGpa" class="form-label">GPA/Grade *</label>
                <input
                  type="text"
                  id="hscGpa"
                  name="hscGpa"
                  [(ngModel)]="academicInfo.hsc!.gpa"
                  class="form-input"
                  placeholder="e.g., 5.00, A*"
                  required
                />
              </div>
            </div>
            
            <!-- Navigation Buttons -->
            <div class="form-navigation">
              <button type="button" class="nav-button secondary" (click)="onPrevious()">
                <span class="material-icons">arrow_back</span>
                Previous
              </button>
              <button type="submit" class="nav-button primary">
                Submit Application
                <span class="material-icons">send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    .admission-container {
      min-height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      background: transparent;
    }

    .admission-card {
      background: white;
      border-radius: 4px;
      padding: 32px;
      width: 100%;
      max-width: 800px;
      border: 1px solid #e5e7eb;
    }

    .admission-header {
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

    .admission-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .admission-subtitle {
      font-size: 1.1rem;
      color: #8b5cf6;
      font-weight: 600;
      margin-bottom: 32px;
    }

    /* Progress Bar */
    .progress-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px 0;
    }

    .progress-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .progress-step.completed .step-number {
      background: #10b981;
      color: white;
      border-color: #10b981;
    }

    .progress-step.completed .step-label {
      color: #10b981;
      font-weight: 600;
    }

    .progress-step.active .step-number {
      background: #8b5cf6;
      color: white;
      border-color: #8b5cf6;
    }

    .progress-step.active .step-label {
      color: #8b5cf6;
      font-weight: 600;
    }

    .step-number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: white;
      border: 2px solid #d1d5db;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      margin-bottom: 8px;
      color: #6b7280;
    }

    .step-label {
      font-size: 0.85rem;
      color: #6b7280;
      font-weight: 500;
    }

    .progress-line {
      width: 100px;
      height: 2px;
      background: #d1d5db;
      margin: 0 10px;
    }

    .progress-line.completed {
      background: #10b981;
    }

    .admission-form {
      margin-bottom: 32px;
    }

    .form-section {
      margin-bottom: 40px;
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

    select.form-input {
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 16px center;
      background-size: 16px;
      padding-right: 40px;
    }

    /* Navigation Buttons */
    .form-navigation {
      display: flex;
      justify-content: space-between;
      margin-top: 32px;
      padding-top: 32px;
      border-top: 1px solid #e5e7eb;
    }

    .nav-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 14px 24px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
    }

    .nav-button.primary {
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
      color: white;
      box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
    }

    .nav-button.primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
    }

    .nav-button.secondary {
      background: #f3f4f6;
      color: #374151;
      border: 1px solid #d1d5db !important;
    }

    .nav-button.secondary:hover {
      background: #e5e7eb;
    }

    @media (max-width: 768px) {
      .admission-card {
        padding: 32px 24px;
      }

      .admission-title {
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

      .admission-container {
        padding: 20px 16px;
      }

      .progress-bar {
        flex-direction: row;
      }

      .progress-line {
        width: 40px;
        margin: 0 5px;
      }

      .form-navigation {
        flex-direction: column;
        gap: 16px;
      }

      .nav-button {
        justify-content: center;
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .admission-card {
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
export class AcademicInformationComponent {
  @Input() academicData: AcademicInformation | null = null;
  @Output() submit = new EventEmitter<AcademicInformation>();
  @Output() previous = new EventEmitter<void>();
  
  academicInfo: AcademicInformation = {
    ssc: {
      examName: '',
      board: '',
      roll: '',
      registration: '',
      passingYear: '',
      result: '',
      gpa: ''
    },
    hsc: {
      examName: '',
      board: '',
      roll: '',
      registration: '',
      passingYear: '',
      result: '',
      gpa: ''
    }
  };

  ngOnInit() {
    if (this.academicData) {
      this.academicInfo = { ...this.academicData };
    }
  }

  onSubmit() {
    this.submit.emit(this.academicInfo);
  }

  onPrevious() {
    this.previous.emit();
  }
}