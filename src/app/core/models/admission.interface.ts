export interface PersonalInformation {
  passportImage?: string;
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
  disabilities: {
    hearing: boolean;
    visual: boolean;
    mobility: boolean;
    other: boolean;
  };
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
  firstMajor?: string;
  secondMajor?: string;
  degree10?: string;
  board10?: string;
  passingYear10?: string;
  group10?: string;
  version10?: string;
  institution10?: string;
  roll10?: string;
  reg10?: string;
  gpaWith4th10?: string;
  gpaWithout4th10?: string;
  sscTranscript?: File | null;
  sscRegCard?: File | null;
  oLevelInstitution?: string;
  oLevelBoard?: string;
  oLevelSubjects?: { name: string; year: string; month: string; grade: string }[];
  oLevelCert1?: File | null;
  oLevelCert2?: File | null;
  oLevelCert3?: File | null;
  oLevelCert4?: File | null;
  foreign10Institution?: string;
  foreign10DegreeName?: string;
  foreign10Year?: string;
  foreign10Result?: string;
  foreign10Cert1?: File | null;
  foreign10Cert2?: File | null;
  degree12?: string;
  board12?: string;
  passingYear12?: string;
  group12?: string;
  version12?: string;
  resultPublished12?: string;
  institution12?: string;
  roll12?: string;
  reg12?: string;
  gpaWith4th12?: string;
  gpaWithout4th12?: string;
  hscTranscript?: File | null;
  hscRegCard?: File | null;
  aLevelInstitution?: string;
  aLevelBoard?: string;
  aLevelSubjects?: { name: string; year: string; month: string; grade: string }[];
  aLevelCert1?: File | null;
  aLevelCert2?: File | null;
  aLevelCert3?: File | null;
  aLevelCert4?: File | null;
  foreignInstitution?: string;
  foreignDegreeName?: string;
  foreignYear?: string;
  foreignResult?: string;
  foreignCert1?: File | null;
  foreignCert2?: File | null;
  examVenue?: string;
  examVenueAddress?: string;
  hasSat?: boolean;
  satScore?: string;
  hasIelts?: boolean;
  ieltsScore?: string;
  hasToefl?: boolean;
  toeflScore?: string;
  toeflType?: 'paper' | 'computer' | 'internet';
  howDidYouKnowAboutIUB?: string;
  certificationAccepted?: boolean;
}

export interface AdmissionData {
  personalInfo: PersonalInformation;
  financialGuarantor: FinancialGuarantor;
  academicInfo: AcademicInformation;
}

export interface ExamSettingsDTO {
  id: number;
  applicationYear: string;
  applicationSemester: string;
  admissionNo: string;
  programId: string;
  degreeId: string;
  examDate: string;
  examTime: string;
  resultPublishDate: string;
  registrationDate: string;
  orianTationClass: string;
  activeYN: string;
  examSettingId: number;
  formStep: number;
  formOpenningYN: number;
  hscResultPublishYN: number;
  hscCgpa: number;
  sscCgpa: number;
  mathHscCgpa: number;
  phyHscCgpa: number;
  bioHscCgpa: number;
  admissionDate: string;
  closeDate: Date;
  openClose: boolean;
  masterSetting: APPMasterDTO[];
  openPrograms: APPMasterDTO[];
  admissionRules: IUBPolicyDetails[];
}

export interface APPMasterDTO {
  id: number;
  description: string;
  programName: string;
  openClose: number;
  openDate: string;
  closeDate: string;
  admissionDate: string;
  admissionTime?: Date;
  openTime?: Date;
  closeTime?: Date;
  activeYn: number;
  programId: number;
  firstMajor: string;
  formFee: number;
  academicSession: string;
  resultPublish: string;
  registrationDate: string;
  admissionTestDate: string;
  admissionNo?: number;
  applicationYear?: number;
  applicationSemester?: number;
}

export interface IUBPolicyDetails {
  id: number;
  masterId: number;
  code: string;
  value: number;
  description: string;
  activeYn: number;
}