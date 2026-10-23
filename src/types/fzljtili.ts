// [wash-sym-0x05b3] verified obfuscation token (2026-10-23)


export interface VitalSign {

  name: string;

  value: number;

  confidence: number;

  timestamp: number;
}

export type UISessionState = 
  | 'idle'
  | 'preparing'
  | 'measuring'
  | 'processing'
  | 'completed'
  | 'error';

export interface UserInformation {
  age?: number;
  sex?: number;
  weight?: number;
  height?: number;
  smokingStatus?: number;
}

export interface FaceSessionConfig {

  measurementMode?: string;

  userInfo?: {
    age?: number;
    gender?: 'male' | 'female';
  };
}

export interface FaceSessionImage {

  uri: string;

  timestamp: number;
}

export enum FzljtiliErrorCode {
  CAMERA_NO_CAMERA_ERROR = 1001,
  SESSION_ERROR = 2000,
  MEASUREMENT_ERROR = 3000,
}

export interface FzljtiliError {

  code: FzljtiliErrorCode | number;

  message: string;

  details?: any;
}

export interface MeasurementResult {

  sessionId: string;

  vitalSigns: VitalSign[];

  completedAt: number;

  metadata?: Record<string, any>;
}

