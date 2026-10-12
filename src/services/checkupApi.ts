

import v_b5030f from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_bcce6e } from '../utils/tokenCache';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';
import { v_f28ca8 } from './wallet/sendTokenAuto';
import { v_eb4b2d } from './wallet/walletV2CheckupPay';

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

export type PayCheckupFeeOptions = {

    requestPin?: () => Promise<string | null>;
    email?: string;
    member?: number;
};

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

function v_5188ff(v_49263d): string {
    const v_35a1f5 = v_49263d as {
        response?: { data?: { error?: { message?: string; code?: string }; message?: string } };
        message?: string;
    };
    return (
        v_35a1f5?.response?.data?.error?.message ||
        v_35a1f5?.response?.data?.message ||
        v_35a1f5?.message ||
        '비용 차감에 실패했습니다.'
    );
}

function v_b33f21(v_49263d): boolean {
    const v_35a1f5 = v_49263d as { response?: { data?: { error?: { code?: string; message?: string } } } };
    const v_c99bd2 = v_35a1f5?.response?.data?.error?.code;
    const v_badeaf = v_35a1f5?.response?.data?.error?.message ?? '';
    return v_c99bd2 === '8004' || String(v_badeaf).includes('CLIENT_SIGN_REQUIRED');
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

async function v_d9966f(
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

export async function v_8c9ccd(
    v_3b27d9,
    v_3cb086,
    v_b36f96
): Promise<CheckupPayFeeResponse> {
    const v_e84a40 = async () => {
        if (!v_b36f96?.requestPin || !v_b36f96.email || v_b36f96.member == null) {
            throw new Error('비수탁 지갑은 PIN이 필요합니다.');
        }
        const v_6bee94 = await v_b36f96.requestPin();
        if (!v_6bee94) throw new Error('PIN 입력이 취소되었습니다.');
        const v_c5fb5b = await v_eb4b2d(v_3b27d9, v_3cb086, v_6bee94, v_b36f96.email, v_b36f96.member);
        if (!v_c5fb5b.ok) throw new Error(v_c5fb5b.error);
        return v_c5fb5b.data;
    };

    try {
        return await v_d9966f(v_3b27d9, v_3cb086);
    } catch (v_49263d) {
        const v_badeaf = v_5188ff(v_49263d);
        const v_157e6b =
            v_b33f21(v_49263d) ||
            ((await v_f28ca8()) &&
                /CLIENT_SIGN_REQUIRED|Key decryption|empty/i.test(v_badeaf));
        if (v_157e6b) {
            return v_e84a40();
        }
        throw new Error(v_badeaf);
    }
}
