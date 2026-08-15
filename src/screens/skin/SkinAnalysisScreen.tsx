import v_a3453e, { v_5ab095, v_de06a3, v_e662ae, v_c4deb2, v_df9f57 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
    v_4623af,
    v_cf9c33,
    v_39a996,
    v_122070,
    v_09d0e5,
    v_700696,
    v_aa7413,
    v_da479e,
    v_bd64bf,
    v_f2c756,
} from 'rcmrninabrnb';
import { v_889fad } from '../../components/AlertHost';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_78ceb7, v_d4f1cc } from 'mbgbsytfgyr';
import * as v_d05ab5 from 'khtmgrssvfqqjmzoc';
import * as v_3c288d from 'bxoplsnixpmvnirxbbkstg';
import * as v_f38d26 from 'lbosdxgirxcherxohyvziam';
import * as v_cc38b7 from 'dnbozflmjypi';
import * as v_fba5a0 from 'hfxxehldoiokdq';
import { v_b5df25 } from 'ernurodqvmtspux';
import * as v_168aaf from 'cldrjmebhiqpkcpfvirujpa';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import v_8c5b32 from 'quibwhxmgaihxjwrkkiuwoxpqb';
import { v_772971 } from 'jmpfvteuuztnp';
import v_f595b9, { v_bf60de } from 'vpztcxjmsfanunln';
import { v_5ade23 as v_6f705c } from 'xbfwaaanosqvazmrqoah';

const { width: v_0d9f50, height: v_28d8d8 } = v_700696.get('window');
const v_0abe94 = 12;
import { v_a0daa8 } from '../../navigation';
import { v_729608, v_570c34, v_556baf, v_cb41de, v_8714fe, v_1c1837, v_d3705d, v_47f7b9 } from '../../components';
import v_16c240 from '../../components/SupplementRecommendCta';
import { v_dff48a } from '../../utils/aiTextFormat';
import { v_945458 } from './components';
import type { v_8ad91b } from '../../navigation';
import { v_0d0e7d } from '../../utils/analysisResultTabletStyles';
import { v_af2c88, v_2cc9f8 } from '../../utils/tabletLayout';
import { v_1a7837, v_56d16a } from 'wjvlskvsbzsrojdbjsl';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04, v_ef658a, v_53f592, v_afa590, v_d8cb4d, v_624bd2 } from '../../constants';
import { v_2d6571 } from '../../utils/consentStore';
import v_e209a2 from '../../components/DataConsentModal';
import {
    v_6bbbb9,
    v_f5ba54,
    v_199a39,
    v_e12bcd,
    type v_146928,
    type v_ee7be6,
    type v_38cf4d,
} from '../../services/skinAnalysis';
import { v_19dbdf } from '../../hooks/useSystemConfig';
import { v_9e8766, v_2282da, v_326fbf, v_5a0119 } from '../../hooks';
import { v_4b2942 } from '../../context/PharmacistGuestContext';
import { v_e252f4, v_8ea5e8 } from '../../utils/pharmacyVisitorSave';
import { v_706488 } from '../../utils/pharmacistMeasureGuard';
import { v_cf763b, v_d615ad } from 'ixigazcpvfldbecwtbvavtbi';
import { v_79be38, v_23b7ab, v_8c9ccd, v_b42e4a } from '../../services';
import { v_81fcbc, v_095212, type v_b57732 } from '../../services/skinApi';
import { v_71f4f5 } from '../../services/pharmacyApi';
import {
    v_2e1952,
    v_ddf2a3,
} from '../../utils/pharmacyRecordAdapter';
import type { v_cb37be } from './components/SkinRecordsView';

type Props = v_432191<v_8ad91b, 'SkinAnalysis'>;

type AnalysisStep = 'capture' | 'camera' | 'settings' | 'analyzing' | 'result';
type AnalysisMode = 'sd' | 'hd';

interface FaceValidation {
    hasFace: boolean;
    isFrontal: boolean;
    isSizeOk: boolean;
    faceCount: number;
}

const v_7cad20 = 1;

const v_2a9f6c = 1;

const v_a81a10 = 1.1;
const v_4eb5d3 = 0.95;

const v_8e6659 = 0.62;
const v_b90732 = 0.48;

const v_e69eef = 0.17;

const v_4e12bb = 480;

const v_333679 = (v_cd1446): Promise<{ width: number; height: number }> =>
    new Promise((v_6f7712, v_bad6f3) => {
        v_cf9c33.getSize(
            v_cd1446,
            (v_8e4fb6, v_c86e33) => v_6f7712({ width: v_8e4fb6, height: v_c86e33 }),
            (v_5e9bfe) => v_bad6f3(v_5e9bfe),
        );
    });

const v_62eb5a = (v_b24339): string => {

    if (v_b24339.startsWith('hd_')) {
        const v_7ddf7c = v_b24339.substring(3);

        if (v_7ddf7c === 'dark_circle') {
            return 'dark_circle_v2';
        }
        return v_7ddf7c;
    }
    return v_b24339;
};

const v_6c3b8b = (v_8d41d7): { key: v_ee7be6; label: string }[] => {
    const items: { key: v_ee7be6; label: string }[] = [
        { key: 'acne', label: v_8d41d7('skin.concerns.acne') },
        { key: 'dark_circle_v2', label: v_8d41d7('skin.concerns.dark_circle_v2') },
        { key: 'droopy_lower_eyelid', label: v_8d41d7('skin.concerns.droopy_lower_eyelid') },
        { key: 'droopy_upper_eyelid', label: v_8d41d7('skin.concerns.droopy_upper_eyelid') },
        { key: 'eye_bag', label: v_8d41d7('skin.concerns.eye_bag') },
        { key: 'firmness', label: v_8d41d7('skin.concerns.firmness') },
        { key: 'moisture', label: v_8d41d7('skin.concerns.moisture') },
        { key: 'oiliness', label: v_8d41d7('skin.concerns.oiliness') },
        { key: 'pore', label: v_8d41d7('skin.concerns.pore') },
        { key: 'radiance', label: v_8d41d7('skin.concerns.radiance') },
        { key: 'redness', label: v_8d41d7('skin.concerns.redness') },
        { key: 'age_spot', label: v_8d41d7('skin.concerns.age_spot') },
        { key: 'texture', label: v_8d41d7('skin.concerns.texture') },
        { key: 'wrinkle', label: v_8d41d7('skin.concerns.wrinkle') },
    ];
    return v_4622b9.filter((v_3f4e2e) => !(v_19dbdf() && v_f5ba54(v_3f4e2e.key)));
};

const v_e803bf = (v_8d41d7): { key: v_38cf4d; label: string }[] => {
    const items: { key: v_38cf4d; label: string }[] = [
        { key: 'hd_acne', label: v_8d41d7('skin.concerns.acne') },
        { key: 'hd_dark_circle', label: v_8d41d7('skin.concerns.dark_circle_v2') },
        { key: 'hd_droopy_lower_eyelid', label: v_8d41d7('skin.concerns.droopy_lower_eyelid') },
        { key: 'hd_droopy_upper_eyelid', label: v_8d41d7('skin.concerns.droopy_upper_eyelid') },
        { key: 'hd_eye_bag', label: v_8d41d7('skin.concerns.eye_bag') },
        { key: 'hd_firmness', label: v_8d41d7('skin.concerns.firmness') },
        { key: 'hd_moisture', label: v_8d41d7('skin.concerns.moisture') },
        { key: 'hd_oiliness', label: v_8d41d7('skin.concerns.oiliness') },
        { key: 'hd_pore', label: v_8d41d7('skin.concerns.pore') },
        { key: 'hd_radiance', label: v_8d41d7('skin.concerns.radiance') },
        { key: 'hd_redness', label: v_8d41d7('skin.concerns.redness') },
        { key: 'hd_age_spot', label: v_8d41d7('skin.concerns.age_spot') },
        { key: 'hd_texture', label: v_8d41d7('skin.concerns.texture') },
        { key: 'hd_wrinkle', label: v_8d41d7('skin.concerns.wrinkle') },
    ];
    return v_4622b9.filter((v_3f4e2e) => !(v_19dbdf() && v_f5ba54(v_3f4e2e.key)));
};

const v_9b034b = (v_b24339, v_8d41d7): string => {
    const v_73543d = v_62eb5a(v_b24339);
    return v_8d41d7(`skin.concerns.${v_73543d}`) || v_b24339;
};

interface RecommendedProduct {
    id: string;
    brand: string;
    name: string;
    description: string;
    price: string;
    currency: string;
    targetConcerns: string[];
    image?: any;
}

const v_01283e = (v_8d41d7): RecommendedProduct[] => [
    {
        id: '1',
        brand: 'YUCOD',
        name: 'Hydro-Ceramide Serum',
        description: v_8d41d7('skin.products.product_1_description'),
        price: '-',
        currency: 'MTHT',
        targetConcerns: ['moisture', 'hd_moisture'],
        image: require('../../../assets/images/product/yucod_01.png'),
    },
    {
        id: '2',
        brand: 'YUCOD',
        name: 'Sebum & Pore Control Serum',
        description: v_8d41d7('skin.products.product_2_description'),
        price: '-',
        currency: 'MTHT',
        targetConcerns: ['pore', 'oiliness', 'hd_pore', 'hd_oiliness'],
        image: require('../../../assets/images/product/yucod_02.png'),
    },
    {
        id: '3',
        brand: 'YUCOD',
        name: 'Calming Relief Serum',
        description: v_8d41d7('skin.products.product_3_description'),
        price: '-',
        currency: 'MTHT',
        targetConcerns: ['redness', 'acne', 'hd_redness', 'hd_acne'],
        image: require('../../../assets/images/product/yucod_03.png'),
    },
    {
        id: '4',
        brand: 'YUCOD',
        name: 'Luminous Tone-Up Serum',
        description: v_8d41d7('skin.products.product_4_description'),
        price: '-',
        currency: 'MTHT',
        targetConcerns: ['radiance', 'age_spot', 'hd_radiance', 'hd_age_spot'],
        image: require('../../../assets/images/product/yucod_04.png'),
    },
    {
        id: '5',
        brand: 'YUCOD',
        name: 'Ageless Firming Serum',
        description: v_8d41d7('skin.products.product_5_description'),
        price: '-',
        currency: 'MTHT',
        targetConcerns: ['wrinkle', 'firmness', 'hd_wrinkle', 'hd_firmness'],
        image: require('../../../assets/images/product/yucod_05.png'),
    },
    {
        id: '6',
        brand: 'YUCOD',
        name: 'Pore Refine & Lift Serum',
        description: v_8d41d7('skin.products.product_6_description'),
        price: '-',
        currency: 'MTHT',
        targetConcerns: ['pore', 'firmness', 'hd_pore', 'hd_firmness', 'droopy_upper_eyelid', 'droopy_lower_eyelid', 'hd_droopy_upper_eyelid', 'hd_droopy_lower_eyelid'],
        image: require('../../../assets/images/product/yucod_06.png'),
    },
];

const v_638095 = {
    acne: 'fitness-outline',
    dark_circle_v2: 'eye-outline',
    droopy_lower_eyelid: 'eye-outline',
    droopy_upper_eyelid: 'eye-outline',
    eye_bag: 'eye-outline',
    firmness: 'hand-left-outline',
    moisture: 'water-outline',
    oiliness: 'water-outline',
    pore: 'apps-outline',           
    radiance: 'sunny-outline',
    redness: 'flame-outline',       
    age_spot: 'ellipse-outline',
    texture: 'finger-print-outline', 
    wrinkle: 'pulse-outline',       
};

const v_e131e9 = (v_740dd8): keyof typeof v_d8cb4d => {
    if (v_740dd8 >= 90) return 'excellent';
    if (v_740dd8 >= 80) return 'good';
    if (v_740dd8 >= 70) return 'normal';
    if (v_740dd8 >= 60) return 'warning';
    return 'danger';
};

const v_b0b235 = (v_3b27d9): keyof typeof v_25515d.glyphMap => {
    const v_b24339 = v_3b27d9 === 'hd_dark_circle' ? 'dark_circle_v2' : v_3b27d9.replace(/^hd_/, '');
    return (v_638095[v_b24339] || 'water-outline') as keyof typeof v_25515d.glyphMap;
};

const v_3e09cd = {
    mode: 'sd',
    selectedConcerns: [
        'acne', 'dark_circle_v2', 'droopy_lower_eyelid', 'droopy_upper_eyelid',
        'eye_bag', 'firmness', 'moisture', 'oiliness', 'pore', 'radiance',
        'redness', 'age_spot', 'texture', 'wrinkle'
    ],
    taskId: 'sample_task_id_for_preview_mode_12345',
    result: {
        error: null,
        results: {
            output: [
                { ui_score: 84, type: 'firmness', mask_urls: [] },
                { ui_score: 89, type: 'dark_circle_v2', mask_urls: [] },
                { ui_score: 94, type: 'wrinkle', mask_urls: [] },
                { ui_score: 89, type: 'radiance', mask_urls: [] },
                { ui_score: 92, type: 'redness', mask_urls: [] },
                { ui_score: 91, type: 'oiliness', mask_urls: [] },
                { ui_score: 98, type: 'pore', mask_urls: [] },
                { ui_score: 87, type: 'age_spot', mask_urls: [] },
                { ui_score: 78, type: 'droopy_lower_eyelid', mask_urls: [] },
                { ui_score: 92, type: 'texture', mask_urls: [] },
                { ui_score: 83, type: 'droopy_upper_eyelid', mask_urls: [] },
                { ui_score: 82, type: 'eye_bag', mask_urls: [] },
                { ui_score: 82, type: 'moisture', mask_urls: [] },
                { ui_score: 84, type: 'acne', mask_urls: [] },
                { score: 87.5, type: 'all' },
                { type: 'resize_image', mask_urls: [] },
            ]
        },
        task_status: 'success'
    },
    timestamp: new Date().toISOString(),
};

const SkinAnalysisScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
    const { t: v_8d41d7 } = v_772971();
    const { navigate: v_9b57fc, goBack: v_c7ac57 } = v_a0daa8();
    const v_6c4b91 = v_2cc9f8();
    const { merge: v_2f6fcc, isTablet: v_76eb7f, typo: v_52101f } = v_0d0e7d();
    const v_161e5a = v_d615ad();
    const v_6695f2 = v_6c4b91.contentColumnWidth - v_6c4b91.horizontalPadding * 2;
    const v_3af450 = v_df9f57(() => v_6695f2, [v_6695f2]);
    const v_c54f24 = v_df9f57(
        () => Math.floor((v_6695f2 - v_0abe94) / 2.5),
        [v_6695f2]
    );
    const v_827d31 = v_df9f57(() => {
        if (!v_6c4b91.isTablet) return undefined;
        return Math.min(
            Math.round(v_6695f2 * 0.62),
            v_4e12bb
        );
    }, [v_6c4b91.isTablet, v_6695f2]);
    const v_bf6a8c = v_c7daf6.params?.previewResult;

    const [v_ac1d22, v_02dd63] = v_5ab095<'measure' | 'records'>(
        v_c7daf6.params?.initialTab ?? 'measure'
    );

    const {
        accounts: v_c86f08,
        selectedAccountId: v_e7b2f2,
        setSelectedAccountId: v_1f1e88,
        handleDeleteAccount: v_5bc46a,
        handleLinkEmail: v_42b67a,
        reloadAccounts: v_604e0f,
        selectPharmacyVisitor: v_ccc6c8,
        handleDeletePharmacyVisitorRecords: v_533a87,
    } = v_9e8766();
    const v_5f6b8d = v_5a0119();
    const v_160272 = v_5f6b8d === 'pharmacist';
    const { verifiedGuest: v_3de945 } = v_4b2942();

    const v_d63b37 = v_de06a3(() => {
        if (!v_160272) return true;
        const v_b4542a = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2);
        return v_706488({
            selectedAccountId: v_e7b2f2,
            verifiedGuest: v_3de945,
            t: v_8d41d7,
            onGoVerify: () => {
                v_c65f5d.navigate('PharmacistHome', {
                    prefillName: v_b4542a?.name,
                    prefillPhone: v_b4542a?.phone,
                    autoSendOtp: true,
                });
            },
        });
    }, [v_160272, v_c86f08, v_e7b2f2, v_3de945, v_8d41d7, v_c65f5d]);

    v_cf763b(
        v_de06a3(() => {
            (async () => {
                const v_042a8b = await v_e84827.getItem(v_624bd2.isLoggedIn);
                if (v_042a8b !== 'true') {
                    v_889fad(
                        v_8d41d7('common.error'),
                        v_8d41d7('skin.login_required_message', '로그인 후 피부 분석을 이용해 주세요. 분석 결과 저장을 위해 로그인이 필요합니다.'),
                        [{ text: v_8d41d7('common.confirm'), onPress: () => v_c65f5d.navigate('Login') }],
                        { cancelable: false }
                    );
                    return;
                }

                if (v_160272) {
                    v_f193b7(true);
                    v_11f378('0');
                    v_78c750(false);
                    return;
                }
                try {
                    const v_a209e0 = await v_23b7ab('skin_analysis');
                    v_f193b7(v_a209e0.can_proceed);
                    v_11f378(v_a209e0.fee_amount);
                    v_c96363(v_a209e0.balance ?? '0');
                    v_78c750(v_a209e0.is_free_trial ?? false);
                } catch (v_9e86fd) {
                    console.warn('[피부분석] preflight 실패:', v_9e86fd);
                    v_f193b7(false);

                    const v_c92b58 = v_9e86fd?.response?.data?.data?.fee_amount;
                    v_11f378(v_c92b58 ?? '확인불가');
                    v_c96363('0');
                }
            })();
            v_604e0f();
        }, [v_604e0f, v_c65f5d, v_8d41d7, v_160272])
    );

    const [v_91943c, v_639227] = v_5ab095<AnalysisStep>(v_bf6a8c ? 'result' : 'capture');
    v_326fbf(v_91943c === 'camera' && v_161e5a);

    const [v_f91d86, v_f193b7] = v_5ab095<boolean>(true);
    const [v_399221, v_11f378] = v_5ab095<string>('0');
    const [v_fab460, v_c96363] = v_5ab095<string>('0');
    const [v_4452dd, v_78c750] = v_5ab095<boolean>(false);

    const [v_d1a6bb, v_1e66f0] = v_d4f1cc();
    const v_1a165b = v_e662ae<v_78ceb7>(null);
    const [v_ef2e54, v_968808] = v_5ab095(false);

    const [v_82f4af, v_60b86c] = v_5ab095<string | null>(null);
    const [v_07cd8d, v_ff4473] = v_5ab095<FaceValidation | null>(null);
    const [v_bbcab1, v_7db762] = v_5ab095(false);

    const [v_52f1d1, v_ee0f9a] = v_5ab095<AnalysisMode>('hd');
    const [v_76def3, v_bfbe67] = v_5ab095<Set<string>>(new Set());

    const [v_d02050, v_0942aa] = v_5ab095(false);
    const [v_d5fcde, v_e61e4f] = v_5ab095('');
    const [v_e521b9, v_6f6f79] = v_5ab095<any>(null);
    const [v_1744b9, v_5c59f6] = v_5ab095('');

    const [v_22975d, v_9b09d6] = v_5ab095(false);

    const v_2b985c = v_e662ae<(() => void) | null>(null);

    const [v_c5caed, v_e2f548] = v_5ab095(false);

    const [v_6e882f, v_6e04f8] = v_5ab095(0);

    const [v_8da349, v_5bc608] = v_5ab095(0);

    const [v_c813f5, v_0d73a9] = v_5ab095<{ image: any; name: string } | null>(null);

    const v_02a5a0 = v_e662ae(false);
    const v_f013b2 = v_e662ae<string | null>(null);

    const v_f4f730 = v_e662ae<number | null>(null);
    const [v_4ae380, v_43dcda] = v_5ab095<number | null>(null);

    const v_85278b = v_e662ae(false);
    const [v_72ba9a, v_ce85ec] = v_5ab095(false);

    const [v_e399bf, v_b11b33] = v_5ab095<string | null>(null);
    const [v_85cf60, v_952b9d] = v_5ab095(false);

    const v_058956 = v_de06a3(() => {
        if (!v_e521b9?.result?.results?.output) return null;

        const v_9ef443 = v_e521b9.result.results.output;
        let v_adfd7c = 0;
        let v_c2741d = '';
        const v_17b30f = [];

        let v_d1402b = null;
        v_9ef443.forEach((v_8c0b26) => {
            if (v_8c0b26.type === 'all' && v_8c0b26.score !== undefined) {
                v_adfd7c = Math.round(v_8c0b26.score);
            } else if (v_8c0b26.type === 'resize_image' && v_8c0b26.mask_urls?.[0]) {
                v_c2741d = v_8c0b26.mask_urls[0];
            } else if ((v_8c0b26.type === 'skin_age' || v_8c0b26.type === 'age' || v_8c0b26.type === 'apparent_age') && (v_8c0b26.score !== undefined || v_8c0b26.value !== undefined)) {
                const v_2694bd = typeof v_8c0b26.score === 'number' ? v_8c0b26.score : Number(v_8c0b26.value);
                if (Number.isFinite(v_2694bd)) v_d1402b = Math.round(v_2694bd);
            } else if (v_8c0b26.ui_score !== undefined && v_8c0b26.type) {
                v_17b30f.push({
                    type: v_8c0b26.type,
                    score: v_8c0b26.ui_score,
                    label: v_9b034b(v_8c0b26.type, v_8d41d7),
                });
            }
        });

        const v_2c9332 = v_17b30f.filter((v_3f4e2e) => !(v_19dbdf() && v_f5ba54(v_3f4e2e.type)));

        v_2c9332.sort((v_779914, v_148ff6) => v_148ff6.score - v_779914.score);

        const v_e4ff65 = v_d1402b ?? Math.max(20, Math.min(60, Math.round(100 - v_adfd7c + 20)));

        return { overallScore: v_adfd7c, resizeImageUrl: v_c2741d, concernScores: v_2c9332, skinAge: v_e4ff65 };
    }, [v_e521b9, v_8d41d7]);

    const v_30222e = v_de06a3(() => {
        const v_8decf8 = v_058956();
        if (!v_8decf8 || !v_e521b9?.timestamp) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_no_result_to_save'));
            return;
        }
        const v_d5dda0 = new Date(v_e521b9.timestamp);
        const v_f8e6b9 = `${v_d5dda0.getFullYear()}.${String(v_d5dda0.getMonth() + 1).padStart(2, '0')}.${String(v_d5dda0.getDate()).padStart(2, '0')}`;
        const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2) || v_c86f08[0];
        const v_a52412 = [
            `측정일: ${v_f8e6b9}`,
            `대상: ${v_0c2f9b.name}`,
            `종합 점수: ${v_8decf8.overallScore}`,
            ...v_8decf8.concernScores.map((v_3f4e2e) => `${v_3f4e2e.label}: ${v_3f4e2e.score}`),
        ];
        v_9b57fc('Chat', {
            initialHealthInfo: { id: v_e7b2f2, name: v_0c2f9b.name },
            attachedSkinSummary: v_a52412.join('\n'),
        });
    }, [v_e521b9, v_058956, v_c86f08, v_e7b2f2, v_9b57fc, v_8d41d7]);

    v_c4deb2(() => {
        if (v_bf6a8c) {
            const v_9590aa = v_19dbdf();
            v_6f6f79(v_9590aa ? {
                ...v_3e09cd,
                selectedConcerns: v_199a39(v_3e09cd.selectedConcerns, v_9590aa),
                result: {
                    ...v_3e09cd.result,
                    results: {
                        ...v_3e09cd.result.results,
                        output: v_3e09cd.result.results.output.filter((v_b6c474) => !v_f5ba54(v_b6c474.type)),
                    },
                },
            } : v_3e09cd);
            v_639227('result');
        }
    }, [v_bf6a8c]);

    v_c4deb2(() => {
        const v_329ab2 = async () => {
            if (!v_e521b9 || !v_e521b9.result?.results?.output) {
                return;
            }
            if (v_85278b.current) {
                return;
            }

            const v_3a7b16 = v_e521b9.timestamp;
            if (v_02a5a0.current && v_f013b2.current === v_3a7b16) {
                if (__DEV__) {
                    console.log('[SkinAnalysisScreen] 이미 저장된 결과입니다. 건너뜁니다.');
                }
                return;
            }

            try {
                const v_579c77 = v_058956();
                if (!v_579c77) {
                    console.warn('[SkinAnalysisScreen] 결과 파싱 실패. 저장을 건너뜁니다.');
                    return;
                }

                const { overallScore: v_adfd7c, concernScores: v_17b30f, skinAge: v_e4ff65 } = v_579c77;

                const v_5c2f9f = new Date();
                const v_067e65 = `${v_5c2f9f.getFullYear()}-${String(v_5c2f9f.getMonth() + 1).padStart(2, '0')}-${String(v_5c2f9f.getDate()).padStart(2, '0')}`;
                const v_dcf6a6 = `${String(v_5c2f9f.getHours()).padStart(2, '0')}:${String(v_5c2f9f.getMinutes()).padStart(2, '0')}`;

                const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2);
                const v_083682 = v_0c2f9b?.isCurrent === true;
                const v_f6ed03 = v_2282da(v_e7b2f2);
                const v_ee2acd = v_083682 ? undefined : (v_f6ed03 && v_f6ed03 !== '1' && v_f6ed03 !== 'me' ? Number(v_f6ed03) : undefined);

                const v_1c8db4 = {};
                v_e521b9.result.results.output.forEach((v_8c0b26) => {
                    if (v_8c0b26.type && v_8c0b26.type !== 'all' && v_8c0b26.type !== 'resize_image' && v_8c0b26.ui_score !== undefined) {

                        const v_d2cbce = v_8c0b26.raw_score !== undefined
                            ? v_8c0b26.raw_score
                            : (100 - v_8c0b26.ui_score) / 100; 

                        v_1c8db4[v_8c0b26.type] = {
                            ui_score: v_8c0b26.ui_score,
                            raw_score: v_d2cbce,
                            ...(v_8c0b26.mask_urls?.[0] && { mask_url: v_8c0b26.mask_urls[0] }),
                        };
                    }
                });

                if (__DEV__) {
                    console.log('[SkinAnalysisScreen] analysis_result 구성 완료:', {
                        itemCount: Object.keys(v_1c8db4).length,
                        items: Object.keys(v_1c8db4),
                        sampleItem: Object.keys(v_1c8db4).length > 0
                            ? {
                                type: Object.keys(v_1c8db4)[0],
                                data: v_1c8db4[Object.keys(v_1c8db4)[0]]
                            }
                            : null,
                        fullData: JSON.stringify(v_1c8db4, null, 2),
                    });
                }

                const v_9cd2f2 = (v_740dd8): string => {
                    if (v_740dd8 >= 95) return 'Excellent';
                    if (v_740dd8 >= 90) return 'Great';
                    if (v_740dd8 >= 85) return 'Good';
                    if (v_740dd8 >= 80) return 'Normal';
                    if (v_740dd8 >= 70) return 'Caution';
                    if (v_740dd8 >= 60) return 'Needs Care';
                    return 'Intensive Care';
                };

                const v_60e8e0 = {
                    record_date: v_067e65,
                    record_time: v_dcf6a6,
                    overall_score: v_adfd7c,
                    skin_age: v_e4ff65,
                    grade: v_9cd2f2(v_adfd7c),
                    analysis_result: v_1c8db4,
                    ...(v_ee2acd && { sub_account_id: v_ee2acd }),
                    metadata: {
                        device: 'YouCam API',
                        timestamp: v_e521b9.timestamp,
                        mode: v_e521b9.mode,
                        task_id: v_e521b9.taskId,
                    },
                };

                if (__DEV__) {
                    console.log('[SkinAnalysisScreen] 피부 분석 결과 저장 시작:', {
                        recordDate: v_067e65,
                        recordTime: v_dcf6a6,
                        overallScore: v_adfd7c,
                        skinAge: v_e4ff65,
                        grade: v_9cd2f2(v_adfd7c),
                        subAccountId: v_ee2acd,
                        isMyAccount: v_083682,
                        analysisResultCount: Object.keys(v_1c8db4).length,
                        payload: {
                            ...v_60e8e0,
                            analysis_result: '[...]',
                        },
                    });
                }

                let v_0bce57;
                if (v_8ea5e8(v_5f6b8d, v_3de945)) {
                    v_0bce57 = await v_e252f4({
                        verifiedGuest: v_3de945,
                        kind: 'skin',
                        payload: v_60e8e0 as Record<string, unknown>,
                    });
                } else {
                    const v_23eae7 = await v_79be38(v_60e8e0);
                    v_0bce57 = (v_23eae7 as any)?.id ?? v_23eae7?.record_id;
                }

                v_02a5a0.current = true;
                v_f013b2.current = v_3a7b16;

                if (__DEV__) {
                    console.log('[SkinAnalysisScreen] 피부 분석 결과 저장 성공, recordId:', v_0bce57);
                }

                if (v_0bce57) {
                    v_f4f730.current = v_0bce57;
                    v_43dcda(v_0bce57);
                    if (!v_8ea5e8(v_5f6b8d, v_3de945)) {
                        v_8c9ccd('skin_analysis', v_0bce57)
                            .then((v_cb35cb) => console.log('[피부분석] 비용 차감 완료:', v_cb35cb.tx_hash))
                            .catch((v_9e86fd) => console.error('[피부분석] 비용 차감 실패:', v_9e86fd));
                    }
                }
            } catch (v_5e9bfe) {
                console.error('[SkinAnalysisScreen] 피부 분석 결과 저장 실패:', v_5e9bfe);

            }
        };

        if (v_e521b9 && v_91943c === 'result') {
            v_329ab2();
        }
    }, [v_e521b9, v_91943c, v_c86f08, v_e7b2f2, v_058956]);

    v_a3453e.useEffect(() => {
        if (__DEV__) {
            console.log('[AI 피부분석 effect]', {
                ollamaAnalysis: !!v_e399bf,
                isOllamaLoading: v_85cf60,
                savedRecordId: v_4ae380,
                savedRecordIdRef: v_f4f730.current,
            });
        }
        if (v_e399bf || v_85cf60) return;
        const v_fbf3b0 = v_f4f730.current;
        if (!v_fbf3b0) {
            if (__DEV__) console.warn('[AI 피부분석] recordId 없음 - 저장 완료 대기 중');
            return;
        }
        if (__DEV__) console.log('[AI 피부분석] Ollama 호출 시작, recordId:', v_fbf3b0);
        v_952b9d(true);
        v_b42e4a(v_fbf3b0)
            .then((v_43c42e) => {
                if (__DEV__) console.log('[AI 피부분석] 완료');
                v_b11b33(v_43c42e);
            })
            .catch((v_9e86fd) => {
                console.error('[AI 피부분석] 실패:', v_9e86fd);
                v_b11b33('AI 분석 중 오류가 발생했습니다.');
            })
            .finally(() => v_952b9d(false));
    }, [v_4ae380]);

    const v_c00289 = v_de06a3(async (v_ee89db): Promise<FaceValidation> => {
        let v_52f726;
        try {
            v_52f726 = require('ajktjgmsymrmnjmliw');
        } catch (v_9e86fd) {
            console.warn('[FaceDetector] 네이티브 모듈을 사용할 수 없습니다. 얼굴 검사를 건너뜁니다.', v_9e86fd);
            return { hasFace: true, isFrontal: true, isSizeOk: true, faceCount: 1 };
        }
        try {
            console.log('[FaceDetector] 얼굴 인식 시작...');

            const v_43c42e = await v_52f726.detectFacesAsync(v_ee89db, {
                mode: v_52f726.FaceDetectorMode.accurate,
                detectLandmarks: v_52f726.FaceDetectorLandmarks.all,
                runClassifications: v_52f726.FaceDetectorClassifications.all,
            });

            const v_a51d09 = v_43c42e.faces;
            console.log('[FaceDetector] 감지된 얼굴 수:', v_a51d09.length);

            if (v_a51d09.length === 0) {
                console.log('[FaceDetector] 얼굴을 찾을 수 없습니다.');
                return { hasFace: false, isFrontal: false, isSizeOk: false, faceCount: 0 };
            }

            const v_7d769d = v_a51d09[0];
            let v_6b3526 = v_7d769d.yawAngle || 0;  
            let v_16f424 = v_7d769d.rollAngle || 0; 

            if (v_6b3526 > 180) v_6b3526 = v_6b3526 - 360;
            if (v_16f424 > 180) v_16f424 = v_16f424 - 360;

            console.log('[FaceDetector] Yaw 각도 (좌우):', v_6b3526.toFixed(1));
            console.log('[FaceDetector] Roll 각도 (기울기, 정규화 후):', v_16f424.toFixed(1));

            const v_afddfc = Math.abs(v_6b3526) < 15 && Math.abs(v_16f424) < 12;
            console.log('[FaceDetector] 정면 여부:', v_afddfc, `(yaw: ${v_6b3526.toFixed(1)}°, roll: ${v_16f424.toFixed(1)}°)`);

            const { width: v_4d3105, height: v_92f621 } = await v_333679(v_ee89db);
            const v_26953f = (v_7d769d as any)?.bounds?.size?.width ?? (v_7d769d as any)?.bounds?.width ?? 0;
            const v_904665 = (v_7d769d as any)?.bounds?.size?.height ?? (v_7d769d as any)?.bounds?.height ?? 0;
            const v_108b02 = v_4d3105 > 0 ? v_26953f / v_4d3105 : 0;
            const v_73b9d0 = v_92f621 > 0 ? v_904665 / v_92f621 : 0;
            const v_a9f222 = v_26953f * v_904665;
            const v_f4c9d7 = v_4d3105 * v_92f621;
            const v_fea2e4 = v_f4c9d7 > 0 ? v_a9f222 / v_f4c9d7 : 0;
            const v_75b990 =
                v_108b02 >= v_7cad20 &&
                v_73b9d0 >= v_7cad20 &&
                v_fea2e4 >= v_2a9f6c;

            console.log(
                '[FaceDetector] 얼굴 크기(이미지 기준):',
                `width=${v_108b02.toFixed(3)}`,
                `height=${v_73b9d0.toFixed(3)}`,
                'OK:',
                v_75b990,
            );
            console.log('[FaceDetector] 얼굴 면적 비율:', v_fea2e4.toFixed(3), 'OK:', v_75b990);

            return {
                hasFace: true,
                isFrontal: v_afddfc,
                isSizeOk: v_75b990,
                faceCount: v_a51d09.length,
            };
        } catch (v_5e9bfe) {
            console.error('[FaceDetector] 얼굴 인식 오류:', v_5e9bfe);

            v_889fad(
                v_8d41d7('skin.alerts.permission_required'),
                v_8d41d7('skin.alerts.analysis_error'),
                [{ text: v_8d41d7('common.confirm') }]
            );
            return { hasFace: false, isFrontal: false, isSizeOk: false, faceCount: 0 };
        }
    }, []);

    const v_34776f = v_de06a3(async (options?: {
        imageUri?: string;
        mode?: AnalysisMode;
        concerns?: v_146928[];
    }) => {

        const v_5f7d15 = await v_2d6571('skin');
        if (!v_5f7d15) {
            v_2b985c.current = () => { v_34776f(v_b36f96); };
            v_9b09d6(true);
            return;
        }

        const v_ee89db = v_b36f96?.imageUri ?? v_82f4af;
        const v_34e5bb = v_b36f96?.mode ?? v_52f1d1;
        const v_44eb1a = v_b36f96?.concerns ?? (Array.from(v_76def3) as v_146928[]);

        if (!v_f91d86) {
            const v_244eb8 = (Math.floor(parseFloat(v_fab460) * 10) / 10).toFixed(1);
            v_889fad(
                '잔액 부족',
                `피부 분석에 ${v_399221} MTHT가 필요합니다.\n현재 잔액: ${v_244eb8} MTHT`,
                [{ text: '확인' }]
            );
            return;
        }
        if (v_160272 && !v_d63b37()) {
            return;
        }

        if (!v_ee89db) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_image_required'));
            return;
        }

        if (v_44eb1a.length === 0) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('skin.settings.error_no_selection'));
            return;
        }

        await v_6bbbb9.ensureApiKey();
        if (!v_6bbbb9.hasApiKey()) {
            v_889fad(
                v_8d41d7('common.error'),
                v_8d41d7('skin.alerts.api_key_error'),
            );
            return;
        }

        try {
            v_ee0f9a(v_34e5bb);
            v_bfbe67(new Set(v_44eb1a));
            v_639227('analyzing');
            v_0942aa(true);
            v_e61e4f(v_8d41d7('skin.analyzing.preparing'));
            v_5c59f6('');
            v_6f6f79(null);

            const v_5dc227 = v_34e5bb === 'hd' ? 2560 : 1920;
            console.log(`[Analysis] ${v_34e5bb.toUpperCase()} 모드로 이미지 리사이즈: ${v_5dc227}px`);

            const v_30be54 = await v_3c288d.manipulateAsync(
                v_ee89db,
                [{ resize: { width: v_5dc227 } }],
                { compress: 0.9, format: v_3c288d.SaveFormat.JPEG },
            );

            v_e61e4f(v_8d41d7('skin.settings.uploading_image'));

            const v_5b9682 = await v_f38d26.getInfoAsync(v_30be54.uri);
            if (!v_5b9682.exists) {
                throw new Error(v_8d41d7('skin.alerts.file_not_found'));
            }

            const v_a7bd9e = `skin_analysis_${v_34e5bb}_${Date.now()}.jpg`;
            const v_349aae = v_5b9682.size || 0;

            console.log(`[Analysis] 파일 크기: ${(v_349aae / 1024 / 1024).toFixed(2)}MB`);

            const v_6535ab = await v_6bbbb9.createFile(v_a7bd9e, v_349aae, 'image/jpeg', v_8d41d7);

            if (v_6535ab.data.files.length === 0) {
                throw new Error(v_8d41d7('skin.alerts.file_create_error'));
            }

            const v_206b93 = v_6535ab.data.files[0];
            const v_e8f579 = v_206b93.requests[0];

            v_e61e4f(v_8d41d7('skin.analyzing.uploading'));
            const v_aea053 = await v_f38d26.uploadAsync(
                v_e8f579.url,
                v_30be54.uri,
                {
                    httpMethod: 'PUT',
                    uploadType: v_f38d26.FileSystemUploadType.BINARY_CONTENT,
                    headers: {
                        'Content-Type': 'image/jpeg',
                    },
                },
            );

            if (v_aea053.status < 200 || v_aea053.status >= 300) {
                throw new Error(v_8d41d7('skin.alerts.upload_error', { status: v_aea053.status }));
            }

            v_e61e4f(v_8d41d7('skin.analyzing.requesting'));
            const v_3e850e = v_44eb1a;

            const v_927f76 = await v_6bbbb9.runSkinAnalysis({
                src_file_id: v_206b93.file_id,
                dst_actions: v_3e850e,
                miniserver_args: {
                    enable_mask_overlay: false,
                },
                format: 'json',
            });

            const v_43c42e = await v_6bbbb9.pollSkinAnalysisResult(
                v_927f76.data.task_id,
                60,
                2000,
                (v_bc21cd, v_3d627c) => {
                    v_e61e4f(v_8d41d7('skin.analyzing.polling', { attempt: v_bc21cd, max: v_3d627c }));
                },
                v_8d41d7,
            );

            v_6f6f79({
                mode: v_34e5bb,
                selectedConcerns: v_3e850e,
                taskId: v_927f76.data.task_id,
                result: v_43c42e,
                timestamp: new Date().toISOString(),
            });
            v_639227('result');

        } catch (v_5e9bfe) {
            console.error('피부 분석 오류:', v_5e9bfe);
            const v_a8cd21 = v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('skin.alerts.analysis_error');
            v_5c59f6(v_a8cd21);
            v_889fad(v_8d41d7('common.error'), v_8d41d7('skin.capture.verification_failed_retake'));
            v_639227('capture');
        } finally {
            v_0942aa(false);
        }
    }, [v_52f1d1, v_76def3, v_82f4af, v_8d41d7, v_f91d86, v_fab460, v_399221, v_160272, v_d63b37]);

    const v_2e22e6 = v_de06a3(async (v_04e790) => {

        const v_5f7d15 = await v_2d6571('skin');
        if (!v_5f7d15) {
            v_2b985c.current = () => { v_2e22e6(v_04e790); };
            v_9b09d6(true);
            return;
        }

        try {

            if (v_04e790 === 'camera') {
                const { status: v_d308b5 } = await v_d05ab5.requestCameraPermissionsAsync();
                if (v_d308b5 !== 'granted') {
                    v_889fad(
                        v_8d41d7('skin.alerts.permission_required'),
                        v_8d41d7('skin.alerts.camera_permission_required'),
                        [
                            { text: v_8d41d7('common.cancel'), onPress: () => v_c7ac57() },
                            { text: v_8d41d7('skin.alerts.open_settings'), onPress: () => v_f2c756.openSettings() },
                        ]
                    );
                    return;
                }
            }

            const v_43c42e = v_04e790 === 'camera'
                ? await v_d05ab5.launchCameraAsync({
                    mediaTypes: ['images'],
                    allowsEditing: true,
                    aspect: [3, 4],
                    quality: 0.9,
                    cameraType: v_d05ab5.CameraType.front,
                })
                : await v_d05ab5.launchImageLibraryAsync({
                    mediaTypes: ['images'],
                    allowsEditing: true,
                    aspect: [3, 4],
                    quality: 0.9,
                });

            if (!v_43c42e.canceled && v_43c42e.assets[0]) {
                v_7db762(true);
                v_ff4473(null);

                const v_8f957a = await v_3c288d.manipulateAsync(
                    v_43c42e.assets[0].uri,
                    [{ resize: { width: 3000 } }],
                    { compress: 0.95, format: v_3c288d.SaveFormat.JPEG },
                );

                const v_123bae = await v_c00289(v_8f957a.uri);
                v_ff4473(v_123bae);
                v_60b86c(v_8f957a.uri);
                v_7db762(false);

            }
        } catch (v_5e9bfe) {
            console.error('이미지 선택 오류:', v_5e9bfe);
            v_7db762(false);
            v_889fad(v_8d41d7('common.error'), v_8d41d7('skin.alerts.image_error'));
        }
    }, [v_c00289, v_8d41d7, v_c7ac57]);

    const v_46964a = v_de06a3(async () => {
        const v_5f7d15 = await v_2d6571('skin');
        if (!v_5f7d15) {
            v_2b985c.current = () => { v_e2f548(true); };
            v_9b09d6(true);
            return;
        }
        v_e2f548(true);
    }, []);

    const v_2091c0 = v_de06a3(async () => {

        const v_5f7d15 = await v_2d6571('skin');
        if (!v_5f7d15) {
            v_2b985c.current = () => { v_2091c0(); };
            v_9b09d6(true);
            return;
        }

        if (!v_d1a6bb?.granted) {
            const v_43c42e = await v_1e66f0();
            if (!v_43c42e.granted) {
                v_889fad(
                    v_8d41d7('skin.alerts.permission_required'),
                    v_8d41d7('skin.alerts.camera_permission_required'),
                    [
                        { text: v_8d41d7('common.cancel'), onPress: () => v_c7ac57() },
                        { text: v_8d41d7('skin.alerts.open_settings'), onPress: () => v_f2c756.openSettings() },
                    ]
                );
                return;
            }
        }
        await v_168aaf.lockAsync(v_168aaf.OrientationLock.PORTRAIT_UP).catch(() => null);
        v_639227('camera');
    }, [v_d1a6bb, v_1e66f0, v_8d41d7, v_c7ac57]);

    const v_eb4a5e = v_de06a3(() => {
        v_e2f548(false);
        v_2091c0();
    }, [v_2091c0]);

    const v_5c14ac = v_de06a3(() => {
        v_e2f548(false);
        v_2e22e6('gallery');
    }, [v_2e22e6]);

    const v_311f79 = v_de06a3(async () => {
        if (!v_1a165b.current || v_ef2e54) return;

        try {
            v_968808(true);
            const v_2a5a61 = await v_1a165b.current.takePictureAsync({
                quality: 1,
            });

            if (v_2a5a61?.uri && v_2a5a61.width && v_2a5a61.height) {
                v_7db762(true);
                v_ff4473(null);
                v_639227('capture');

                const v_efb3f5 = v_2a5a61.width;
                const v_d199c9 = v_2a5a61.height;

                const v_6814d5 = v_6c4b91.isTablet
                    ? v_8e6659
                    : v_a81a10;
                const v_85270c = v_6c4b91.isTablet
                    ? v_b90732
                    : v_4eb5d3;

                const v_a0dbba =
                    v_6c4b91.isTablet && !v_6c4b91.isLandscape
                        ? v_e69eef
                        : (1 - v_85270c) / 2;
                const v_f01cd4 = (1 - v_6814d5) / 2;

                const v_833701 = v_efb3f5 * v_f01cd4;
                const v_d37d71 = v_d199c9 * v_a0dbba;
                const v_773555 = v_efb3f5 * v_6814d5;
                const v_ca62d5 = v_d199c9 * v_85270c;

                let v_f5700b = v_773555;
                let v_ee6dc6 = v_ca62d5;
                let v_b2e2f5 = v_833701;
                let v_acd331 = v_d37d71;

                const v_7276bf = 3 / 4;
                const v_211087 = v_773555 / v_ca62d5;

                if (v_211087 > v_7276bf) {

                    v_f5700b = v_ca62d5 * v_7276bf;
                    v_b2e2f5 = v_833701 + (v_773555 - v_f5700b) / 2;
                } else {

                    v_ee6dc6 = v_773555 / v_7276bf;
                    v_acd331 = v_d37d71 + (v_ca62d5 - v_ee6dc6) / 2;
                }

                const v_8f957a = await v_3c288d.manipulateAsync(
                    v_2a5a61.uri,
                    [
                        {
                            crop: {
                                originX: Math.round(v_b2e2f5),
                                originY: Math.round(v_acd331),
                                width: Math.round(v_f5700b),
                                height: Math.round(v_ee6dc6),
                            },
                        },
                        { resize: { width: 3000 } }, 
                    ],
                    { compress: 0.95, format: v_3c288d.SaveFormat.JPEG },
                );

                console.log('[Camera] 크롭 이미지로 얼굴 인식 시작...');
                const v_123bae = await v_c00289(v_8f957a.uri);
                v_ff4473(v_123bae);
                v_60b86c(v_8f957a.uri);
                v_7db762(false);

            }
        } catch (v_5e9bfe) {
            console.error('사진 촬영 오류:', v_5e9bfe);
            v_889fad(v_8d41d7('common.error'), v_8d41d7('skin.alerts.image_error'));
            v_7db762(false);
        } finally {
            v_968808(false);
        }
    }, [v_c00289, v_ef2e54, v_8d41d7, v_6c4b91.isTablet, v_6c4b91.isLandscape]);

    const v_7f9a52 = v_de06a3(() => {
        v_639227('capture');
    }, []);

    const v_c7594b = v_de06a3((v_b24339) => {
        v_bfbe67(v_ba2215 => {
            const v_d38aef = new Set(v_ba2215);
            if (v_d38aef.has(v_b24339)) {
                v_d38aef.delete(v_b24339);
            } else {
                v_d38aef.add(v_b24339);
            }
            return v_d38aef;
        });
    }, []);

    const v_f02aac = v_de06a3(() => {
        const v_44eb1a = v_52f1d1 === 'hd' ? v_e803bf(v_8d41d7) : v_6c3b8b(v_8d41d7);
        if (v_76def3.size === v_44eb1a.length) {
            v_bfbe67(new Set());
        } else {
            v_bfbe67(new Set(v_44eb1a.map(v_3f4e2e => v_3f4e2e.key)));
        }
    }, [v_52f1d1, v_76def3.size, v_8d41d7]);

    const v_fefb99 = v_de06a3(() => {
        if (!v_82f4af) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_capture_required'));
            return;
        }

        if (!v_07cd8d?.hasFace) {
            v_889fad(
                v_8d41d7('skin.capture.not_detected'),
                v_8d41d7('skin.capture.warning_no_face'),
                [{ text: v_8d41d7('common.confirm') }]
            );
            return;
        }

        if (!v_07cd8d?.isFrontal) {
            v_889fad(
                v_8d41d7('skin.capture.not_frontal'),
                v_8d41d7('skin.capture.warning_not_frontal'),
                [{ text: v_8d41d7('common.confirm') }]
            );
            return;
        }

        if (!v_07cd8d?.isSizeOk) {
            v_889fad(
                v_8d41d7('skin.capture.too_small'),
                v_8d41d7('skin.capture.warning_face_too_small'),
                [{ text: v_8d41d7('common.confirm') }]
            );
            return;
        }

        const v_428915 = v_6c3b8b(v_8d41d7).map(v_3f4e2e => v_3f4e2e.key) as v_146928[];
        v_34776f({ imageUri: v_82f4af, mode: 'sd', concerns: v_428915 });
    }, [v_82f4af, v_07cd8d, v_8d41d7, v_34776f]);

    const v_a2f2ec = v_de06a3(() => {
        v_85278b.current = false;
        v_ce85ec(false);
        v_639227('capture');
        v_60b86c(null);
        v_ff4473(null);
        v_ee0f9a('hd');
        v_bfbe67(new Set());
        v_6f6f79(null);
        v_5c59f6('');
        v_e61e4f('');
        v_b11b33(null);
        v_43dcda(null);
        v_f4f730.current = null;
        v_02a5a0.current = false;
        v_f013b2.current = null;
    }, []);

    const v_eb7b32 = v_de06a3(async (record: v_cb37be) => {
        try {
            const v_fbf3b0 = parseInt(v_cbbd71.id, 10);
            if (isNaN(v_fbf3b0)) {
                v_889fad(v_8d41d7('common.notification'), v_8d41d7('health_records.invalid_record', '유효하지 않은 기록입니다.'));
                return;
            }

            let detail: v_b57732 | null = null;
            if (v_160272) {
                const v_610eb5 = v_2e1952(v_e7b2f2);
                if (!v_610eb5) {
                    v_889fad(v_8d41d7('common.notification'), v_8d41d7('health_records.invalid_record', '유효하지 않은 기록입니다.'));
                    return;
                }
                const v_952788 = await v_71f4f5(v_610eb5);
                v_3cfdfc =
                    v_952788
                        .map(v_ddf2a3)
                        .find((v_8c0b26): v_8c0b26 is v_b57732 => v_8c0b26 != null && v_8c0b26.id === v_fbf3b0) ?? null;
            } else {
                v_3cfdfc = await v_095212(v_fbf3b0);
            }

            if (!v_3cfdfc?.analysis_result) {
                v_889fad(
                    v_8d41d7('common.error', '오류'),
                    v_8d41d7('skin_records.open_result_failed', '측정 결과를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.'),
                );
                return;
            }

            const v_d3c7f7 = v_3cfdfc.analysis_result;
            const v_79d59f =
                typeof v_d3c7f7 === 'string' ? JSON.parse(v_d3c7f7) : (v_d3c7f7 ?? {});
            const v_8decf8 = v_e12bcd(v_79d59f, v_19dbdf());
            const v_9ef443 = Object.entries(v_8decf8).map(([v_3b27d9, v_a057b5]: [string, any]) => ({
                type: v_3b27d9,
                ui_score: v_a057b5.ui_score ?? v_a057b5.score ?? 0,
                mask_urls: v_a057b5.mask_url ? [v_a057b5.mask_url] : [],
            }));
            v_9ef443.push({ type: 'all', score: v_3cfdfc.overall_score ?? 0 });
            if (v_3cfdfc.skin_age != null) {
                v_9ef443.push({ type: 'skin_age', score: v_3cfdfc.skin_age });
            }

            const v_c4583c =
                v_3cfdfc.record_time?.length === 5 ? `${v_3cfdfc.record_time}:00` : (v_3cfdfc.record_time || '00:00:00');
            const v_42044e =
                v_3cfdfc.created_at ||
                (v_3cfdfc.metadata?.timestamp as string | undefined) ||
                `${v_3cfdfc.record_date}T${v_c4583c}`;

            v_85278b.current = true;
            v_ce85ec(true);
            v_02a5a0.current = true;
            v_f013b2.current = v_42044e;
            v_f4f730.current = v_3cfdfc.id;
            v_43dcda(v_3cfdfc.id);
            v_b11b33(null);
            v_952b9d(false);
            v_60b86c(v_3cfdfc.image_url ?? null);
            v_6f6f79({
                mode: 'sd',
                selectedConcerns: Object.keys(v_8decf8),
                taskId: `history_${v_3cfdfc.id}`,
                result: {
                    error: null,
                    results: { output: v_9ef443 as typeof v_3e09cd.result.results.v_9ef443 },
                    task_status: 'success',
                },
                timestamp: v_42044e,
            });
            v_02dd63('measure');
            v_639227('result');
        } catch (v_9e86fd) {
            console.error('[SkinAnalysisScreen] 기록보기 결과 열기 실패:', v_9e86fd);
            v_889fad(
                v_8d41d7('common.error', '오류'),
                v_8d41d7('skin_records.open_result_failed', '측정 결과를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.'),
            );
        }
    }, [v_160272, v_e7b2f2, v_8d41d7]);

    const v_8d018e = v_de06a3(async () => {
        if (!v_e521b9) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_no_result_to_save'));
            return;
        }

        try {

            const v_42044e = new Date().toISOString().replace(/[:.]/g, '-');
            const v_a7bd9e = `skin_analysis_${v_e521b9.mode}_${v_42044e}.json`;
            const v_a00264 = `${v_f38d26.documentDirectory}${v_a7bd9e}`;

            const v_10f84e = JSON.stringify(v_e521b9, null, 2);
            await v_f38d26.writeAsStringAsync(v_a00264, v_10f84e, {
                encoding: v_f38d26.EncodingType.UTF8,
            });

            const v_2911e0 = await v_cc38b7.isAvailableAsync();

            if (v_2911e0) {

                await v_cc38b7.shareAsync(v_a00264, {
                    mimeType: 'application/json',
                    dialogTitle: v_8d41d7('skin.settings.alert_save_dialog_title'),
                    UTI: 'public.json',
                });
                v_889fad(v_8d41d7('common.success'), v_8d41d7('skin.settings.alert_save_success'));
            } else {
                v_889fad(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_save_success_path', { path: v_a00264 }));
            }
        } catch (v_5e9bfe) {
            console.error('파일 저장 오류:', v_5e9bfe);
            v_889fad(v_8d41d7('common.error'), v_8d41d7('skin.alerts.analysis_error'));
        }
    }, [v_e521b9]);

    const v_dd0316 = v_de06a3((event: v_bd64bf<v_da479e>) => {
        const v_bfc931 = v_d48baf.nativeEvent.contentOffset.x;
        const v_a56041 = Math.round(v_bfc931 / v_3af450);
        v_6e04f8(v_a56041);
    }, [v_3af450]);

    const v_744c99 = v_de06a3((v_5f1433) => {
        const v_459f64 = v_5f1433.map(v_3f4e2e => v_3f4e2e.type);
        const v_383efc = v_01283e(v_8d41d7);

        const v_6fc8e3 = v_383efc.filter(v_01bee9 =>
            v_01bee9.targetConcerns.some(v_ccf527 => v_459f64.includes(v_ccf527))
        );

        const v_8b7534 = v_383efc.filter(v_01bee9 =>
            !v_01bee9.targetConcerns.some(v_ccf527 => v_459f64.includes(v_ccf527))
        );

        const v_828c3d = [...v_6fc8e3, ...v_8b7534];

        return v_828c3d.sort((v_779914, v_148ff6) => Number(v_779914.id) - Number(v_148ff6.id));
    }, [v_8d41d7]);

    const v_4f73b9 = v_de06a3((v_01bee9) => {
        v_889fad(
            v_8d41d7('skin.result.view_product'),
            `${v_01bee9.brand}\n${v_01bee9.name}`
        );
    }, []);

    const v_3274ee = v_de06a3(async () => {
        if (!v_e521b9) {
            v_889fad(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_no_result_to_copy'));
            return;
        }

        try {
            const v_10f84e = JSON.stringify(v_e521b9, null, 2);
            await v_fba5a0.setStringAsync(v_10f84e);
            v_889fad(v_8d41d7('common.success'), v_8d41d7('skin.settings.alert_copy_success'));
        } catch (v_5e9bfe) {
            console.error('클립보드 복사 오류:', v_5e9bfe);
            v_889fad(v_8d41d7('common.error'), v_8d41d7('skin.alerts.analysis_error'));
        }
    }, [v_e521b9]);

    const v_bd22dd = () => {
        if (v_6c4b91.isTablet) {
            const v_cf6a37 = `${((1 - v_8e6659) / 2) * 100}%`;
            const v_a9823d = `${v_8e6659 * 100}%`;
            const v_b5b2c6 = v_6c4b91.height * v_b90732;
            const v_8b91b6 = !v_6c4b91.isLandscape;

            return (
                <View style={v_d81136.cameraGuideOverlay} pointerEvents="none">
                    <View style={v_d81136.cameraTabletMaskColumn}>
                        {v_8b91b6 ? (
                            <View
                                style={[
                                    v_d81136.cameraMaskBand,
                                    { height: v_6c4b91.height * v_e69eef },
                                ]}
                            />
                        ) : (
                            <View style={[v_d81136.cameraMaskBand, { flex: 1 }]} />
                        )}
                        <View style={[v_d81136.cameraTabletViewfinderRow, { height: v_b5b2c6 }]}>
                            <View style={[v_d81136.cameraMaskBand, { width: v_cf6a37 }]} />
                            <View style={{ width: v_a9823d }} />
                            <View style={[v_d81136.cameraMaskBand, { width: v_cf6a37 }]} />
                        </View>
                        <View style={[v_d81136.cameraMaskBand, { flex: 1 }]} />
                    </View>
                </View>
            );
        }

        return (
            <View style={[v_d81136.cameraGuideOverlay, v_d81136.cameraGuideOverlayMobile]} pointerEvents="none">
                <View style={v_d81136.cameraMaskTop} />
                <View style={v_d81136.cameraGuideArea}>
                    <View style={v_d81136.cameraMaskSide} />
                    <View style={v_d81136.cameraGuideFrame}>
                        <View style={v_d81136.cameraFaceGuide}>
                            <View style={v_d81136.cameraFaceGuideInner} />
                        </View>
                        <View style={v_d81136.cameraShoulderGuide} />
                    </View>
                    <View style={v_d81136.cameraMaskSide} />
                </View>
                <View style={v_d81136.cameraMaskBottom} />
            </View>
        );
    };

    const v_c8ac01 = () => (
        <View style={v_d81136.cameraContainer}>
            <CameraView
                ref={v_1a165b}
                style={v_d81136.camera}
                facing="front"
            >
                {}
                <TouchableOpacity
                    style={v_d81136.cameraCloseButton}
                    onPress={v_7f9a52}
                >
                    <Ionicons name="close" size={32} color="#FFFFFF" />
                </TouchableOpacity>

                {v_bd22dd()}

                {}
                <View style={v_d81136.cameraControls}>
                    {}
                    <Text style={v_d81136.cameraGuideText}>
                        {v_8d41d7('skin.capture.subtitle')}
                    </Text>
                    {}
                    <View style={v_d81136.cameraButtonRow}>
                        <TouchableOpacity
                            style={[
                                v_d81136.cameraCaptureButton,
                                v_ef2e54 && v_d81136.cameraCaptureButtonDisabled
                            ]}
                            onPress={v_311f79}
                            disabled={v_ef2e54}
                        >
                            {v_ef2e54 ? (
                                <ActivityIndicator size="small" color={v_1bfbd0.bluePrimary} />
                            ) : (
                                <View style={v_d81136.cameraCaptureInner} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </CameraView>
        </View>
    );

    const v_33853a = () => (
        <>
            {}
            <View style={v_d81136.infoSection}>
                <Text style={v_d81136.discountNotice}>{v_8d41d7('skin.capture.discount_notice')}</Text>
                {v_4452dd && (
                    <View style={v_d81136.freeTrialBadge}>
                        <Text style={v_d81136.freeTrialBadgeText}>🎁 무료 체험 가능</Text>
                    </View>
                )}
                {!v_f91d86 && !v_4452dd && (
                    <View style={v_d81136.insufficientBalanceNotice}>
                        <Text style={v_d81136.insufficientBalanceText}>
                            {`MTHT 잔액 부족 (필요: ${v_399221} MTHT)`}
                        </Text>
                    </View>
                )}
                <Text style={v_d81136.stepIndicator}>{v_8d41d7('skin.step_prefix')} 1</Text>
                <Text style={v_d81136.title}>{v_8d41d7('skin.capture.title')}</Text>
                <Text style={v_d81136.subtitle}>
                    {v_8d41d7('skin.capture.subtitle')}
                </Text>
            </View>

            {}
            <TouchableOpacity
                style={[
                    v_d81136.imageUploadArea,
                    v_827d31 != null && {
                        width: v_827d31,
                        alignSelf: 'center',
                    },
                    v_6c4b91.isLandscape && v_6c4b91.isTablet && v_d81136.imageUploadAreaLandscape,
                ]}
                onPress={v_46964a}
                activeOpacity={0.8}
                disabled={v_bbcab1}
            >
                {v_82f4af ? (
                    <>
                        <Image
                            source={{ uri: v_82f4af }}
                            style={v_d81136.selectedImage}
                            resizeMode="cover"
                        />
                        <TouchableOpacity
                            style={v_d81136.changeImageButton}
                            onPress={v_46964a}
                        >
                            <Ionicons name="camera" size={20} color={v_1bfbd0.white} />
                        </TouchableOpacity>
                    </>
                ) : (
                    <View style={v_d81136.uploadPlaceholder}>
                        {}
                        <View style={v_d81136.faceGuideContainer}>
                            <View style={v_d81136.faceGuideOval}>
                            </View>
                            {}
                            <View style={v_d81136.uploadShoulderGuide} />
                        </View>

                        {}
                        <View style={v_d81136.uploadCenterContent}>
                            <View style={v_d81136.uploadIconContainer}>
                                <Ionicons name="camera-outline" size={32} color={v_1bfbd0.bluePrimary} />
                            </View>
                            <Text style={v_d81136.uploadText}>
                                {v_8d41d7('skin.capture.placeholder_title')}
                            </Text>
                            <Text style={v_d81136.uploadHint}>
                                {v_8d41d7('skin.capture.placeholder_subtitle')}
                            </Text>
                        </View>

                    </View>
                )}

                {v_bbcab1 && (
                    <View style={v_d81136.validatingOverlay}>
                        <ActivityIndicator size="large" color={v_1bfbd0.white} />
                        <Text style={v_d81136.validatingText}>{v_8d41d7('skin.capture.validating')}</Text>
                    </View>
                )}
            </TouchableOpacity>

            {}
            {v_07cd8d && (
                <View style={v_d81136.validationSection}>
                    <View style={v_d81136.sectionTitleRow}>
                        <Ionicons name="clipboard-outline" size={18} color={v_1bfbd0.text} />
                        <Text style={v_d81136.validationTitle}>{v_8d41d7('skin.capture.validation_result')}</Text>
                    </View>

                    <View style={v_d81136.validationItem}>
                        <View style={v_d81136.validationIcon}>
                            {v_07cd8d.hasFace ? (
                                <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
                            ) : (
                                <Ionicons name="close-circle" size={24} color="#F44336" />
                            )}
                        </View>
                        <Text style={v_d81136.validationLabel}>{v_8d41d7('skin.capture.face_detection')}</Text>
                        <Text style={[
                            v_d81136.validationStatus,
                            { color: v_07cd8d.hasFace ? '#4CAF50' : '#F44336' }
                        ]}>
                            {v_07cd8d.hasFace
                                ? v_8d41d7('skin.capture.detected', { count: v_07cd8d.faceCount })
                                : v_8d41d7('skin.capture.not_detected')}
                        </Text>
                    </View>

                    <View style={v_d81136.validationItem}>
                        <View style={v_d81136.validationIcon}>
                            {v_07cd8d.isFrontal ? (
                                <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
                            ) : (
                                <Ionicons name="warning" size={24} color="#FF9800" />
                            )}
                        </View>
                        <Text style={v_d81136.validationLabel}>{v_8d41d7('skin.capture.frontal_shot')}</Text>
                        <Text style={[
                            v_d81136.validationStatus,
                            { color: v_07cd8d.isFrontal ? '#4CAF50' : '#FF9800' }
                        ]}>
                            {v_07cd8d.isFrontal
                                ? v_8d41d7('skin.capture.frontal')
                                : v_8d41d7('skin.capture.not_frontal')}
                        </Text>
                    </View>

                    <View style={v_d81136.validationItem}>
                        <View style={v_d81136.validationIcon}>
                            {v_07cd8d.isSizeOk ? (
                                <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
                            ) : (
                                <Ionicons name="warning" size={24} color="#FF9800" />
                            )}
                        </View>
                        <Text style={v_d81136.validationLabel}>{v_8d41d7('skin.capture.face_size')}</Text>
                        <Text style={[
                            v_d81136.validationStatus,
                            { color: v_07cd8d.isSizeOk ? '#4CAF50' : '#FF9800' }
                        ]}>
                            {v_07cd8d.isSizeOk
                                ? v_8d41d7('skin.capture.size_ok')
                                : v_8d41d7('skin.capture.too_small')}
                        </Text>
                    </View>
                </View>
            )}

            {}
            <View style={v_d81136.guideSection}>
                <View style={v_d81136.sectionTitleRow}>
                    <Ionicons name="camera-outline" size={18} color={v_1bfbd0.text} />
                    <Text style={v_d81136.guideTitle}>{v_8d41d7('skin.capture.guide_title')}</Text>
                </View>
                <View style={v_d81136.guideList}>
                    <Text style={v_d81136.guideItem}>• {v_8d41d7('skin.capture.guide_1')}</Text>
                    <Text style={v_d81136.guideItem}>• {v_8d41d7('skin.capture.guide_2')}</Text>
                    <Text style={v_d81136.guideItem}>• {v_8d41d7('skin.capture.guide_3')}</Text>
                    <Text style={v_d81136.guideItem}>• {v_8d41d7('skin.capture.guide_4')}</Text>
                </View>
            </View>

            {}
            {v_07cd8d && (!v_07cd8d.hasFace || !v_07cd8d.isFrontal || !v_07cd8d.isSizeOk) && (
                <View style={v_d81136.validationWarning}>
                    <Ionicons name="warning" size={20} color="#F57C00" />
                    <Text style={v_d81136.validationWarningText}>
                        {!v_07cd8d.hasFace
                            ? v_8d41d7('skin.capture.warning_no_face')
                            : !v_07cd8d.isFrontal
                                ? v_8d41d7('skin.capture.warning_not_frontal')
                                : v_8d41d7('skin.capture.warning_face_too_small')}
                    </Text>
                </View>
            )}

            {}
            <View style={v_d81136.buttonSection}>
                <PrimaryButton
                    title={
                        !v_82f4af
                            ? v_8d41d7('skin.capture.btn_capture')
                            : !v_07cd8d?.hasFace
                                ? v_8d41d7('skin.capture.btn_detect_need')
                                : !v_07cd8d?.isFrontal
                                    ? v_8d41d7('skin.capture.btn_frontal_need')
                                    : v_8d41d7('skin.capture.btn_next')
                    }
                    onPress={v_fefb99}
                    disabled={
                        !v_82f4af ||
                        !v_07cd8d?.hasFace ||
                        !v_07cd8d?.isFrontal ||
                        !v_07cd8d?.isSizeOk
                    }
                    fullWidth
                    style={
                        (!v_82f4af ||
                            !v_07cd8d?.hasFace ||
                            !v_07cd8d?.isFrontal ||
                            !v_07cd8d?.isSizeOk)
                            ? v_d81136.primaryButtonDisabled
                            : undefined
                    }
                    textStyle={
                        (!v_82f4af ||
                            !v_07cd8d?.hasFace ||
                            !v_07cd8d?.isFrontal ||
                            !v_07cd8d?.isSizeOk)
                            ? v_d81136.primaryButtonDisabledText
                            : undefined
                    }
                />

                {__DEV__ && (
                    <TouchableOpacity
                        style={v_d81136.devDebugBtn}
                        onPress={async () => {
                            try {
                                const v_678155 = await v_81fcbc();
                                if (!v_678155 || v_678155.length === 0) {
                                    v_889fad('알림', '저장된 피부 기록이 없습니다.');
                                    return;
                                }
                                const v_1300ee = v_678155[0];
                                const v_d3c7f7 = v_1300ee.analysis_result;
                                const v_79d59f = typeof v_d3c7f7 === 'string'
                                    ? JSON.parse(v_d3c7f7)
                                    : (v_d3c7f7 ?? {});
                                const v_8decf8 = v_e12bcd(v_79d59f, v_19dbdf());
                                const v_9ef443 = Object.entries(v_8decf8).map(([v_3b27d9, v_a057b5]: [string, any]) => ({
                                    type: v_3b27d9,
                                    ui_score: v_a057b5.ui_score ?? v_a057b5.score ?? 0,
                                    mask_urls: v_a057b5.mask_url ? [v_a057b5.mask_url] : [],
                                }));
                                v_9ef443.push({ type: 'all', score: v_1300ee.overall_score ?? 0 });
                                v_6f6f79({
                                    mode: 'sd',
                                    selectedConcerns: Object.keys(v_8decf8),
                                    taskId: 'debug_last_result',
                                    result: { error: null, results: { output: v_9ef443 as typeof v_3e09cd.result.results.v_9ef443 }, task_status: 'success' },
                                    timestamp: v_1300ee.created_at ?? new Date().toISOString(),
                                });
                                v_639227('result');
                            } catch (v_9e86fd) {
                                v_889fad('오류', String(v_9e86fd));
                            }
                        }}
                    >
                        <Text style={v_d81136.devDebugBtnText}>🐛 마지막 피부 측정결과 보기 (DEV)</Text>
                    </TouchableOpacity>
                )}
            </View>
        </>
    );

    const v_a5ba83 = () => {
        const v_44eb1a = v_52f1d1 === 'hd' ? v_e803bf(v_8d41d7) : v_6c3b8b(v_8d41d7);
        const v_5476b4 = v_76def3.size === v_44eb1a.length;

        return (
            <>
                {}
                {v_82f4af && (
                    <View style={v_d81136.previewSection}>
                        <Image
                            source={{ uri: v_82f4af }}
                            style={v_d81136.previewImage}
                            resizeMode="cover"
                        />
                        <View style={v_d81136.previewInfo}>
                            <Text style={v_d81136.previewTitle}>{v_8d41d7('skin.settings.captured_photo')}</Text>
                            {v_07cd8d && (
                                <View style={v_d81136.previewBadges}>
                                    <View style={[v_d81136.badge, { backgroundColor: '#E8F5E9' }]}>
                                        <Ionicons name="checkmark" size={14} color="#4CAF50" />
                                        <Text style={[v_d81136.badgeText, { color: '#4CAF50' }]}>
                                            {v_8d41d7('skin.capture.face_detection')}
                                        </Text>
                                    </View>
                                    {v_07cd8d.isFrontal && (
                                        <View style={[v_d81136.badge, { backgroundColor: '#E3F2FD' }]}>
                                            <Ionicons name="checkmark" size={14} color="#2196F3" />
                                            <Text style={[v_d81136.badgeText, { color: '#2196F3' }]}>
                                                {v_8d41d7('skin.capture.frontal')}
                                            </Text>
                                        </View>
                                    )}
                                </View>
                            )}
                        </View>
                    </View>
                )}

                {}
                <View style={v_d81136.concernsSection}>
                    <View style={v_d81136.concernsHeader}>
                        <Text style={v_d81136.sectionTitle}>🔍 {v_8d41d7('skin.settings.concern_title')}</Text>
                        <TouchableOpacity onPress={v_f02aac}>
                            <Text style={v_d81136.selectAllText}>
                                {v_5476b4 ? v_8d41d7('skin.settings.deselect_all') : v_8d41d7('skin.settings.select_all')}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={v_d81136.concernsSubtitle}>
                        {v_8d41d7('skin.settings.selected_count', { count: v_76def3.size })}
                    </Text>

                    <View style={v_d81136.concernsGrid}>
                        {v_44eb1a.map((v_ccf527) => {
                            const v_599a41 = v_76def3.has(v_ccf527.key);
                            return (
                                <Pressable
                                    key={v_ccf527.key}
                                    style={[
                                        v_d81136.concernItem,
                                        { width: v_6c4b91.isLandscape && v_6c4b91.isTablet ? '31%' : '48%' },
                                        v_599a41 && v_d81136.concernItemSelected,
                                    ]}
                                    onPress={() => v_c7594b(v_ccf527.key)}
                                >
                                    <View style={[
                                        v_d81136.checkbox,
                                        v_599a41 && v_d81136.checkboxSelected,
                                    ]}>
                                        {v_599a41 && (
                                            <Ionicons name="checkmark" size={14} color={v_1bfbd0.white} />
                                        )}
                                    </View>
                                    <Text style={[
                                        v_d81136.concernLabel,
                                        v_599a41 && v_d81136.concernLabelSelected,
                                    ]}>
                                        {v_ccf527.label}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>
                </View>

                {}
                {v_1744b9 && (
                    <View style={v_d81136.errorSection}>
                        <Ionicons name="warning" size={24} color={v_1bfbd0.error} />
                        <Text style={v_d81136.errorText}>{v_1744b9}</Text>
                    </View>
                )}

                {}
                <View style={v_d81136.buttonSection}>
                    <View style={v_d81136.buttonRow}>
                        <SecondaryButton
                            title={v_8d41d7('common.back')}
                            onPress={() => v_639227('capture')}
                            style={{ flex: 1, marginRight: 8 }}
                        />
                        <PrimaryButton
                            title={v_8d41d7('skin.settings.btn_start')}
                            onPress={() => v_34776f()}
                            disabled={v_76def3.size === 0}
                            style={{ flex: 2 }}
                        />
                    </View>
                </View>
            </>
        );
    };

    const v_5f339d = () => (
        <View style={v_d81136.analyzingContainer}>
            <ActivityIndicator size="large" color={v_1bfbd0.bluePrimary} />
            <Text style={v_d81136.analyzingTitle}>{v_8d41d7('skin.analyzing.title')}</Text>
            <Text style={v_d81136.analyzingText}>{v_d5fcde}</Text>
            <Text style={v_d81136.analyzingHint}>
                {v_8d41d7('skin.analyzing.hint')}
            </Text>
        </View>
    );

    const v_4d19dd = (v_740dd8): string => {
        if (v_740dd8 >= 95) return v_8d41d7('skin.result.grade.excellent');
        if (v_740dd8 >= 90) return v_8d41d7('skin.result.grade.great');
        if (v_740dd8 >= 85) return v_8d41d7('skin.result.grade.good');
        if (v_740dd8 >= 80) return v_8d41d7('skin.result.grade.normal');
        if (v_740dd8 >= 70) return v_8d41d7('skin.result.grade.caution');
        if (v_740dd8 >= 60) return v_8d41d7('skin.result.grade.needs_care');
        return v_8d41d7('skin.result.grade.intensive_care');
    };

    const v_4ff022 = () => {
        const v_579c77 = v_058956();

        if (!v_579c77) {
            return (
                <View style={v_d81136.analyzingContainer}>
                    <Ionicons name="warning" size={48} color={v_1bfbd0.error} />
                    <Text style={v_d81136.analyzingTitle}>{v_8d41d7('skin.result.error_no_result')}</Text>
                    <PrimaryButton
                        title={v_8d41d7('skin.result.btn_retry')}
                        onPress={v_a2f2ec}
                        style={{ marginTop: v_9b1a04.large }}
                    />
                </View>
            );
        }

        const { overallScore: v_adfd7c, resizeImageUrl: v_c2741d, concernScores: v_17b30f, skinAge: v_e4ff65 } = v_579c77;

        const v_54d0c6 = v_adfd7c <= 33 ? '#DC2626' : v_adfd7c <= 66 ? '#FBBF24' : '#22C55E';
        const v_858eb9 = v_4d19dd(v_adfd7c);

        const v_b5b523 = v_17b30f.slice(0, 3);
        const v_5f1433 = v_17b30f.slice(-3).reverse();

        const v_40248c = v_e521b9?.timestamp
            ? (() => {
                const v_d5dda0 = new Date(v_e521b9.timestamp);
                const v_f8e6b9 = `${v_d5dda0.getFullYear()}.${String(v_d5dda0.getMonth() + 1).padStart(2, '0')}.${String(v_d5dda0.getDate()).padStart(2, '0')}`;
                const v_df8a54 = v_d5dda0.toLocaleTimeString('ko-KR', { hour: 'numeric', minute: '2-digit', hour12: true });
                return `${v_f8e6b9} ${v_df8a54}`;
            })()
            : '';

        const v_778b2d = v_76eb7f ? v_af2c88(80, 100) : 80;
        const v_474580 = v_76eb7f ? 10 : 8;
        const v_0c21c9 = (v_778b2d - v_474580) / 2;
        const v_0288f8 = v_778b2d / 2;
        const v_65e020 = 2 * Math.PI * v_0c21c9;

        const v_812146 = (v_fd5f43): number => {
            if (v_fd5f43 <= 33) return (v_fd5f43 / 33) * 0.33;
            if (v_fd5f43 <= 66) return 0.33 + ((v_fd5f43 - 34) / 33) * 0.33;
            return 0.66 + ((v_fd5f43 - 67) / 34) * 0.34;
        };
        const v_09e739 = v_812146(v_adfd7c);
        const v_4b6102 = -Math.PI / 2 + v_09e739 * 2 * Math.PI;
        const v_e75d3b = v_0288f8 + v_0c21c9 * Math.cos(v_4b6102);
        const v_576627 = v_0288f8 + v_0c21c9 * Math.sin(v_4b6102);

        return (
            <>
                {}
                <View style={v_d81136.resultHeaderStatus}>
                    <View style={v_d81136.resultHeaderStatusRow}>
                        <View style={v_d81136.resultHeaderCheckCircle}>
                            <Ionicons name="checkmark" size={14} color="#FFFFFF" />
                        </View>
                        <Text style={v_2f6fcc(v_d81136.resultHeaderStatusText, 'resultHeaderStatusText')}>{v_8d41d7('skin.result.measurement_complete')}</Text>
                    </View>
                    {v_40248c ? (
                        <Text style={v_2f6fcc(v_d81136.resultHeaderDateText, 'resultHeaderDateText')}>
                            {v_8d41d7('skin.result.measurement_date')}: {v_40248c}
                        </Text>
                    ) : null}
                </View>

                {}
                <View style={v_d81136.overallScoreCard}>
                    {}
                    <View style={v_d81136.resultFaceImageContainer}>
                        <Image
                            source={
                                v_c2741d || v_82f4af
                                    ? { uri: v_c2741d || v_82f4af || '' }
                                    : require('../../../assets/images/character.png')
                            }
                            style={v_d81136.resultFaceImage}
                            resizeMode="cover"
                        />
                    </View>

                    {}
                    <View style={v_d81136.overallScoreContent}>
                        <Text style={v_2f6fcc(v_d81136.overallScoreLabel, 'overallScoreLabel')}>{v_8d41d7('skin.result.overall_score_avg')}</Text>
                        <View style={[v_d81136.overallScoreCircle, { width: v_778b2d, height: v_778b2d }]}>
                            <Svg width={v_778b2d} height={v_778b2d} style={{ position: 'absolute' }}>
                                {[
                                    { color: '#DC2626', start: 0, len: 0.33 },
                                    { color: '#FBBF24', start: 0.33, len: 0.33 },
                                    { color: '#22C55E', start: 0.66, len: 0.34 },
                                ].map(({ color: v_3c2a3a, start: v_965edf, len: v_fe889f }) => (
                                    <Circle
                                        key={v_3c2a3a}
                                        cx={v_0288f8}
                                        cy={v_0288f8}
                                        r={v_0c21c9}
                                        stroke={v_3c2a3a}
                                        strokeWidth={v_474580}
                                        strokeLinecap="round"
                                        fill="none"
                                        strokeDasharray={`${v_65e020 * v_fe889f} ${v_65e020 * (1 - v_fe889f)}`}
                                        strokeDashoffset={-v_65e020 * v_965edf}
                                        transform={`rotate(-90 ${v_0288f8} ${v_0288f8})`}
                                    />
                                ))}
                                <Circle cx={v_e75d3b} cy={v_576627} r={4} fill={v_54d0c6} stroke="#FFFFFF" strokeWidth={2} />
                            </Svg>
                            <View style={v_d81136.overallScoreGaugeText}>
                                <Text style={v_2f6fcc(v_d81136.overallScoreNumber, 'overallScoreNumber')}>
                                    {v_adfd7c}
                                </Text>
                            </View>
                        </View>
                        <Text style={[v_2f6fcc(v_d81136.overallGradeText, 'overallGradeText'), { color: v_54d0c6 }]}>
                            {v_858eb9}
                        </Text>
                        <Text style={v_2f6fcc(v_d81136.skinAgeText, 'skinAgeText')}>
                            {v_8d41d7('skin_records.skin_age', { age: v_e4ff65 })}
                        </Text>
                    </View>
                </View>

                {}
                <View style={v_d81136.highlightRow}>
                    {}
                    <View style={v_d81136.highlightColumn}>
                        <View style={v_d81136.highlightHeader}>
                            <Ionicons name="trophy-outline" size={16} color="#2563EB" />
                            <Text style={[v_2f6fcc(v_d81136.highlightTitle, 'highlightTitle'), { color: '#2563EB' }]}>{v_8d41d7('skin.result.excellent_items')}</Text>
                        </View>
                        <View style={v_d81136.highlightList}>
                            {v_b5b523.map((v_ccf527, v_a56041) => (
                                <View key={v_ccf527.type} style={v_d81136.highlightItem}>
                                    <Text style={v_d81136.highlightRank}>{v_a56041 + 1}</Text>
                                    <Text style={v_2f6fcc(v_d81136.highlightLabel, 'highlightLabel')} numberOfLines={1}>{v_ccf527.label}</Text>
                                    <Text style={[v_2f6fcc(v_d81136.highlightScore, 'highlightScore'), { color: '#2563EB' }]}>{v_ccf527.score}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {}
                    <View style={v_d81136.highlightDivider} />

                    {}
                    <View style={v_d81136.highlightColumn}>
                        <View style={v_d81136.highlightHeader}>
                            <Ionicons name="alert-circle-outline" size={16} color="#DC2626" />
                            <Text style={[v_2f6fcc(v_d81136.highlightTitle, 'highlightTitle'), { color: '#DC2626' }]}>{v_8d41d7('skin.result.care_items')}</Text>
                        </View>
                        <View style={v_d81136.highlightList}>
                            {v_5f1433.map((v_ccf527, v_a56041) => (
                                <View key={v_ccf527.type} style={v_d81136.highlightItem}>
                                    <Text style={v_d81136.highlightRank}>{v_a56041 + 1}</Text>
                                    <Text style={v_2f6fcc(v_d81136.highlightLabel, 'highlightLabel')} numberOfLines={1}>{v_ccf527.label}</Text>
                                    <Text style={[v_2f6fcc(v_d81136.highlightScore, 'highlightScore'), { color: '#DC2626' }]}>{v_ccf527.score}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {}
                <View style={v_d81136.allResultsSection}>
                    <View style={v_d81136.resultSectionHeader}>
                        <Ionicons name="grid-outline" size={18} color={v_1bfbd0.bluePrimary} />
                        <Text style={v_2f6fcc(v_d81136.resultSectionTitle, 'resultSectionTitle')}>{v_8d41d7('skin.result.all_results')}</Text>
                    </View>
                    <View style={v_d81136.allResultsSwiperContainer}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            style={v_d81136.allResultsSwiperScroll}
                            onScroll={(e: v_bd64bf<v_da479e>) => {
                                const v_cbddfc = v_9e86fd.nativeEvent.contentOffset.x;
                                const v_2365e9 = Math.round(v_cbddfc / (v_c54f24 + v_0abe94));
                                v_5bc608(Math.min(v_2365e9, v_17b30f.length - 1));
                            }}
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            snapToInterval={v_c54f24 + v_0abe94}
                            snapToAlignment="start"
                            contentContainerStyle={v_d81136.allResultsSwiperContent}
                        >
                            {v_17b30f.map((v_ccf527) => {
                                const v_5e5963 = v_53f592(v_ccf527.score);
                                const v_7be0c6 = v_4d19dd(v_ccf527.score);
                                const v_ef4192 = v_e131e9(v_ccf527.score);
                                const v_40e4fd = v_d8cb4d[v_ef4192];
                                const v_ca36a5 = v_ccf527.score / 100;
                                return (
                                    <View key={v_ccf527.type} style={[v_d81136.allResultsCard, { width: v_c54f24 }]}>
                                        <View style={v_d81136.allResultsCardHeader}>
                                            <Ionicons
                                                name={v_b0b235(v_ccf527.type)}
                                                size={18}
                                                color={v_1bfbd0.bluePrimary}
                                            />
                                            <Text style={v_2f6fcc(v_d81136.allResultsCardLabel, 'allResultsCardLabel')} numberOfLines={1}>{v_ccf527.label}</Text>
                                        </View>
                                        <View style={v_d81136.allResultsCardScoreRow}>
                                            <View style={v_d81136.allResultsCardScoreWrap}>
                                                <Text style={[v_2f6fcc(v_d81136.allResultsCardScore, 'allResultsCardScore'), { color: v_5e5963 }]}>{v_ccf527.score}</Text>
                                                <Text style={v_2f6fcc(v_d81136.allResultsCardScoreTotal, 'allResultsCardScoreTotal')}>/ 100</Text>
                                            </View>
                                            <View style={[v_d81136.allResultsCardTag, { backgroundColor: v_40e4fd.backgroundColor }]}>
                                                <Text style={[v_2f6fcc(v_d81136.allResultsCardTagText, 'allResultsCardTagText'), { color: v_40e4fd.color }]}>{v_7be0c6}</Text>
                                            </View>
                                        </View>
                                        <View style={v_d81136.allResultsCardProgressBg}>
                                            <View
                                                style={[
                                                    v_d81136.allResultsCardProgressFill,
                                                    { width: `${v_ca36a5 * 100}%`, backgroundColor: v_5e5963 },
                                                ]}
                                            />
                                        </View>
                                    </View>
                                );
                            })}
                        </ScrollView>
                        {v_17b30f.length > 1 && (
                            <View style={v_d81136.allResultsPagination}>
                                <Text style={v_d81136.allResultsPaginationText}>
                                    {v_8da349 + 1} / {v_17b30f.length}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>

                {

}
                {(
                    <>
                        <View style={v_d81136.aiAnalysisCard}>
                            <View style={v_d81136.aiAnalysisCardHeader}>
                                <View style={v_d81136.aiAnalysisCardIcon}>
                                    <Ionicons name="document-text-outline" size={22} color="#FFFFFF" />
                                </View>
                                <Text style={v_2f6fcc(v_d81136.aiAnalysisCardTitle, 'aiAnalysisCardTitle')}>{v_8d41d7('skin.result.ai_comprehensive_title')}</Text>
                            </View>
                            {v_85cf60 ? (
                                <View style={{ padding: 20, alignItems: 'center' }}>
                                    <ActivityIndicator size="large" color="#AD46FF" />
                                    <Text style={[v_2f6fcc(v_d81136.aiAnalysisSectionText, 'aiAnalysisSectionText'), { marginTop: 12, textAlign: 'center' }]}>
                                        AI가 피부 상태를 분석 중입니다...
                                    </Text>
                                </View>
                            ) : v_e399bf ? (
                                <View style={v_d81136.aiAnalysisSubCard}>
                                    <Text style={v_2f6fcc(v_d81136.aiAnalysisSectionText, 'aiAnalysisSectionText')}>{v_dff48a(v_e399bf)}</Text>
                                </View>
                            ) : (
                                <View style={v_d81136.aiAnalysisSubCard}>
                                    <Text style={[v_2f6fcc(v_d81136.aiAnalysisSectionText, 'aiAnalysisSectionText'), { color: '#9CA3AF' }]}>
                                        AI 분석 결과를 불러오는 중입니다...
                                    </Text>
                                </View>
                            )}
                        </View>
                    </>
                )}

                {}
                <SupplementRecommendCta
                    source="skin"
                    recordId={v_4ae380 ?? null}
                    skipUpsert={v_72ba9a}
                />

                {}
                <View style={v_d81136.medicalDisclaimerCard}>
                    <View style={v_d81136.medicalDisclaimerHeader}>
                        <Ionicons name="medical-outline" size={18} color="#DC2626" />
                        <Text style={v_d81136.medicalDisclaimerTitle}>{v_8d41d7('medical_disclaimer.title')}</Text>
                    </View>
                    <Text style={v_d81136.medicalDisclaimerText}>
                        {v_8d41d7('medical_disclaimer.body_1')}
                        <Text style={v_d81136.medicalDisclaimerHighlight}>{v_8d41d7('medical_disclaimer.highlight_1')}</Text>
                        {v_8d41d7('medical_disclaimer.body_2')}
                        {'\n\n'}
                        {v_8d41d7('medical_disclaimer.body_3')}
                        <Text style={v_d81136.medicalDisclaimerHighlight}>{v_8d41d7('medical_disclaimer.highlight_2')}</Text>
                        {v_8d41d7('medical_disclaimer.body_4')}
                    </Text>
                </View>

                {}
                <View style={v_d81136.resultButtonSection}>
                    <PrimaryButton
                        title={
                            v_72ba9a
                                ? v_8d41d7('health_records.close', '닫기')
                                : v_8d41d7('skin.result.btn_remake')
                        }
                        onPress={() => {
                            if (v_72ba9a) {
                                v_a2f2ec();
                                v_02dd63('records');
                                return;
                            }
                            v_a2f2ec();
                        }}
                    />
                </View>
            </>
        );
    };

    const v_46088d = (
        <DataConsentModal
            visible={v_22975d}
            kind="skin"
            onAgree={() => {
                v_9b09d6(false);
                const v_483de2 = v_2b985c.current;
                v_2b985c.current = null;
                if (v_483de2) v_483de2();
            }}
            onCancel={() => {
                v_9b09d6(false);
                v_2b985c.current = null;
            }}
        />
    );

    if (v_91943c === 'camera') {
        return (
            <>
                <MainLayout activeKey="analysis">{v_c8ac01()}</MainLayout>
                {v_46088d}
            </>
        );
    }

    return (
        <MainLayout activeKey="analysis">
            <StatusBar style="dark" />
            <SafeView style={v_d81136.screen} showBottomBackground={false}>
                <Header
                    variant="healthAnalysis"
                    title={v_8d41d7('skin.title')}
                    showBackButton
                    centerContentMaxWidth={v_76eb7f ? undefined : v_6c4b91.contentColumnWidth}
                    centerContentPadding={v_76eb7f ? undefined : v_6c4b91.horizontalPadding}
                    titleStyle={v_76eb7f ? { fontSize: v_52101f.subtitle } : undefined}
                    onBackPress={() => {
                        if (v_91943c === 'capture') {
                            v_c65f5d.goBack();
                        } else if (v_91943c === 'settings') {
                            v_639227('capture');
                        } else if (v_91943c === 'result') {
                            if (v_72ba9a) {
                                v_a2f2ec();
                                v_02dd63('records');
                            } else {
                                v_a2f2ec();
                            }
                        }
                    }}
                    rightAccessory={
                        <View style={v_d81136.headerRightIcons}>
                            {v_91943c === 'result' && (
                                <TouchableOpacity
                                    style={v_d81136.healthIconBtn}
                                    onPress={v_30222e}
                                    hitSlop={8}
                                    accessibilityRole="button"
                                    accessibilityLabel={v_8d41d7('chat.include_in_chat')}
                                >
                                    <Ionicons name="chatbubble-ellipses-outline" size={22} color={v_1bfbd0.primary} />
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity
                                style={v_d81136.healthIconBtn}
                                onPress={() => v_9b57fc('HealthAnalysis')}
                                hitSlop={8}
                            >
                                <Heart size={22} color={v_1bfbd0.primary} />
                            </TouchableOpacity>
                        </View>
                    }
                />
                <View style={v_d81136.tabBar}>
                    <View
                        style={[
                            v_d81136.tabBarInner,
                            v_76eb7f
                                ? { paddingHorizontal: v_9b1a04.large, width: '100%' }
                                : {
                                    maxWidth: v_6c4b91.contentColumnWidth,
                                    paddingHorizontal: v_6c4b91.horizontalPadding,
                                  },
                        ]}
                    >
                        <View style={v_d81136.tabRow}>
                            <TouchableOpacity
                                style={[v_d81136.tab, v_ac1d22 === 'measure' && v_d81136.tabActive]}
                                onPress={() => v_02dd63('measure')}
                            >
                                <Text style={[v_2f6fcc(v_d81136.tabText, 'tabText'), v_ac1d22 === 'measure' && v_d81136.tabTextActive]}>
                                    {v_8d41d7('health_tabs.measure')}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[v_d81136.tab, v_ac1d22 === 'records' && v_d81136.tabActive]}
                                onPress={() => v_02dd63('records')}
                            >
                                <Text style={[v_2f6fcc(v_d81136.tabText, 'tabText'), v_ac1d22 === 'records' && v_d81136.tabTextActive]}>
                                    {v_8d41d7('health_tabs.records')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <AccountSelector
                            accounts={v_c86f08}
                            selectedAccountId={v_e7b2f2}
                            onSelectAccount={(v_2453ad) => {
                                if (v_160272 && v_ac1d22 === 'records') {
                                    v_1f1e88(v_2453ad);
                                    return;
                                }
                                if (v_160272) {
                                    v_ccc6c8(v_2453ad);
                                    return;
                                }
                                v_1f1e88(v_2453ad);
                            }}
                            onAddSubAccount={v_160272 ? undefined : () => v_c65f5d.navigate('AddSubAccount')}
                            onDeleteAccount={v_160272 ? undefined : v_5bc46a}
                            onDeletePharmacyRecords={v_160272 ? v_533a87 : undefined}
                            onLinkEmail={v_160272 ? undefined : v_42b67a}
                            disabled={v_91943c === 'result' && v_ac1d22 !== 'records'}
                            autoLoad={!v_160272}
                            pharmacistMode={v_160272}
                            modalTitle={v_160272 ? v_8d41d7('pharmacist.visitor_list.title') : undefined}
                            emptyText={v_160272 ? v_8d41d7('pharmacist.visitor_list.empty') : undefined}
                        />
                    </View>
                </View>
                {v_ac1d22 === 'records' ? (
                    <SafeScrollView
                        contentContainerStyle={v_d81136.recordsContent}
                        showsVerticalScrollIndicator={false}
                        showBottomBackground={false}
                        disableBottomPadding={true}
                    >
                        <SkinRecordsView
                            selectedAccountId={v_e7b2f2}
                            accounts={v_c86f08}
                            pharmacistMode={v_160272}
                            onViewFullResult={(v_cbbd71) => {
                                void v_eb7b32(v_cbbd71);
                            }}
                            onCompare={(v_678155) => {
                                const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2);
                                v_c65f5d.navigate('SkinComparison', {
                                    recordA: v_678155[0],
                                    recordB: v_678155[1],
                                    userName: v_0c2f9b?.name,
                                });
                            }}
                        />
                    </SafeScrollView>
                ) : (
                    <SafeScrollView
                        contentContainerStyle={v_d81136.content}
                        showsVerticalScrollIndicator={false}
                        showBottomBackground={false}
                        disableBottomPadding={true}
                    >
                        <CenteredContentShell backgroundColor={v_1bfbd0.background} contentColumnWidth={v_6c4b91.contentColumnWidth}>
                            <View style={v_d81136.container}>
                                {v_91943c === 'capture' && v_33853a()}
                                {v_91943c === 'settings' && v_a5ba83()}
                                {v_91943c === 'analyzing' && v_5f339d()}
                                {v_91943c === 'result' && v_4ff022()}
                            </View>
                        </CenteredContentShell>
                    </SafeScrollView>
                )}
            </SafeView>

            {}
            <Modal
                visible={v_c5caed}
                transparent
                animationType="fade"
                onRequestClose={() => v_e2f548(false)}
            >
                <Pressable
                    style={v_d81136.imagePickerModalOverlay}
                    onPress={() => v_e2f548(false)}
                >
                    <Pressable style={v_d81136.imagePickerModalContent} onPress={() => { }}>
                        <Text style={v_d81136.imagePickerModalTitle}>{v_8d41d7('skin.modal.capture_title')}</Text>
                        <Text style={v_d81136.imagePickerModalSubtitle}>
                            {v_8d41d7('skin.modal.capture_subtitle')}
                        </Text>

                        <View style={v_d81136.imagePickerModalButtons}>
                            <TouchableOpacity
                                style={v_d81136.imagePickerModalButton}
                                onPress={v_eb4a5e}
                            >
                                <Ionicons name="camera-outline" size={24} color={v_1bfbd0.bluePrimary} />
                                <Text style={v_d81136.imagePickerModalButtonText}>{v_8d41d7('skin.modal.camera')}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={v_d81136.imagePickerModalButton}
                                onPress={v_5c14ac}
                            >
                                <Ionicons name="images-outline" size={24} color={v_1bfbd0.bluePrimary} />
                                <Text style={v_d81136.imagePickerModalButtonText}>{v_8d41d7('skin.modal.gallery')}</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={v_d81136.imagePickerModalCancelButton}
                            onPress={() => v_e2f548(false)}
                        >
                            <Text style={v_d81136.imagePickerModalCancelText}>{v_8d41d7('common.cancel')}</Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </Modal>

            {}
            {v_c813f5 && (
                <ImageViewing
                    images={[{ uri: v_cf9c33.resolveAssetSource(v_c813f5.image).uri }]}
                    imageIndex={0}
                    visible={v_c813f5 !== null}
                    onRequestClose={() => v_0d73a9(null)}
                    presentationStyle="overFullScreen"
                    doubleTapToZoomEnabled={true}
                    swipeToCloseEnabled={true}
                    HeaderComponent={({ imageIndex: v_c3488c }) => (
                        <View style={v_d81136.productImageModalHeader}>
                            <TouchableOpacity
                                style={v_d81136.productImageModalCloseButton}
                                onPress={() => v_0d73a9(null)}
                                accessibilityRole="button"
                                accessibilityLabel="이미지 확대 모달 닫기"
                            >
                                <Ionicons name="close" size={28} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    )}
                    FooterComponent={({ imageIndex: v_c3488c }) => (
                        <View style={v_d81136.productImageModalFooter}>
                            <Text style={v_d81136.productImageModalName}>
                                {v_c813f5.name}
                            </Text>
                        </View>
                    )}
                />
            )}

            {v_46088d}
        </MainLayout>
    );
};

const v_d81136 = v_472849.create({
    screen: v_a61db3.screen,
    headerRightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    healthIconBtn: {
        padding: 8,
    },
    tabBar: {
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        backgroundColor: '#ffffff',
    },
    tabBarInner: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: v_9b1a04.medium,
    },
    tabRow: {
        flexDirection: 'row',
        gap: 24,
    },
    tab: {
        paddingVertical: 8,
    },
    tabActive: {
        borderBottomWidth: 3,
        borderBottomColor: v_1bfbd0.buttonPrimary,
    },
    tabText: {
        fontSize: 16,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    tabTextActive: {
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
    },
    recordsContent: {
        flexGrow: 1,
        paddingBottom: v_9b1a04.xlarge,
        backgroundColor: v_1bfbd0.background,
    },
    recordsPlaceholder: {
        flex: 1,
        padding: v_9b1a04.large,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordsPlaceholderText: {
        marginTop: v_9b1a04.medium,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    content: {
        ...v_a61db3.content,

        paddingHorizontal: 0,
        minHeight: '100%',
    },
    container: {
        ...v_a61db3.container,
        gap: v_9b1a04.medium,
    },

    freeTrialBadge: {
        backgroundColor: '#ECFDF5',
        borderWidth: 1,
        borderColor: '#10B981',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 6,
        alignSelf: 'center',
        marginBottom: 10,
    },
    freeTrialBadgeText: {
        fontSize: 13,
        fontFamily: v_843035.semibold,
        color: '#065F46',
    },
    insufficientBalanceNotice: {
        backgroundColor: '#FEF2F2',
        borderWidth: 1,
        borderColor: '#FCA5A5',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 10,
    },
    insufficientBalanceText: {
        fontSize: 12,
        fontFamily: v_843035.medium,
        color: '#DC2626',
        textAlign: 'center',
    },

    discountNotice: {
        fontSize: 12,
        fontFamily: v_843035.medium,
        color: '#0D9488',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: v_9b1a04.medium,
    },

    stepIndicator: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.bluePrimary,
        marginBottom: 4,
    },

    infoSection: {
        alignItems: 'center',
        marginBottom: v_9b1a04.small,
    },
    title: {
        fontSize: 26,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.small,
    },
    subtitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        textAlign: 'center',
        lineHeight: 22,
    },

    imageUploadArea: {
        width: '100%',
        aspectRatio: 3 / 4,
        backgroundColor: v_1bfbd0.white,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: v_1bfbd0.border,
        borderStyle: 'dashed',
    },
    imageUploadAreaLandscape: {
        aspectRatio: undefined,
        maxHeight: 320,
        width: '100%',
        maxWidth: 440,
        alignSelf: 'center',
    },
    selectedImage: {
        width: '100%',
        height: '100%',
    },
    uploadPlaceholder: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: v_9b1a04.xlarge,
        paddingHorizontal: v_9b1a04.large,
        position: 'relative',
    },
    faceGuideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
    },
    faceGuideOval: {
        width: 160,
        height: 200,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: 'rgba(59, 130, 246, 0.3)',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(59, 130, 246, 0.05)',
    },
    uploadShoulderGuide: {
        width: 220,
        height: 60,
        borderTopLeftRadius: 110,
        borderTopRightRadius: 110,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderColor: 'rgba(59, 130, 246, 0.3)',
        borderStyle: 'dashed',
        marginTop: -10,
        backgroundColor: 'rgba(59, 130, 246, 0.05)',
    },
    uploadCenterContent: {
        alignItems: 'center',
        paddingVertical: v_9b1a04.medium,
    },

    guideOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    faceGuide: {
        width: 160,
        height: 200,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: v_1bfbd0.bluePrimary,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -40,
    },
    faceGuideInner: {
        width: 140,
        height: 180,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'rgba(108, 99, 255, 0.3)',
    },
    shoulderGuide: {
        width: 240,
        height: 80,
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
        borderWidth: 3,
        borderTopWidth: 0,
        borderColor: v_1bfbd0.bluePrimary,
        borderStyle: 'dashed',
        marginTop: -3,
    },
    guideOverlayText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.bluePrimary,
        textAlign: 'center',
        marginTop: v_9b1a04.medium,
        lineHeight: 18,
    },
    uploadContent: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
    },
    uploadIconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: v_1bfbd0.blurBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: v_9b1a04.small,
    },
    uploadText: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.bluePrimary,
        marginBottom: 4,
    },
    uploadHint: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },

    changeImageButton: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    validatingOverlay: {
        ...v_472849.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    validatingText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.white,
        marginTop: v_9b1a04.medium,
    },

    validationWarning: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF3E0',
        borderRadius: 12,
        padding: v_9b1a04.medium,
        gap: v_9b1a04.small,
        borderWidth: 1,
        borderColor: '#FFE0B2',
    },
    validationWarningText: {
        flex: 1,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: '#E65100',
        lineHeight: 20,
    },

    validationSection: {
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 16,
        padding: v_9b1a04.medium,
    },
    sectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
        marginBottom: v_9b1a04.medium,
    },
    copyIconButton: {
        marginLeft: 'auto',
        padding: v_9b1a04.small,
    },
    validationTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    validationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: v_9b1a04.small,
    },
    validationIcon: {
        width: 32,
        marginRight: v_9b1a04.small,
    },
    validationLabel: {
        flex: 1,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
    },
    validationStatus: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
    },

    guideSection: {
        backgroundColor: v_1bfbd0.lightBlue,
        borderRadius: 16,
        padding: v_9b1a04.medium,
    },
    guideTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    guideList: {
        gap: 8,
    },
    guideItem: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        lineHeight: 22,
    },

    previewSection: {
        flexDirection: 'row',
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 16,
        padding: v_9b1a04.medium,
        alignItems: 'center',
    },
    previewImage: {
        width: 80,
        height: 100,
        borderRadius: 12,
    },
    previewInfo: {
        flex: 1,
        marginLeft: v_9b1a04.medium,
    },
    previewTitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.small,
    },
    previewBadges: {
        flexDirection: 'row',
        gap: 8,
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
    },

    modeSection: {
        marginTop: v_9b1a04.small,
    },
    sectionTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    modeButtons: {
        flexDirection: 'row',
        gap: v_9b1a04.medium,
    },
    modeButton: {
        flex: 1,
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 16,
        padding: v_9b1a04.medium,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    modeButtonActive: {
        backgroundColor: v_1bfbd0.blurBlue,
        borderColor: v_1bfbd0.bluePrimary,
    },
    modeButtonTitle: {
        fontSize: 24,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.secondaryText,
    },
    modeButtonTitleActive: {
        color: v_1bfbd0.bluePrimary,
    },
    modeButtonDesc: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginTop: 4,
    },
    modeButtonDescActive: {
        color: v_1bfbd0.bluePrimary,
    },

    concernsSection: {
        marginTop: v_9b1a04.small,
    },
    concernsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectAllText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.bluePrimary,
    },
    concernsSubtitle: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginBottom: v_9b1a04.medium,
    },
    concernsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: v_9b1a04.small,
    },
    concernItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1.5,
        borderColor: 'transparent',
    },
    concernItemSelected: {
        backgroundColor: v_1bfbd0.blurBlue,
        borderColor: v_1bfbd0.bluePrimary,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: v_1bfbd0.border,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxSelected: {
        backgroundColor: v_1bfbd0.bluePrimary,
        borderColor: v_1bfbd0.bluePrimary,
    },
    concernLabel: {
        flex: 1,
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
    },
    concernLabelSelected: {
        color: v_1bfbd0.bluePrimary,
    },

    errorSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF5F5',
        borderRadius: 12,
        padding: v_9b1a04.medium,
        gap: v_9b1a04.small,
    },
    errorText: {
        flex: 1,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.error,
    },

    buttonSection: {
        marginTop: 'auto',
        paddingTop: v_9b1a04.large,
        paddingBottom: v_9b1a04.xlarge,
    },
    buttonRow: {
        flexDirection: 'row',
    },
    previewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        marginTop: v_9b1a04.medium,
        paddingVertical: v_9b1a04.small,
    },
    previewButtonText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.bluePrimary,
    },
    devDebugBtn: {
        alignSelf: 'center',
        marginTop: v_9b1a04.medium,
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#FF6B00',
        borderRadius: 8,
    },
    devDebugBtnText: {
        color: '#FFF',
        fontFamily: v_843035.medium,
        fontSize: v_ef658a.small,
    },

    analyzingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 100,
    },
    analyzingTitle: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginTop: v_9b1a04.large,
    },
    analyzingText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.bluePrimary,
        marginTop: v_9b1a04.small,
    },
    analyzingHint: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginTop: v_9b1a04.medium,
    },

    resultHeaderStatus: {
        alignItems: 'center',
        marginBottom: v_9b1a04.medium,
    },
    resultHeaderStatusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
    },
    resultHeaderCheckCircle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: v_1bfbd0.buttonPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultHeaderStatusText: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.buttonPrimary,
    },
    resultHeaderDateText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    resultTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
    },
    resultMainTitle: {
        fontSize: 22,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
    },
    resultSubtitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginTop: 4,
    },

    overallScoreCard: {
        backgroundColor: v_1bfbd0.white,
        borderRadius: 20,
        padding: v_9b1a04.large,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
    },
    resultFaceImageContainer: {
        width: 100,
        height: 130,
        borderRadius: 12,
        overflow: 'hidden',
        marginRight: v_9b1a04.medium,
    },
    resultFaceImage: {
        width: '100%',
        height: '100%',
    },
    overallScoreContent: {
        flex: 1,
        alignItems: 'center',
    },
    overallScoreLabel: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.secondaryText,
        marginBottom: v_9b1a04.small,
    },
    overallScoreCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    overallScoreGaugeText: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overallScoreRing: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: v_1bfbd0.lightGray,
    },
    overallScoreNumber: {
        fontSize: 24,
        fontFamily: v_843035.bold,
        color: '#1A202C',
    },
    overallGradeText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.semibold,
        marginTop: v_9b1a04.small / 2,
    },
    skinAgeText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginTop: v_9b1a04.small,
    },

    resultSection: {
        marginTop: v_9b1a04.medium,
    },
    resultSectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
        marginBottom: v_9b1a04.small,
    },
    resultSectionTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },

    highlightRow: {
        flexDirection: 'row',
        backgroundColor: v_1bfbd0.white,
        borderRadius: 16,
        marginTop: v_9b1a04.medium,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 0,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
    },
    highlightColumn: {
        width: '50%', 
        padding: v_9b1a04.medium,
    },
    highlightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: v_9b1a04.medium,
    },
    highlightTitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.bold,
    },
    highlightDivider: {
        width: 1,
        backgroundColor: '#F3F4F6',
        position: 'absolute',
        left: '50%',
        top: v_9b1a04.medium,
        bottom: v_9b1a04.medium,
    },
    highlightList: {
        gap: 10,
    },
    highlightItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    highlightRank: {
        width: 14,
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.secondaryText,
    },
    highlightLabel: {
        flex: 1,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
        marginHorizontal: 6,
    },
    highlightScore: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.bold,
        width: 28,
        textAlign: 'right',
    },

    allResultsSection: {
        marginTop: v_9b1a04.medium,
        overflow: 'visible',
    },
    allResultsSwiperContainer: {
        marginTop: v_9b1a04.small,
        overflow: 'visible',
    },
    allResultsSwiperScroll: {
        overflow: 'visible',
    },
    allResultsSwiperContent: {
        paddingLeft: 0,
        paddingRight: v_9b1a04.large,
        gap: 12,
    },
    allResultsCard: {
        backgroundColor: v_1bfbd0.white,
        borderRadius: 12,
        padding: v_9b1a04.medium,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
        overflow: 'visible',
        alignItems: 'stretch',
    },
    allResultsCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: v_9b1a04.medium,
    },
    allResultsCardLabel: {
        flex: 1,
        fontSize: v_ef658a.small,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        letterSpacing: -0.5,
    },
    allResultsCardScoreRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    allResultsCardScoreWrap: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 2,
    },
    allResultsCardScore: {
        fontSize: 24,
        fontFamily: v_843035.bold,
    },
    allResultsCardScoreTotal: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    allResultsCardTag: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    allResultsCardTagText: {
        fontSize: 11,
        fontFamily: v_843035.semibold,
    },
    allResultsCardProgressBg: {
        height: 6,
        borderRadius: 3,
        backgroundColor: '#F3F4F6',
        overflow: 'hidden',
        marginTop: v_9b1a04.small,
    },
    allResultsCardProgressFill: {
        height: '100%',
        borderRadius: 3,
    },
    allResultsPagination: {
        alignItems: 'center',
        marginTop: v_9b1a04.medium,
    },
    allResultsPaginationText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.secondaryText,
    },

    aiAnalysisStartCard: {
        marginTop: v_9b1a04.large,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    aiAnalysisStartGradient: {
        padding: v_9b1a04.large,
    },
    aiAnalysisStartHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
        marginBottom: v_9b1a04.medium,
    },
    aiAnalysisStartIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    aiAnalysisStartTitle: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: '#FFFFFF',
    },
    aiAnalysisStartDesc: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: '#FFFFFF',
        lineHeight: 22,
        marginBottom: v_9b1a04.xlarge,
        opacity: 0.95,
    },
    aiAnalysisStartButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: v_9b1a04.medium,
        alignItems: 'center',
        justifyContent: 'center',
    },
    aiAnalysisStartButtonText: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: '#4A3B8C',
    },
    aiAnalysisCard: {
        marginTop: v_9b1a04.large,
        backgroundColor: '#F5F3F8',
        borderRadius: 16,
        padding: v_9b1a04.large,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
    },
    aiAnalysisCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
        marginBottom: v_9b1a04.medium,
    },
    aiAnalysisCardIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: v_1bfbd0.buttonPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    aiAnalysisCardTitle: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
    },
    aiAnalysisSubCard: {
        backgroundColor: v_1bfbd0.white,
        borderRadius: 12,
        padding: v_9b1a04.medium,
        marginBottom: v_9b1a04.medium,
    },
    aiAnalysisSectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
        marginBottom: v_9b1a04.small,
    },
    aiAnalysisSubCardIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    aiAnalysisSectionTitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    aiAnalysisSectionText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        lineHeight: 22,
    },
    aiProductsCard: {
        marginTop: v_9b1a04.medium,
        backgroundColor: v_1bfbd0.white,
        borderRadius: 16,
        padding: v_9b1a04.large,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
    },
    aiProductsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: v_9b1a04.medium,
    },
    aiProductsTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
    },
    aiProductsBadge: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.primary,
    },
    aiProductList: {
        gap: v_9b1a04.small,
    },
    aiProductItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.medium,
        padding: v_9b1a04.medium,
        backgroundColor: v_1bfbd0.backgroundSecondary,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
    },
    aiProductIconWrap: {
        width: 56,
        height: 56,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
    },
    aiProductImage: {
        width: 40,
        height: 40,
    },
    aiProductContent: {
        flex: 1,
    },
    aiProductBrand: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    aiProductTitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        marginBottom: 4,
    },
    aiProductDesc: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginBottom: 4,
    },
    aiProductPoints: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    aiProductPointsNumber: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    aiProductPointsCurrency: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.secondaryText,
    },
    aiMoreButton: {
        marginTop: v_9b1a04.medium,
        paddingVertical: v_9b1a04.medium,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
        borderRadius: 12,
    },
    aiMoreButtonText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    resultDisclaimer: {
        marginTop: v_9b1a04.large,
        marginBottom: v_9b1a04.medium,
        padding: v_9b1a04.medium,
        backgroundColor: '#FFF3CD',
        borderRadius: 8,
    },
    resultDisclaimerText: {
        fontSize: 14,
        fontFamily: v_843035.regular,
        color: '#856404',
        lineHeight: 20,
        textAlign: 'center',
    },
    medicalDisclaimerCard: {
        marginTop: v_9b1a04.large,
        marginBottom: v_9b1a04.medium,
        padding: v_9b1a04.medium,
        backgroundColor: '#FEF2F2',
        borderWidth: 1,
        borderColor: '#FECACA',
        borderRadius: 12,
    },
    medicalDisclaimerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    medicalDisclaimerTitle: {
        fontSize: 14,
        fontFamily: v_843035.semibold,
        color: '#DC2626',
        marginLeft: 6,
    },
    medicalDisclaimerText: {
        fontSize: 13,
        fontFamily: v_843035.regular,
        color: '#6B7280',
        lineHeight: 20,
    },
    medicalDisclaimerHighlight: {
        fontFamily: v_843035.semibold,
        color: '#DC2626',
    },
    resultButtonSection: {
        marginTop: v_9b1a04.xlarge,
        paddingBottom: v_9b1a04.large,
    },

    compactGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 16,
        padding: v_9b1a04.small / 2,
        gap: v_9b1a04.small / 2,
    },
    compactGridItem: {
        width: '48%',
        backgroundColor: v_1bfbd0.white,
        borderRadius: 12,
        padding: v_9b1a04.small + v_9b1a04.small / 2,
        justifyContent: 'space-between',
    },
    compactGridContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    compactGridBarRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
    },
    compactGridLabel: {
        flex: 1,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
        marginRight: 8,
        lineHeight: v_ef658a.medium + 4,
    },
    compactGridScore: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.bold,
        minWidth: 28,
        textAlign: 'right',
    },
    compactGridBar: {
        flex: 1,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#F3F4F6',
        overflow: 'hidden',
    },
    compactGridBarFill: {
        height: '100%',
        borderRadius: 3,
    },

    concernHighlightList: {
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 12,
        overflow: 'hidden',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: "#ededed",
    },
    concernHighlightItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: v_9b1a04.medium,
        borderBottomWidth: 1,
        borderColor: "#ededed",
    },
    concernRank: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#DCFCE7',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: v_9b1a04.small,
    },
    concernRankText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.bold,
        color: '#22C55E',
    },
    concernHighlightLabel: {
        flex: 1,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
    },
    concernHighlightScore: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    concernHighlightScoreText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.semibold,
    },

    concernGridContainer: {
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 16,
        padding: v_9b1a04.small,
        gap: v_9b1a04.small,
    },
    concernGridItem: {
        backgroundColor: v_1bfbd0.white,
        borderRadius: 12,
        padding: v_9b1a04.medium,
        marginBottom: v_9b1a04.small,
    },
    concernGridItemHorizontal: {
        backgroundColor: v_1bfbd0.white,
        borderRadius: 12,
        padding: v_9b1a04.medium,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: v_9b1a04.small,
    },
    concernGridIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: v_9b1a04.small,
    },
    concernGridIconSmall: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    },
    concernGridContentVertical: {
        flex: 1,
    },
    concernGridLabelFull: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        marginBottom: 6,
    },
    concernGridProgressRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    concernGridBarFlex: {
        flex: 1,
        marginRight: v_9b1a04.small,
    },
    concernGridScoreFixed: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.bold,
        minWidth: 28,
        textAlign: 'right',
    },
    concernGridScoreBarInline: {
        height: 6,
        borderRadius: 3,
        overflow: 'hidden',
    },
    concernGridLabel: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.small,
    },
    concernGridScoreRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
    },
    concernGridScoreBar: {
        flex: 1,
        height: 8,
        borderRadius: 4,
        overflow: 'hidden',
    },
    concernGridScoreFill: {
        height: '100%',
        borderRadius: 4,
    },
    concernGridScore: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.bold,
        width: 30,
        textAlign: 'right',
    },

    analysisInfoCard: {
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 12,
        padding: v_9b1a04.medium,
        marginTop: v_9b1a04.medium,
        gap: v_9b1a04.small,
    },
    analysisInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
    },
    analysisInfoText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },

    cameraContainer: {
        flex: 1,
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
    },
    cameraCloseButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    cameraGuideOverlay: {
        ...v_472849.absoluteFillObject,
    },
    cameraGuideOverlayMobile: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraTabletMaskColumn: {
        flex: 1,
        width: '100%',
    },
    cameraTabletViewfinderRow: {
        flexDirection: 'row',
        width: '100%',
    },
    cameraMaskBand: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    cameraMaskTop: {
        flex: 1,
        width: '100%',
    },
    cameraMaskBottom: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    cameraMaskSide: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    cameraGuideArea: {
        flexDirection: 'row',
        height: v_28d8d8 * v_4eb5d3,
    },
    cameraGuideFrame: {
        width: v_0d9f50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraFaceGuide: {
        width: v_0d9f50 * v_a81a10 * 0.85,
        height: v_28d8d8 * v_4eb5d3 * 0.65,
        borderRadius: v_0d9f50 * v_a81a10 * 0.425,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraFaceGuideInner: {
        width: v_0d9f50 * v_a81a10 * 0.76,
        height: v_28d8d8 * v_4eb5d3 * 0.58,
        borderRadius: v_0d9f50 * v_a81a10 * 0.38,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    cameraShoulderGuide: {
        width: v_0d9f50 * v_a81a10,
        height: v_28d8d8 * v_4eb5d3 * 0.12,
        borderTopLeftRadius: v_0d9f50 * v_a81a10 * 0.5,
        borderTopRightRadius: v_0d9f50 * v_a81a10 * 0.5,
        borderWidth: 3,
        borderBottomWidth: 0,
        borderColor: '#FFFFFF',
        borderStyle: 'dashed',
        marginTop: -3,
    },
    cameraGuideText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingBottom: v_9b1a04.medium,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    cameraControls: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 50,
        paddingTop: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    cameraHintContainer: {
        alignItems: 'center',
        marginBottom: v_9b1a04.medium,
    },
    cameraHintText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: '#FFFFFF',
    },
    cameraButtonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    cameraGalleryButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraCaptureButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    cameraCaptureButtonDisabled: {
        opacity: 0.6,
    },
    cameraCaptureInner: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: v_1bfbd0.bluePrimary,
    },
    primaryButtonDisabled: {
        backgroundColor: v_1bfbd0.border,
        borderColor: v_1bfbd0.border,
    },
    primaryButtonDisabledText: {
        color: v_1bfbd0.secondaryText,
    },

    recommendedSection: {
        marginTop: v_9b1a04.large,
        marginBottom: v_9b1a04.medium,
    },
    recommendedHeader: {
        marginBottom: v_9b1a04.medium,
    },
    recommendedTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.small,
        marginBottom: 4,
    },
    recommendedSubtitle: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginLeft: 26, 
    },

    productSwiperContainer: {
        marginHorizontal: -v_9b1a04.large,
    },
    productSwiperContent: {
        paddingHorizontal: v_9b1a04.large,
    },
    productCardWrapper: {
        paddingRight: v_9b1a04.medium,
        paddingBottom: v_9b1a04.small,
    },
    productCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    productImageArea: {
        height: 160,
        backgroundColor: '#F9FAFB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: v_9b1a04.small,
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productImageZoomButton: {
        position: 'absolute',
        bottom: v_9b1a04.small,
        right: v_9b1a04.small,
        width: 32,
        height: 32,
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productInfoArea: {
        padding: v_9b1a04.large,
    },
    productBrand: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.semibold,
        color: '#9CA3AF',
        letterSpacing: 1,
        marginBottom: 4,
    },
    productName: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        lineHeight: 24,
        marginBottom: 4,
        letterSpacing: -0.5,
    },
    productDescription: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginBottom: v_9b1a04.medium,
    },
    productPriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: v_9b1a04.medium,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        marginBottom: v_9b1a04.medium,
    },
    productPriceLabel: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    productPrice: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
    },
    productCurrency: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.secondaryText,
    },
    productButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: v_1bfbd0.bluePrimary,
        paddingVertical: 14,
        borderRadius: 12,
    },
    productButtonText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: '#FFFFFF',
    },

    productPagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: v_9b1a04.large,
        gap: 8,
    },
    productPaginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E5E7EB',
    },
    productPaginationDotActive: {
        backgroundColor: v_1bfbd0.bluePrimary,
        width: 24,
    },

    imagePickerModalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePickerModalContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: v_9b1a04.large,
        width: v_0d9f50 - 48,
        alignItems: 'center',
    },
    imagePickerModalTitle: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.small,
    },
    imagePickerModalSubtitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        textAlign: 'center',
        marginBottom: v_9b1a04.large,
    },
    imagePickerModalButtons: {
        flexDirection: 'row',
        gap: v_9b1a04.large,
        marginBottom: v_9b1a04.large,
    },
    imagePickerModalButton: {
        alignItems: 'center',
        paddingVertical: v_9b1a04.medium,
        paddingHorizontal: v_9b1a04.xlarge,
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 12,
        minWidth: 100,
    },
    imagePickerModalButtonText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.bluePrimary,
        marginTop: v_9b1a04.small,
    },
    imagePickerModalCancelButton: {
        paddingVertical: v_9b1a04.medium,
        paddingHorizontal: v_9b1a04.xlarge,
    },
    imagePickerModalCancelText: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.bluePrimary,
    },

    productImageModalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    productImageModalContent: {
        width: '90%',
        maxWidth: 600,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    productImageModalHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 50,
        paddingHorizontal: 20,
        zIndex: 10,
        alignItems: 'flex-end',
    },
    productImageModalFooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 50,
        paddingHorizontal: 20,
        zIndex: 10,
        alignItems: 'center',
    },
    productImageModalCloseButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImageModalScrollView: {
        width: '100%',
        height: v_28d8d8 * 0.7,
        maxHeight: 600,
    },
    productImageModalScrollContent: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        minHeight: v_28d8d8 * 0.7,
    },
    productImageModalImage: {
        width: v_0d9f50 * 0.9,
        maxWidth: 600,
        height: v_28d8d8 * 0.7,
        maxHeight: 600,
    },
    productImageModalName: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: '#FFFFFF',
        marginTop: v_9b1a04.large,
        textAlign: 'center',
        paddingBottom: v_9b1a04.medium,
    },
});

export default v_852e99;
