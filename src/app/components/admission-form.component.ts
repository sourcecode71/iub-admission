import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PersonalInformationComponent } from './personal-information.component';
import { FinancialGuarantorComponent } from './financial-guarantor.component';
import { AcademicInformationComponent } from './academic-information.component';
import { AdmissionData } from '../core/models/admission.interface';

@Component({
  selector: 'app-admission-form',
  standalone: true,
  imports: [CommonModule, PersonalInformationComponent, FinancialGuarantorComponent, AcademicInformationComponent],
  template: `
    <div>
      <!-- Personal Information Step -->
      <app-personal-information
        *ngIf="currentStep === 1"
        (next)="onPersonalInfoNext($event)">
      </app-personal-information>
      
      <!-- Financial Guarantor Step -->
      <app-financial-guarantor
        *ngIf="currentStep === 2"
        [guarantorData]="admissionData.financialGuarantor"
        (next)="onFinancialGuarantorNext($event)"
        (previous)="goToStep(1)">
      </app-financial-guarantor>
      
      <!-- Academic Information Step -->
      <app-academic-information
        *ngIf="currentStep === 3"
        (submit)="onAcademicInfoSubmit($event)"
        (previous)="goToStep(2)">
      </app-academic-information>
    </div>
  `
})
export class AdmissionFormComponent {
  currentStep = 1;
  admissionData: AdmissionData = {
    personalInfo: {
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
      disabilities: {
        hearing: false,
        visual: false,
        mobility: false,
        other: false,
      },
      wasAdmittedBefore: false
    },
    financialGuarantor: {
      relationship: '',
      firstName: '',
      lastName: '',
      idType: '',
      idNumber: '',
      dateOfBirth: '',
      cellPhone: '',
      email: '',
      occupation: '',
      monthlyIncome: 0,
      address: ''
    },
    academicInfo: {
      firstMajor: '',
      secondMajor: '',
      degree12: 'HSC',
      board12: '',
      passingYear12: '',
      group12: '',
      version12: '',
      resultPublished12: '',
      institution12: '',
      roll12: '',
      reg12: '',
      gpaWith4th12: '',
      gpaWithout4th12: '',
      hscTranscript: null,
      hscRegCard: null,
      aLevelInstitution: '',
      aLevelBoard: '',
      aLevelSubjects: [],
      aLevelCert1: null,
      aLevelCert2: null,
      aLevelCert3: null,
      aLevelCert4: null
    }
  };

  constructor(private router: Router) {
    // Load saved data from localStorage if available
    this.loadSavedData();
  }

  onPersonalInfoNext(data: any) {
    // Validate required fields
    if (!data.firstName || !data.cellPhone || !data.dateOfBirth) {
      alert('Please fill in all required fields');
      return;
    }
    
    this.admissionData.personalInfo = { ...data };
    this.saveData();
    this.currentStep = 2;
  }

  onFinancialGuarantorNext(data: any) {
    // Validate required fields
    if (!data.relationship || !data.firstName || !data.cellPhone || !data.occupation || !data.monthlyIncome) {
      alert('Please fill in all required fields');
      return;
    }
    
    this.admissionData.financialGuarantor = { ...data };
    this.saveData();
    this.currentStep = 3;
  }

  onAcademicInfoSubmit(data: any) {
    // Validate required fields
    if (!data.ssc || !data.hsc ||
        !data.ssc.examName || !data.ssc.board || !data.ssc.roll || !data.ssc.registration ||
        !data.ssc.passingYear || !data.ssc.result || !data.ssc.gpa ||
        !data.hsc.examName || !data.hsc.board || !data.hsc.roll || !data.hsc.registration ||
        !data.hsc.passingYear || !data.hsc.result || !data.hsc.gpa) {
      alert('Please fill in all required academic information');
      return;
    }
    
    this.admissionData.academicInfo = { ...data };
    // Submit the complete admission data
    this.submitAdmissionForm();
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  submitAdmissionForm() {
    // Here you would typically send the data to a service
    console.log('Submitting admission form:', this.admissionData);
    
    // Clear saved data after successful submission
    this.clearSavedData();
    
    // For now, we'll just show an alert and navigate to home
    alert('Admission form submitted successfully!');
    this.router.navigate(['/']);
  }

  saveData() {
    // Save data to localStorage for persistence
    try {
      localStorage.setItem('admissionFormData', JSON.stringify(this.admissionData));
    } catch (e) {
      console.error('Error saving data to localStorage:', e);
    }
  }

  loadSavedData() {
    // Load data from localStorage if available
    try {
      const savedData = localStorage.getItem('admissionFormData');
      if (savedData) {
        this.admissionData = { ...this.admissionData, ...JSON.parse(savedData) };
      }
    } catch (e) {
      console.error('Error loading data from localStorage:', e);
    }
  }

  clearSavedData() {
    // Clear saved data after successful submission
    try {
      localStorage.removeItem('admissionFormData');
    } catch (e) {
      console.error('Error clearing data from localStorage:', e);
    }
  }
}