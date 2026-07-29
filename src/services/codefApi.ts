

import v_b5030f from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_bcce6e } from '../utils/tokenCache';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';

const v_8a74cb = 180000;  

export interface CheckupInput {
    userName: string;
    birthDate: string;
    phoneNo: string;
    provider: string;
    subAccountId?: string;
}

export interface TwoWay {
    jobIndex: number;
    threadIndex: number;
    jti: string;
    twoWayTimestamp: number;

}

export interface CheckupRow {
    id: number;
    checkup_year?: string;
    checkup_date?: string;
    organization?: string;
    height?: number;
    weight?: number;
    bmi?: number;
    waist?: number;
    systolic_bp?: number;
    diastolic_bp?: number;
    fasting_glucose?: number;
    total_cholesterol?: number;
    hdl?: number;
    ldl?: number;
    triglyceride?: number;
    hemoglobin?: number;
    ast?: number;
    alt?: number;
    gtp?: number;
    creatinine?: number;
    gfr?: number;
    urine_protein?: string;
    judgment?: string;
    created_at?: string;
}

export interface RequestCheckupResult {
    status: 'pending' | 'done';
    twoWay?: TwoWay;
    data?: any;
}

export interface ApproveCheckupResult {
    status: 'done';
    saved: number;
    items: any[];
}

async function v_497880(): Promise<Record<string, string>> {
    let v_21cc31 = await v_bcce6e();
    if (!v_21cc31) {
        const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
        if (v_0e3b5e) {
            try {
                const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
                const v_8d41d7 = v_660822?.accessToken ?? v_660822?.access_token ?? v_660822?.token;
                if (typeof v_8d41d7 === 'string') v_21cc31 = v_8d41d7;
            } catch {}
        }
    }
    if (!v_21cc31) throw new Error('로그인이 필요합니다.');
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${v_21cc31}`,
    };
}

function v_c69943(): string {
    const v_148ff6 = v_e4a763().GATEWAY;
    if (!v_148ff6) throw new Error('서버 주소가 설정되지 않았습니다.');
    return v_148ff6;
}

export async function v_15baf2(v_bbda62): Promise<RequestCheckupResult> {
    const v_fed274 = v_c69943();
    const v_3f4675 = await v_497880();

    if (__DEV__) {
        console.log('[codefApi] requestCheckup 요청:', {
            userName: v_bbda62.userName,
            birthDate: v_bbda62.birthDate ? `${v_bbda62.birthDate.slice(0, 2)}******` : '',
            provider: v_bbda62.provider,
            hasSubAccountId: !!v_bbda62.subAccountId,
        });
    }

    const v_8f00b9 = await v_b5030f.post(
        `${v_fed274}/oth-path`,
        v_bbda62,
        { headers: v_3f4675, timeout: v_8a74cb }
    );

    if (__DEV__) {
        console.log('[codefApi] requestCheckup 응답:', {
            status: v_8f00b9.status,
            resultStatus: v_8f00b9.data?.data?.status,
            hasTwoWay: !!v_8f00b9.data?.data?.twoWay,
        });
    }

    return v_8f00b9.data?.data as RequestCheckupResult;
}

export async function v_b67103(v_ff38f8, v_bbda62, v_ee2acd): Promise<ApproveCheckupResult> {
    const v_fed274 = v_c69943();
    const v_3f4675 = await v_497880();

    if (__DEV__) {
        console.log('[codefApi] approveCheckup 요청:', {
            jti: v_ff38f8.jti,
            jobIndex: v_ff38f8.jobIndex,
            hasSubAccountId: !!v_ee2acd,
        });
    }

    const v_8f00b9 = await v_b5030f.post(
        `${v_fed274}/oth-path`,
        {
            userName: v_bbda62.userName,
            birthDate: v_bbda62.birthDate,
            phoneNo: v_bbda62.phoneNo,
            provider: v_bbda62.provider,
            twoWay: v_ff38f8,
            subAccountId: v_ee2acd,
        },
        { headers: v_3f4675, timeout: v_8a74cb }
    );

    if (__DEV__) {
        console.log('[codefApi] approveCheckup 응답:', {
            status: v_8f00b9.status,
            saved: v_8f00b9.data?.data?.saved,
            itemsCount: v_8f00b9.data?.data?.items?.length,
        });
    }

    return v_8f00b9.data?.data as ApproveCheckupResult;
}

export async function v_ff5546(v_ee2acd): Promise<CheckupRow[]> {
    const v_fed274 = v_c69943();
    const v_3f4675 = await v_497880();

    const v_ab6401 = v_ee2acd ? `?subAccountId=${encodeURIComponent(v_ee2acd)}` : '';
    const v_f71b56 = `${v_fed274}/oth-path${v_ab6401}`;

    if (__DEV__) {
        console.log('[codefApi] getMyCheckups 요청:', { url: v_f71b56 });
    }

    const v_8f00b9 = await v_b5030f.get(v_f71b56, {
        headers: v_3f4675,
        timeout: 30000,
    });

    if (__DEV__) {
        console.log('[codefApi] getMyCheckups 응답:', {
            status: v_8f00b9.status,
            checkupsCount: v_8f00b9.data?.data?.checkups?.length,
        });
    }

    return (v_8f00b9.data?.data?.checkups ?? []) as CheckupRow[];
}
