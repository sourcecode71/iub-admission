import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PersonalInformation } from '../interfaces/admission.interface';
import { ImageCropperComponent } from 'ngx-image-cropper';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent, ImageCropperComponent],
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
            <p class="admission-subtitle">Step 1: Personal Information</p>

            <!-- Progress Bar -->
            <div class="progress-bar">
              <div class="progress-step active">
                <div class="step-number">1</div>
                <div class="step-label">Personal</div>
              </div>
              <div class="progress-line"></div>
              <div class="progress-step">
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

          <!-- Personal Information Form -->
          <form class="admission-form" (ngSubmit)="onSubmit()">
            <!-- Basic Information -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">person</span>
                Basic Information
              </h3>

              <!-- Passport Size Photo -->
              <div class="form-group photo-upload-group">
                <label class="form-label">Passport Size Photo *</label>
                <div class="image-upload-container">
                  <input
                    type="file"
                    id="passportImage"
                    name="passportImage"
                    accept="image/*"
                    (change)="fileChangeEvent($event)"
                    class="file-input"
                  />
                  <label for="passportImage" class="file-label">
                    <span class="material-icons">cloud_upload</span>
                    Choose Image
                  </label>
                  <!-- Passport Photo Display -->
                  <div class="passport-photo-display" *ngIf="croppedImage">
                    <img [src]="croppedImage" alt="Passport Photo" class="passport-photo" />
                  </div>
                </div>
                <div *ngIf="showCropper" class="cropper-modal">
                  <div class="cropper-content">
                    <h4>Crop Your Image</h4>
                    <image-cropper
                      [imageChangedEvent]="imageChangedEvent"
                      [maintainAspectRatio]="true"
                      [aspectRatio]="2/3"
                      [resizeToWidth]="1062"
                      [resizeToHeight]="1593"
                      format="png"
                      (imageCropped)="imageCropped($event)"
                      (imageLoaded)="imageLoaded()"
                      (cropperReady)="cropperReady()"
                      (loadImageFailed)="loadImageFailed()"
                    ></image-cropper>
                    <div class="cropper-actions">
                      <button type="button" class="cropper-btn" (click)="showCropper = false">Done</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Were you ever admitted to IUB? *</label>
                <div class="radio-group">
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="wasAdmittedBefore"
                      [(ngModel)]="personalInfo.wasAdmittedBefore"
                      [value]="true"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    Yes
                  </label>
                  <div *ngIf="personalInfo.wasAdmittedBefore === true" class="inline-input">
                    <label for="studentId" class="inline-label">Student Id *</label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      [(ngModel)]="personalInfo.studentId"
                      class="small-input"
                      placeholder="Enter ID"
                      required
                      maxlength="7"
                    />
                  </div>
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="wasAdmittedBefore"
                      [(ngModel)]="personalInfo.wasAdmittedBefore"
                      [value]="false"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    No
                  </label>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName" class="form-label">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    [(ngModel)]="personalInfo.firstName"
                    class="form-input"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="lastName" class="form-label">Last Name (Surname)</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    [(ngModel)]="personalInfo.lastName"
                    class="form-input"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="cellPhone" class="form-label">Cell Phone *</label>
                  <input
                    type="tel"
                    id="cellPhone"
                    name="cellPhone"
                    [(ngModel)]="personalInfo.cellPhone"
                    class="form-input"
                    placeholder="Enter your cell phone number"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="dateOfBirth" class="form-label">Date of Birth *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    [(ngModel)]="personalInfo.dateOfBirth"
                    class="form-input"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">* Enter your National ID or Birth Certificate No.</label>
                <div class="radio-group">
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="idType"
                      [(ngModel)]="personalInfo.idType"
                      value="nationalId"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    National ID
                  </label>
                  <div *ngIf="personalInfo.idType === 'nationalId'" class="inline-input">
                    <label for="nationalId" class="inline-label">Number *</label>
                    <input
                      type="text"
                      id="nationalId"
                      name="nationalId"
                      [(ngModel)]="personalInfo.nationalId"
                      class="form-input"
                      placeholder="Enter your National ID number"
                      required
                    />
                  </div>
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="idType"
                      [(ngModel)]="personalInfo.idType"
                      value="birthCertificate"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    Birth Certificate
                  </label>
                  <div *ngIf="personalInfo.idType === 'birthCertificate'" class="inline-input">
                    <label for="birthCertificate" class="inline-label">Number *</label>
                    <input
                      type="text"
                      id="birthCertificate"
                      name="birthCertificate"
                      [(ngModel)]="personalInfo.birthCertificate"
                      class="form-input"
                      placeholder="Enter your Birth Certificate number"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="gender" class="form-label">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    [(ngModel)]="personalInfo.gender"
                    class="form-input"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="bloodGroup" class="form-label">Blood Group</label>
                  <select
                    id="bloodGroup"
                    name="bloodGroup"
                    [(ngModel)]="personalInfo.bloodGroup"
                    class="form-input"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Parents Information -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">family_restroom</span>
                Parents Information
              </h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="fatherFirstName" class="form-label">Father's First Name *</label>
                  <input
                    type="text"
                    id="fatherFirstName"
                    name="fatherFirstName"
                    [(ngModel)]="personalInfo.fatherFirstName"
                    class="form-input"
                    placeholder="Enter father's first name"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="fatherLastName" class="form-label">Father's Last Name (Surname)</label>
                  <input
                    type="text"
                    id="fatherLastName"
                    name="fatherLastName"
                    [(ngModel)]="personalInfo.fatherLastName"
                    class="form-input"
                    placeholder="Enter father's last name"
                  />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="motherFirstName" class="form-label">Mother's First Name *</label>
                  <input
                    type="text"
                    id="motherFirstName"
                    name="motherFirstName"
                    [(ngModel)]="personalInfo.motherFirstName"
                    class="form-input"
                    placeholder="Enter mother's first name"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="motherLastName" class="form-label">Mother's Last Name (Surname)</label>
                  <input
                    type="text"
                    id="motherLastName"
                    name="motherLastName"
                    [(ngModel)]="personalInfo.motherLastName"
                    class="form-input"
                    placeholder="Enter mother's last name"
                  />
                </div>
              </div>
            </div>
            
            <!-- Guardian Information -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">support_agent</span>
                Guardian Information
              </h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="guardianCellPhone" class="form-label">Guardian's Cell Phone *</label>
                  <input
                    type="tel"
                    id="guardianCellPhone"
                    name="guardianCellPhone"
                    [(ngModel)]="personalInfo.guardianCellPhone"
                    class="form-input"
                    placeholder="Enter guardian's cell phone number"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="guardianEmail" class="form-label">Guardian's Email</label>
                  <input
                    type="email"
                    id="guardianEmail"
                    name="guardianEmail"
                    [(ngModel)]="personalInfo.guardianEmail"
                    class="form-input"
                    placeholder="Enter guardian's email address"
                  />
                </div>
              </div>
            </div>
            
            <!-- Address Information -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">location_on</span>
                Address Information
              </h3>
              
              <div class="address-section">
                <h4 class="address-title">Present Address</h4>
                
                <div class="form-group">
                  <label for="presentVillage" class="form-label">Village/House,Road,Block,Sector *</label>
                  <input
                    type="text"
                    id="presentVillage"
                    name="presentVillage"
                    [(ngModel)]="personalInfo.presentAddress.village"
                    class="form-input"
                    placeholder="Enter present address details"
                    required
                  />
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="presentDistrict" class="form-label">District *</label>
                    <select
                      id="presentDistrict"
                      name="presentDistrict"
                      [(ngModel)]="personalInfo.presentAddress.district"
                      (ngModelChange)="onPresentDistrictChange($event)"
                      class="form-input"
                      required
                    >
                      <option value="">Select District</option>
                      <option *ngFor="let district of districts" [value]="district">{{ district }}</option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label for="presentThana" class="form-label">Thana/Upazila *</label>
                    <select
                      id="presentThana"
                      name="presentThana"
                      [(ngModel)]="personalInfo.presentAddress.thana"
                      class="form-input"
                      required
                      [disabled]="!personalInfo.presentAddress.district"
                    >
                      <option value="">Select Thana/Upazila</option>
                      <option *ngFor="let thana of thanas[personalInfo.presentAddress.district]" [value]="thana">{{ thana }}</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="presentPostOffice" class="form-label">Post Office *</label>
                  <input
                    type="text"
                    id="presentPostOffice"
                    name="presentPostOffice"
                    [(ngModel)]="personalInfo.presentAddress.postOffice"
                    class="form-input"
                    placeholder="Enter post office"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Permanent Address</label>
                <div class="checkbox-option">
                  <label class="terms-checkbox">
                    <input
                      type="checkbox"
                      [(ngModel)]="personalInfo.permanentAddress.sameAsPresent"
                      name="sameAsPresent"
                    >
                    <span class="checkmark"></span>
                    Same as above
                  </label>
                </div>
              </div>
              
              <div class="address-section" *ngIf="!personalInfo.permanentAddress.sameAsPresent">
                <h4 class="address-title">Permanent Address</h4>
                
                <div class="form-group">
                  <label for="permanentVillage" class="form-label">Village/House,Road,Block,Sector *</label>
                  <input
                    type="text"
                    id="permanentVillage"
                    name="permanentVillage"
                    [(ngModel)]="personalInfo.permanentAddress.village"
                    class="form-input"
                    placeholder="Enter permanent address details"
                    required
                  />
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="permanentDistrict" class="form-label">District *</label>
                    <select
                      id="permanentDistrict"
                      name="permanentDistrict"
                      [(ngModel)]="personalInfo.permanentAddress.district"
                      (ngModelChange)="onPermanentDistrictChange($event)"
                      class="form-input"
                      required
                    >
                      <option value="">Select District</option>
                      <option *ngFor="let district of districts" [value]="district">{{ district }}</option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label for="permanentThana" class="form-label">Thana/Upazila *</label>
                    <select
                      id="permanentThana"
                      name="permanentThana"
                      [(ngModel)]="personalInfo.permanentAddress.thana"
                      class="form-input"
                      required
                      [disabled]="!personalInfo.permanentAddress.district"
                    >
                      <option value="">Select Thana/Upazila</option>
                      <option *ngFor="let thana of thanas[personalInfo.permanentAddress.district]" [value]="thana">{{ thana }}</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="permanentPostOffice" class="form-label">Post Office *</label>
                  <input
                    type="text"
                    id="permanentPostOffice"
                    name="permanentPostOffice"
                    [(ngModel)]="personalInfo.permanentAddress.postOffice"
                    class="form-input"
                    placeholder="Enter post office"
                    required
                  />
                </div>
              </div>
            </div>
            
            <!-- Special Conditions -->
            <div class="form-section">
              <h3 class="section-title">
                <span class="material-icons">accessibility</span>
                Special Conditions
              </h3>
              
              <div class="form-group">
                <label class="form-label">Do you have any of the following any physical disability? *</label>
                <div class="radio-group">
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="hasDisability"
                      [(ngModel)]="personalInfo.hasDisability"
                      [value]="true"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    Yes
                  </label>
                  <label class="radio-option">
                    <input
                      type="radio"
                      name="hasDisability"
                      [(ngModel)]="personalInfo.hasDisability"
                      [value]="false"
                      required
                    >
                    <span class="radio-checkmark"></span>
                    No
                  </label>
                </div>
              </div>
              
              <div class="form-group" *ngIf="personalInfo.hasDisability">
                <label for="disabilityDetails" class="form-label">Please specify the disability</label>
                <textarea
                  id="disabilityDetails"
                  name="disabilityDetails"
                  [(ngModel)]="personalInfo.disabilityDetails"
                  class="form-input"
                  placeholder="Describe your disability"
                  rows="3"
                ></textarea>
              </div>
            </div>
            
            <!-- Navigation Buttons -->
            <div class="form-navigation">
              <button type="button" class="nav-button secondary" routerLink="/register">
                <span class="material-icons">arrow_back</span>
                Previous
              </button>
              <button type="submit" class="nav-button primary">
                Next
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

    .passport-photo-display {
      width: 150px;
      height: 170px;
      border-radius: 12px;
      overflow: hidden;
      border: 3px solid #8b5cf6;
      box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
      flex-shrink: 0;
      position: relative;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: 4px;
    }

    .passport-photo-display::before {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
      border-radius: 15px;
      z-index: -1;
    }

    .passport-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid white;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .passport-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

    .radio-group {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
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

    .checkbox-option {
      margin-top: 8px;
    }

    .terms-checkbox {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 0.9rem;
      color: #374151;
      cursor: pointer;
      line-height: 1.5;
    }

    .terms-checkbox input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #8b5cf6;
      margin-top: 2px;
    }

    .address-section {
      background: #f8fafc;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .address-section:last-child {
      margin-bottom: 0;
    }

    .address-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #374151;
      margin-bottom: 20px;
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
        max-width: 100%;
      }

      .image-upload-container {
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }

      .passport-photo-display {
        width: 120px;
        height: 136px;
        margin: 16px auto 0;
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

    .inline-input {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-left: 16px;
    }

    .inline-input .form-input {
      flex: 1;
      width: auto;
    }

    .inline-label {
      font-weight: 600;
      color: #374151;
      font-size: 0.9rem;
      margin-bottom: 0;
      white-space: nowrap;
      flex: 0 0 auto;
    }

    .small-input {
      width: 140px;
      padding: 10px 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      background: #f9fafb;
    }

    .small-input:focus {
      outline: none;
      border-color: #8b5cf6;
      background: white;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    @media (max-width: 768px) {
      .inline-input {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      .inline-input .form-input {
        width: 100%;
      }

      .small-input {
        width: 120px;
        padding: 8px 10px;
      }
    }

    .image-upload-container {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      position: relative;
    }

    .file-input {
      display: none;
    }

    .file-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: #f3f4f6;
      border: 2px dashed #d1d5db;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #6b7280;
      font-weight: 500;
    }

    .file-label:hover {
      background: #e5e7eb;
      border-color: #9ca3af;
    }

    .image-preview {
      margin-top: 16px;
    }

    .preview-image {
      width: 120px;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
    }

    .cropper-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .cropper-content {
      background: white;
      padding: 24px;
      border-radius: 12px;
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
    }

    .cropper-content h4 {
      margin-bottom: 16px;
      color: #374151;
      font-weight: 600;
    }

    .cropper-actions {
      margin-top: 16px;
      text-align: center;
    }

    .cropper-btn {
      padding: 10px 20px;
      background: #8b5cf6;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
    }

    .cropper-btn:hover {
      background: #7c3aed;
    }

    @media (max-width: 768px) {
      .image-upload-container {
        align-items: center;
      }

      .preview-image {
        width: 100px;
        height: 150px;
      }

      .cropper-content {
        padding: 16px;
        max-width: 90%;
      }
    }

    @media (max-width: 480px) {
      .admission-card {
        padding: 24px 16px;
      }

      .passport-photo-display {
        width: 100px;
        height: 113px;
        margin: 12px auto 0;
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

      .inline-input {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      .inline-input .form-input {
        width: 100%;
      }

      .image-upload-container {
        gap: 12px;
      }

      .file-label {
        padding: 10px 14px;
        font-size: 0.9rem;
      }
    }
  `]
})
export class PersonalInformationComponent {
  @Output() next = new EventEmitter<PersonalInformation>();

  // Image cropper properties
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  
  // Districts and Thanas/Upazilas data for Bangladesh
  districts = [
    'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh',
    'Comilla', 'Narayanganj', 'Gazipur', 'Faridpur', 'Munshiganj', 'Manikganj', 'Tangail', 'Kishoreganj',
    'Bogra', 'Pabna', 'Naogaon', 'Natore', 'Chapainawabganj', 'Joypurhat', 'Sirajganj',
    'Moulvibazar', 'Habiganj', 'Sunamganj',
    'Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Kushtia', 'Magura', 'Meherpur', 'Narail',
    'Bandarban', 'Brahmanbaria', 'Chandpur', 'Cumilla', 'Cox\'s Bazar', 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati',
    'Barguna', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur'
  ];

  // Thanas/Upazilas grouped by district
  thanas: { [key: string]: string[] } = {
    'Dhaka': ['Dhanmondi', 'Gulshan', 'Motijheel', 'Mirpur', 'Uttara', 'Banani', 'Mohammadpur', 'Tejgaon', 'Shahbag', 'Ramna', 'Lalbag', 'Kotwali', 'Hazaribagh', 'Demra', 'Dohar', 'Keraniganj', 'Nawabganj', 'Savar'],
    'Chittagong': ['Chandgaon', 'Chawkbazar', 'Double Mooring', 'Kotwali', 'Pahartali', 'Panchlaish', 'Bandar', 'Bakoliya', 'Bayazid Bostami', 'Khulshi', 'Karnafuly', 'Patenga'],
    'Khulna': ['Khulna Sadar', 'Sonadanga', 'Khalishpur', 'Daulatpur', 'Terokhada', 'Botiaghata', 'Dumuria', 'Rupsha', 'Koyra', 'Fultola'],
    'Rajshahi': ['Rajshahi Sadar', 'Paba', 'Godagari', 'Tanore', 'Bagha', 'Durgapur', 'Mohanpur', 'Charghat', 'Bagmara', 'Putia'],
    'Barisal': ['Barisal Sadar', 'Bakerganj', 'Babuganj', 'Wazirpur', 'Banaripara', 'Mehendiganj', 'Muladi', 'Hizla'],
    'Sylhet': ['Sylhet Sadar', 'Osmani Nagar', 'Zakiganj', 'Kanaighat', 'Golapganj', 'Bishwanath', 'Beanibazar', 'Balaganj', 'Companiganj', 'Fenchuganj'],
    'Rangpur': ['Rangpur Sadar', 'Gangachara', 'Taraganj', 'Badarganj', 'Mithapukur', 'Pirgachha', 'Kaunia', 'Pirganj'],
    'Mymensingh': ['Mymensingh Sadar', 'Gouripur', 'Trishal', 'Haluaghat', 'Muktagachha', 'Dhobaura', 'Fulbaria', 'Gafargaon', 'Bhaluka', 'Kendua', 'Nandail', 'Ishwarganj'],
    'Comilla': ['Comilla Sadar', 'Debidwar', 'Barura', 'Chandina', 'Chauddagram', 'Daudkandi', 'Homna', 'Laksam', 'Muradnagar', 'Nangalkot', 'Meghna'],
    'Narayanganj': ['Narayanganj Sadar', 'Araihazar', 'Sonargaon', 'Rupganj', 'Bandar'],
    'Gazipur': ['Gazipur Sadar', 'Kaliakair', 'Kaliganj', 'Kapasia', 'Sreepur'],
    'Faridpur': ['Faridpur Sadar', 'Boalmari', 'Alfadanga', 'Madhukhali', 'Bhanga', 'Nagarkanda', 'Charbhadrasan', 'Sadarpur', 'Shaltha'],
    'Munshiganj': ['Munshiganj Sadar', 'Sreenagar', 'Sirajdikhan', 'Louhajanj', 'Gajaria', 'Tongibari'],
    'Manikganj': ['Manikganj Sadar', 'Singair', 'Shibalaya', 'Saturia', 'Harirampur', 'Ghior', 'Daulatpur'],
    'Tangail': ['Tangail Sadar', 'Sakhipur', 'Basail', 'Madhupur', 'Ghatail', 'Kalihati', 'Nagarpur', 'Mirzapur', 'Gopalpur', 'Delduar', 'Bhuapur', 'Dhanbari'],
    'Kishoreganj': ['Kishoreganj Sadar', 'Narsingdi', 'Bajitpur', 'Itna', 'Karimganj', 'Katiadi', 'Kishoreganj', 'Hossainpur', 'Pakundia', 'Kuliarchar', 'Mithamain', 'Austagram', 'Tarail'],
    'Bogra': ['Bogra Sadar', 'Shibganj', 'Sonatola', 'Dhunat', 'Gabtali', 'Shajahanpur', 'Dupchanchia', 'Adamdighi', 'Nandigram', 'Sariakandi', 'Kahaloo'],
    'Pabna': ['Pabna Sadar', 'Bera', 'Bhangura', 'Chatmohar', 'Faridpur', 'Iswardi', 'Santhia', 'Sujanagar', 'Atgharia', 'Keelmahal'],
    'Naogaon': ['Naogaon Sadar', 'Mohadevpur', 'Manda', 'Niamatpur', 'Atrai', 'Raninagar', 'Patnitala', 'Dhamoirhat', 'Sapahar', 'Porsha', 'Badalgachhi'],
    'Natore': ['Natore Sadar', 'Singra', 'Baraigram', 'Bagatipara', 'Lalpur', 'Gurudaspur', 'Naldanga'],
    'Chapainawabganj': ['Chapainawabganj Sadar', 'Gomostapur', 'Nachole', 'Bholahat', 'Shibganj'],
    'Joypurhat': ['Joypurhat Sadar', 'Akkelpur', 'Kalai', 'Khetlal', 'Panchbibi'],
    'Sirajganj': ['Sirajganj Sadar', 'Belkuchi', 'Chauhali', 'Kamarkhanda', 'Kazipur', 'Raiganj', 'Shahjadpur', 'Tarash', 'Ullahpara'],
    'Moulvibazar': ['Moulvibazar Sadar', 'Barlekha', 'Juri', 'Kamalganj', 'Kulaura', 'Rajnagar', 'Sreemangal'],
    'Habiganj': ['Habiganj Sadar', 'Ajmiriganj', 'Baniachang', 'Bahubal', 'Chunarughat', 'Lakhai', 'Madhabpur', 'Nabiganj', 'Shaistagonj'],
    'Sunamganj': ['Sunamganj Sadar', 'South Sunamganj', 'Bishwamvarpur', 'Chhatak', 'Derai', 'Dharampasha', 'Dowarabazar', 'Jagannathpur', 'Jamalganj', 'Sulla', 'Tahirpur'],
    'Bagerhat': ['Bagerhat Sadar', 'Chitalmari', 'Fakirhat', 'Kachua', 'Mollahat', 'Mongla', 'Morrelganj', 'Rampal', 'Sarankhola'],
    'Chuadanga': ['Chuadanga Sadar', 'Alamdanga', 'Damurhuda', 'Jibannagar'],
    'Jessore': ['Jessore Sadar', 'Abhaynagar', 'Bagherpara', 'Chaugachha', 'Jhikargachha', 'Keshabpur', 'Monirampur', 'Sharsha'],
    'Jhenaidah': ['Jhenaidah Sadar', 'Harinakunda', 'Kaliganj', 'Kotchandpur', 'Maheshpur', 'Shailkupa'],
    'Kushtia': ['Kushtia Sadar', 'Bheramara', 'Daulatpur', 'Khoksa', 'Kumarkhali', 'Mirpur'],
    'Magura': ['Magura Sadar', 'Mohammadpur', 'Shalikha', 'Sreepur'],
    'Meherpur': ['Meherpur Sadar', 'Gangni', 'Mujibnagar'],
    'Narail': ['Narail Sadar', 'Kalia', 'Lohagara'],
    'Bandarban': ['Bandarban Sadar', 'Thanchi', 'Lama', 'Naikhongchhari', 'Ali Kadam', 'Rowangchhari', 'Ruma'],
    'Brahmanbaria': ['Brahmanbaria Sadar', 'Ashuganj', 'Nasirnagar', 'Nabinagar', 'Sarail', 'Shahbazpur Town', 'Kasba', 'Akhaura', 'Bancharampur', 'Bijoynagar'],
    'Chandpur': ['Chandpur Sadar', 'Faridganj', 'Haimchar', 'Haziganj', 'Kachua', 'Matlab Uttar', 'Matlab Dakkhin', 'Shahrasti'],
    'Cumilla': ['Cumilla Sadar', 'Debidwar', 'Barura', 'Chandina', 'Chauddagram', 'Daudkandi', 'Homna', 'Laksam', 'Muradnagar', 'Nangalkot', 'Meghna'],
    'Cox\'s Bazar': ['Cox\'s Bazar Sadar', 'Chakaria', 'Kutubdia', 'Ukhiya', 'Moheshkhali', 'Pekua', 'Ramu', 'Teknaf'],
    'Feni': ['Feni Sadar', 'Chagalnaiya', 'Daganbhyan', 'Parshuram', 'Sonagazi', 'Fulgazi'],
    'Khagrachhari': ['Khagrachhari Sadar', 'Dighinala', 'Panchari', 'Laxmichhari', 'Mohalchari', 'Manikchhari', 'Ramgarh', 'Matiranga'],
    'Lakshmipur': ['Lakshmipur Sadar', 'Raipur', 'Ramganj', 'Ramgati', 'Komolnagar'],
    'Noakhali': ['Noakhali Sadar', 'Begumganj', 'Chatkhil', 'Companyganj', 'Shenbag', 'Hatia', 'Subarnachar', 'Kabirhat', 'Sonaimuri'],
    'Rangamati': ['Rangamati Sadar', 'Belaichhari', 'Bagaichhari', 'Barkal', 'Juraichhari', 'Rajasthali', 'Kaptai', 'Langadu', 'Nannerchar', 'Kaukhali'],
    'Barguna': ['Barguna Sadar', 'Amtali', 'Bamna', 'Betagi', 'Patharghata', 'Taltali'],
    'Bhola': ['Bhola Sadar', 'Borhan Sddin', 'Char Fasson', 'Daulatkhan', 'Lalmohan', 'Manpura', 'Tazumuddin'],
    'Jhalokati': ['Jhalokati Sadar', 'Kathalia', 'Nalchity', 'Rajapur'],
    'Patuakhali': ['Patuakhali Sadar', 'Bauphal', 'Dasmina', 'Galachipa', 'Kalapara', 'Mirzaganj', 'Dumki', 'Rangabali'],
    'Pirojpur': ['Pirojpur Sadar', 'Nazirpur', 'Kaukhali', 'Zianagar', 'Bhandaria', 'Mathbaria', 'Nesarabad']
  };

  // Selected districts for present and permanent addresses
  selectedPresentDistrict: string = '';
  selectedPermanentDistrict: string = '';

  // Method to handle present district selection change
  onPresentDistrictChange(selectedDistrict: string) {
    this.selectedPresentDistrict = selectedDistrict;
    // Reset thana when district changes
    this.personalInfo.presentAddress.thana = '';
  }

  // Method to handle permanent district selection change
  onPermanentDistrictChange(selectedDistrict: string) {
    this.selectedPermanentDistrict = selectedDistrict;
    // Reset thana when district changes
    this.personalInfo.permanentAddress.thana = '';
  }

  personalInfo: PersonalInformation = {
    passportImage: '',
    firstName: '',
    lastName: '',
    cellPhone: '',
    dateOfBirth: '',
    nationalId: '',
    birthCertificate: '',
    idType: 'nationalId',
    gender: '',
    bloodGroup: '',
    fatherFirstName: '',
    fatherLastName: '',
    motherFirstName: '',
    motherLastName: '',
    guardianCellPhone: '',
    guardianEmail: '',
    presentAddress: {
      village: '',
      district: '',
      thana: '',
      postOffice: ''
    },
    permanentAddress: {
      sameAsPresent: true,
      village: '',
      district: '',
      thana: '',
      postOffice: ''
    },
    hasDisability: false,
    wasAdmittedBefore: false,
    studentId: ''
  };

  // Image cropper methods
  fileChangeEvent(event: any): void {


    const file = event.target.files[0];
    
    console.log('Selected file:', file);

    if (file) {
      this.imageChangedEvent = event;
      this.showCropper = true;
    }
  }

  imageCropped(event: any) {
    console.log('Cropped event:', event);

    if (event.blob) {
      // Convert blob to base64 data URL
      const reader = new FileReader();
      reader.onload = () => {
        this.croppedImage = reader.result as string;
        this.personalInfo.passportImage = this.croppedImage;
        console.log('Cropped Image set to:', this.croppedImage);
      };
      reader.readAsDataURL(event.blob);
    } else {
      this.croppedImage = event.objectUrl || event.base64;
      this.personalInfo.passportImage = this.croppedImage;
      console.log('Cropped Image set to:', this.croppedImage);
    }
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  onSubmit() {
    // If permanent address is same as present, copy the values
    if (this.personalInfo.permanentAddress.sameAsPresent) {
      this.personalInfo.permanentAddress.village = this.personalInfo.presentAddress.village;
      this.personalInfo.permanentAddress.district = this.personalInfo.presentAddress.district;
      this.personalInfo.permanentAddress.thana = this.personalInfo.presentAddress.thana;
      this.personalInfo.permanentAddress.postOffice = this.personalInfo.presentAddress.postOffice;
    }

    this.next.emit(this.personalInfo);
  }
}