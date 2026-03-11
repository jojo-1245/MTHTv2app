

import v_b5030f from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_bcce6e } from '../utils/tokenCache';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';

const v_8a74cb = 30000;
const v_f01b6a = 60000; 

export interface CheckupPreflightResponse {
    fee_amount: string;   
    balance: string;      
    can_proceed: boolean; 
    token_symbol: string; 
    is_free_trial: boolean; 
    trial_count?: number;   
    used_count?: number;    
}

export interface CheckupPayFeeResponse {
    fee_amount: string;
    tx_hash: string | null;
    pol_subsidy_hash: string | null;
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

export async function v_23b7ab(
    v_3b27d9
): Promise<CheckupPreflightResponse> {
    const v_c9c489 = v_e4a763();
    const v_fed274 = v_c9c489.GATEWAY;
    if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다.');

    const v_3f4675 = await v_497880();
    const v_8f00b9 = await v_b5030f.get(
        `${v_fed274}/oth-path?type=${v_3b27d9}`,
        { headers: v_3f4675, timeout: v_8a74cb }
    );
    return v_8f00b9.data?.data as CheckupPreflightResponse;
}

export async function v_8c9ccd(
    v_3b27d9,
    v_3cb086
): Promise<CheckupPayFeeResponse> {
    const v_c9c489 = v_e4a763();
    const v_fed274 = v_c9c489.GATEWAY;
    if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다.');

    const v_3f4675 = await v_497880();
    const v_8f00b9 = await v_b5030f.post(
        `${v_fed274}/oth-path`,
        { type: v_3b27d9, record_id: v_3cb086 },
        { headers: v_3f4675, timeout: v_f01b6a }
    );
    return v_8f00b9.data?.data as CheckupPayFeeResponse;
}
