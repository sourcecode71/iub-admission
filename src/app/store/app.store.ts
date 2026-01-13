import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../services/user.service';
import { User, LoginRequest, UserRegistration } from '../interfaces/user.interface';
import { ExamSettingsDTO } from '../interfaces/admission.interface';

export const AppStore = signalStore(
  withState({
    user: null as User | null,
    isLoggedIn: false,
    academicSettings: null as ExamSettingsDTO | null
  }),
  withMethods((store) => {
    const userService = inject(UserService);
    return {
      async login(request: LoginRequest) {
        try {
          const user = await firstValueFrom(userService.login(request));
          patchState(store, { user, isLoggedIn: true });
        } catch (error) {
          console.error('Login failed', error);
          // handle error, perhaps set error state
        }
      },
      async register(request: UserRegistration) {
        try {
          await firstValueFrom(userService.register(request));
          // Optionally login after register or show success
        } catch (error) {
          console.error('Registration failed', error);
        }
      },
      logout() {
        patchState(store, { user: null, isLoggedIn: false });
      },
      async loadAcademicInfo() {
        try {
          const settings = await firstValueFrom(userService.loadAcademicInfo());
          patchState(store, { academicSettings: settings });
        } catch (error) {
          console.error('Failed to load academic info', error);
        }
      }
    };
  })
);