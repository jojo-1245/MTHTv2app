

export interface EmergencyInfo {
  message: string;
  link: string;
}

export interface KeepAliveServerResponse {
  status: 'success' | 'error';
  code: number;
  message: string;
  data: {
    server_status: string;
    timestamp: string;
    emergency_info: EmergencyInfo | null;
  };
}

export interface AliveResponse {
  success: boolean;
  emergencyStop?: {
    enabled: boolean;
    message?: string;
    link?: string;
  };
}

export type EmergencyStopInfo = {
  enabled: boolean;
  message?: string;
  link?: string;
} | null;

export * from './country';

