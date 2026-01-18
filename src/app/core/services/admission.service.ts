import { Injectable, inject } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { PostgraduateProgram, UndergraduateInfo } from '../models/program.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private userService = inject(UserService);

  private getSemesterName(semester: number): string {
    switch (semester) {
      case 1: return 'Autumn';
      case 2: return 'Spring';
      case 3: return 'Summer';
      default: return '';
    }
  }
  
  getUndergraduateInfo(): Observable<UndergraduateInfo[]> {
    return this.userService.loadAcademicInfo().pipe(
      map(settings => settings.masterSetting
        .filter(p => p.programId === 1 || p.programId === 0)
        .map(p => ({
          academicSession: `${this.getSemesterName(p.applicationSemester ?? 0)} ${p.applicationYear ?? ''}`.trim(),
          applicationDeadline: new Date(p.closeDate).toLocaleDateString('en-GB'),
          admissionTest: p.admissionTestDate ? new Date(p.admissionTestDate).toLocaleDateString('en-GB') : 'TBA',
          resultPublish: p.resultPublish,
          registration: p.registrationDate
        }))
      )
    );
  }

  getPostgraduatePrograms(): Observable<PostgraduateProgram[]> {
    return this.userService.loadAcademicInfo().pipe(
      map(settings => settings.masterSetting
        .filter(p => p.programId === 2)
        .map(p => ({
          program: p.description,
          session:`${this.getSemesterName(p.applicationSemester ?? 0)} ${p.applicationYear ?? ''}`.trim(),
          applicationLastDate: new Date(p.closeDate).toLocaleDateString('en-GB'),
          admissionTestDate: p.admissionTestDate ? new Date(p.admissionTestDate).toLocaleDateString('en-GB') : 'TBA',
          status: p.activeYn === 1 ? 'Active' : 'Inactive'
        }))
      )
    );
  }
}