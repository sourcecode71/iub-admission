import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User, LoginRequest, UserRegistration } from '../models/user.interface';
import { ExamSettingsDTO } from '../models/admission.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiBaseUrl;
  private academicInfo$?: Observable<ExamSettingsDTO>;

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}v2/admission/registrared-user/token`, request);
  }

  register(request: UserRegistration): Observable<any> {
    return this.http.post(`${this.apiUrl}v2/admission-user/registration`, request);
  }

  loadAcademicInfo(): Observable<ExamSettingsDTO> {
    if (!this.academicInfo$) {
      this.academicInfo$ = this.http.get<{ data: ExamSettingsDTO }>(`${this.apiUrl}api/v2/admission/setting/load-academic-info`).pipe(
        map(response => response.data),
        shareReplay(1)
      );
    }
    return this.academicInfo$;
  }
}