import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionService } from '../core/services/admission.service';
import { UndergraduateInfo } from '../core/models/program.interface';

@Component({
  selector: 'app-undergraduate-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="programs-grid">
      <!-- Undergraduate Programs Card -->
      <div class="program-card">
        <div class="program-header">
          <div class="program-icon">
            <span class="material-icons">school</span>
          </div>
          <div>
            <h3 class="program-title">Undergraduate Programs</h3>
            <p class="program-subtitle">Bachelor's Degree Admissions</p>
          </div>
        </div>
        
        <div class="program-details" *ngIf="undergraduateInfo">
          <div class="detail-item">
            <span class="material-icons detail-icon">event</span>
            <span class="detail-label">Academic Session:</span>
            <span class="session-badge">{{ undergraduateInfo.academicSession }}</span>
          </div>
          
          <div class="detail-item">
            <span class="material-icons detail-icon">schedule</span>
            <span class="detail-label">Application Deadline:</span>
            <span class="detail-value deadline-value">{{ undergraduateInfo.applicationDeadline }}</span>
          </div>
          
          <div class="detail-item">
            <span class="material-icons detail-icon">assignment</span>
            <span class="detail-label">Admission Test:</span>
            <span class="detail-value">{{ undergraduateInfo.admissionTest }}</span>
          </div>
          
          <div class="detail-item">
            <span class="material-icons detail-icon">announcement</span>
            <span class="detail-label">Result Publish:</span>
            <span class="detail-value">{{ undergraduateInfo.resultPublish }}</span>
          </div>
          
          <div class="detail-item">
            <span class="material-icons detail-icon">how_to_reg</span>
            <span class="detail-label">Registration:</span>
            <span class="detail-value">{{ undergraduateInfo.registration }}</span>
          </div>
        </div>
        
        <div class="program-actions">
          <button class="btn-primary">
            <span class="material-icons">send</span>
            Apply Now
          </button>
          <button class="btn-secondary">
            <span class="material-icons">info</span>
            More Details
          </button>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .programs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
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