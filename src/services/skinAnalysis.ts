

import v_b5030f from 'imsks';

const v_4269c7 = 'https://yce-api-01.makeupar.com/s2s/v2.0';

export type SkinAnalysisActionHD =
  | 'hd_wrinkle'      
  | 'hd_pore'         
  | 'hd_texture'      
  | 'hd_acne'         
  | 'hd_oiliness'     
  | 'hd_radiance'     
  | 'hd_eye_bag'      
  | 'hd_age_spot'     
  | 'hd_dark_circle'  
  | 'hd_firmness'     
  | 'hd_moisture'     
  | 'hd_redness'      
  | 'hd_droopy_upper_eyelid'  
  | 'hd_droopy_lower_eyelid'; 

export type SkinAnalysisActionSD =
  | 'wrinkle'
  | 'pore'
  | 'texture'
  | 'acne'
  | 'oiliness'
  | 'radiance'
  | 'eye_bag'
  | 'age_spot'
  | 'dark_circle_v2'
  | 'firmness'
  | 'moisture'
  | 'redness'
  | 'droopy_upper_eyelid'
  | 'droopy_lower_eyelid';

export type SkinAnalysisAction = SkinAnalysisActionHD | SkinAnalysisActionSD;

export interface FileUploadRequest {
  content_type: string;
  file_name: string;
  file_size: number;
}

export interface FileUploadResponse {
  status: number;
  data: {
    files: {
      content_type: string;
      file_name: string;
      file_id: string;
      requests: {
        headers: {
          'Content-Type': string;
          'Content-Length': number;
        };
        url: string;
        method: string;
      }[];
    }[];
  };
}

export interface SkinAnalysisTaskRequest {
  src_file_url?: string;
  src_file_id?: string;
  dst_actions: SkinAnalysisAction[];
  miniserver_args?: {
    enable_mask_overlay?: boolean;
  };
  format?: 'json' | 'zip';
}

export interface SkinAnalysisTaskResponse {
  status: number;
  data: {
    task_id: string;
    polling_interval?: number;
  };
}

export interface SkinScore {
  name: string;
  score: number;
  level?: string;
}

export interface SkinAnalysisResult {
  task_status: 'running' | 'success' | 'error';
  error?: string;
  error_message?: string;
  results?: {
    url: string;  
    scores?: SkinScore[];
  };
}

export interface SkinAnalysisStatusResponse {
  status: number;
  data: SkinAnalysisResult;
}

class v_3c3bb8 {
  private apiKey: string = '';
  private isInitialized: boolean = false;

  constructor() {

  }

  private getApiKey(): string {
    if (!this.isInitialized) {

      this.apiKey =
        process.env.EXPO_PUBLIC_YOUCAM_API_KEY ||
        process.env.YOUCAM_API_KEY ||
        '';
      this.isInitialized = true;
    }
    return this.apiKey;
  }

  setApiKey(v_c367b4) {
    this.apiKey = v_c367b4;
  }

  hasApiKey(): boolean {
    return !!this.getApiKey();
  }

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.getApiKey()}`,
      'Content-Type': 'application/json',
    };
  }

  async createFile(
    v_a7bd9e,
    v_349aae,
    v_c0c2d5 = 'image/jpeg',
    v_8d41d7,
  ): Promise<FileUploadResponse> {
    try {
      const v_f71b56 = `${v_4269c7}/file/skin-analysis`;
      console.log('[YouCam API] 파일 생성 요청:', v_f71b56);
      console.log('[YouCam API] API Key:', this.getApiKey()?.substring(0, 10) + '...');

      const v_3393e3 = await v_b5030f.post<FileUploadResponse>(
        v_f71b56,
        {
          files: [
            {
              content_type: v_c0c2d5,
              file_name: v_a7bd9e,
              file_size: v_349aae,
            },
          ],
        },
        {
          headers: this.getHeaders(),
        },
      );

      console.log('[YouCam API] 파일 생성 성공 응답:', JSON.stringify(v_3393e3.data, null, 2));

      return v_3393e3.data;
    } catch (v_5e9bfe) {
      console.error('[YouCam API] 파일 생성 오류:', v_5e9bfe?.message);
      console.error('[YouCam API] 상태 코드:', v_5e9bfe?.response?.status);
      console.error('[YouCam API] 응답 데이터:', JSON.stringify(v_5e9bfe?.response?.data));

      if (v_5e9bfe?.response?.status === 401) {
        const v_a8cd21 = v_8d41d7 ? v_8d41d7('skin_analysis.errors.invalid_api_key') : 'API 키가 유효하지 않습니다. YouCam API 키를 확인해주세요.';
        throw new Error(v_a8cd21);
      } else if (v_5e9bfe?.response?.status === 404) {
        const v_a8cd21 = v_8d41d7 ? v_8d41d7('skin_analysis.errors.endpoint_not_found') : 'API 엔드포인트를 찾을 수 없습니다. API 구독 상태를 확인해주세요.';
        throw new Error(v_a8cd21);
      } else if (v_5e9bfe?.response?.status === 403) {
        const v_a8cd21 = v_8d41d7 ? v_8d41d7('skin_analysis.errors.access_denied') : 'API 접근이 거부되었습니다. API 권한을 확인해주세요.';
        throw new Error(v_a8cd21);
      }
      throw v_5e9bfe;
    }
  }

  async uploadFileToPresignedUrl(
    v_d3c75e,
    v_7c05db,
    v_c0c2d5,
    v_a662eb,
  ): Promise<void> {
    try {
      const v_3393e3 = await v_b5030f.put(v_d3c75e, v_7c05db, {
        headers: {
          'Content-Type': v_c0c2d5,
          'Content-Length': v_a662eb,
        },
      });

      console.log('[YouCam API] 파일 업로드 성공:', v_3393e3.status);
    } catch (v_5e9bfe) {
      console.error('[YouCam API] 파일 업로드 오류:', v_5e9bfe);
      throw v_5e9bfe;
    }
  }

  async runSkinAnalysis(
    v_576f5a,
  ): Promise<SkinAnalysisTaskResponse> {
    try {
      const v_3393e3 = await v_b5030f.post<SkinAnalysisTaskResponse>(
        `${v_4269c7}/task/skin-analysis`,
        v_576f5a,
        {
          headers: this.getHeaders(),
        },
      );

      console.log('[YouCam API] 피부 분석 작업 실행 성공:', JSON.stringify(v_3393e3.data, null, 2));

      return v_3393e3.data;
    } catch (v_5e9bfe) {
      console.error('[YouCam API] 피부 분석 작업 실행 오류:', v_5e9bfe);
      throw v_5e9bfe;
    }
  }

  async checkSkinAnalysisStatus(
    v_bd4ff3,
  ): Promise<SkinAnalysisStatusResponse> {
    try {
      const v_3393e3 = await v_b5030f.get<SkinAnalysisStatusResponse>(
        `${v_4269c7}/task/skin-analysis/${v_bd4ff3}`,
        {
          headers: this.getHeaders(),
        },
      );

      console.log('[YouCam API] 피부 분석 상태 확인 응답:', JSON.stringify(v_3393e3.data, null, 2));

      return v_3393e3.data;
    } catch (v_5e9bfe) {
      console.error('[YouCam API] 피부 분석 상태 확인 오류:', v_5e9bfe);
      throw v_5e9bfe;
    }
  }

  async pollSkinAnalysisResult(
    v_bd4ff3,
    v_3d627c = 30,
    v_134121 = 2000,
    onProgress?: (attempt: number, v_3d627c) => void,
    v_8d41d7,
  ): Promise<SkinAnalysisResult> {
    let v_45fe0c = 0;

    while (v_45fe0c < v_3d627c) {
      v_45fe0c++;
      v_94c617?.(v_45fe0c, v_3d627c);

      const v_3393e3 = await this.checkSkinAnalysisStatus(v_bd4ff3);
      const v_43c42e = v_3393e3.data;

      if (v_43c42e.task_status === 'success') {
        return v_43c42e;
      }

      if (v_43c42e.task_status === 'error') {
        const v_4b5200 = v_8d41d7 ? v_8d41d7('skin_analysis.errors.analysis_error') : '분석 중 오류가 발생했습니다.';
        throw new Error(v_43c42e.error_message || v_43c42e.error || v_4b5200);
      }

      await new Promise((v_6f7712) => setTimeout(v_6f7712, v_134121));
    }

    const v_2a0b31 = v_8d41d7 ? v_8d41d7('skin_analysis.errors.timeout') : '분석 시간이 초과되었습니다. 다시 시도해주세요.';
    throw new Error(v_2a0b31);
  }
}

export const v_6bbbb9 = new v_3c3bb8();

export const v_ff8e31 = [
  'hd_wrinkle',
  'hd_pore',
  'hd_texture',
  'hd_acne',
  'hd_oiliness',
  'hd_radiance',
  'hd_dark_circle',
  'hd_firmness',
  'hd_moisture',
  'hd_redness',
];

export const v_8354d2 = [
  'wrinkle',
  'pore',
  'texture',
  'acne',
  'oiliness',
  'radiance',
  'dark_circle_v2',
  'firmness',
  'moisture',
  'redness',
];

export const v_0446a9 = {

  hd_wrinkle: '주름',
  hd_pore: '모공',
  hd_texture: '피부결',
  hd_acne: '여드름',
  hd_oiliness: '유분',
  hd_radiance: '광채',
  hd_eye_bag: '눈밑지방',
  hd_age_spot: '기미',
  hd_dark_circle: '다크서클',
  hd_firmness: '탄력',
  hd_moisture: '수분',
  hd_redness: '홍조',
  hd_droopy_upper_eyelid: '처진 윗눈꺼풀',
  hd_droopy_lower_eyelid: '처진 아랫눈꺼풀',

  wrinkle: '주름',
  pore: '모공',
  texture: '피부결',
  acne: '여드름',
  oiliness: '유분',
  radiance: '광채',
  eye_bag: '눈밑지방',
  age_spot: '기미',
  dark_circle_v2: '다크서클',
  firmness: '탄력',
  moisture: '수분',
  redness: '홍조',
  droopy_upper_eyelid: '처진 윗눈꺼풀',
  droopy_lower_eyelid: '처진 아랫눈꺼풀',
};

