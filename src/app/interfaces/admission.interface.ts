export interface PersonalInformation {
  firstName: string;
  lastName: string;
  cellPhone: string;
  dateOfBirth: string;
  nationalId: string;
  birthCertificate: string;
  idType: 'nationalId' | 'birthCertificate';
  gender: string;
  bloodGroup: string;
  fatherFirstName: string;
  fatherLastName: string;
  motherFirstName: string;
  motherLastName: string;
  guardianCellPhone: string;
  guardianEmail: string;
  presentAddress: {
    village: string;
    district: string;
    thana: string;
    postOffice: string;
  };
  permanentAddress: {
    sameAsPresent: boolean;
    village: string;
    district: string;
    thana: string;
    postOffice: string;
  };
  hasDisability: boolean;
  disabilityDetails?: string;
  wasAdmittedBefore: boolean;
  studentId?: string;
}

export interface FinancialGuarantor {
  relationship: string;
  firstName: string;
  lastName: string;
  idType: string;
  idNumber: string;
  dateOfBirth: string;
  cellPhone: string;
  email: string;
  occupation: string;
  monthlyIncome: number;
  address: string;
}

export interface AcademicInformation {
  // Will be defined based on requirements
  ssc?: {
    examName: string;
    board: string;
    roll: string;
    registration: string;
    passingYear: string;
    result: string;
    gpa: string;
  };
  hsc?: {
    examName: string;
    board: string;
    roll: string;
    registration: string;
    passingYear: string;
    result: string;
    gpa: string;
  };
}

export interface AdmissionData {
  personalInfo: PersonalInformation;
  financialGuarantor: FinancialGuarantor;
  academicInfo: AcademicInformation;
}