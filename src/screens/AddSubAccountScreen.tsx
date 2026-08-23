import v_a3453e, { v_5ab095, v_c4deb2, v_de06a3, v_e662ae } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_4623af,
    v_3094a2,
    v_39a996,
    v_122070,
    v_f2c756,
    v_326be8,
} from 'rcmrninabrnb';
import { v_9dd381 } from 'wjvlskvsbzsrojdbjsl';
import v_b5030f from 'imsks';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import * as v_fba5a0 from 'hfxxehldoiokdq';
import v_5427ed from '../components/OtpInput';
import v_cb41de from '../components/PrimaryButton';
import v_8714fe from '../components/SecondaryButton';
import v_e775af from '../components/TextField';
import { v_729608, v_570c34, v_d56c0a } from '../components';
import { v_889fad } from '../components/AlertHost';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';
import { v_7ef860 } from '../services';
import {
    v_ed063b,
    v_01afb4,
    v_9112f4,
    v_38a48e,
    v_766523,
    type v_19205c,
} from '../services';
import { v_2282da } from '../hooks/useAccountList';
import { v_998b9d } from '../utils/authErrorHandler';
import { v_8ba358 } from '../utils/deepLinkHandler';
import type { v_8ad91b } from '../navigation';
import { v_6bce96 } from 'wjvlskvsbzsrojdbjsl';

const v_28d629 = 6;

type Step = 'email' | 'otp' | 'nickname' | 'nonMember';

type Props = v_432191<v_8ad91b, 'AddSubAccount'>;

const AddSubAccountScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
    const { t: v_8d41d7 } = v_772971();
    const v_033e14 = v_e0068c();
    const v_e99f51 = v_e662ae<v_122070>(null);
    const v_2df89f = v_e662ae<any>(null);
    const [v_e71371, v_605772] = v_5ab095<boolean>(false);
    const [v_683210, v_34a50a] = v_5ab095(false);
    const [v_729796, v_fd7d1f] = v_5ab095<Step>('email');

    const [v_78547c, v_e1931c] = v_5ab095<string | null>(null);
    const [v_1b4841, v_47501d] = v_5ab095<Set<string>>(new Set());

    const [v_e0c7e8, v_fedf34] = v_5ab095('');
    const [v_76148b, v_ff2199] = v_5ab095<(v_19205c & { isLinked?: boolean })[]>([]);
    const [v_7b9eeb, v_99e77d] = v_5ab095<v_19205c | null>(null);
    const [v_af419b, v_9c3167] = v_5ab095('');
    const [v_d39e78, v_06953f] = v_5ab095<string>(''); 
    const [v_ab0e46, v_8d29b6] = v_5ab095(''); 
    const [v_4568f9, v_58158a] = v_5ab095(false);
    const [v_553f27, v_e37907] = v_5ab095(false);

    const v_b62b55 = v_a3453e.useMemo(() => {
        const v_25b0f8 = [
            { label: v_8d41d7('sub_account.relationship.family'), value: 'family' },
            { label: v_8d41d7('sub_account.relationship.friend'), value: 'friend' },
            { label: v_8d41d7('sub_account.relationship.spouse'), value: 'spouse' },
            { label: v_8d41d7('sub_account.relationship.parent'), value: 'parent' },
            { label: v_8d41d7('sub_account.relationship.child'), value: 'child' },
            { label: v_8d41d7('sub_account.relationship.other'), value: 'other' },
        ];

        if (v_e71371) {
            return [
                { label: v_8d41d7('sub_account.relationship.guest'), value: 'guest' },
                ...v_25b0f8,
            ];
        }

        return v_25b0f8;
    }, [v_e71371, v_8d41d7]);

    const [v_a72c3f, v_f01884] = v_5ab095(
        (v_c7daf6.params?.showEmailSearch ?? false) || !!v_c7daf6.params?.subAccountId
    );
    const [v_a404bd, v_92e3ba] = v_5ab095('');

    const v_438d96 = v_c7daf6.params?.subAccountId;

    v_c4deb2(() => {
        v_1f9bc9();
    }, []);

    v_cf763b(
        v_de06a3(() => {

            const v_b70b2b =
                (v_c7daf6.params?.showEmailSearch ?? false) || !!v_c7daf6.params?.subAccountId;

            v_fd7d1f('email');
            v_fedf34('');
            v_ff2199([]);
            v_99e77d(null);
            v_9c3167('');
            v_8d29b6('');
            v_e37907(false);
            v_f01884(v_b70b2b);

            if (v_c7daf6.params?.showEmailSearch) {
                setTimeout(() => {
                    v_c65f5d.setParams({ showEmailSearch: undefined });
                }, 0);
            }

            const v_27e0a4 = async () => {
                try {
                    const v_28724c = await v_766523();
                    const v_bccb57 = new Set<string>();
                    v_28724c.forEach((v_b4542a) => {
                        if (v_b4542a.email) {
                            v_bccb57.add(v_b4542a.email.toLowerCase().trim());
                        }
                    });
                    if (__DEV__) {
                        console.log('[AddSubAccountScreen] 부계정 리스트 새로고침:', {
                            count: v_bccb57.size,
                            emails: Array.from(v_bccb57),
                        });
                    }
                    v_47501d(v_bccb57);
                } catch (v_5e9bfe) {
                    console.error('[AddSubAccountScreen] 부계정 리스트 새로고침 실패:', v_5e9bfe);
                }
            };
            v_27e0a4();
        }, [v_c7daf6.params?.showEmailSearch, v_c65f5d])
    );

    const v_1f9bc9 = async () => {
        try {
            const v_727031 = await v_7ef860();

            const v_4064e4 = v_727031.business === 1 || v_727031.business === true;
            v_605772(v_4064e4);

            if (v_4064e4) {
                v_fd7d1f('nickname');
            } else {
                v_fd7d1f('email');
            }

            if (v_727031.email) {
                v_e1931c(v_727031.email.toLowerCase().trim());
            }

            try {
                const v_28724c = await v_766523();
                const v_bccb57 = new Set<string>();
                v_28724c.forEach((v_b4542a) => {

                    if (v_b4542a.email) {
                        v_bccb57.add(v_b4542a.email.toLowerCase().trim());
                    }
                });
                v_47501d(v_bccb57);
                if (__DEV__) {
                    console.log('[AddSubAccountScreen] loadBusinessStatus - 부계정 리스트 로드 완료:', {
                        count: v_bccb57.size,
                        emails: Array.from(v_bccb57),
                    });
                }
            } catch (v_5e9bfe) {
                console.error('[AddSubAccountScreen] 부계정 리스트 로드 실패:', v_5e9bfe);

            }
        } catch (v_5e9bfe) {
            console.error('[AddSubAccountScreen] business 상태 로드 실패:', v_5e9bfe);
            if (v_998b9d(v_c65f5d, v_5e9bfe)) {
                return;
            }
            v_889fad(v_8d41d7('common.error'), v_8d41d7('sub_account.load_user_info_failed'));
            v_c65f5d.goBack();
        }
    };

    const v_f2e683 = v_de06a3(
        async (v_47a385) => {
            if (!v_47a385 || v_47a385.length < 2) {
                v_ff2199([]);
                return;
            }

            v_58158a(true);
            try {
                const v_a7f568 = await v_ed063b({ email: v_47a385 });

                const v_df4c43 = v_a7f568
                    .filter((v_660822) => {
                        const v_70217c = v_660822.email.toLowerCase().trim();

                        if (v_78547c && v_70217c === v_78547c) {
                            return false;
                        }
                        return true;
                    })
                    .map((v_660822) => {
                        const v_70217c = v_660822.email.toLowerCase().trim();

                        const v_cf8dea = v_1b4841.has(v_70217c);
                        if (__DEV__) {
                            console.log('[AddSubAccountScreen] 검색 결과 처리:', {
                                email: v_70217c,
                                isLinked: v_cf8dea,
                                linkedEmailsSize: v_1b4841.size,
                                linkedEmailsHas: v_1b4841.has(v_70217c),
                            });
                        }
                        return {
                            ...v_660822,
                            isLinked: v_cf8dea,
                        };
                    });

                v_ff2199(v_df4c43);
            } catch (v_5e9bfe) {
                console.error('[AddSubAccountScreen] 이메일 검색 실패:', v_5e9bfe);
                if (v_998b9d(v_c65f5d, v_5e9bfe)) {
                    return;
                }
                v_889fad(v_8d41d7('common.error'), v_8d41d7('sub_account.member_search_failed'));
            } finally {
                v_58158a(false);
            }
        },
        [v_c65f5d, v_78547c, v_1b4841]
    );

    v_c4deb2(() => {
        if (v_729796 === 'email' && v_e0c7e8) {
            const v_cb36b1 = setTimeout(() => {
                v_f2e683(v_e0c7e8);
            }, 500);
            return () => clearTimeout(v_cb36b1);
        }
    }, [v_e0c7e8, v_729796, v_f2e683]);

    const v_51cad4 = async (member: v_19205c) => {

        const v_70217c = v_660822.email.toLowerCase().trim();

        if (v_1b4841.has(v_70217c)) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.already_linked'));
            return;
        }

        if ((v_660822 as any).isLinked) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.already_linked'));
            return;
        }

        v_99e77d(v_660822);
        v_fedf34(v_660822.email);
        v_ff2199([]);

        v_34a50a(true);
        try {
            await v_9112f4(v_660822.email);
            v_e37907(true);
            v_fd7d1f('otp');
            v_889fad(v_8d41d7('common.success'), v_8d41d7('sub_account.otp_sent'));
        } catch (v_5e9bfe) {
            console.error('[AddSubAccountScreen] OTP 발송 실패:', v_5e9bfe);
            if (v_998b9d(v_c65f5d, v_5e9bfe)) {
                return;
            }

            let v_1744b9 = v_8d41d7('sub_account.otp_send_failed');
            if (v_5e9bfe instanceof Error) {
                const v_976e82 = v_5e9bfe.message;

                if (v_976e82.includes('이미 다른 계정의 서브계정') ||
                    v_976e82.includes('서브계정으로 등록된 회원') ||
                    v_976e82.includes('이미 등록된 회원')) {
                    v_1744b9 = v_8d41d7('sub_account.already_registered_as_sub_account');
                } else if (v_976e82) {
                    v_1744b9 = v_976e82;
                }
            }

            if (v_b5030f.isAxiosError(v_5e9bfe) && v_5e9bfe.response?.data) {
                const v_311c56 = v_5e9bfe.response.data as any;
                if (v_311c56?.error?.message) {
                    v_1744b9 = v_311c56.error.message;
                } else if (v_311c56?.message) {
                    v_1744b9 = v_311c56.message;
                }
            }

            v_889fad(v_8d41d7('common.error'), v_1744b9);
        } finally {
            v_34a50a(false);
        }
    };

    const v_7914f7 = async () => {

        if (v_af419b.length !== v_28d629) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.otp_enter_all'));
            return;
        }

        const v_849cde = v_af419b.replace(/\D/g, '').slice(0, v_28d629);
        if (v_849cde.length !== v_28d629) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.otp_invalid_format'));
            v_9c3167(''); 
            return;
        }

        if (!/^\d{6}$/.test(v_849cde)) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.otp_only_numbers'));
            v_9c3167(''); 
            return;
        }

        const v_ff0488 = v_e71371 ? 'guest' : 'family';
        const v_1d33dc = v_d39e78 || v_ff0488;

        v_34a50a(true);
        try {
            if (!v_7b9eeb?.email) {
                v_889fad('오류', '회원 정보를 찾을 수 없습니다.');
                v_34a50a(false);
                return;
            }

            let v_cab9cb = undefined;
            if (v_438d96) {
                const v_b4d1d1 = v_2282da(v_438d96);
                v_cab9cb = Number(v_b4d1d1);
                if (isNaN(v_cab9cb)) {
                    v_cab9cb = undefined;
                }
            }

            await v_38a48e(v_7b9eeb.email, v_849cde, v_1d33dc, v_cab9cb);

            if (v_7b9eeb?.name) {
                v_8d29b6(v_7b9eeb.name);
            }

            if (!v_d39e78) {
                v_06953f(v_1d33dc);
            }

            v_fd7d1f('nickname');
        } catch (v_5e9bfe) {
            console.error('[AddSubAccountScreen] OTP 검증 실패:', v_5e9bfe);
            if (v_998b9d(v_c65f5d, v_5e9bfe)) {
                v_34a50a(false);
                return;
            }

            let v_1744b9 = v_8d41d7('sub_account.otp_invalid');
            let v_8378d1 = false;

            if (v_b5030f.isAxiosError(v_5e9bfe) && v_5e9bfe.response?.data) {
                const v_311c56 = v_5e9bfe.response.data as any;

                if (v_311c56?.error?.message === 'Validation failed' && v_311c56?.error?.details) {
                    const v_5ab5bd = v_311c56.error.details;

                    const v_13b15a = v_5ab5bd.find((v_3cfdfc) =>
                        v_3cfdfc.field === 'verification_code' ||
                        v_3cfdfc.path?.includes('verification_code') ||
                        v_3cfdfc.message?.toLowerCase().includes('verification') ||
                        v_3cfdfc.message?.toLowerCase().includes('otp') ||
                        v_3cfdfc.message?.toLowerCase().includes('인증')
                    );

                    if (v_13b15a) {
                        v_8378d1 = true;
                        v_1744b9 = v_8d41d7('sub_account.otp_invalid');
                    } else {

                        v_1744b9 = v_311c56.error.message;
                        if (v_5ab5bd.length > 0 && v_5ab5bd[0].message) {
                            v_1744b9 = v_5ab5bd[0].message;
                        }
                    }
                } else if (v_311c56?.error?.message) {
                    v_1744b9 = v_311c56.error.message;

                    const v_6b4e75 = v_1744b9.toLowerCase();
                    if (v_6b4e75.includes('verification') ||
                        v_6b4e75.includes('otp') ||
                        v_6b4e75.includes('인증') ||
                        v_6b4e75.includes('코드')) {
                        v_8378d1 = true;
                    }
                } else if (v_311c56?.message) {
                    v_1744b9 = v_311c56.message;
                }
            } else if (v_5e9bfe instanceof Error) {
                v_1744b9 = v_5e9bfe.message;
                const v_6b4e75 = v_1744b9.toLowerCase();
                if (v_6b4e75.includes('verification') ||
                    v_6b4e75.includes('otp') ||
                    v_6b4e75.includes('인증') ||
                    v_6b4e75.includes('코드')) {
                    v_8378d1 = true;
                }
            }

            if (v_8378d1) {
                v_889fad(v_8d41d7('sub_account.otp_verification_failed'), v_1744b9, [
                    {
                        text: v_8d41d7('common.confirm'),
                        onPress: () => {
                            v_9c3167(''); 
                        },
                    },
                ]);
            } else {
                v_889fad(v_8d41d7('common.error'), v_1744b9);
            }
        } finally {
            v_34a50a(false);
        }
    };

    const v_a91919 = async () => {
        if (!v_ab0e46.trim()) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.enter_nickname'));
            return;
        }

        if (!v_d39e78) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.select_relationship'));
            return;
        }

        v_34a50a(true);
        try {
            if (!v_7b9eeb?.email) {
                v_889fad(v_8d41d7('common.error'), v_8d41d7('sub_account.member_not_found'));
                v_34a50a(false);
                return;
            }

            if (v_7b9eeb) {
                const v_e3c76c = v_7b9eeb.email.toLowerCase().trim();

                try {
                    const v_28724c = await v_766523();
                    const v_bccb57 = new Set<string>();
                    v_28724c.forEach((v_b4542a) => {
                        if (v_b4542a.email) {
                            v_bccb57.add(v_b4542a.email.toLowerCase().trim());
                        }
                    });
                    v_47501d(v_bccb57);

                    if (v_e0c7e8.length >= 2) {
                        v_ff2199((v_ba2215) =>
                            v_ba2215.map((v_660822) => {
                                const v_70217c = v_660822.email.toLowerCase().trim();
                                const v_cf8dea = v_bccb57.has(v_70217c);
                                return {
                                    ...v_660822,
                                    isLinked: v_cf8dea,
                                };
                            })
                        );
                    }

                    if (__DEV__) {
                        console.log('[AddSubAccountScreen] 부계정 연결 후 리스트 업데이트:', {
                            addedEmail: v_e3c76c,
                            linkedEmailsCount: v_bccb57.size,
                            emails: Array.from(v_bccb57),
                        });
                    }
                } catch (v_5e9bfe) {
                    console.error('[AddSubAccountScreen] 부계정 리스트 새로고침 실패:', v_5e9bfe);

                    v_47501d((v_ba2215) => new Set(v_ba2215).add(v_e3c76c));
                }
            }

            const v_e5db92 = v_ab0e46.trim()
                ? v_8d41d7('sub_account.link_success_with_nickname', { nickname: v_ab0e46.trim() })
                : v_8d41d7('sub_account.link_success');
            v_889fad(v_8d41d7('common.success'), v_e5db92, [
                {
                    text: v_8d41d7('common.confirm'),
                    onPress: () => {
                        v_c65f5d.goBack();
                    },
                },
            ]);
        } catch (v_5e9bfe) {
            console.error('[AddSubAccountScreen] 부계정 연결 실패:', v_5e9bfe);
            if (v_998b9d(v_c65f5d, v_5e9bfe)) {
                return;
            }

            let v_1744b9 = v_8d41d7('sub_account.link_failed');
            let v_8378d1 = false;

            if (v_b5030f.isAxiosError(v_5e9bfe) && v_5e9bfe.response?.data) {
                const v_311c56 = v_5e9bfe.response.data as any;

                if (v_311c56?.error?.message === 'Validation failed' && v_311c56?.error?.details) {
                    const v_5ab5bd = v_311c56.error.details;

                    const v_13b15a = v_5ab5bd.find((v_3cfdfc) =>
                        v_3cfdfc.field === 'verification_code' ||
                        v_3cfdfc.path?.includes('verification_code') ||
                        v_3cfdfc.message?.toLowerCase().includes('verification') ||
                        v_3cfdfc.message?.toLowerCase().includes('otp') ||
                        v_3cfdfc.message?.toLowerCase().includes('인증')
                    );

                    if (v_13b15a) {
                        v_8378d1 = true;
                        v_1744b9 = '인증 코드가 올바르지 않습니다.';
                    } else {

                        v_1744b9 = v_311c56.error.message;
                        if (v_5ab5bd.length > 0 && v_5ab5bd[0].message) {
                            v_1744b9 = v_5ab5bd[0].message;
                        }
                    }
                } else if (v_311c56?.error?.message) {
                    v_1744b9 = v_311c56.error.message;

                    const v_6b4e75 = v_1744b9.toLowerCase();
                    if (v_6b4e75.includes('verification') ||
                        v_6b4e75.includes('otp') ||
                        v_6b4e75.includes('인증') ||
                        v_6b4e75.includes('코드')) {
                        v_8378d1 = true;
                    }
                } else if (v_311c56?.message) {
                    v_1744b9 = v_311c56.message;
                }
            } else if (v_5e9bfe instanceof Error) {
                v_1744b9 = v_5e9bfe.message;
                const v_6b4e75 = v_1744b9.toLowerCase();
                if (v_6b4e75.includes('verification') ||
                    v_6b4e75.includes('otp') ||
                    v_6b4e75.includes('인증') ||
                    v_6b4e75.includes('코드')) {
                    v_8378d1 = true;
                }
            }

            if (v_8378d1) {
                v_889fad('인증 실패', v_1744b9, [
                    {
                        text: '확인',
                        onPress: () => {
                            v_9c3167(''); 
                        },
                    },
                ]);
            } else {
                v_889fad('오류', v_1744b9);
            }
        } finally {
            v_34a50a(false);
        }
    };

    const v_0dbfdf = async () => {
        if (!v_7b9eeb || !v_ab0e46.trim() || v_af419b.length !== v_28d629) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.enter_all_info'));
            return;
        }

        v_34a50a(true);
        try {
            await v_01afb4({
                name: v_ab0e46.trim(),
                email: v_7b9eeb.email,
                otp: v_af419b,
            });

            const v_e3c76c = v_7b9eeb.email.toLowerCase().trim();

            try {
                const v_28724c = await v_766523();
                const v_bccb57 = new Set<string>();
                v_28724c.forEach((v_b4542a) => {
                    if (v_b4542a.email) {
                        v_bccb57.add(v_b4542a.email.toLowerCase().trim());
                    }
                });
                v_47501d(v_bccb57);

                if (v_e0c7e8.length >= 2) {
                    v_ff2199((v_ba2215) =>
                        v_ba2215.map((v_660822) => {
                            const v_70217c = v_660822.email.toLowerCase().trim();
                            const v_cf8dea = v_bccb57.has(v_70217c);
                            return {
                                ...v_660822,
                                isLinked: v_cf8dea,
                            };
                        })
                    );
                }

                if (__DEV__) {
                    console.log('[AddSubAccountScreen] 부계정 추가 후 리스트 업데이트:', {
                        addedEmail: v_e3c76c,
                        linkedEmailsCount: v_bccb57.size,
                        emails: Array.from(v_bccb57),
                    });
                }
            } catch (v_5e9bfe) {
                console.error('[AddSubAccountScreen] 부계정 리스트 새로고침 실패:', v_5e9bfe);

                v_47501d((v_ba2215) => new Set(v_ba2215).add(v_e3c76c));
            }

            v_889fad(v_8d41d7('common.success'), v_8d41d7('sub_account.add_success'));
            v_c65f5d.goBack();
        } catch (v_5e9bfe) {
            console.error('[AddSubAccountScreen] 부계정 추가 실패:', v_5e9bfe);
            if (v_998b9d(v_c65f5d, v_5e9bfe)) {
                return;
            }
            v_889fad(v_8d41d7('common.error'), v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('sub_account.add_failed'));
        } finally {
            v_34a50a(false);
        }
    };

    const v_6b4310 = async () => {
        if (!v_a404bd.trim()) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.enter_nickname'));
            return;
        }

        v_34a50a(true);
        try {
            await v_01afb4({
                name: v_a404bd.trim(),
            });

            try {
                const v_28724c = await v_766523();
                const v_bccb57 = new Set<string>();
                v_28724c.forEach((v_b4542a) => {
                    if (v_b4542a.email) {
                        v_bccb57.add(v_b4542a.email.toLowerCase().trim());
                    }
                });
                v_47501d(v_bccb57);

                if (v_e0c7e8.length >= 2) {
                    v_ff2199((v_ba2215) =>
                        v_ba2215.map((v_660822) => {
                            const v_70217c = v_660822.email.toLowerCase().trim();
                            const v_cf8dea = v_bccb57.has(v_70217c);
                            return {
                                ...v_660822,
                                isLinked: v_cf8dea,
                            };
                        })
                    );
                }

                if (__DEV__) {
                    console.log('[AddSubAccountScreen] 비회원 부계정 추가 후 리스트 업데이트:', {
                        linkedEmailsCount: v_bccb57.size,
                        emails: Array.from(v_bccb57),
                    });
                }
            } catch (v_5e9bfe) {
                console.error('[AddSubAccountScreen] 부계정 리스트 새로고침 실패:', v_5e9bfe);

            }

            v_889fad(v_8d41d7('common.success'), v_8d41d7('sub_account.add_success'), [
                {
                    text: v_8d41d7('common.confirm'),
                    onPress: () => {
                        v_c65f5d.goBack();
                    },
                },
            ]);
        } catch (v_5e9bfe) {
            console.error('[AddSubAccountScreen] 비회원 부계정 추가 실패:', v_5e9bfe);
            if (v_998b9d(v_c65f5d, v_5e9bfe)) {
                return;
            }

            let v_1744b9 = v_8d41d7('sub_account.add_failed');
            if (v_b5030f.isAxiosError(v_5e9bfe) && v_5e9bfe.response?.data) {
                const v_311c56 = v_5e9bfe.response.data as any;
                if (v_311c56?.error?.message) {
                    v_1744b9 = v_311c56.error.message;
                } else if (v_311c56?.message) {
                    v_1744b9 = v_311c56.message;
                }
            } else if (v_5e9bfe instanceof Error) {
                v_1744b9 = v_5e9bfe.message;
            }

            v_889fad(v_8d41d7('common.error'), v_1744b9);
        } finally {
            v_34a50a(false);
        }
    };

    const v_b3ff71 = () => {
        v_f01884(true);
        v_fd7d1f('email');
    };

    const v_e26a6d = async () => {
        try {

            if (!v_e0c7e8 || !v_0e461e(v_e0c7e8)) {
                v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.enter_valid_email'));
                return;
            }

            const v_727031 = await v_7ef860();
            const v_2fa46c = v_727031.referral_code;
            if (!v_2fa46c) {
                v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.no_referral_code'));
                return;
            }

            const v_3f557d = v_8ba358(v_2fa46c);

            const v_1074b5 = encodeURIComponent(v_8d41d7('sub_account.referral_email_subject'));
            const v_8f4a40 = encodeURIComponent(
                v_8d41d7('sub_account.referral_email_body', { referralLink: v_3f557d })
            );

            const v_5a4006 = `mailto:${v_e0c7e8.trim()}?subject=${v_1074b5}&body=${v_8f4a40}`;

            const v_20e8d1 = await v_f2c756.canOpenURL(v_5a4006);
            if (v_20e8d1) {
                await v_f2c756.openURL(v_5a4006);
            } else {
                v_889fad(v_8d41d7('common.notification'), v_8d41d7('sub_account.mail_app_unavailable'), [
                    {
                        text: v_8d41d7('common.cancel'),
                        style: 'cancel',
                    },
                    {
                        text: v_8d41d7('sub_account.copy'),
                        onPress: async () => {
                            try {
                                await v_fba5a0.setStringAsync(v_3f557d);
                                v_889fad(v_8d41d7('common.success'), v_8d41d7('sub_account.referral_link_copied'));
                            } catch (v_5e9bfe) {
                                console.error('[AddSubAccountScreen] 클립보드 복사 실패:', v_5e9bfe);
                                v_889fad(v_8d41d7('common.error'), v_8d41d7('sub_account.copy_failed'));
                            }
                        },
                    },
                ]);
            }
        } catch (v_5e9bfe) {
            console.error('[AddSubAccountScreen] 레퍼럴 링크 메일 보내기 실패:', v_5e9bfe);
            v_889fad(v_8d41d7('common.error'), v_8d41d7('sub_account.mail_send_failed'));
        }
    };

    const v_0e461e = (v_3b402b): boolean => {
        const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return v_9a3638.test(v_3b402b.trim());
    };

    const v_0df16a = () => {
        setTimeout(() => {
            v_e99f51.current?.scrollTo({ y: 150, animated: true });
        }, v_326be8.OS === 'ios' ? 300 : 100);
    };

    const v_1fcb24 = () => {
        if (v_729796 === 'email') {
            return (
                <>
                    <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.search_by_email')}</Text>
                    <TextField
                        ref={v_2df89f}
                        testID="subaccount-search-email"
                        label={v_8d41d7('common.email')}
                        value={v_e0c7e8}
                        onChangeText={v_fedf34}
                        placeholder={v_8d41d7('sub_account.enter_email')}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        containerStyle={v_d81136.inputContainer}
                        onFocus={v_0df16a}
                    />
                    {v_4568f9 && (
                        <View style={v_d81136.searchingContainer}>
                            <ActivityIndicator size="small" color={v_1bfbd0.primary} />
                            <Text style={v_d81136.searchingText}>검색 중...</Text>
                        </View>
                    )}
                    {!v_4568f9 && v_76148b.length > 0 && (
                        <ScrollView
                            style={v_d81136.searchResultsScrollContainer}
                            nestedScrollEnabled={true}
                            keyboardShouldPersistTaps="handled"
                        >
                            <View style={v_d81136.searchResultsContainer}>
                                {v_76148b.map((v_660822, v_a56041) => {
                                    const v_70217c = v_660822.email.toLowerCase().trim();
                                    const v_cf8dea = v_1b4841.has(v_70217c) || v_660822.isLinked || false;
                                    return (
                                        <TouchableOpacity
                                            key={v_660822.email || `member-${v_a56041}`}
                                            style={[
                                                v_d81136.searchResultItem,
                                                v_cf8dea && v_d81136.searchResultItemLinked,
                                            ]}
                                            onPress={v_cf8dea ? undefined : () => v_51cad4(v_660822)}
                                            disabled={v_cf8dea}
                                            activeOpacity={v_cf8dea ? 1 : 0.7}
                                        >
                                            <View style={v_d81136.searchResultContent}>
                                                <View style={v_d81136.searchResultTextContainer}>
                                                    <Text style={[
                                                        v_d81136.searchResultName,
                                                        v_cf8dea && v_d81136.searchResultNameDisabled,
                                                    ]}>
                                                        {v_660822.name}
                                                    </Text>
                                                    <Text style={[
                                                        v_d81136.searchResultEmail,
                                                        v_cf8dea && v_d81136.searchResultEmailDisabled,
                                                    ]}>
                                                        {v_660822.email}
                                                    </Text>
                                                </View>
                                                {v_cf8dea && (
                                                    <View style={v_d81136.linkedBadge}>
                                                        <Text style={v_d81136.linkedBadgeText}>링크됨</Text>
                                                    </View>
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    )}
                    {!v_4568f9 && v_e0c7e8.length >= 2 && v_76148b.length === 0 && (
                        <View style={v_d81136.noResultsContainer}>
                            <Text style={v_d81136.noResultsText}>{v_8d41d7('sub_account.no_search_results')}</Text>
                            {v_e71371 && (
                                <TouchableOpacity
                                    style={[
                                        v_d81136.referralLinkButton,
                                        !v_0e461e(v_e0c7e8) && v_d81136.referralLinkButtonDisabled,
                                    ]}
                                    onPress={v_e26a6d}
                                    disabled={!v_0e461e(v_e0c7e8)}
                                    activeOpacity={v_0e461e(v_e0c7e8) ? 0.7 : 1}
                                >
                                    <Text
                                        style={[
                                            v_d81136.referralLinkText,
                                            !v_0e461e(v_e0c7e8) && v_d81136.referralLinkTextDisabled,
                                        ]}
                                    >
                                        {v_8d41d7('sub_account.send_referral_link')}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </>
            );
        }

        if (v_729796 === 'otp') {
            return (
                <>
                    <Text style={v_d81136.instruction}>
                        {v_8d41d7('sub_account.enter_otp', { email: v_7b9eeb?.email })}
                    </Text>
                    <View style={v_d81136.otpWrap}>
                        <OtpInput
                            testID="subaccount-otp"
                            length={v_28d629}
                            value={v_af419b}
                            onChange={v_9c3167}
                            editable={true}
                        />
                    </View>
                    <PrimaryButton
                        testID="subaccount-otp-next"
                        title={v_8d41d7('sub_account.complete_link')}
                        onPress={v_7914f7}
                        disabled={v_af419b.length !== v_28d629 || v_683210}
                        style={v_d81136.button}
                    />
                </>
            );
        }

        if (v_729796 === 'nickname') {
            return (
                <>
                    <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.enter_nickname_and_relationship')}</Text>
                    <TextField
                        label={v_8d41d7('sub_account.nickname')}
                        value={v_ab0e46}
                        onChangeText={v_8d29b6}
                        placeholder={v_8d41d7('sub_account.enter_nickname_placeholder')}
                        containerStyle={v_d81136.inputContainer}
                    />
                    <SelectField
                        label={v_8d41d7('sub_account.relationship_label')}
                        value={v_d39e78}
                        options={v_b62b55}
                        onValueChange={v_06953f}
                        placeholder={v_8d41d7('sub_account.select_relationship_placeholder')}
                        containerStyle={v_d81136.inputContainer}
                    />
                    <PrimaryButton
                        testID="subaccount-link-family"
                        title={v_8d41d7('sub_account.complete_link')}
                        onPress={v_a91919}
                        disabled={!v_ab0e46.trim() || !v_d39e78 || v_683210}
                        style={v_d81136.button}
                    />
                </>
            );
        }
    };

    const v_f378bb = () => {

        if (v_729796 === 'otp') {
            return (
                <>
                    <Text style={v_d81136.instruction}>
                        {v_8d41d7('sub_account.enter_otp', { email: v_7b9eeb?.email })}
                    </Text>
                    <View style={v_d81136.otpWrap}>
                        <OtpInput
                            testID="subaccount-otp"
                            length={v_28d629}
                            value={v_af419b}
                            onChange={v_9c3167}
                            editable={true}
                        />
                    </View>
                    <PrimaryButton
                        testID="subaccount-otp-next"
                        title={v_8d41d7('common.next')}
                        onPress={v_7914f7}
                        disabled={v_af419b.length !== v_28d629 || v_683210}
                        style={v_d81136.button}
                    />
                </>
            );
        }

        if (v_729796 === 'nickname' && v_7b9eeb) {
            return (
                <>
                    <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.enter_nickname_and_relationship')}</Text>
                    <TextField
                        label={v_8d41d7('sub_account.nickname')}
                        value={v_ab0e46}
                        onChangeText={v_8d29b6}
                        placeholder={v_8d41d7('sub_account.enter_nickname_placeholder')}
                        containerStyle={v_d81136.inputContainer}
                    />
                    <SelectField
                        label={v_8d41d7('sub_account.relationship_label')}
                        value={v_d39e78}
                        options={v_b62b55}
                        onValueChange={v_06953f}
                        placeholder={v_8d41d7('sub_account.select_relationship_placeholder')}
                        containerStyle={v_d81136.inputContainer}
                    />
                    <PrimaryButton
                        testID="subaccount-link-family"
                        title={v_8d41d7('sub_account.complete_link')}
                        onPress={v_a91919}
                        disabled={!v_ab0e46.trim() || !v_d39e78 || v_683210}
                        style={v_d81136.button}
                    />
                </>
            );
        }

        if (v_729796 === 'nickname' && !v_a72c3f) {
            return (
                <>
                    <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.enter_nickname')}</Text>
                    <TextField
                        label={v_8d41d7('sub_account.nickname')}
                        value={v_a404bd}
                        onChangeText={v_92e3ba}
                        placeholder={v_8d41d7('sub_account.enter_nickname_placeholder')}
                        containerStyle={v_d81136.inputContainer}
                    />
                    <PrimaryButton
                        testID="subaccount-add-nonmember"
                        title={v_8d41d7('sub_account.add_sub_account')}
                        onPress={v_6b4310}
                        disabled={!v_a404bd.trim() || v_683210}
                        style={v_d81136.button}
                    />
                    <TouchableOpacity
                        onPress={v_b3ff71}
                        style={v_d81136.Textbutton}
                    >
                        <MailIcon size={18} color={v_1bfbd0.bluePrimary} />
                        <Text style={v_d81136.TextbuttonText}>{v_8d41d7('sub_account.add_by_email')}</Text>
                    </TouchableOpacity >
                </>
            );
        }

        if (v_729796 === 'email' || v_a72c3f) {
            return (
                <>
                    <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.search_by_email')}</Text>
                    <TextField
                        ref={v_2df89f}
                        testID="subaccount-search-email"
                        label={v_8d41d7('common.email')}
                        value={v_e0c7e8}
                        onChangeText={v_fedf34}
                        placeholder={v_8d41d7('sub_account.enter_email')}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        containerStyle={v_d81136.inputContainer}
                        onFocus={v_0df16a}
                    />
                    {v_4568f9 && (
                        <View style={v_d81136.searchingContainer}>
                            <ActivityIndicator size="small" color={v_1bfbd0.primary} />
                            <Text style={v_d81136.searchingText}>{v_8d41d7('sub_account.searching')}</Text>
                        </View>
                    )}
                    {!v_4568f9 && v_76148b.length > 0 && (
                        <ScrollView
                            style={v_d81136.searchResultsScrollContainer}
                            nestedScrollEnabled={true}
                            keyboardShouldPersistTaps="handled"
                        >
                            <View style={v_d81136.searchResultsContainer}>
                                {v_76148b.map((v_660822, v_a56041) => {
                                    const v_70217c = v_660822.email.toLowerCase().trim();
                                    const v_cf8dea = v_1b4841.has(v_70217c) || v_660822.isLinked || false;
                                    return (
                                        <TouchableOpacity
                                            key={v_660822.email || `member-${v_a56041}`}
                                            style={[
                                                v_d81136.searchResultItem,
                                                v_cf8dea && v_d81136.searchResultItemLinked,
                                            ]}
                                            onPress={v_cf8dea ? undefined : () => v_51cad4(v_660822)}
                                            disabled={v_cf8dea}
                                            activeOpacity={v_cf8dea ? 1 : 0.7}
                                        >
                                            <View style={v_d81136.searchResultContent}>
                                                <View style={v_d81136.searchResultTextContainer}>
                                                    <Text style={[
                                                        v_d81136.searchResultName,
                                                        v_cf8dea && v_d81136.searchResultNameDisabled,
                                                    ]}>
                                                        {v_660822.name}
                                                    </Text>
                                                    <Text style={[
                                                        v_d81136.searchResultEmail,
                                                        v_cf8dea && v_d81136.searchResultEmailDisabled,
                                                    ]}>
                                                        {v_660822.email}
                                                    </Text>
                                                </View>
                                                {v_cf8dea && (
                                                    <View style={v_d81136.linkedBadge}>
                                                        <Text style={v_d81136.linkedBadgeText}>{v_8d41d7('sub_account.linked')}</Text>
                                                    </View>
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    )}
                    {!v_4568f9 && v_e0c7e8.length >= 2 && v_76148b.length === 0 && (
                        <View style={v_d81136.noResultsContainer}>
                            <Text style={v_d81136.noResultsText}>{v_8d41d7('sub_account.no_search_results')}</Text>
                            <View style={v_d81136.noResultsButtonsContainer}>
                                {v_e71371 && (
                                    <TouchableOpacity
                                        style={[
                                            v_d81136.referralLinkButton,
                                            !v_0e461e(v_e0c7e8) && v_d81136.referralLinkButtonDisabled,
                                        ]}
                                        onPress={v_e26a6d}
                                        disabled={!v_0e461e(v_e0c7e8)}
                                        activeOpacity={v_0e461e(v_e0c7e8) ? 0.7 : 1}
                                    >
                                        <Text
                                            style={[
                                                v_d81136.referralLinkText,
                                                !v_0e461e(v_e0c7e8) && v_d81136.referralLinkTextDisabled,
                                            ]}
                                        >
                                            {v_8d41d7('sub_account.send_referral_link')}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                                <TouchableOpacity
                                    style={v_d81136.retryButton}
                                    onPress={() => {
                                        v_fedf34('');
                                        v_ff2199([]);
                                    }}
                                >
                                    <Text style={v_d81136.retryButtonText}>{v_8d41d7('sub_account.retry_search')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </>
            );
        }

        if (v_729796 === 'nickname' && v_a72c3f) {
            return (
                <>
                    <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.enter_nickname')}</Text>
                    <TextField
                        label={v_8d41d7('sub_account.nickname')}
                        value={v_ab0e46}
                        onChangeText={v_8d29b6}
                        placeholder={v_8d41d7('sub_account.enter_nickname_placeholder')}
                        containerStyle={v_d81136.inputContainer}
                    />
                    <PrimaryButton
                        testID="subaccount-add-basic"
                        title={v_8d41d7('sub_account.link')}
                        onPress={v_0dbfdf}
                        disabled={!v_ab0e46.trim() || v_683210}
                        style={v_d81136.button}
                    />
                </>
            );
        }
    };

    return (
        <View style={v_d81136.screen}>
            <Header
                title={v_8d41d7('account_selector.add_sub_account')}
                showBackButton
                onBackPress={() => v_c65f5d.goBack()}
            />
            <SafeScrollView
                contentContainerStyle={v_d81136.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                autoAdjustKeyboardPadding={true}
            >
                <View style={v_d81136.container}>
                    {v_683210 && (
                        <View style={v_d81136.loadingOverlay}>
                            <ActivityIndicator size="large" color={v_1bfbd0.primary} />
                        </View>
                    )}

                    {!v_e71371 && v_1fcb24()}
                    {v_e71371 && v_f378bb()}
                </View>
            </SafeScrollView>
        </View>
    );
};

const v_d81136 = v_472849.create({
    screen: {
        flex: 1,
        backgroundColor: v_1bfbd0.white,
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: v_9b1a04.large,
        paddingVertical: v_9b1a04.xlarge,
    },
    container: {
        width: '100%',
        maxWidth: 780,
        gap: v_9b1a04.medium,
    },
    instruction: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginBottom: 20,
        lineHeight: 22,
    },
    inputContainer: {
        marginBottom: 0,
    },
    otpWrap: {
        marginBottom: 24,
    },
    button: {
        marginBottom: 12,
    },

    Textbutton: {
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8,
    },
    TextbuttonText: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.bluePrimary,
    },
    searchingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        gap: 8,
    },
    searchingText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    searchResultsScrollContainer: {
        maxHeight: 400,
        marginTop: 8,
        marginBottom: 20,
        width: '100%',
    },
    searchResultsContainer: {
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
        borderRadius: 8,
        width: '100%',
    },
    searchResultItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: v_1bfbd0.borderLight,
    },
    searchResultItemLinked: {
        backgroundColor: v_1bfbd0.lightGray,
        opacity: 0.7,
    },
    searchResultContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchResultTextContainer: {
        flex: 1,
    },
    searchResultName: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
        marginBottom: 4,
    },
    searchResultNameDisabled: {
        color: v_1bfbd0.secondaryText,
        opacity: 0.6,
    },
    searchResultEmail: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    searchResultEmailDisabled: {
        opacity: 0.6,
    },
    linkedBadge: {
        backgroundColor: "#aaa",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginLeft: 8,
    },
    linkedBadgeText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.white,
    },
    noResultsContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 20,
    },
    noResultsText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginBottom: 16,
    },
    noResultsButtonsContainer: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'flex-start',
    },
    referralLinkButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: v_1bfbd0.primary,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
    },
    referralLinkButtonDisabled: {
        backgroundColor: v_1bfbd0.border,
        opacity: 0.5,
    },
    referralLinkText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.white,
    },
    referralLinkTextDisabled: {
        color: v_1bfbd0.secondaryText,
    },
    retryButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
        borderRadius: 8,
    },
    retryButtonText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
    },
    loadingContainer: {
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    loadingText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        borderRadius: 16,
    },

});

export default v_67f088;

