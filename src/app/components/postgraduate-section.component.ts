import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionService } from '../services/admission.service';
import { PostgraduateProgram } from '../interfaces/program.interface';

@Component({
  selector: 'app-postgraduate-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="programs-grid">
      <div class="program-card" *ngFor="let program of postgraduatePrograms">
        <div class="program-title-section">
          <h3 class="program-title">{{ program.program }}</h3>
        </div>
        
        <div class="program-details">
          <div class="detail-line">
            <span class="detail-label">Season:</span>
            <span class="detail-value session">{{ program.session }}</span>
          </div>
          
          <div class="detail-line">
            <span class="detail-label">Application Deadline:</span>
            <span class="detail-value deadline">{{ program.applicationLastDate }}</span>
          </div>
          
          <div class="detail-line" [class.wrap-content]="program.admissionTestDate.length > 20">
            <span class="detail-label">Admission Test:</span>
            <span class="detail-value" [class]="program.admissionTestDate === 'TBA' ? 'tba' : 'test-date'">
              {{ program.admissionTestDate }}
            </span>
          </div>
        </div>
        
        <div class="program-actions">
          <button class="apply-button">
            <span class="material-icons">send</span>
            Apply
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .programs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 32px;
    }
    
    .program-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border: 1px solid #f1f5f9;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .program-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);
      border-color: #e2e8f0;
    }
    
    .program-title-section {
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 2px solid #e2e8f0;
    }
    
    .program-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #8b5cf6;
      margin: 0 0 8px 0;
      line-height: 1.4;
      text-align: center;
    }
    
    .program-details {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }
    
    .detail-line {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
    }
    
    .detail-line.wrap-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
    
    .detail-line.wrap-content .detail-label {
      min-width: auto;
    }
    
    .detail-label {
      font-size: 0.9rem;
      color: #374151;
      font-weight: 600;
      min-width: 140px;
    }
    
    .detail-value {
      font-size: 0.9rem;
      color: #374151;
      font-weight: 500;
    }
    
    .detail-value.deadline {
      color: #ef4444;
      font-weight: 600;
    }
    
    .detail-value.test-date {
      color: #059669;
      font-weight: 600;
    }
    
    .detail-value.tba {
      color: #9ca3af;
      font-style: italic;
    }
    
    .program-actions {
      display: flex;
      justify-content: flex-end;
    }
    
    .apply-button {
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
    }
    
    .apply-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
    }
    
    .apply-button mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    
    @media (max-width: 768px) {
      .programs-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .program-card {
        padding: 20px;
      }
    }
  `]
})
export class PostgraduateSectionComponent implements OnInit {
  postgraduatePrograms: PostgraduateProgram[] = [];

  constructor(private admissionService: AdmissionService) {}

  ngOnInit() {
    this.admissionService.getPostgraduatePrograms().subscribe(
      data => this.postgraduatePrograms = data
    );
  }
}