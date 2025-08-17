import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AdmissionService } from '../services/admission.service';
import { UndergraduateInfo } from '../interfaces/program.interface';

@Component({
  selector: 'app-undergraduate-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="programs-grid">
      <!-- Undergraduate Programs Card -->
      <div class="program-card">
        <div class="program-header">
          <div class="program-icon">
            <mat-icon>school</mat-icon>
          </div>
          <div>
            <h3 class="program-title">Undergraduate Programs</h3>
            <p class="program-subtitle">Bachelor's Degree Admissions</p>
          </div>
        </div>
        
        <div class="program-details" *ngIf="undergraduateInfo">
          <div class="detail-item">
            <mat-icon class="detail-icon">event</mat-icon>
            <span class="detail-label">Academic Session:</span>
            <span class="session-badge">{{ undergraduateInfo.academicSession }}</span>
          </div>
          
          <div class="detail-item">
            <mat-icon class="detail-icon">schedule</mat-icon>
            <span class="detail-label">Application Deadline:</span>
            <span class="detail-value deadline-value">{{ undergraduateInfo.applicationDeadline }}</span>
          </div>
          
          <div class="detail-item">
            <mat-icon class="detail-icon">assignment</mat-icon>
            <span class="detail-label">Admission Test:</span>
            <span class="detail-value">{{ undergraduateInfo.admissionTest }}</span>
          </div>
          
          <div class="detail-item">
            <mat-icon class="detail-icon">announcement</mat-icon>
            <span class="detail-label">Result Publish:</span>
            <span class="detail-value">{{ undergraduateInfo.resultPublish }}</span>
          </div>
          
          <div class="detail-item">
            <mat-icon class="detail-icon">how_to_reg</mat-icon>
            <span class="detail-label">Registration:</span>
            <span class="detail-value">{{ undergraduateInfo.registration }}</span>
          </div>
        </div>
        
        <div class="program-actions">
          <button class="btn-primary">
            <mat-icon>send</mat-icon>
            Apply Now
          </button>
          <button class="btn-secondary">
            <mat-icon>info</mat-icon>
            More Details
          </button>
        </div>
      </div>

      <!-- Foreign Students Card -->
      <div class="program-card">
        <div class="program-header">
          <div class="program-icon" style="background: linear-gradient(135deg, #059669, #10b981);">
            <mat-icon>language</mat-icon>
          </div>
          <div>
            <h3 class="program-title">Foreign Students</h3>
            <p class="program-subtitle">International Applicants</p>
          </div>
        </div>
        
        <div class="program-details">
          <div class="detail-item">
            <mat-icon class="detail-icon">event</mat-icon>
            <span class="detail-label">Academic Session:</span>
            <span class="session-badge">Autumn - 2025</span>
          </div>
          
          <div class="detail-item">
            <mat-icon class="detail-icon">info</mat-icon>
            <span class="detail-label">Process:</span>
            <span class="detail-value">Special admission process for international students</span>
          </div>
          
          <div class="detail-item">
            <mat-icon class="detail-icon">email</mat-icon>
            <span class="detail-label">Email:</span>
            <span class="detail-value">international&#64;iub.edu.bd</span>
          </div>
          
          <div class="detail-item">
            <mat-icon class="detail-icon">phone</mat-icon>
            <span class="detail-label">Phone:</span>
            <span class="detail-value">+880-2-9291204-6</span>
          </div>
        </div>
        
        <div class="program-actions">
          <button class="btn-primary" style="background: linear-gradient(135deg, #059669, #10b981);">
            <mat-icon>mail</mat-icon>
            Contact Office
          </button>
          <button class="btn-secondary" style="color: #059669; border-color: #059669;">
            <mat-icon>info</mat-icon>
            Learn More
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .programs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-bottom: 60px;
    }
  `]
})
export class UndergraduateSectionComponent implements OnInit {
  undergraduateInfo: UndergraduateInfo | null = null;

  constructor(private admissionService: AdmissionService) {}

  ngOnInit() {
    this.admissionService.getUndergraduateInfo().subscribe(
      data => this.undergraduateInfo = data
    );
  }
}