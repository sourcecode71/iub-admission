import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostgraduateProgram, UndergraduateInfo } from '../models/program.interface';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  
  getUndergraduateInfo(): Observable<UndergraduateInfo> {
    const data: UndergraduateInfo = {
      academicSession: 'Autumn - 2025',
      applicationDeadline: '25/08/2025',
      admissionTest: 'Friday, 29th August 2025 10 AM',
      resultPublish: '4th September 2025',
      registration: '000000000'
    };
    return of(data);
  }

  getPostgraduatePrograms(): Observable<PostgraduateProgram[]> {
    const programs: PostgraduateProgram[] = [
      {
        program: 'Master of Business Administration',
        session: 'Autumn-2025',
        applicationLastDate: '27-08-2025',
        admissionTestDate: 'Saturday, September 06, 2025 (10:00 A.M - 12:30 P.M)',
        status: 'Active'
      },
      {
        program: 'Executive Master of Business Administration',
        session: 'Autumn-2025',
        applicationLastDate: '27-08-2025',
        admissionTestDate: 'Saturday, September 06, 2025',
        status: 'Active'
      },
      {
        program: 'Master of Public Health',
        session: 'Autumn-2025',
        applicationLastDate: '13-09-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      },
      {
        program: 'Master of Science/Engineering',
        session: 'Autumn-2025',
        applicationLastDate: '06-09-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      },
      {
        program: 'Master in Development Studies',
        session: 'Autumn-2025',
        applicationLastDate: '06-09-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      },
      {
        program: 'Master of Arts (MA in English programmes)',
        session: 'Autumn-2025',
        applicationLastDate: '02-09-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      },
      {
        program: 'MSc in Environment Management',
        session: 'Autumn-2025',
        applicationLastDate: '04-09-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      },
      {
        program: 'MSc in Economics',
        session: 'Autumn-2025',
        applicationLastDate: '04-09-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      },
      {
        program: 'Master\'s (MSS) in Media and Communication',
        session: 'Autumn-2025',
        applicationLastDate: '06-09-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      },
      {
        program: 'MSc in Biotechnology & Bioinformatics',
        session: 'Autumn-2025',
        applicationLastDate: '31-08-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      },
      {
        program: 'Executive Master of Public Health',
        session: 'Autumn-2025',
        applicationLastDate: '13-09-2025',
        admissionTestDate: 'TBA',
        status: 'Active'
      }
    ];
    return of(programs);
  }
}