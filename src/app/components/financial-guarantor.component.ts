import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../shared/layout.component';
import { FinancialGuarantor } from '../core/models/admission.interface';

@Component({
  selector: 'app-financial-guarantor',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent],
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
            <p class="admission-subtitle">Step 2: Financial Guarantor</p>
            
            <!-- Progress Bar -->
            <div class="progress-bar">
              <div class="progress-step completed">
                <div class="step-number">1</div>
                <div class="step-label">Personal</div>
              </div>
              <div class="progress-line completed"></div>
              <div class="progress-step active">
                <div class="step-number">2</div>
                <div class="step-label">Financial</div>
              </div>
              <div class="progress-line"></div>
              <div class="progress-step">
                <div class="step-number">3</div>
                <div class="step-label">Academic</div>
              </div>
            </div>
          </div>

          <!-- Financial Guarantor Form -->
          <form class="admission-form" (ngSubmit)="onSubmit()">
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">account_balance</span>
                Financial Guarantor Information
              </h3>
              
              <div class="form-group">
                <div class="relationship-row">
                  <label class="form-label">Relationship *</label>
                  <div class="radio-group inline">
                    <label class="radio-option">
                      <input
                        type="radio"
                        name="relationship"
                        [(ngModel)]="financialGuarantor.relationship"
                        value="father"
                        required
                      >
                      <span class="radio-checkmark"></span>
                      Father
                    </label>
                    <label class="radio-option">
                      <input
                        type="radio"
                        name="relationship"
                        [(ngModel)]="financialGuarantor.relationship"
                        value="mother"
                        required
                      >
                      <span class="radio-checkmark"></span>
                      Mother
                    </label>
                    <label class="radio-option">
                      <input
                        type="radio"
                        name="relationship"
                        [(ngModel)]="financialGuarantor.relationship"
                        value="other"
                        required
                      >
                      <span class="radio-checkmark"></span>
                      Other
                    </label>
                  </div>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName" class="form-label">Guarantor's First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    [(ngModel)]="financialGuarantor.firstName"
                    class="form-input"
                    placeholder="Enter guarantor's first name"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="lastName" class="form-label">Guarantor's Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    [(ngModel)]="financialGuarantor.lastName"
                    class="form-input"
                    placeholder="Enter guarantor's last name"
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Guarantor's NID Or Passport Id/Birth Certificate/Others *</label>
                <div class="radio-group">
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="idType"
                      [(ngModel)]="financialGuarantor.idType"
                      value="nid"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    NID
                  </label>
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="idType"
                      [(ngModel)]="financialGuarantor.idType"
                      value="passport"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    Passport Id
                  </label>
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="idType"
                      [(ngModel)]="financialGuarantor.idType"
                      value="birthCertificate"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    Birth Certificate
                  </label>
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="idType"
                      [(ngModel)]="financialGuarantor.idType"
                      value="other"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    Others
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label for="idNumber" class="form-label">Guarantor's ID Number *</label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  [(ngModel)]="financialGuarantor.idNumber"
                  class="form-input"
                  placeholder="Enter ID number"
                  required
                />
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="dateOfBirth" class="form-label">Guarantor's DOB *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    [(ngModel)]="financialGuarantor.dateOfBirth"
                    class="form-input"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="cellPhone" class="form-label">Guarantor's Cell Phone *</label>
                  <input
                    type="tel"
                    id="cellPhone"
                    name="cellPhone"
                    [(ngModel)]="financialGuarantor.cellPhone"
                    class="form-input"
                    placeholder="Enter cell phone number"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Guarantor's Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="financialGuarantor.email"
                  class="form-input"
                  placeholder="Enter email address"
                />
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="occupation" class="form-label">Guarantor's Occupation *</label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    [(ngModel)]="financialGuarantor.occupation"
                    class="form-input"
                    placeholder="Enter occupation"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="monthlyIncome" class="form-label">Guarantor's Monthly Income (TK.) *</label>
                  <input
                    type="number"
                    id="monthlyIncome"
                    name="monthlyIncome"
                    [(ngModel)]="financialGuarantor.monthlyIncome"
                    class="form-input"
                    placeholder="Enter monthly income"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="address" class="form-label">Guarantor's Postal Address *</label>
                <textarea
                  id="address"
                  name="address"
                  [(ngModel)]="financialGuarantor.address"
                  class="form-input"
                  placeholder="Enter full postal address"
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>
            
            <!-- Navigation Buttons -->
            <div class="form-navigation">
              <button type="button" class="nav-button secondary" (click)="onPrevious()">
                <span class="material-icons">arrow_back</span>
                Back to Personal
              </button>
              <button type="submit" class="nav-button primary">
                Save & Next to Academic
                <span class="material-icons">arrow_forward</span>
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

    .relationship-row {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .relationship-row .form-label {
      margin-bottom: 0;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .radio-group {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }

    .radio-group.inline {
      flex-wrap: nowrap;
      gap: 16px;
    }

    .radio-option {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: #374151;
      cursor: pointer;
      position: relative;
    }

    .radio-option input[type="radio"] {
      opacity: 0;
      position: absolute;
    }

    .radio-checkmark {
      width: 20px;
      height: 20px;
      border: 2px solid #d1d5db;
      border-radius: 50%;
      position: relative;
      transition: all 0.3s ease;
    }

    .radio-option input[type="radio"]:checked + .radio-checkmark {
      border-color: #8b5cf6;
      background: #8b5cf6;
    }

    .radio-option input[type="radio"]:checked + .radio-checkmark::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background: white;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    textarea.form-input {
      min-height: 100px;
      resize: vertical;
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

      .radio-group {
        flex-direction: column;
        gap: 16px;
      }

      .relationship-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .relationship-row .form-label {
        margin-bottom: 8px;
      }

      .radio-group.inline {
        flex-direction: row;
        gap: 16px;
        flex-wrap: wrap;
      }
    }
  `]
})
export class FinancialGuarantorComponent {
  @Input() guarantorData: FinancialGuarantor | null = null;
  @Output() next = new EventEmitter<FinancialGuarantor>();
  @Output() previous = new EventEmitter<void>();
  
  financialGuarantor: FinancialGuarantor = {
    relationship: '',
    firstName: '',
    lastName: '',
    idType: 'nid',
    idNumber: '',
    dateOfBirth: '',
    cellPhone: '',
    email: '',
    occupation: '',
    monthlyIncome: 0,
    address: ''
  };

  ngOnInit() {
    if (this.guarantorData) {
      this.financialGuarantor = { ...this.guarantorData };
    }
  }

  onSubmit() {
    this.next.emit(this.financialGuarantor);
  }

  onPrevious() {
    this.previous.emit();
  }
}