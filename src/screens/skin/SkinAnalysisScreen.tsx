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

const { width: v_0d9f50, height: v_28d8d8 } = v_700696.get('window');
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

const SKIN_CONCERNS_SD: { key: v_ee7be6; label: string }[] = [
    { key: 'acne', label: '여드름' },
    { key: 'dark_circle_v2', label: '다크서클' },
    { key: 'droopy_lower_eyelid', label: '처진 아랫눈꺼풀' },
    { key: 'droopy_upper_eyelid', label: '처진 윗눈꺼풀' },
    { key: 'eye_bag', label: '눈밑지방' },
    { key: 'firmness', label: '탄력' },
    { key: 'moisture', label: '수분' },
    { key: 'oiliness', label: '유분' },
    { key: 'pore', label: '모공' },
    { key: 'radiance', label: '광채' },
    { key: 'redness', label: '홍조' },
    { key: 'age_spot', label: '기미/잡티' },
    { key: 'texture', label: '피부결' },
    { key: 'wrinkle', label: '주름' },
];

const SKIN_CONCERNS_HD: { key: v_38cf4d; label: string }[] = [
    { key: 'hd_acne', label: '여드름' },
    { key: 'hd_dark_circle', label: '다크서클' },
    { key: 'hd_droopy_lower_eyelid', label: '처진 아랫눈꺼풀' },
    { key: 'hd_droopy_upper_eyelid', label: '처진 윗눈꺼풀' },
    { key: 'hd_eye_bag', label: '눈밑지방' },
    { key: 'hd_firmness', label: '탄력' },
    { key: 'hd_moisture', label: '수분' },
    { key: 'hd_oiliness', label: '유분' },
    { key: 'hd_pore', label: '모공' },
    { key: 'hd_radiance', label: '광채' },
    { key: 'hd_redness', label: '홍조' },
    { key: 'hd_age_spot', label: '기미/잡티' },
    { key: 'hd_texture', label: '피부결' },
    { key: 'hd_wrinkle', label: '주름' },
];

const v_f68226 = {
    acne: '여드름',
    dark_circle_v2: '다크서클',
    droopy_lower_eyelid: '처진 아랫눈꺼풀',
    droopy_upper_eyelid: '처진 윗눈꺼풀',
    eye_bag: '눈밑지방',
    firmness: '탄력',
    moisture: '수분',
    oiliness: '유분',
    pore: '모공',
    radiance: '광채',
    redness: '홍조',
    age_spot: '기미/잡티',
    texture: '피부결',
    wrinkle: '주름',

    hd_acne: '여드름',
    hd_dark_circle: '다크서클',
    hd_droopy_lower_eyelid: '처진 아랫눈꺼풀',
    hd_droopy_upper_eyelid: '처진 윗눈꺼풀',
    hd_eye_bag: '눈밑지방',
    hd_firmness: '탄력',
    hd_moisture: '수분',
    hd_oiliness: '유분',
    hd_pore: '모공',
    hd_radiance: '광채',
    hd_redness: '홍조',
    hd_age_spot: '기미/잡티',
    hd_texture: '피부결',
    hd_wrinkle: '주름',
};

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
                '얼굴 인식 실패',
                '얼굴을 인식할 수 없습니다. 다시 촬영해주세요.',
                [{ text: '확인' }]
            );
            return { hasFace: false, isFrontal: false, faceCount: 0 };
        }
    }, []);

    const v_2e22e6 = v_de06a3(async (v_04e790) => {
        try {

            if (v_04e790 === 'camera') {
                const { status: v_d308b5 } = await v_d05ab5.requestCameraPermissionsAsync();
                if (v_d308b5 !== 'granted') {
                    v_03e392.alert('권한 필요', '카메라 권한이 필요합니다.');
                    return;
                }
            } else {
                const { status: v_d308b5 } = await v_d05ab5.requestMediaLibraryPermissionsAsync();
                if (v_d308b5 !== 'granted') {
                    v_03e392.alert('권한 필요', '갤러리 접근 권한이 필요합니다.');
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
            v_03e392.alert('오류', '이미지를 선택하는 중 오류가 발생했습니다.');
        }
    }, [v_52f1d1, v_c00289]);

    const v_46964a = v_de06a3(() => {
        v_e2f548(true);
    }, []);

    const v_2091c0 = v_de06a3(async () => {
        if (!v_d1a6bb?.granted) {
            const v_43c42e = await v_1e66f0();
            if (!v_43c42e.granted) {
                v_03e392.alert('권한 필요', '카메라 사용 권한이 필요합니다.');
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
            v_03e392.alert('오류', '사진을 촬영하는 중 오류가 발생했습니다.');
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
        const v_44eb1a = v_52f1d1 === 'hd' ? v_7ca9bb : v_ecaa99;
        if (v_76def3.size === v_44eb1a.length) {
            v_bfbe67(new Set());
        } else {
            v_bfbe67(new Set(v_44eb1a.map(v_3f4e2e => v_3f4e2e.key)));
        }
    }, [v_52f1d1, v_76def3.size]);

    const v_fefb99 = v_de06a3(() => {
        if (!v_82f4af) {
            v_03e392.alert('알림', '먼저 사진을 촬영해주세요.');
            return;
        }

        if (!v_07cd8d?.hasFace) {
            v_03e392.alert(
                '얼굴 인식 실패',
                '얼굴이 인식되지 않았습니다.\n가이드에 맞춰 다시 촬영해주세요.',
                [{ text: '확인' }]
            );
            return;
        }

        if (!v_07cd8d?.isFrontal) {
            v_03e392.alert(
                '정면이 아닙니다',
                '정확한 분석을 위해 정면을 바라보고 다시 촬영해주세요.',
                [{ text: '확인' }]
            );
            return;
        }

        const v_44eb1a = v_52f1d1 === 'hd' ? v_7ca9bb : v_ecaa99;
        v_bfbe67(new Set(v_44eb1a.map(v_3f4e2e => v_3f4e2e.key)));
        v_639227('settings');
    }, [v_82f4af, v_07cd8d, v_52f1d1]);

    const v_34776f = v_de06a3(async () => {
        if (!v_82f4af) {
            v_03e392.alert('알림', '먼저 이미지를 선택해주세요.');
            return;
        }

        if (v_76def3.size === 0) {
            v_03e392.alert('알림', '최소 1개 이상의 분석 항목을 선택해주세요.');
            return;
        }

        if (!v_6bbbb9.hasApiKey()) {
            v_03e392.alert(
                'API 키 필요',
                'YouCam API 키가 설정되지 않았습니다. 환경 변수를 확인해주세요.',
            );
            return;
        }

        try {
            v_639227('analyzing');
            v_0942aa(true);
            v_e61e4f('이미지 준비 중...');
            v_5c59f6('');
            v_6f6f79(null);

            const v_5dc227 = v_52f1d1 === 'hd' ? 2560 : 1920;
            console.log(`[Analysis] ${v_52f1d1.toUpperCase()} 모드로 이미지 리사이즈: ${v_5dc227}px`);

            const v_30be54 = await v_3c288d.manipulateAsync(
                v_82f4af,
                [{ resize: { width: v_5dc227 } }],
                { compress: 0.9, format: v_3c288d.SaveFormat.JPEG },
            );

            v_e61e4f('이미지 업로드 중...');

            const v_5b9682 = await v_f38d26.getInfoAsync(v_30be54.uri);
            if (!v_5b9682.exists) {
                throw new Error('이미지 파일을 찾을 수 없습니다.');
            }

            const v_a7bd9e = `skin_analysis_${v_52f1d1}_${Date.now()}.jpg`;
            const v_349aae = v_5b9682.size || 0;

            console.log(`[Analysis] 파일 크기: ${(v_349aae / 1024 / 1024).toFixed(2)}MB`);

            const v_6535ab = await v_6bbbb9.createFile(v_a7bd9e, v_349aae, 'image/jpeg');

            if (v_6535ab.data.files.length === 0) {
                throw new Error('파일 생성에 실패했습니다.');
            }

            const v_206b93 = v_6535ab.data.files[0];
            const v_e8f579 = v_206b93.requests[0];

            v_e61e4f('파일 업로드 중...');
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
                throw new Error(`파일 업로드 실패: ${v_aea053.status}`)
            }

            v_e61e4f('피부 분석 요청 중...');
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
                    v_e61e4f(`분석 중... (${v_bc21cd}/${v_3d627c})`);
                },
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
                    : '분석 중 오류가 발생했습니다.'
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
            v_03e392.alert('알림', '저장할 분석 결과가 없습니다.');
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
                    dialogTitle: '피부 분석 결과 저장',
                    UTI: 'public.json',
                });
                v_03e392.alert('완료', '파일이 저장/공유되었습니다.');
            } else {
                v_03e392.alert('알림', `파일이 저장되었습니다.\n경로: ${v_a00264}`);
            }
        } catch (v_5e9bfe) {
            console.error('파일 저장 오류:', v_5e9bfe);
            v_03e392.alert('오류', '파일 저장 중 오류가 발생했습니다.');
        }
    }, [v_e521b9]);

    const v_3274ee = v_de06a3(async () => {
        if (!v_e521b9) {
            v_03e392.alert('알림', '복사할 분석 결과가 없습니다.');
            return;
        }

        try {
            const v_10f84e = JSON.stringify(v_e521b9, null, 2);
            await v_fba5a0.setStringAsync(v_10f84e);
            v_03e392.alert('완료', 'JSON 결과가 클립보드에 복사되었습니다.');
        } catch (v_5e9bfe) {
            console.error('클립보드 복사 오류:', v_5e9bfe);
            v_03e392.alert('오류', '클립보드 복사 중 오류가 발생했습니다.');
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
                                얼굴과 어깨를 맞춰주세요
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
                            정면을 바라보고 촬영 버튼을 눌러주세요
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
                <Text style={v_d81136.stepIndicator}>STEP 1</Text>
                <Text style={v_d81136.title}>얼굴 촬영</Text>
                <Text style={v_d81136.subtitle}>
                    가이드에 맞춰 정면 얼굴을 촬영해주세요.{'\n'}
                    얼굴과 어깨가 함께 보여야 합니다.
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
                                얼굴 사진 촬영
                            </Text>
                            <Text style={v_d81136.uploadHint}>
                                탭하여 카메라 또는 갤러리에서 선택
                            </Text>
                        </View>

                    </View>
                )}

                {v_bbcab1 && (
                    <View style={v_d81136.validatingOverlay}>
                        <ActivityIndicator size="large" color={v_1bfbd0.background} />
                        <Text style={v_d81136.validatingText}>얼굴 인식 중...</Text>
                    </View>
                )}
            </TouchableOpacity>

            {}
            {v_07cd8d && (
                <View style={v_d81136.validationSection}>
                    <View style={v_d81136.sectionTitleRow}>
                        <Ionicons name="clipboard-outline" size={18} color={v_1bfbd0.text} />
                        <Text style={v_d81136.validationTitle}>사진 검증 결과</Text>
                    </View>

                    <View style={v_d81136.validationItem}>
                        <View style={v_d81136.validationIcon}>
                            {v_07cd8d.hasFace ? (
                                <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
                            ) : (
                                <Ionicons name="close-circle" size={24} color="#F44336" />
                            )}
                        </View>
                        <Text style={v_d81136.validationLabel}>얼굴 인식</Text>
                        <Text style={[
                            v_d81136.validationStatus,
                            { color: v_07cd8d.hasFace ? '#4CAF50' : '#F44336' }
                        ]}>
                            {v_07cd8d.hasFace
                                ? `인식됨 (${v_07cd8d.faceCount}명)`
                                : '인식 실패'}
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
                        <Text style={v_d81136.validationLabel}>정면 촬영</Text>
                        <Text style={[
                            v_d81136.validationStatus,
                            { color: v_07cd8d.isFrontal ? '#4CAF50' : '#FF9800' }
                        ]}>
                            {v_07cd8d.isFrontal
                                ? '정면'
                                : '정면이 아닐 수 있음'}
                        </Text>
                    </View>
                </View>
            )}

            {}
            <View style={v_d81136.guideSection}>
                <View style={v_d81136.sectionTitleRow}>
                    <Ionicons name="camera-outline" size={18} color={v_1bfbd0.text} />
                    <Text style={v_d81136.guideTitle}>촬영 가이드</Text>
                </View>
                <View style={v_d81136.guideList}>
                    <Text style={v_d81136.guideItem}>• 가이드라인 안에 얼굴과 어깨를 맞춰주세요</Text>
                    <Text style={v_d81136.guideItem}>• 정면을 바라보고 촬영해주세요</Text>
                    <Text style={v_d81136.guideItem}>• 밝은 조명에서 촬영하면 정확도가 높아져요</Text>
                    <Text style={v_d81136.guideItem}>• 머리카락이 얼굴을 가리지 않게 해주세요</Text>
                </View>
            </View>

            {}
            {v_07cd8d && (!v_07cd8d.hasFace || !v_07cd8d.isFrontal) && (
                <View style={v_d81136.validationWarning}>
                    <Ionicons name="warning" size={20} color="#F57C00" />
                    <Text style={v_d81136.validationWarningText}>
                        {!v_07cd8d.hasFace
                            ? '얼굴이 인식되지 않았습니다. 다시 촬영해주세요.'
                            : '정면이 아닙니다. 정면을 바라보고 다시 촬영해주세요.'}
                    </Text>
                </View>
            )}

            {}
            <View style={v_d81136.buttonSection}>
                <PrimaryButton
                    title={
                        !v_82f4af
                            ? "사진을 촬영해주세요"
                            : !v_07cd8d?.hasFace
                                ? "얼굴 인식 필요"
                                : !v_07cd8d?.isFrontal
                                    ? "정면 촬영 필요"
                                    : "다음 단계로"
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
                    <Text style={v_d81136.previewButtonText}>결과 화면 미리보기 (개발용)</Text>
                </TouchableOpacity>
            </View>
        </>
    );

    const v_a5ba83 = () => {
        const v_44eb1a = v_52f1d1 === 'hd' ? v_7ca9bb : v_ecaa99;
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
                            <Text style={v_d81136.previewTitle}>촬영된 사진</Text>
                            {v_07cd8d && (
                                <View style={v_d81136.previewBadges}>
                                    <View style={[v_d81136.badge, { backgroundColor: '#E8F5E9' }]}>
                                        <Ionicons name="checkmark" size={14} color="#4CAF50" />
                                        <Text style={[v_d81136.badgeText, { color: '#4CAF50' }]}>
                                            얼굴 인식
                                        </Text>
                                    </View>
                                    {v_07cd8d.isFrontal && (
                                        <View style={[v_d81136.badge, { backgroundColor: '#E3F2FD' }]}>
                                            <Ionicons name="checkmark" size={14} color="#2196F3" />
                                            <Text style={[v_d81136.badgeText, { color: '#2196F3' }]}>
                                                정면
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
                        <Text style={v_d81136.sectionTitle}>분석 모드 선택</Text>
                    </View>
                    <View style={v_d81136.modeButtons}>
                        <TouchableOpacity
                            style={[
                                v_d81136.modeButton,
                                v_52f1d1 === 'sd' && v_d81136.modeButtonActive,
                            ]}
                            onPress={() => {
                                v_ee0f9a('sd');
                                v_bfbe67(new Set(v_ecaa99.map(v_3f4e2e => v_3f4e2e.key)));
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
                                v_bfbe67(new Set(v_7ca9bb.map(v_3f4e2e => v_3f4e2e.key)));
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
                        <Text style={v_d81136.sectionTitle}>🔍 분석 항목 선택</Text>
                        <TouchableOpacity onPress={v_f02aac}>
                            <Text style={v_d81136.selectAllText}>
                                {v_5476b4 ? '전체 해제' : '전체 선택'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={v_d81136.concernsSubtitle}>
                        {v_76def3.size}개 항목 선택됨
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
                            title="이전"
                            onPress={() => v_639227('capture')}
                            style={{ flex: 1, marginRight: 8 }}
                        />
                        <PrimaryButton
                            title="분석 시작"
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
            <Text style={v_d81136.analyzingTitle}>피부 분석 중...</Text>
            <Text style={v_d81136.analyzingText}>{v_d5fcde}</Text>
            <Text style={v_d81136.analyzingHint}>
                분석에는 약 30초~1분 정도 소요됩니다.
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
                    label: v_f68226[v_8c0b26.type] || v_8c0b26.type,
                });
            }
        });

        v_17b30f.sort((v_779914, v_148ff6) => v_148ff6.score - v_779914.score);

        return { overallScore: v_adfd7c, resizeImageUrl: v_c2741d, concernScores: v_17b30f };
    }, [v_e521b9]);

    const v_4d19dd = (v_740dd8): string => {
        if (v_740dd8 >= 95) return '최상';
        if (v_740dd8 >= 90) return '우수';
        if (v_740dd8 >= 85) return '양호';
        if (v_740dd8 >= 80) return '보통';
        if (v_740dd8 >= 70) return '주의';
        if (v_740dd8 >= 60) return '관리 필요';
        return '집중 관리';
    };

    const v_4ff022 = () => {
        const v_579c77 = v_058956();

        if (!v_579c77) {
            return (
                <View style={v_d81136.analyzingContainer}>
                    <Ionicons name="warning" size={48} color={v_1bfbd0.error} />
                    <Text style={v_d81136.analyzingTitle}>결과를 불러올 수 없습니다</Text>
                    <PrimaryButton
                        title="다시 시도"
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
                        <Text style={v_d81136.resultMainTitle}>피부 분석 완료</Text>
                    </View>
                    <Text style={v_d81136.resultSubtitle}>
                        {v_e521b9.mode.toUpperCase()} 모드 • {v_17b30f.length}개 항목 분석
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
                        <Text style={v_d81136.overallScoreLabel}>종합 피부 점수</Text>
                        <View style={v_d81136.overallScoreCircle}>
                            <View style={[
                                v_d81136.overallScoreRing,
                                { borderColor: v_54d0c6 }
                            ]}>
                                <Text style={[v_d81136.overallScoreNumber, { color: v_54d0c6 }]}>
                                    {v_adfd7c}
                                </Text>
                                <Text style={v_d81136.overallScoreUnit}>점</Text>
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
                <View style={v_d81136.resultSection}>
                    <View style={v_d81136.resultSectionHeader}>
                        <View style={[v_d81136.resultSectionIcon, { backgroundColor: '#DBEAFE' }]}>
                            <Ionicons name="trophy" size={18} color="#2563EB" />
                        </View>
                        <Text style={v_d81136.resultSectionTitle}>우수 항목</Text>
                    </View>
                    <View style={v_d81136.concernHighlightList}>
                        {v_b5b523.map((v_ccf527, v_a56041) => (
                            <View key={v_ccf527.type} style={v_d81136.concernHighlightItem}>
                                <View style={[v_d81136.concernRank, { backgroundColor: '#DBEAFE' }]}>
                                    <Text style={[v_d81136.concernRankText, { color: '#2563EB' }]}>{v_a56041 + 1}</Text>
                                </View>
                                <Text style={v_d81136.concernHighlightLabel}>{v_ccf527.label}</Text>
                                <View style={[
                                    v_d81136.concernHighlightScore,
                                    { backgroundColor: '#F0F9FF' }
                                ]}>
                                    <Text style={[
                                        v_d81136.concernHighlightScoreText,
                                        { color: '#2563EB' }
                                    ]}>
                                        {v_ccf527.score}점
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {}
                <View style={v_d81136.resultSection}>
                    <View style={v_d81136.resultSectionHeader}>
                        <View style={[v_d81136.resultSectionIcon, { backgroundColor: '#FEE2E2' }]}>
                            <Ionicons name="trending-down" size={18} color="#DC2626" />
                        </View>
                        <Text style={v_d81136.resultSectionTitle}>관리 필요 항목</Text>
                    </View>
                    <View style={v_d81136.concernHighlightList}>
                        {v_5f1433.map((v_ccf527, v_a56041) => (
                            <View key={v_ccf527.type} style={v_d81136.concernHighlightItem}>
                                <View style={[v_d81136.concernRank, { backgroundColor: '#FEE2E2' }]}>
                                    <Text style={[v_d81136.concernRankText, { color: '#DC2626' }]}>{v_a56041 + 1}</Text>
                                </View>
                                <Text style={v_d81136.concernHighlightLabel}>{v_ccf527.label}</Text>
                                <View style={[
                                    v_d81136.concernHighlightScore,
                                    { backgroundColor: '#FEF2F2' }
                                ]}>
                                    <Text style={[
                                        v_d81136.concernHighlightScoreText,
                                        { color: '#DC2626' }
                                    ]}>
                                        {v_ccf527.score}점
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {}
                <View style={v_d81136.resultSection}>
                    <View style={v_d81136.resultSectionHeader}>
                        <View style={[v_d81136.resultSectionIcon, { backgroundColor: v_1bfbd0.blurBlue }]}>
                            <Ionicons name="list" size={18} color={v_1bfbd0.bluePrimary} />
                        </View>
                        <Text style={v_d81136.resultSectionTitle}>전체 분석 결과</Text>
                    </View>
                    <View style={v_d81136.concernGridContainer}>
                        {v_17b30f.map((v_ccf527) => {
                            const v_5e5963 = v_53f592(v_ccf527.score);
                            const v_c288e9 = v_638095[v_ccf527.type] || 'ellipse-outline';

                            const v_7fd696 = v_ccf527.score >= 90 ? '#1E40AF' :
                                v_ccf527.score >= 80 ? '#166534' :
                                    v_ccf527.score >= 70 ? '#A16207' :
                                        '#9F1239';
                            return (
                                <View key={v_ccf527.type} style={v_d81136.concernGridItemHorizontal}>
                                    <View style={[
                                        v_d81136.concernGridIconSmall,
                                        { backgroundColor: v_5e5963 + '15' }
                                    ]}>
                                        <Ionicons name={v_c288e9 as any} size={18} color={v_5e5963} />
                                    </View>
                                    <View style={v_d81136.concernGridContentVertical}>
                                        <Text style={v_d81136.concernGridLabelFull}>
                                            {v_ccf527.label}
                                        </Text>
                                        <View style={v_d81136.concernGridProgressRow}>
                                            <View style={v_d81136.concernGridBarFlex}>
                                                <View style={[
                                                    v_d81136.concernGridScoreBarInline,
                                                    { backgroundColor: v_5e5963 + '30' }
                                                ]}>
                                                    <View style={[
                                                        v_d81136.concernGridScoreFill,
                                                        {
                                                            width: `${v_ccf527.score}%`,
                                                            backgroundColor: v_5e5963
                                                        }
                                                    ]} />
                                                </View>
                                            </View>
                                            <Text style={[v_d81136.concernGridScoreFixed, { color: v_7fd696 }]}>
                                                {v_ccf527.score}
                                            </Text>
                                        </View>
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
                            분석 일시: {new Date(v_e521b9.timestamp).toLocaleString('ko-KR')}
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
                        title="결과 저장 (JSON)"
                        onPress={v_8d018e}
                        fullWidth
                    />
                    <PrimaryButton
                        title="새로운 분석 시작"
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
                    title="피부분석"
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
                        <Text style={v_d81136.imagePickerModalTitle}>얼굴 촬영</Text>
                        <Text style={v_d81136.imagePickerModalSubtitle}>
                            피부 분석을 위해 정면 얼굴 사진을 촬영해주세요.
                        </Text>

                        <View style={v_d81136.imagePickerModalButtons}>
                            <TouchableOpacity
                                style={v_d81136.imagePickerModalButton}
                                onPress={v_eb4a5e}
                            >
                                <Ionicons name="camera-outline" size={24} color={v_1bfbd0.bluePrimary} />
                                <Text style={v_d81136.imagePickerModalButtonText}>카메라</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={v_d81136.imagePickerModalButton}
                                onPress={v_5c14ac}
                            >
                                <Ionicons name="images-outline" size={24} color={v_1bfbd0.bluePrimary} />
                                <Text style={v_d81136.imagePickerModalButtonText}>갤러리</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={v_d81136.imagePickerModalCancelButton}
                            onPress={() => v_e2f548(false)}
                        >
                            <Text style={v_d81136.imagePickerModalCancelText}>취소</Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </Modal>
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
        marginBottom: v_9b1a04.small,
    },
    resultSectionIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#DCFCE7',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: v_9b1a04.small,
    },
    resultSectionTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
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
        borderBottomLeftRadius: v_0d9f50 * 0.45,
        borderBottomRightRadius: v_0d9f50 * 0.45,
        borderWidth: 3,
        borderTopWidth: 0,
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
});

export default v_852e99;
