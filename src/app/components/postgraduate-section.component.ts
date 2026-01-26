import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionService } from '../core/services/admission.service';
import { PostgraduateProgram } from '../core/models/program.interface';
import { RouterLink } from '@angular/router';
import { AppStore } from '../core/store/app.store';

@Component({
  selector: 'app-postgraduate-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="programs-grid">
      <div class="program-card" *ngFor="let program of postgraduatePrograms">
        <div class="program-title-section">
          <h3 class="program-title">{{ program.program }}</h3>
        </div>
        
        <div class="program-details">
          <div class="detail-line">
            <span class="material-icons detail-icon">event</span>
            <span class="detail-label">Season:</span>
            <span class="detail-value session">{{ program.session }}</span>
          </div>

          <div class="detail-line">
            <span class="material-icons detail-icon">schedule</span>
            <span class="detail-label">Application Deadline:</span>
            <span class="detail-value deadline">{{ program.applicationLastDate }}</span>
          </div>

          <div class="detail-line">
            <span class="material-icons detail-icon">assignment</span>
            <span class="detail-label">Admission Test:</span>
            <span class="detail-value" [class]="program.admissionTestDate === 'TBA' ? 'tba' : 'test-date'">
              {{ program.admissionTestDate }}
            </span>
          </div>
        </div>
        
        <div class="program-actions">
          <button class="apply-button" (click)="applyForProgram(program)" routerLink="/register">
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
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-top: 24px;
    }
    
    .program-card {
      background: white;
      border-radius: 4px;
      padding: 20px;
      border: 1px solid #e5e7eb;
    }
    
    .program-card:hover {
      border: 1px solid #d1d5db;
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
    
    .detail-icon {
      color: #8b5cf6;
      font-size: 18px;
      width: 18px;
      margin-right: 8px;
      flex-shrink: 0;
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
  private store = inject(AppStore);

  constructor(private admissionService: AdmissionService) {}

  ngOnInit() {
    this.admissionService.getPostgraduatePrograms().subscribe(
      data => this.postgraduatePrograms = data
    );
  }

  applyForProgram(prog: PostgraduateProgram) {
    const programId = this.getProgramId(prog.program);
    this.store.setSelectedProgram('2', programId);
  }

  private getProgramId(name: string): string {
    switch (name) {
      case 'Computer Science & Engineering': return '2';
      case 'Electrical & Electronic Engineering': return '3';
      case 'Business Administration': return '4';
      case 'Law': return '5';
      case 'English': return '6';
      default: return '';
    }
  }
}