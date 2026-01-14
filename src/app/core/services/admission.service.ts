import { Injectable, inject } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { PostgraduateProgram, UndergraduateInfo } from '../models/program.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private userService = inject(UserService);
  
  getUndergraduateInfo(): Observable<UndergraduateInfo> {
    return this.userService.loadAcademicInfo().pipe(
      map(settings => ({
        academicSession: `${settings.applicationSemester} - ${settings.applicationYear}`,
        applicationDeadline: settings.closeDate.toString(),
        admissionTest: `${settings.examDate} ${settings.examTime}`,
        resultPublish: settings.resultPublishDate,
        registration: settings.registrationDate
      }))
    );
  }

  getPostgraduatePrograms(): Observable<PostgraduateProgram[]> {
    return this.userService.loadAcademicInfo().pipe(
      map(settings => settings.masterSetting
        .filter(p => p.programId === 1 || p.programId === 2)
        .map(p => ({
          program: p.programName,
          session: p.academicSession,
          applicationLastDate: p.closeDate.toString(),
          admissionTestDate: p.admissionTestDate?.toString() || 'TBA',
          status: p.activeYn === 1 ? 'Active' : 'Inactive'
        }))
      )
    );
  }
}