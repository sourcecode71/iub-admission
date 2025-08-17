import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AdmissionService } from '../services/admission.service';
import { PostgraduateProgram } from '../interfaces/program.interface';

@Component({
  selector: 'app-postgraduate-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="programs-grid">
      <div class="program-card" *ngFor="let program of postgraduatePrograms">
        <div class="program-header">
          <h3 class="program-title">{{ program.program }}</h3>
          <span class="session-badge">{{ program.session }}</span>
        </div>
        
        <div class="program-details">
          <div class="detail-row">
            <mat-icon class="detail-icon">schedule</mat-icon>
            <div class="detail-content">
              <span class="detail-label">Application Deadline</span>
              <span class="detail-value deadline">{{ program.applicationLastDate }}</span>
            </div>
          </div>
          
          <div class="detail-row">
            <mat-icon class="detail-icon">event</mat-icon>
            <div class="detail-content">
              <span class="detail-label">Admission Test</span>
              <span class="detail-value" [class]="program.admissionTestDate === 'TBA' ? 'tba' : 'test-date'">
                {{ program.admissionTestDate }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="program-actions">
          <button class="apply-button">
            <mat-icon>send</mat-icon>
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
    
    .program-header {
      margin-bottom: 20px;
    }
    
    .program-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 8px 0;
      line-height: 1.4;
    }
    
    .session-badge {
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
      color: white;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .program-details {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
    }
    
    .detail-row {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    
    .detail-icon {
      color: #8b5cf6;
      font-size: 20px;
      width: 20px;
      margin-top: 2px;
      flex-shrink: 0;
    }
    
    .detail-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
    }
    
    .detail-label {
      font-size: 0.85rem;
      color: #64748b;
      font-weight: 500;
    }
    
    .detail-value {
      font-size: 0.95rem;
      color: #334155;
      font-weight: 600;
    }
    
    .detail-value.deadline {
      color: #ef4444;
    }
    
    .detail-value.test-date {
      color: #059669;
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
      
      .program-title {
        font-size: 1rem;
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