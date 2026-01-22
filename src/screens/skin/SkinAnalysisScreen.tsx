import v_a3453e, { v_5ab095, v_de06a3, v_e662ae, v_c4deb2 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
    v_4623af,
    v_cf9c33,
    v_39a996,
    v_03e392,
    v_122070,
    v_09d0e5,
    v_700696,
    v_aa7413,
    v_da479e,
    v_bd64bf,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_78ceb7, v_d4f1cc } from 'mbgbsytfgyr';
import * as v_d05ab5 from 'khtmgrssvfqqjmzoc';
import * as v_3c288d from 'bxoplsnixpmvnirxbbkstg';
import * as v_52f726 from 'ajktjgmsymrmnjmliw';
import * as v_f38d26 from 'lbosdxgirxcherxohyvziam';
import * as v_cc38b7 from 'dnbozflmjypi';
import * as v_8682f1 from 'xfwnoqvryfjuilcdia';
import * as v_fba5a0 from 'hfxxehldoiokdq';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import v_8c5b32 from 'quibwhxmgaihxjwrkkiuwoxpqb';
import { v_772971 } from 'jmpfvteuuztnp';

const { width: v_0d9f50, height: v_28d8d8 } = v_700696.get('window');
const v_37c282 = v_0d9f50 - 80; 
import { v_729608, v_570c34, v_556baf, v_cb41de, v_8714fe } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04, v_ef658a, v_53f592, v_afa590 } from '../../constants';
import {
    v_6bbbb9,
    type v_146928,
    type v_ee7be6,
    type v_38cf4d,
} from '../../services/skinAnalysis';

type Props = v_432191<v_8ad91b, 'SkinAnalysis'>;

type AnalysisStep = 'capture' | 'camera' | 'settings' | 'analyzing' | 'result';
type AnalysisMode = 'sd' | 'hd';

interface FaceValidation {
    hasFace: boolean;
    isFrontal: boolean;
    faceCount: number;
}

const v_62eb5a = (v_b24339): string => {

    if (v_b24339.startsWith('hd_')) {
        return v_b24339.substring(3);
    }
    return v_b24339;
};

const v_6c3b8b = (v_8d41d7): { key: v_ee7be6; label: string }[] => [
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

const v_e803bf = (v_8d41d7): { key: v_38cf4d; label: string }[] => [
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
        price: '100',
        currency: 'MTHT',
        targetConcerns: ['moisture', 'hd_moisture'],
        image: require('../../../assets/images/product/yucod_01.png'),
    },
    {
        id: '2',
        brand: 'YUCOD',
        name: 'Sebum & Pore Control Serum',
        description: v_8d41d7('skin.products.product_2_description'),
        price: '100',
        currency: 'MTHT',
        targetConcerns: ['pore', 'oiliness', 'hd_pore', 'hd_oiliness'],
        image: require('../../../assets/images/product/yucod_02.png'),
    },
    {
        id: '3',
        brand: 'YUCOD',
        name: 'Calming Relief Serum',
        description: v_8d41d7('skin.products.product_3_description'),
        price: '100',
        currency: 'MTHT',
        targetConcerns: ['redness', 'acne', 'hd_redness', 'hd_acne'],
        image: require('../../../assets/images/product/yucod_03.png'),
    },
    {
        id: '4',
        brand: 'YUCOD',
        name: 'Luminous Tone-Up Serum',
        description: v_8d41d7('skin.products.product_4_description'),
        price: '100',
        currency: 'MTHT',
        targetConcerns: ['radiance', 'age_spot', 'hd_radiance', 'hd_age_spot'],
        image: require('../../../assets/images/product/yucod_04.png'),
    },
    {
        id: '5',
        brand: 'YUCOD',
        name: 'Ageless Firming Serum',
        description: v_8d41d7('skin.products.product_5_description'),
        price: '100',
        currency: 'MTHT',
        targetConcerns: ['wrinkle', 'firmness', 'hd_wrinkle', 'hd_firmness'],
        image: require('../../../assets/images/product/yucod_05.png'),
    },
    {
        id: '6',
        brand: 'YUCOD',
        name: 'Pore Refine & Lift Serum',
        description: v_8d41d7('skin.products.product_6_description'),
        price: '100',
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
    const v_bf6a8c = v_c7daf6.params?.previewResult;

    const [v_91943c, v_639227] = v_5ab095<AnalysisStep>(v_bf6a8c ? 'result' : 'capture');

    const [v_d1a6bb, v_1e66f0] = v_d4f1cc();
    const v_1a165b = v_e662ae<v_78ceb7>(null);
    const [v_ef2e54, v_968808] = v_5ab095(false);

    const [v_82f4af, v_60b86c] = v_5ab095<string | null>(null);
    const [v_07cd8d, v_ff4473] = v_5ab095<FaceValidation | null>(null);
    const [v_bbcab1, v_7db762] = v_5ab095(false);

    const [v_52f1d1, v_ee0f9a] = v_5ab095<AnalysisMode>('sd');
    const [v_76def3, v_bfbe67] = v_5ab095<Set<string>>(new Set());

    const [v_d02050, v_0942aa] = v_5ab095(false);
    const [v_d5fcde, v_e61e4f] = v_5ab095('');
    const [v_e521b9, v_6f6f79] = v_5ab095<any>(null);
    const [v_1744b9, v_5c59f6] = v_5ab095('');

    const [v_c5caed, v_e2f548] = v_5ab095(false);

    const [v_6e882f, v_6e04f8] = v_5ab095(0);

    const [v_c813f5, v_0d73a9] = v_5ab095<{ image: any; name: string } | null>(null);

    v_c4deb2(() => {
        if (v_bf6a8c) {
            v_6f6f79(v_3e09cd);
            v_639227('result');
        }
    }, [v_bf6a8c]);

    const v_c00289 = v_de06a3(async (v_ee89db): Promise<FaceValidation> => {
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
                return { hasFace: false, isFrontal: false, faceCount: 0 };
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

            return {
                hasFace: true,
                isFrontal: v_afddfc,
                faceCount: v_a51d09.length,
            };
        } catch (v_5e9bfe) {
            console.error('[FaceDetector] 얼굴 인식 오류:', v_5e9bfe);

            v_03e392.alert(
                v_8d41d7('skin.alerts.permission_required'),
                v_8d41d7('skin.alerts.analysis_error'),
                [{ text: v_8d41d7('common.confirm') }]
            );
            return { hasFace: false, isFrontal: false, faceCount: 0 };
        }
    }, []);

    const v_2e22e6 = v_de06a3(async (v_04e790) => {
        try {

            if (v_04e790 === 'camera') {
                const { status: v_d308b5 } = await v_d05ab5.requestCameraPermissionsAsync();
                if (v_d308b5 !== 'granted') {
                    v_03e392.alert(v_8d41d7('skin.alerts.permission_required'), v_8d41d7('skin.alerts.camera_permission'));
                    return;
                }
            } else {
                const { status: v_d308b5 } = await v_d05ab5.requestMediaLibraryPermissionsAsync();
                if (v_d308b5 !== 'granted') {
                    v_03e392.alert(v_8d41d7('skin.alerts.permission_required'), v_8d41d7('skin.alerts.gallery_permission'));
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

                v_60b86c(v_8f957a.uri);

                const v_123bae = await v_c00289(v_8f957a.uri);
                v_ff4473(v_123bae);
                v_7db762(false);
            }
        } catch (v_5e9bfe) {
            console.error('이미지 선택 오류:', v_5e9bfe);
            v_7db762(false);
            v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('skin.alerts.image_error'));
        }
    }, [v_52f1d1, v_c00289]);

    const v_46964a = v_de06a3(() => {
        v_e2f548(true);
    }, []);

    const v_2091c0 = v_de06a3(async () => {
        if (!v_d1a6bb?.granted) {
            const v_43c42e = await v_1e66f0();
            if (!v_43c42e.granted) {
                v_03e392.alert(v_8d41d7('skin.alerts.permission_required'), v_8d41d7('skin.alerts.camera_permission'));
                return;
            }
        }
        v_639227('camera');
    }, [v_d1a6bb, v_1e66f0]);

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

                console.log('[Camera] 원본 이미지로 얼굴 인식 시작...');
                const v_123bae = await v_c00289(v_2a5a61.uri);
                v_ff4473(v_123bae);

                const v_efb3f5 = v_2a5a61.width;
                const v_d199c9 = v_2a5a61.height;

                const v_a0dbba = 0.15;  
                const v_85270c = 0.7; 
                const v_f01cd4 = 0.05;  
                const v_6814d5 = 0.9;  

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

                try {
                    const { status: v_d308b5 } = await v_8682f1.requestPermissionsAsync();
                    if (v_d308b5 === 'granted') {
                        await v_8682f1.saveToLibraryAsync(v_8f957a.uri);
                        console.log('[Camera] 이미지가 갤러리에 저장되었습니다.');
                    }
                } catch (v_ba483b) {
                    console.warn('[Camera] 갤러리 저장 실패:', v_ba483b);

                }

                v_60b86c(v_8f957a.uri);
                v_7db762(false);
            }
        } catch (v_5e9bfe) {
            console.error('사진 촬영 오류:', v_5e9bfe);
            v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('skin.alerts.image_error'));
            v_7db762(false);
        } finally {
            v_968808(false);
        }
    }, [v_52f1d1, v_c00289, v_ef2e54]);

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
            v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_capture_required'));
            return;
        }

        if (!v_07cd8d?.hasFace) {
            v_03e392.alert(
                v_8d41d7('skin.capture.not_detected'),
                v_8d41d7('skin.capture.warning_no_face'),
                [{ text: v_8d41d7('common.confirm') }]
            );
            return;
        }

        if (!v_07cd8d?.isFrontal) {
            v_03e392.alert(
                v_8d41d7('skin.capture.not_frontal'),
                v_8d41d7('skin.capture.warning_not_frontal'),
                [{ text: v_8d41d7('common.confirm') }]
            );
            return;
        }

        const v_44eb1a = v_52f1d1 === 'hd' ? v_e803bf(v_8d41d7) : v_6c3b8b(v_8d41d7);
        v_bfbe67(new Set(v_44eb1a.map(v_3f4e2e => v_3f4e2e.key)));
        v_639227('settings');
    }, [v_82f4af, v_07cd8d, v_52f1d1, v_8d41d7]);

    const v_34776f = v_de06a3(async () => {
        if (!v_82f4af) {
            v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_image_required'));
            return;
        }

        if (v_76def3.size === 0) {
            v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('skin.settings.error_no_selection'));
            return;
        }

        if (!v_6bbbb9.hasApiKey()) {
            v_03e392.alert(
                v_8d41d7('common.error'),
                v_8d41d7('skin.alerts.api_key_error'),
            );
            return;
        }

        try {
            v_639227('analyzing');
            v_0942aa(true);
            v_e61e4f(v_8d41d7('skin.analyzing.preparing'));
            v_5c59f6('');
            v_6f6f79(null);

            const v_5dc227 = v_52f1d1 === 'hd' ? 2560 : 1920;
            console.log(`[Analysis] ${v_52f1d1.toUpperCase()} 모드로 이미지 리사이즈: ${v_5dc227}px`);

            const v_30be54 = await v_3c288d.manipulateAsync(
                v_82f4af,
                [{ resize: { width: v_5dc227 } }],
                { compress: 0.9, format: v_3c288d.SaveFormat.JPEG },
            );

            v_e61e4f(v_8d41d7('skin.settings.uploading_image'));

            const v_5b9682 = await v_f38d26.getInfoAsync(v_30be54.uri);
            if (!v_5b9682.exists) {
                throw new Error(v_8d41d7('skin.alerts.file_not_found'));
            }

            const v_a7bd9e = `skin_analysis_${v_52f1d1}_${Date.now()}.jpg`;
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
            const v_3e850e = Array.from(v_76def3) as v_146928[];

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
                mode: v_52f1d1,
                selectedConcerns: v_3e850e,
                taskId: v_927f76.data.task_id,
                result: v_43c42e,
                timestamp: new Date().toISOString(),
            });
            v_639227('result');

        } catch (v_5e9bfe) {
            console.error('피부 분석 오류:', v_5e9bfe);
            v_5c59f6(
                v_5e9bfe instanceof Error
                    ? v_5e9bfe.message
                    : v_8d41d7('skin.alerts.analysis_error')
            );
            v_639227('settings');
        } finally {
            v_0942aa(false);
        }
    }, [v_82f4af, v_76def3, v_52f1d1]);

    const v_a2f2ec = v_de06a3(() => {
        v_639227('capture');
        v_60b86c(null);
        v_ff4473(null);
        v_ee0f9a('sd');
        v_bfbe67(new Set());
        v_6f6f79(null);
        v_5c59f6('');
        v_e61e4f('');
    }, []);

    const v_8d018e = v_de06a3(async () => {
        if (!v_e521b9) {
            v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_no_result_to_save'));
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
                v_03e392.alert(v_8d41d7('common.success'), v_8d41d7('skin.settings.alert_save_success'));
            } else {
                v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_save_success_path', { path: v_a00264 }));
            }
        } catch (v_5e9bfe) {
            console.error('파일 저장 오류:', v_5e9bfe);
            v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('skin.alerts.analysis_error'));
        }
    }, [v_e521b9]);

    const v_dd0316 = v_de06a3((event: v_bd64bf<v_da479e>) => {
        const v_bfc931 = v_d48baf.nativeEvent.contentOffset.x;
        const v_a56041 = Math.round(v_bfc931 / v_37c282);
        v_6e04f8(v_a56041);
    }, []);

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
        v_03e392.alert(
            v_8d41d7('skin.result.view_product'),
            `${v_01bee9.brand}\n${v_01bee9.name}`
        );
    }, []);

    const v_3274ee = v_de06a3(async () => {
        if (!v_e521b9) {
            v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('skin.settings.alert_no_result_to_copy'));
            return;
        }

        try {
            const v_10f84e = JSON.stringify(v_e521b9, null, 2);
            await v_fba5a0.setStringAsync(v_10f84e);
            v_03e392.alert(v_8d41d7('common.success'), v_8d41d7('skin.settings.alert_copy_success'));
        } catch (v_5e9bfe) {
            console.error('클립보드 복사 오류:', v_5e9bfe);
            v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('skin.alerts.analysis_error'));
        }
    }, [v_e521b9]);

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

                {}
                <View style={v_d81136.cameraGuideOverlay}>
                    {}
                    <View style={v_d81136.cameraMaskTop} />

                    {}
                    <View style={v_d81136.cameraGuideArea}>
                        {}
                        <View style={v_d81136.cameraMaskSide} />

                        {}
                        <View style={v_d81136.cameraGuideFrame}>
                            {}
                            <View style={v_d81136.cameraFaceGuide}>
                                <View style={v_d81136.cameraFaceGuideInner} />
                            </View>
                            {}
                            <View style={v_d81136.cameraShoulderGuide} />

                            {}
                            <Text style={v_d81136.cameraGuideText}>
                                {v_8d41d7('skin.capture.subtitle')}
                            </Text>
                        </View>

                        {}
                        <View style={v_d81136.cameraMaskSide} />
                    </View>

                    {}
                    <View style={v_d81136.cameraMaskBottom} />
                </View>

                {}
                <View style={v_d81136.cameraControls}>
                    {}
                    <View style={v_d81136.cameraHintContainer}>
                        <Text style={v_d81136.cameraHintText}>
                            {v_8d41d7('skin.capture.subtitle')}
                        </Text>
                    </View>

                    {}
                    <View style={v_d81136.cameraButtonRow}>
                        <TouchableOpacity
                            style={v_d81136.cameraGalleryButton}
                            onPress={() => {
                                v_7f9a52();
                                v_2e22e6('gallery');
                            }}
                        >
                            <Ionicons name="images-outline" size={28} color="#FFFFFF" />
                        </TouchableOpacity>

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

                        <View style={{ width: 56 }} />
                    </View>
                </View>
            </CameraView>
        </View>
    );

    const v_33853a = () => (
        <>
            {}
            <View style={v_d81136.infoSection}>
                <Text style={v_d81136.stepIndicator}>{v_8d41d7('skin.step_prefix')} 1</Text>
                <Text style={v_d81136.title}>{v_8d41d7('skin.capture.title')}</Text>
                <Text style={v_d81136.subtitle}>
                    {v_8d41d7('skin.capture.subtitle')}
                </Text>
            </View>

            {}
            <TouchableOpacity
                style={v_d81136.imageUploadArea}
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
                            <Ionicons name="camera" size={20} color={v_1bfbd0.background} />
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
                        <ActivityIndicator size="large" color={v_1bfbd0.background} />
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
            {v_07cd8d && (!v_07cd8d.hasFace || !v_07cd8d.isFrontal) && (
                <View style={v_d81136.validationWarning}>
                    <Ionicons name="warning" size={20} color="#F57C00" />
                    <Text style={v_d81136.validationWarningText}>
                        {!v_07cd8d.hasFace
                            ? v_8d41d7('skin.capture.warning_no_face')
                            : v_8d41d7('skin.capture.warning_not_frontal')}
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
                    disabled={!v_82f4af || !v_07cd8d?.hasFace || !v_07cd8d?.isFrontal}
                    fullWidth
                />

                {}
                <TouchableOpacity
                    style={v_d81136.previewButton}
                    onPress={() => {
                        v_6f6f79(v_3e09cd);
                        v_639227('result');
                    }}
                >
                    <Ionicons name="eye-outline" size={16} color={v_1bfbd0.bluePrimary} />
                    <Text style={v_d81136.previewButtonText}>{v_8d41d7('skin.capture.preview_mode')}</Text>
                </TouchableOpacity>
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
                <View style={v_d81136.modeSection}>
                    <View style={v_d81136.sectionTitleRow}>
                        <Ionicons name="options-outline" size={18} color={v_1bfbd0.text} />
                        <Text style={v_d81136.sectionTitle}>{v_8d41d7('skin.settings.mode_title')}</Text>
                    </View>
                    <View style={v_d81136.modeButtons}>
                        <TouchableOpacity
                            style={[
                                v_d81136.modeButton,
                                v_52f1d1 === 'sd' && v_d81136.modeButtonActive,
                            ]}
                            onPress={() => {
                                v_ee0f9a('sd');
                                v_bfbe67(new Set(v_6c3b8b(v_8d41d7).map(v_3f4e2e => v_3f4e2e.key)));
                            }}
                        >
                            <Text style={[
                                v_d81136.modeButtonTitle,
                                v_52f1d1 === 'sd' && v_d81136.modeButtonTitleActive,
                            ]}>SD</Text>
                            <Text style={[
                                v_d81136.modeButtonDesc,
                                v_52f1d1 === 'sd' && v_d81136.modeButtonDescActive,
                            ]}>표준 화질</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                v_d81136.modeButton,
                                v_52f1d1 === 'hd' && v_d81136.modeButtonActive,
                            ]}
                            onPress={() => {
                                v_ee0f9a('hd');
                                v_bfbe67(new Set(v_e803bf(v_8d41d7).map(v_3f4e2e => v_3f4e2e.key)));
                            }}
                        >
                            <Text style={[
                                v_d81136.modeButtonTitle,
                                v_52f1d1 === 'hd' && v_d81136.modeButtonTitleActive,
                            ]}>HD</Text>
                            <Text style={[
                                v_d81136.modeButtonDesc,
                                v_52f1d1 === 'hd' && v_d81136.modeButtonDescActive,
                            ]}>고화질</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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
                                        v_599a41 && v_d81136.concernItemSelected,
                                    ]}
                                    onPress={() => v_c7594b(v_ccf527.key)}
                                >
                                    <View style={[
                                        v_d81136.checkbox,
                                        v_599a41 && v_d81136.checkboxSelected,
                                    ]}>
                                        {v_599a41 && (
                                            <Ionicons name="checkmark" size={14} color={v_1bfbd0.background} />
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
                            onPress={v_34776f}
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

    const v_058956 = v_de06a3(() => {
        if (!v_e521b9?.result?.results?.output) return null;

        const v_9ef443 = v_e521b9.result.results.output;
        let v_adfd7c = 0;
        let v_c2741d = '';
        const v_17b30f = [];

        v_9ef443.forEach((v_8c0b26) => {
            if (v_8c0b26.type === 'all' && v_8c0b26.score !== undefined) {
                v_adfd7c = Math.round(v_8c0b26.score);
            } else if (v_8c0b26.type === 'resize_image' && v_8c0b26.mask_urls?.[0]) {
                v_c2741d = v_8c0b26.mask_urls[0];
            } else if (v_8c0b26.ui_score !== undefined && v_8c0b26.type) {
                v_17b30f.push({
                    type: v_8c0b26.type,
                    score: v_8c0b26.ui_score,
                    label: v_9b034b(v_8c0b26.type, v_8d41d7),
                });
            }
        });

        v_17b30f.sort((v_779914, v_148ff6) => v_148ff6.score - v_779914.score);

        return { overallScore: v_adfd7c, resizeImageUrl: v_c2741d, concernScores: v_17b30f };
    }, [v_e521b9, v_8d41d7]);

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

        const { overallScore: v_adfd7c, resizeImageUrl: v_c2741d, concernScores: v_17b30f } = v_579c77;
        const v_54d0c6 = v_53f592(v_adfd7c);
        const v_858eb9 = v_4d19dd(v_adfd7c);

        const v_b5b523 = v_17b30f.slice(0, 3);
        const v_5f1433 = v_17b30f.slice(-3).reverse();

        return (
            <>
                {}
                <View style={v_d81136.resultHeaderSection}>
                    <View style={v_d81136.resultTitleRow}>
                        <Ionicons name="checkmark-circle" size={28} color="#4CAF50" />
                        <Text style={v_d81136.resultMainTitle}>{v_8d41d7('skin.result.title')}</Text>
                    </View>
                    <Text style={v_d81136.resultSubtitle}>
                        {v_8d41d7('skin.result.mode_info', { mode: v_e521b9.mode.toUpperCase(), count: v_17b30f.length })}
                    </Text>
                </View>

                {}
                <View style={v_d81136.overallScoreCard}>
                    {}
                    {(v_c2741d || v_82f4af) && (
                        <View style={v_d81136.resultFaceImageContainer}>
                            <Image
                                source={{ uri: v_c2741d || v_82f4af || '' }}
                                style={v_d81136.resultFaceImage}
                                resizeMode="cover"
                            />
                        </View>
                    )}

                    {}
                    <View style={v_d81136.overallScoreContent}>
                        <Text style={v_d81136.overallScoreLabel}>{v_8d41d7('skin.result.overall_score')}</Text>
                        <View style={v_d81136.overallScoreCircle}>
                            <View style={[
                                v_d81136.overallScoreRing,
                                { borderColor: v_54d0c6 }
                            ]}>
                                <Text style={[v_d81136.overallScoreNumber, { color: v_54d0c6 }]}>
                                    {v_adfd7c}
                                </Text>
                                <Text style={v_d81136.overallScoreUnit}>{v_8d41d7('skin.result.score_unit')}</Text>
                            </View>
                        </View>
                        <View style={[v_d81136.overallGradeBadge, { backgroundColor: v_54d0c6 + '20' }]}>
                            <Text style={[v_d81136.overallGradeText, { color: v_54d0c6 }]}>
                                {v_858eb9}
                            </Text>
                        </View>
                    </View>
                </View>

                {}
                <View style={v_d81136.highlightRow}>
                    {}
                    <View style={v_d81136.highlightColumn}>
                        <View style={v_d81136.highlightHeader}>
                            <Ionicons name="trophy-outline" size={16} color="#2563EB" />
                            <Text style={[v_d81136.highlightTitle, { color: '#2563EB' }]}>{v_8d41d7('skin.result.excellent_items')}</Text>
                        </View>
                        <View style={v_d81136.highlightList}>
                            {v_b5b523.map((v_ccf527, v_a56041) => (
                                <View key={v_ccf527.type} style={v_d81136.highlightItem}>
                                    <Text style={v_d81136.highlightRank}>{v_a56041 + 1}</Text>
                                    <Text style={v_d81136.highlightLabel} numberOfLines={1}>{v_ccf527.label}</Text>
                                    <Text style={[v_d81136.highlightScore, { color: '#2563EB' }]}>{v_ccf527.score}</Text>
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
                            <Text style={[v_d81136.highlightTitle, { color: '#DC2626' }]}>{v_8d41d7('skin.result.care_items')}</Text>
                        </View>
                        <View style={v_d81136.highlightList}>
                            {v_5f1433.map((v_ccf527, v_a56041) => (
                                <View key={v_ccf527.type} style={v_d81136.highlightItem}>
                                    <Text style={v_d81136.highlightRank}>{v_a56041 + 1}</Text>
                                    <Text style={v_d81136.highlightLabel} numberOfLines={1}>{v_ccf527.label}</Text>
                                    <Text style={[v_d81136.highlightScore, { color: '#DC2626' }]}>{v_ccf527.score}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {}
                {(() => {
                    const v_265b71 = v_744c99(v_5f1433);
                    return (
                        <View style={v_d81136.recommendedSection}>
                            <View style={v_d81136.recommendedHeader}>
                                <View style={v_d81136.recommendedTitleRow}>
                                    <Ionicons name="sparkles-outline" size={18} color="#D97706" />
                                    <Text style={v_d81136.resultSectionTitle}>{v_8d41d7('skin.result.recommend_title')}</Text>
                                </View>
                                <Text style={v_d81136.recommendedSubtitle}>
                                    {v_8d41d7('skin.result.recommend_subtitle')}
                                </Text>
                            </View>

                            {}
                            <View style={v_d81136.productSwiperContainer}>
                                <ScrollView
                                    horizontal
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={v_dd0316}
                                    scrollEventThrottle={16}
                                    decelerationRate="fast"
                                    snapToInterval={v_37c282}
                                    snapToAlignment="start"
                                    contentContainerStyle={v_d81136.productSwiperContent}
                                >
                                    {v_265b71.map((v_01bee9) => (
                                        <View key={v_01bee9.id} style={v_d81136.productCardWrapper}>
                                            <TouchableOpacity
                                                style={v_d81136.productCard}
                                                onPress={() => v_4f73b9(v_01bee9)}
                                                activeOpacity={0.9}
                                            >
                                                {}
                                                <Pressable
                                                    style={v_d81136.productImageArea}
                                                    onPress={(v_9e86fd) => {
                                                        v_9e86fd.stopPropagation();
                                                    }}
                                                >
                                                    <Image
                                                        source={v_01bee9.image}
                                                        style={v_d81136.productImage}
                                                        resizeMode="contain"
                                                    />
                                                    {}
                                                    <TouchableOpacity
                                                        style={v_d81136.productImageZoomButton}
                                                        onPress={(v_9e86fd) => {
                                                            v_9e86fd.stopPropagation();
                                                            v_0d73a9({
                                                                image: v_01bee9.image,
                                                                name: v_01bee9.name,
                                                            });
                                                        }}
                                                        accessibilityRole="button"
                                                        accessibilityLabel="이미지 확대"
                                                        accessibilityHint="탭하면 이미지를 크게 볼 수 있습니다"
                                                    >
                                                        <Ionicons name="expand-outline" size={20} color="#FFFFFF" />
                                                    </TouchableOpacity>
                                                </Pressable>

                                                {}
                                                <View style={v_d81136.productInfoArea}>
                                                    <Text style={v_d81136.productBrand}>{v_01bee9.brand}</Text>
                                                    <Text style={v_d81136.productName} numberOfLines={2}>
                                                        {v_01bee9.name}
                                                    </Text>
                                                    <Text style={v_d81136.productDescription} numberOfLines={1}>
                                                        {v_01bee9.description}
                                                    </Text>

                                                    <View style={v_d81136.productPriceRow}>
                                                        <Text style={v_d81136.productPriceLabel}>Price</Text>
                                                        <Text style={v_d81136.productPrice}>
                                                            {v_01bee9.price} <Text style={v_d81136.productCurrency}>{v_01bee9.currency}</Text>
                                                        </Text>
                                                    </View>

                                                    <TouchableOpacity
                                                        style={v_d81136.productButton}
                                                        onPress={() => v_4f73b9(v_01bee9)}
                                                        activeOpacity={0.8}
                                                    >
                                                        <Text style={v_d81136.productButtonText}>상품 보러가기</Text>
                                                        <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                                                    </TouchableOpacity>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>

                                {}
                                {v_265b71.length > 1 && (
                                    <View style={v_d81136.productPagination}>
                                        {v_265b71.map((v_37eab7, v_a56041) => (
                                            <View
                                                key={v_a56041}
                                                style={[
                                                    v_d81136.productPaginationDot,
                                                    v_a56041 === v_6e882f && v_d81136.productPaginationDotActive,
                                                ]}
                                            />
                                        ))}
                                    </View>
                                )}
                            </View>
                        </View>
                    );
                })()}

                {}
                <View style={v_d81136.resultSection}>
                    <View style={v_d81136.resultSectionHeader}>
                        <Ionicons name="grid-outline" size={18} color={v_1bfbd0.bluePrimary} />
                        <Text style={v_d81136.resultSectionTitle}>{v_8d41d7('skin.result.all_results')}</Text>
                    </View>
                    <View style={v_d81136.compactGrid}>
                        {v_17b30f.map((v_ccf527) => {
                            const v_5e5963 = v_53f592(v_ccf527.score);
                            return (
                                <View key={v_ccf527.type} style={v_d81136.compactGridItem}>
                                    <View style={v_d81136.compactGridContent}>
                                        <Text style={v_d81136.compactGridLabel} numberOfLines={1}>
                                            {v_8d41d7('skin.concerns.' + v_ccf527.type.replace('hd_', ''))}
                                        </Text>
                                        <Text style={[v_d81136.compactGridScore, { color: v_5e5963 }]}>
                                            {v_ccf527.score}
                                        </Text>
                                    </View>
                                    <View style={v_d81136.compactGridBar}>
                                        <View style={[
                                            v_d81136.compactGridBarFill,
                                            {
                                                width: `${v_ccf527.score}%`,
                                                backgroundColor: v_5e5963
                                            }
                                        ]} />
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>

                {}
                <View style={v_d81136.analysisInfoCard}>
                    <View style={v_d81136.analysisInfoRow}>
                        <Ionicons name="time-outline" size={16} color={v_1bfbd0.secondaryText} />
                        <Text style={v_d81136.analysisInfoText}>
                            {v_8d41d7('skin.result.analysis_date', { date: new Date(v_e521b9.timestamp).toLocaleString('ko-KR') })}
                        </Text>
                    </View>
                    <View style={v_d81136.analysisInfoRow}>
                        <Ionicons name="analytics-outline" size={16} color={v_1bfbd0.secondaryText} />
                        <Text style={v_d81136.analysisInfoText}>
                            Task ID: {v_e521b9.taskId?.slice(0, 20)}...
                        </Text>
                    </View>
                </View>

                {}
                <View style={v_d81136.buttonSection}>
                    <SecondaryButton
                        title={v_8d41d7('skin.result.btn_save')}
                        onPress={v_8d018e}
                        fullWidth
                    />
                    <PrimaryButton
                        title={v_8d41d7('skin.result.btn_new')}
                        onPress={v_a2f2ec}
                        fullWidth
                        style={{ marginTop: v_9b1a04.medium }}
                    />
                </View>
            </>
        );
    };

    if (v_91943c === 'camera') {
        return v_c8ac01();
    }

    return (
        <>
            <StatusBar style="dark" />
            <SafeView style={v_d81136.screen}>
                <Header
                    title={v_8d41d7('skin.title')}
                    showBackButton
                    onBackPress={() => {
                        if (v_91943c === 'capture') {
                            v_c65f5d.goBack();
                        } else if (v_91943c === 'settings') {
                            v_639227('capture');
                        } else if (v_91943c === 'result') {
                            v_a2f2ec();
                        }
                    }}
                />
                <SafeScrollView
                    contentContainerStyle={v_d81136.content}
                    showsVerticalScrollIndicator={false}
                    showBottomBackground={false}
                    disableBottomPadding={true}
                >
                    <View style={v_d81136.container}>
                        {v_91943c === 'capture' && v_33853a()}
                        {v_91943c === 'settings' && v_a5ba83()}
                        {v_91943c === 'analyzing' && v_5f339d()}
                        {v_91943c === 'result' && v_4ff022()}
                    </View>
                </SafeScrollView>
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
        </>
    );
};

const v_d81136 = v_472849.create({
    screen: v_a61db3.screen,
    content: {
        ...v_a61db3.content,
        minHeight: '100%',
    },
    container: {
        ...v_a61db3.container,
        gap: v_9b1a04.medium,
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
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: v_1bfbd0.border,
        borderStyle: 'dashed',
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
        color: v_1bfbd0.background,
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
        gap: 6,
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
        width: '48%',
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

    resultHeaderSection: {
        alignItems: 'center',
        marginBottom: v_9b1a04.medium,
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
        backgroundColor: v_1bfbd0.background,
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
        fontSize: 36,
        fontFamily: v_843035.bold,
    },
    overallScoreUnit: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginTop: -4,
    },
    overallGradeBadge: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
        marginTop: v_9b1a04.small,
    },
    overallGradeText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
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
        backgroundColor: v_1bfbd0.background,
        borderRadius: 16,
        marginTop: v_9b1a04.medium,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#F3F4F6',
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

    compactGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: v_1bfbd0.lightGray,
        borderRadius: 16,
        padding: v_9b1a04.small,
        gap: v_9b1a04.small,
    },
    compactGridItem: {
        width: '48%',
        backgroundColor: v_1bfbd0.background,
        borderRadius: 12,
        padding: v_9b1a04.medium,
    },
    compactGridContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    compactGridLabel: {
        flex: 1,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
        marginRight: 8,
    },
    compactGridScore: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.bold,
    },
    compactGridBar: {
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
        backgroundColor: v_1bfbd0.background,
        borderRadius: 12,
        padding: v_9b1a04.medium,
        marginBottom: v_9b1a04.small,
    },
    concernGridItemHorizontal: {
        backgroundColor: v_1bfbd0.background,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraMaskTop: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        height: v_28d8d8 * 0.7,
    },
    cameraGuideFrame: {
        width: v_0d9f50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraFaceGuide: {
        width: v_0d9f50 * 0.75,
        height: v_28d8d8 * 0.45,
        borderRadius: v_0d9f50 * 0.375,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraFaceGuideInner: {
        width: v_0d9f50 * 0.68,
        height: v_28d8d8 * 0.4,
        borderRadius: v_0d9f50 * 0.34,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    cameraShoulderGuide: {
        width: v_0d9f50 * 0.9,
        height: v_28d8d8 * 0.08,
        borderTopLeftRadius: v_0d9f50 * 0.45,
        borderTopRightRadius: v_0d9f50 * 0.45,
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
        marginTop: v_9b1a04.large,
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
        width: v_37c282,
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
