import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LayoutComponent } from './layout.component';
import { AcademicInformation } from '../interfaces/admission.interface';

@Component({
  selector: 'app-academic-information',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, LayoutComponent],
  template: `
    <app-layout [showHeaderActions]="false">
      <div class="admission-container">
        <div class="admission-card">
          <!-- Header -->
          <div class="admission-header">
            <div class="university-logo">
              <img src="assets/iub_logo.png" alt="IUB Logo" class="logo-image">
            </div>
            <!-- Progress Bar ...existing code... -->
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
            <!-- Major Selection -->
            <div class="form-section">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Choose first major *</label>
                  <select [(ngModel)]="academicInfo.firstMajor" name="firstMajor" required class="form-input">
                    <option value="">Select First Major</option>
                    <option *ngFor="let major of majors" [value]="major">{{ major }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Choose second major *</label>
                  <select [(ngModel)]="academicInfo.secondMajor" name="secondMajor" required class="form-input">
                    <option value="">Select Second Major</option>
                    <option *ngFor="let major of majors" [value]="major">{{ major }}</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- 12 Years Degree Selection -->
            <div class="form-section">
              <div class="form-group">
                <label class="form-label">What's your 12 years degree? *</label>
                <div class="radio-group">
                  <div class="radio-option">
                    <input type="radio" id="hsc" name="degree12" value="HSC" [(ngModel)]="academicInfo.degree12" required>
                    <label for="hsc" class="radio-label">HSC</label>
                  </div>
                  <div class="radio-option">
                    <input type="radio" id="alevel" name="degree12" value="A Level" [(ngModel)]="academicInfo.degree12" required>
                    <label for="alevel" class="radio-label">A Level</label>
                  </div>
                  <div class="radio-option">
                    <input type="radio" id="foreign" name="degree12" value="Foreign Board/IB" [(ngModel)]="academicInfo.degree12" required>
                    <label for="foreign" class="radio-label">Foreign Board/IB</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- HSC Fields -->
            <div class="form-section" *ngIf="academicInfo.degree12 === 'HSC'">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Academic Board *</label>
                  <input type="text" [(ngModel)]="academicInfo.board12" name="board12" required class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Passing Year *</label>
                  <input type="number" [(ngModel)]="academicInfo.passingYear12" name="passingYear12" required class="form-input" min="2000" max="2025" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Group *</label>
                  <select [(ngModel)]="academicInfo.group12" name="group12" required class="form-input">
                    <option value="">Select Group</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Version *</label>
                  <select [(ngModel)]="academicInfo.version12" name="version12" required class="form-input">
                    <option value="">Select</option>
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Result published? *</label>
                <div class="radio-group">
                  <div class="radio-option">
                    <input type="radio" id="resultYes" name="resultPublished12" value="Yes" [(ngModel)]="academicInfo.resultPublished12" required>
                    <label for="resultYes" class="radio-label">Yes</label>
                  </div>
                  <div class="radio-option">
                    <input type="radio" id="resultNo" name="resultPublished12" value="No" [(ngModel)]="academicInfo.resultPublished12" required>
                    <label for="resultNo" class="radio-label">No</label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Name of the Institution *</label>
                <input type="text" [(ngModel)]="academicInfo.institution12" name="institution12" required class="form-input" />
              </div>
              <div *ngIf="academicInfo.resultPublished12 !== 'No'">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">Roll No *</label>
                    <input type="text" [(ngModel)]="academicInfo.roll12" name="roll12" required class="form-input" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Registration No *</label>
                    <input type="text" [(ngModel)]="academicInfo.reg12" name="reg12" required class="form-input" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">GPA With 4th Subject *</label>
                    <input type="number" [(ngModel)]="academicInfo.gpaWith4th12" name="gpaWith4th12" required class="form-input" step="0.01" min="0" max="5" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">GPA Without 4th Subject *</label>
                    <input type="number" [(ngModel)]="academicInfo.gpaWithout4th12" name="gpaWithout4th12" required class="form-input" step="0.01" min="0" max="5" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">HSC Transcript</label>
                    <input type="file" (change)="onFileChange($event, 'hscTranscript')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">HSC Registration Card</label>
                    <input type="file" (change)="onFileChange($event, 'hscRegCard')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                  </div>
                </div>
              </div>
            </div>

            <!-- A Level Fields -->
            <div class="form-section" *ngIf="academicInfo.degree12 === 'A Level'">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Institution Name *</label>
                  <input type="text" [(ngModel)]="academicInfo.aLevelInstitution" name="aLevelInstitution" required class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Exam Board *</label>
                  <select [(ngModel)]="academicInfo.aLevelBoard" name="aLevelBoard" required class="form-input">
                    <option value="">Select Board</option>
                    <option value="Cambridge">Cambridge</option>
                    <option value="Edexcel">Edexcel</option>
                    <option value="AQA">AQA</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div class="subjects-section">
                <h4 class="section-title">
                  <span class="material-icons">school</span>
                  A-Level Subjects
                </h4>
                <div *ngFor="let subject of academicInfo.aLevelSubjects; let i = index" class="subject-row">
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Subject *</label>
                      <input type="text" [(ngModel)]="subject.name" name="aLevelSubject{{i}}" required class="form-input" />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Year *</label>
                      <input type="number" [(ngModel)]="subject.year" name="aLevelYear{{i}}" required class="form-input" min="2000" max="2025" />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Month *</label>
                      <select [(ngModel)]="subject.month" name="aLevelMonth{{i}}" required class="form-input">
                        <option value="">Select</option>
                        <option value="January">January</option>
                        <option value="May/June">May/June</option>
                        <option value="October/November">October/November</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Grade *</label>
                      <select [(ngModel)]="subject.grade" name="aLevelGrade{{i}}" required class="form-input">
                        <option value="">Select</option>
                        <option value="A*">A*</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                      </select>
                    </div>
                    <button type="button" class="remove-button" (click)="removeALevelSubject(i)" [disabled]="(academicInfo.aLevelSubjects || []).length <= 2">
                      <span class="material-icons">remove_circle</span>
                    </button>
                  </div>
                </div>
                <button type="button" class="add-button" (click)="addALevelSubject()">
                  <span class="material-icons">add_circle</span>
                  Add Another Subject
                </button>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">A-Level Certificate 1</label>
                  <input type="file" (change)="onFileChange($event, 'aLevelCert1')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
                <div class="form-group">
                  <label class="form-label">A-Level Certificate 2</label>
                  <input type="file" (change)="onFileChange($event, 'aLevelCert2')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">A-Level Certificate 3</label>
                  <input type="file" (change)="onFileChange($event, 'aLevelCert3')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
                <div class="form-group">
                  <label class="form-label">A-Level Certificate 4</label>
                  <input type="file" (change)="onFileChange($event, 'aLevelCert4')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
            </div>

            <!-- Foreign Board/IB Fields -->
            <div class="form-section" *ngIf="academicInfo.degree12 === 'Foreign Board/IB'">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Name of the Institution *</label>
                  <input type="text" [(ngModel)]="academicInfo.foreignInstitution" name="foreignInstitution" required class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Degree Name *</label>
                  <input type="text" [(ngModel)]="academicInfo.foreignDegreeName" name="foreignDegreeName" required class="form-input" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Year *</label>
                  <input type="number" [(ngModel)]="academicInfo.foreignYear" name="foreignYear" required class="form-input" min="2000" max="2025" />
                </div>
                <div class="form-group">
                  <label class="form-label">Result *</label>
                  <input type="text" [(ngModel)]="academicInfo.foreignResult" name="foreignResult" required class="form-input" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Certificate/Mark Sheet 1</label>
                  <input type="file" (change)="onFileChange($event, 'foreignCert1')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
                <div class="form-group">
                  <label class="form-label">Certificate/Mark Sheet 2</label>
                  <input type="file" (change)="onFileChange($event, 'foreignCert2')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
            </div>

            <!-- 10 Years Degree Selection -->
            <div class="form-section">
              <div class="form-group">
                <label class="form-label">What's your 10 years degree? *</label>
                <div class="radio-group">
                  <div class="radio-option">
                    <input type="radio" id="ssc" name="degree10" value="SSC" [(ngModel)]="degree10" required>
                    <label for="ssc" class="radio-label">SSC</label>
                  </div>
                  <div class="radio-option">
                    <input type="radio" id="olevel" name="degree10" value="O-level" [(ngModel)]="degree10" required>
                    <label for="olevel" class="radio-label">O-level</label>
                  </div>
                  <div class="radio-option">
                    <input type="radio" id="foreign10" name="degree10" value="Foreign Board/IB" [(ngModel)]="degree10" required>
                    <label for="foreign10" class="radio-label">Foreign Board/IB</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- SSC Fields -->
            <div class="form-section" *ngIf="academicInfo.degree10 === 'SSC'">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Academic Board *</label>
                  <input type="text" [(ngModel)]="academicInfo.board10" name="board10" required class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Passing Year *</label>
                  <input type="number" [(ngModel)]="academicInfo.passingYear10" name="passingYear10" required class="form-input" min="2000" max="2025" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Group *</label>
                  <select [(ngModel)]="academicInfo.group10" name="group10" required class="form-input">
                    <option value="">Select Group</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Version *</label>
                  <select [(ngModel)]="academicInfo.version10" name="version10" required class="form-input">
                    <option value="">Select</option>
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Name of the Institution *</label>
                <input type="text" [(ngModel)]="academicInfo.institution10" name="institution10" required class="form-input" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Roll No *</label>
                  <input type="text" [(ngModel)]="academicInfo.roll10" name="roll10" required class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Registration No *</label>
                  <input type="text" [(ngModel)]="academicInfo.reg10" name="reg10" required class="form-input" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">GPA With 4th Subject *</label>
                  <input type="number" [(ngModel)]="academicInfo.gpaWith4th10" name="gpaWith4th10" required class="form-input" step="0.01" min="0" max="5" />
                </div>
                <div class="form-group">
                  <label class="form-label">GPA Without 4th Subject *</label>
                  <input type="number" [(ngModel)]="academicInfo.gpaWithout4th10" name="gpaWithout4th10" required class="form-input" step="0.01" min="0" max="5" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">SSC Transcript</label>
                  <input type="file" (change)="onFileChange($event, 'sscTranscript')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
                <div class="form-group">
                  <label class="form-label">SSC Registration Card</label>
                  <input type="file" (change)="onFileChange($event, 'sscRegCard')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
            </div>

            <!-- O Level Fields -->
            <div class="form-section" *ngIf="academicInfo.degree10 === 'O-level'">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Institution Name *</label>
                  <input type="text" [(ngModel)]="academicInfo.oLevelInstitution" name="oLevelInstitution" required class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Exam Board *</label>
                  <select [(ngModel)]="academicInfo.oLevelBoard" name="oLevelBoard" required class="form-input">
                    <option value="">Select Board</option>
                    <option value="Cambridge">Cambridge</option>
                    <option value="Edexcel">Edexcel</option>
                    <option value="AQA">AQA</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div class="subjects-section">
                <h4 class="section-title">
                  <span class="material-icons">school</span>
                  O-Level Subjects
                </h4>
                <div *ngFor="let subject of academicInfo.oLevelSubjects; let i = index" class="subject-row">
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Subject *</label>
                      <input type="text" [(ngModel)]="subject.name" name="oLevelSubject{{i}}" required class="form-input" />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Year *</label>
                      <input type="number" [(ngModel)]="subject.year" name="oLevelYear{{i}}" required class="form-input" min="2000" max="2025" />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Month *</label>
                      <select [(ngModel)]="subject.month" name="oLevelMonth{{i}}" required class="form-input">
                        <option value="">Select</option>
                        <option value="January">January</option>
                        <option value="May/June">May/June</option>
                        <option value="October/November">October/November</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Grade *</label>
                      <select [(ngModel)]="subject.grade" name="oLevelGrade{{i}}" required class="form-input">
                        <option value="">Select</option>
                        <option value="A*">A*</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                      </select>
                    </div>
                    <button type="button" class="remove-button" (click)="removeOLevelSubject(i)" [disabled]="(academicInfo.oLevelSubjects || []).length <= 5">
                      <span class="material-icons">remove_circle</span>
                    </button>
                  </div>
                </div>
                <button type="button" class="add-button" (click)="addOLevelSubject()">
                  <span class="material-icons">add_circle</span>
                  Add Another Subject
                </button>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">O-Level Certificate 1</label>
                  <input type="file" (change)="onFileChange($event, 'oLevelCert1')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
                <div class="form-group">
                  <label class="form-label">O-Level Certificate 2</label>
                  <input type="file" (change)="onFileChange($event, 'oLevelCert2')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">O-Level Certificate 3</label>
                  <input type="file" (change)="onFileChange($event, 'oLevelCert3')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
                <div class="form-group">
                  <label class="form-label">O-Level Certificate 4</label>
                  <input type="file" (change)="onFileChange($event, 'oLevelCert4')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
            </div>

            <!-- Foreign Board/IB Fields for 10 years -->
            <div class="form-section" *ngIf="academicInfo.degree10 === 'Foreign Board/IB'">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Name of the Institution *</label>
                  <input type="text" [(ngModel)]="academicInfo.foreign10Institution" name="foreign10Institution" required class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label">Degree Name *</label>
                  <input type="text" [(ngModel)]="academicInfo.foreign10DegreeName" name="foreign10DegreeName" required class="form-input" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Year *</label>
                  <input type="number" [(ngModel)]="academicInfo.foreign10Year" name="foreign10Year" required class="form-input" min="2000" max="2025" />
                </div>
                <div class="form-group">
                  <label class="form-label">Result *</label>
                  <input type="text" [(ngModel)]="academicInfo.foreign10Result" name="foreign10Result" required class="form-input" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Certificate/Mark Sheet 1</label>
                  <input type="file" (change)="onFileChange($event, 'foreign10Cert1')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
                <div class="form-group">
                  <label class="form-label">Certificate/Mark Sheet 2</label>
                  <input type="file" (change)="onFileChange($event, 'foreign10Cert2')" class="form-input" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
            </div>

            <!-- Exam Venue and Test Scores -->
            <div class="form-section">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Exam Venue *</label>
                  <select [(ngModel)]="academicInfo.examVenue" name="examVenue" required class="form-input" (change)="onVenueChange()">
                    <option value="">Select Exam Venue</option>
                    <option *ngFor="let venue of examVenues" [value]="venue.city">{{ venue.city }}</option>
                  </select>
                </div>
                <div class="form-group" *ngIf="academicInfo.examVenueAddress">
                  <label class="form-label">Venue Address</label>
                  <textarea [(ngModel)]="academicInfo.examVenueAddress" name="examVenueAddress" class="form-input" readonly rows="3"></textarea>
                </div>
              </div>
            </div>

            <!-- Test Scores Section -->
            <div class="form-section">
              <h4 class="section-title">
                <span class="material-icons">school</span>
                SAT / IELTS or TOEFL (if available)
              </h4>

              <!-- SAT Section -->
              <div class="test-score-row">
                <div class="checkbox-group">
                  <input type="checkbox" id="hasSat" [(ngModel)]="academicInfo.hasSat" name="hasSat" />
                  <label for="hasSat" class="checkbox-label">SAT</label>
                </div>
                <div class="score-input-group" *ngIf="academicInfo.hasSat">
                  <mat-form-field appearance="outline" class="material-form-field">
                    <mat-label>Score *</mat-label>
                    <input matInput type="number" [(ngModel)]="academicInfo.satScore" name="satScore" required min="0" max="1600" placeholder="Minimum SAT-1 Score 1000" />
                  </mat-form-field>
                </div>
              </div>

              <!-- IELTS/TOEFL Section -->
              <div class="test-score-row">
                <div class="ielts-toefl-group">
                  <div class="checkbox-group">
                    <input type="checkbox" id="hasIelts" [(ngModel)]="academicInfo.hasIelts" name="hasIelts" (change)="onIeltsChange()" />
                    <label for="hasIelts" class="checkbox-label">IELTS</label>
                  </div>
                  <span class="or-text">OR</span>
                  <div class="checkbox-group">
                    <input type="checkbox" id="hasToefl" [(ngModel)]="academicInfo.hasToefl" name="hasToefl" (change)="onToeflChange()" />
                    <label for="hasToefl" class="checkbox-label">TOEFL</label>
                  </div>
                </div>
                <div class="score-input-group" *ngIf="academicInfo.hasIelts">
                  <mat-form-field appearance="outline" class="material-form-field">
                    <mat-label>Score *</mat-label>
                    <input matInput type="number" [(ngModel)]="academicInfo.ieltsScore" name="ieltsScore" required step="0.5" min="0" max="9" placeholder="Minimum IELTS Score 5.5" />
                  </mat-form-field>
                </div>
                <div class="score-input-group" *ngIf="academicInfo.hasToefl">
                  <div class="form-row">
                    <div class="form-group">
                      <mat-form-field appearance="outline" class="material-form-field">
                        <mat-label>Type *</mat-label>
                        <mat-select [(ngModel)]="academicInfo.toeflType" name="toeflType" required>
                          <mat-option value="paper">Paper Based</mat-option>
                          <mat-option value="computer">Computer Based</mat-option>
                          <mat-option value="internet">Internet Based</mat-option>
                        </mat-select>
                      </mat-form-field>
                    </div>
                    <div class="form-group">
                      <mat-form-field appearance="outline" class="material-form-field">
                        <mat-label>Score *</mat-label>
                        <input matInput type="number" [(ngModel)]="academicInfo.toeflScore" name="toeflScore" required min="0" [max]="getMaxToeflScore()" [placeholder]="getToeflPlaceholder()" />
                      </mat-form-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- How did you know about IUB -->
            <div class="form-section">
              <div class="form-group">
                <label class="form-label">How did you come to know about IUB ? *</label>
                <select [(ngModel)]="academicInfo.howDidYouKnowAboutIUB" name="howDidYouKnowAboutIUB" required class="form-input">
                  <option value="">Select</option>
                  <option value="Website">Website</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friends/Family">Friends/Family</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="School/College">School/College</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <!-- Certification -->
            <div class="form-section">
              <div class="form-group">
                <div class="checkbox-group">
                  <input type="checkbox" id="certification" [(ngModel)]="academicInfo.certificationAccepted" name="certificationAccepted" required />
                  <label for="certification" class="checkbox-label">
                    I certify that all the above mentioned information in the form is correct. In case of any fraudulent data Independent University, Bangladesh (IUB) reserves the right to cancel the admission at any time.
                  </label>
                </div>
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

    /* New styles for improved form structure */
    .subjects-section {
      background: #f8fafc;
      border-radius: 12px;
      padding: 24px;
      margin: 24px 0;
      border: 1px solid #e2e8f0;
    }

    .subject-row {
      background: white;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .subject-row:last-child {
      margin-bottom: 0;
    }

    .add-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      background: #10b981;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 16px;
      font-size: 0.95rem;
    }

    .add-button:hover {
      background: #059669;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }

    .remove-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 24px;
      flex-shrink: 0;
    }

    .remove-button:hover:not(:disabled) {
      background: #dc2626;
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    .remove-button:disabled {
      background: #d1d5db;
      cursor: not-allowed;
      transform: none;
      color: #9ca3af;
    }

    .form-input[type="file"] {
      padding: 12px 16px;
      background: white;
      border: 2px dashed #d1d5db;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .form-input[type="file"]:hover {
      border-color: #8b5cf6;
      background: #faf5ff;
      border-style: solid;
    }

    .form-input:invalid {
      border-color: #ef4444;
      background: #fef2f2;
    }

    .form-input:valid:not(:placeholder-shown) {
      border-color: #10b981;
    }

    /* Validation feedback */
    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .success-message {
      color: #10b981;
      font-size: 0.875rem;
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    /* Improved mobile responsiveness for new elements */
    @media (max-width: 768px) {
      .subjects-section {
        padding: 16px;
        margin: 16px 0;
      }

      .subject-row {
        padding: 12px;
      }

      .remove-button {
        width: 36px;
        height: 36px;
        margin-top: 16px;
      }

      .add-button {
        padding: 10px 16px;
        font-size: 0.9rem;
      }
    }

    /* Radio button styles */
    .radio-group {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      margin-top: 8px;
    }

    .radio-option {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .radio-option input[type="radio"] {
      width: 20px;
      height: 20px;
      border: 2px solid #d1d5db;
      border-radius: 50%;
      appearance: none;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      background: white;
    }

    .radio-option input[type="radio"]:checked {
      border-color: #8b5cf6;
      background: #8b5cf6;
    }

    .radio-option input[type="radio"]:checked::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }

    .radio-option input[type="radio"]:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
    }

    .radio-label {
      font-weight: 500;
      color: #374151;
      cursor: pointer;
      font-size: 0.95rem;
    }

    .radio-option input[type="radio"]:checked + .radio-label {
      color: #8b5cf6;
      font-weight: 600;
    }

    @media (max-width: 480px) {
      .form-row {
        flex-direction: column;
        gap: 0;
      }

      .form-row .remove-button {
        align-self: center;
        margin-top: 12px;
      }

      .radio-group {
        flex-direction: column;
        gap: 16px;
      }
    }

    /* Checkbox styles */
    .checkbox-group {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-top: 8px;
    }

    .checkbox-group input[type="checkbox"] {
      width: 20px;
      height: 20px;
      border: 2px solid #d1d5db;
      border-radius: 4px;
      appearance: none;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      background: white;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .checkbox-group input[type="checkbox"]:checked {
      border-color: #8b5cf6;
      background: #8b5cf6;
    }

    .checkbox-group input[type="checkbox"]:checked::before {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 14px;
      font-weight: bold;
    }

    .checkbox-group input[type="checkbox"]:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
    }

    .checkbox-label {
      font-weight: 500;
      color: #374151;
      cursor: pointer;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 0;
    }

    .checkbox-group input[type="checkbox"]:checked + .checkbox-label {
      color: #8b5cf6;
      font-weight: 600;
    }

    /* Test score section styles */
    .test-score-row {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      margin-bottom: 24px;
      padding: 16px;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }

    .test-score-row:last-child {
      margin-bottom: 0;
    }

    .ielts-toefl-group {
      display: flex;
      align-items: center;
      gap: 16px;
      min-width: 200px;
    }

    .or-text {
      font-weight: 600;
      color: #6b7280;
      font-size: 0.9rem;
    }

    .score-input-group {
      flex: 1;
    }

    .score-input-group .form-row {
      margin-top: 0;
    }

    .score-input-group .form-group {
      margin-bottom: 0;
    }

    /* Material Design form field styles */
    .material-form-field {
      width: 100%;
    }

    .material-form-field .mat-mdc-form-field {
      width: 100%;
    }

    .material-form-field .mat-mdc-text-field-wrapper {
      background: transparent !important;
    }

    .material-form-field .mdc-notched-outline__leading,
    .material-form-field .mdc-notched-outline__notch,
    .material-form-field .mdc-notched-outline__trailing {
      border-color: #d1d5db !important;
      border-width: 1px !important;
    }

    .material-form-field .mdc-notched-outline--notched .mdc-notched-outline__notch {
      border-top: none !important;
    }

    .material-form-field.mat-focused .mdc-notched-outline__leading,
    .material-form-field.mat-focused .mdc-notched-outline__notch,
    .material-form-field.mat-focused .mdc-notched-outline__trailing {
      border-color: #8b5cf6 !important;
      border-width: 2px !important;
    }
  `]
})
export class AcademicInformationComponent implements OnInit {
  @Input() academicData: AcademicInformation = {};
  @Output() dataChange = new EventEmitter<AcademicInformation>();
  @Output() previousStep = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<AcademicInformation>();

  majors = [
    'BBA', 'Economics', 'Computer Science', 'Electrical Engineering', 'Environmental Science', 'Media & Communication', 'English', 'Law', 'Biochemistry', 'Microbiology', 'Pharmacy', 'Mathematics', 'Physics', 'Other'
  ];

  examVenues = [
    { city: 'Dhaka', address: 'Independent University, Bangladesh, Plot 16, Block B, Aftabuddin Ahmed Road, Bashundhara, Dhaka 1229' },
    { city: 'Chittagong', address: 'Independent University, Bangladesh - Chittagong Campus, 232/1 CDA Avenue, Nasirabad, Chittagong 4000' },
    { city: 'Khulna', address: 'Independent University, Bangladesh - Khulna Campus, 12-13 Khan Jahan Ali Road, Khulna 9100' },
    { city: 'Sylhet', address: 'Independent University, Bangladesh - Sylhet Campus, 15 Zindabazar, Sylhet 3100' },
    { city: 'Rajshahi', address: 'Independent University, Bangladesh - Rajshahi Campus, 12 Shaheed A.H.M. Qamaruzzaman Road, Rajshahi 6200' }
  ];

  private _degree10: string = 'SSC';

  get degree10(): string {
    return this._degree10;
  }

  set degree10(value: string) {
    if (this._degree10 !== value) {
      this._degree10 = value;
      this.academicInfo.degree10 = value;
      if (value === 'O-level') {
        this.initializeOLevelSubjects();
      }
      this.emitDataChange();
    }
  }
  
  academicInfo: AcademicInformation = {
    firstMajor: '',
    secondMajor: '',
    degree10: 'SSC',
    board10: '',
    passingYear10: '',
    group10: '',
    version10: '',
    institution10: '',
    roll10: '',
    reg10: '',
    gpaWith4th10: '',
    gpaWithout4th10: '',
    sscTranscript: null,
    sscRegCard: null,
    oLevelInstitution: '',
    oLevelBoard: '',
    oLevelSubjects: [
      { name: '', year: '', month: '', grade: '' },
      { name: '', year: '', month: '', grade: '' }
    ],
    oLevelCert1: null,
    oLevelCert2: null,
    oLevelCert3: null,
    oLevelCert4: null,
    foreign10Institution: '',
    foreign10DegreeName: '',
    foreign10Year: '',
    foreign10Result: '',
    foreign10Cert1: null,
    foreign10Cert2: null,
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
    aLevelSubjects: [
      { name: '', year: '', month: '', grade: '' },
      { name: '', year: '', month: '', grade: '' }
    ],
    aLevelCert1: null,
    aLevelCert2: null,
    aLevelCert3: null,
    aLevelCert4: null,
    foreignInstitution: '',
    foreignDegreeName: '',
    foreignYear: '',
    foreignResult: '',
    foreignCert1: null,
    foreignCert2: null,
    examVenue: '',
    examVenueAddress: '',
    hasSat: false,
    satScore: '',
    hasIelts: false,
    ieltsScore: '',
    hasToefl: false,
    toeflScore: '',
    toeflType: undefined,
    howDidYouKnowAboutIUB: '',
    certificationAccepted: false
  };

  ngOnInit() {
    if (this.academicData && Object.keys(this.academicData).length > 0) {
      this.academicInfo = { ...this.academicData };
      // Ensure A-Level subjects has at least two entries
      if (!this.academicInfo.aLevelSubjects || this.academicInfo.aLevelSubjects.length === 0) {
        this.academicInfo.aLevelSubjects = [
          { name: '', year: '', month: '', grade: '' },
          { name: '', year: '', month: '', grade: '' }
        ];
      } else if (this.academicInfo.aLevelSubjects.length === 1) {
        this.academicInfo.aLevelSubjects.push({ name: '', year: '', month: '', grade: '' });
      }
      // Ensure O-Level subjects has at least two entries
      if (!this.academicInfo.oLevelSubjects || this.academicInfo.oLevelSubjects.length === 0) {
        this.academicInfo.oLevelSubjects = [
          { name: '', year: '', month: '', grade: '' },
          { name: '', year: '', month: '', grade: '' }
        ];
      } else if (this.academicInfo.oLevelSubjects.length === 1) {
        this.academicInfo.oLevelSubjects.push({ name: '', year: '', month: '', grade: '' });
      }
    }

    // Set SSC as default if no degree10 is specified
    if (!this.academicInfo.degree10) {
      this.degree10 = 'SSC';
    } else {
      this.degree10 = this.academicInfo.degree10;
    }

    // Set HSC as default if no degree12 is specified
    if (!this.academicInfo.degree12) {
      this.academicInfo.degree12 = 'HSC';
      this.emitDataChange();
    }

    // Set Yes as default for result published if not specified
    if (!this.academicInfo.resultPublished12) {
      this.academicInfo.resultPublished12 = 'Yes';
      this.emitDataChange();
    }

    // Set defaults for new fields
    if (!this.academicInfo.certificationAccepted) {
      this.academicInfo.certificationAccepted = false;
      this.emitDataChange();
    }
  }

  addALevelSubject() {
    if (!this.academicInfo.aLevelSubjects) {
      this.academicInfo.aLevelSubjects = [];
    }
    this.academicInfo.aLevelSubjects.push({ name: '', year: '', month: '', grade: '' });
    this.emitDataChange();
  }

  removeALevelSubject(index: number) {
    if (this.academicInfo.aLevelSubjects && this.academicInfo.aLevelSubjects.length > 2) {
      this.academicInfo.aLevelSubjects.splice(index, 1);
      this.emitDataChange();
    }
  }

  addOLevelSubject() {
    if (!this.academicInfo.oLevelSubjects) {
      this.academicInfo.oLevelSubjects = [];
    }
    this.academicInfo.oLevelSubjects.push({ name: '', year: '', month: '', grade: '' });
    this.emitDataChange();
  }

  removeOLevelSubject(index: number) {
    if (this.academicInfo.oLevelSubjects && this.academicInfo.oLevelSubjects.length > 5) {
      this.academicInfo.oLevelSubjects.splice(index, 1);
      this.emitDataChange();
    }
  }

  private initializeOLevelSubjects() {
    this.academicInfo.oLevelSubjects = [
      { name: '', year: '', month: '', grade: '' },
      { name: '', year: '', month: '', grade: '' },
      { name: '', year: '', month: '', grade: '' },
      { name: '', year: '', month: '', grade: '' },
      { name: '', year: '', month: '', grade: '' }
    ];
  }

  onFileChange(event: any, field: keyof AcademicInformation) {
    const file = event.target.files[0] || null;
    (this.academicInfo as any)[field] = file;
    this.emitDataChange();
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.submitForm.emit(this.academicInfo);
    }
  }

  onPrevious() {
    this.previousStep.emit();
  }

  emitDataChange() {
    this.dataChange.emit(this.academicInfo);
  }

  getMaxToeflScore(): number {
    switch (this.academicInfo.toeflType) {
      case 'paper': return 677;
      case 'computer': return 300;
      case 'internet': return 120;
      default: return 120;
    }
  }

  getToeflPlaceholder(): string {
    switch (this.academicInfo.toeflType) {
      case 'paper': return 'Minimum 550 Paper based';
      case 'computer': return 'Minimum 213 Computer based';
      case 'internet': return 'Minimum 80 Internet based';
      default: return 'Enter TOEFL Score';
    }
  }

  onVenueChange() {
    const selectedVenue = this.examVenues.find(v => v.city === this.academicInfo.examVenue);
    this.academicInfo.examVenueAddress = selectedVenue ? selectedVenue.address : '';
    this.emitDataChange();
  }

  onIeltsChange() {
    if (this.academicInfo.hasIelts) {
      this.academicInfo.hasToefl = false;
      this.academicInfo.toeflScore = '';
      this.academicInfo.toeflType = undefined;
    }
    this.emitDataChange();
  }

  onToeflChange() {
    if (this.academicInfo.hasToefl) {
      this.academicInfo.hasIelts = false;
      this.academicInfo.ieltsScore = '';
    }
    this.emitDataChange();
  }

  isFormValid(): boolean {
    if (!this.academicInfo.firstMajor || !this.academicInfo.secondMajor || !this.academicInfo.degree10 || !this.academicInfo.degree12 ||
        !this.academicInfo.examVenue || !this.academicInfo.howDidYouKnowAboutIUB || !this.academicInfo.certificationAccepted) {
      return false;
    }

    // Must have SAT
    if (!this.academicInfo.hasSat || !this.academicInfo.satScore) {
      return false;
    }

    // Must have either IELTS or TOEFL
    if (!this.academicInfo.hasIelts && !this.academicInfo.hasToefl) {
      return false;
    }

    // Validate IELTS score if selected
    if (this.academicInfo.hasIelts && !this.academicInfo.ieltsScore) {
      return false;
    }

    // Validate TOEFL score and type if selected
    if (this.academicInfo.hasToefl && (!this.academicInfo.toeflScore || !this.academicInfo.toeflType)) {
      return false;
    }

    // Validate 10 years degree
    if (this.academicInfo.degree10 === 'SSC') {
      if (!(this.academicInfo.board10 && this.academicInfo.passingYear10 &&
            this.academicInfo.group10 && this.academicInfo.version10 &&
            this.academicInfo.institution10 && this.academicInfo.roll10 &&
            this.academicInfo.reg10 && this.academicInfo.gpaWith4th10 &&
            this.academicInfo.gpaWithout4th10)) {
        return false;
      }
    }

    if (this.academicInfo.degree10 === 'O-level') {
      if (!(this.academicInfo.oLevelInstitution && this.academicInfo.oLevelBoard &&
            this.academicInfo.oLevelSubjects && this.academicInfo.oLevelSubjects.length >= 5)) {
        return false;
      }
    }

    if (this.academicInfo.degree10 === 'Foreign Board/IB') {
      if (!(this.academicInfo.foreign10Institution && this.academicInfo.foreign10DegreeName &&
            this.academicInfo.foreign10Year && this.academicInfo.foreign10Result)) {
        return false;
      }
    }

    // Validate 12 years degree
    if (this.academicInfo.degree12 === 'HSC') {
      if (this.academicInfo.resultPublished12 === 'No') {
        return !!(this.academicInfo.board12 && this.academicInfo.passingYear12 &&
                 this.academicInfo.group12 && this.academicInfo.version12 &&
                 this.academicInfo.institution12);
      } else {
        return !!(this.academicInfo.board12 && this.academicInfo.passingYear12 &&
                 this.academicInfo.group12 && this.academicInfo.version12 &&
                 this.academicInfo.resultPublished12 && this.academicInfo.institution12 &&
                 this.academicInfo.roll12 && this.academicInfo.reg12 &&
                 this.academicInfo.gpaWith4th12 && this.academicInfo.gpaWithout4th12);
      }
    }

    if (this.academicInfo.degree12 === 'A Level') {
      return !!(this.academicInfo.aLevelInstitution && this.academicInfo.aLevelBoard &&
               this.academicInfo.aLevelSubjects && this.academicInfo.aLevelSubjects.length > 0);
    }

    if (this.academicInfo.degree12 === 'Foreign Board/IB') {
      return !!(this.academicInfo.foreignInstitution && this.academicInfo.foreignDegreeName &&
               this.academicInfo.foreignYear && this.academicInfo.foreignResult);
    }

    return true;
  }
}