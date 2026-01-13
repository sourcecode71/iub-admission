export interface User {
  userId: number;
  isActive: string;
  programId: number;
  createDate: Date;
  updateDate?: Date;
  createdBy: number;
  updatedBy?: number;
  campusId: number;
  userTypeId: number;
  extras?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserLogin {
  isActive: string;
  campusId: number;
}

export interface UserRegistration {
  id: number;
  userEmail: string;
  newPassword: string;
  confirmPassword: string;
  firstName: string;
  fullName: string;
  lastName: string;
  countryCode: string;
  cellPhone: string;
  dateOfBirth: Date;
  token: string;
  programId: number;
  firstMajor: string;
  degreeId: string;
  majorId: string;
  authCode: string;
  authCodeStatus: string;
}