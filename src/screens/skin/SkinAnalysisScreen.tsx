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
import { v_25515d } from 'zvyjokvuouwvifyzks';

const { width: v_0d9f50, height: v_28d8d8 } = v_700696.get('window');
import { v_729608, v_570c34, v_556baf, v_cb41de, v_8714fe } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04, v_ef658a } from '../../constants';
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

const SkinAnalysisScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {

    const [v_91943c, v_639227] = v_5ab095<AnalysisStep>('capture');

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
        v_03e392.alert(
            '얼굴 촬영',
            '피부 분석을 위해 정면 얼굴 사진을 촬영해주세요.',
            [
                { text: '취소', style: 'cancel' },
                { text: '📷 카메라', onPress: v_2091c0 },
                { text: '🖼️ 갤러리', onPress: () => v_2e22e6('gallery') },
            ],
        );
    }, [v_2e22e6]);

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
                        <View style={v_d81136.uploadIconContainer}>
                            <Ionicons name="person-outline" size={60} color={v_1bfbd0.bluePrimary} />
                        </View>
                        <Text style={v_d81136.uploadText}>
                            얼굴 사진 촬영
                        </Text>
                        <Text style={v_d81136.uploadHint}>
                            탭하여 카메라 또는 갤러리에서 선택
                        </Text>
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
                                    <Text style={v_d81136.concernIcon}>{v_ccf527.icon}</Text>
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

    const v_4ff022 = () => (
        <>
            <View style={v_d81136.resultHeader}>
                <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
                <Text style={v_d81136.resultTitle}>분석 완료!</Text>
            </View>

            {}
            <View style={v_d81136.jsonSection}>
                <View style={v_d81136.sectionTitleRow}>
                    <Ionicons name="document-text-outline" size={16} color="#4EC9B0" />
                    <Text style={v_d81136.jsonTitle}>분석 결과 (JSON)</Text>
                    <TouchableOpacity 
                        style={v_d81136.copyIconButton}
                        onPress={v_3274ee}
                        accessibilityRole="button"
                        accessibilityLabel="JSON 복사"
                    >
                        <Ionicons name="copy-outline" size={18} color="#4EC9B0" />
                    </TouchableOpacity>
                </View>
                <ScrollView 
                    style={v_d81136.jsonScrollView}
                    horizontal={false}
                    nestedScrollEnabled={true}
                >
                    <Text style={v_d81136.jsonText} selectable>
                        {JSON.stringify(v_e521b9, null, 2)}
                    </Text>
                </ScrollView>
            </View>

            {}
            {v_e521b9?.result?.results?.url && (
                <View style={v_d81136.resultSummary}>
                    <View style={v_d81136.sectionTitleRow}>
                        <Ionicons name="bar-chart-outline" size={18} color={v_1bfbd0.text} />
                        <Text style={v_d81136.summaryTitle}>결과 요약</Text>
                    </View>
                    <Text style={v_d81136.summaryText}>
                        • 분석 모드: {v_e521b9.mode.toUpperCase()}
                    </Text>
                    <Text style={v_d81136.summaryText}>
                        • 분석 항목: {v_e521b9.selectedConcerns.length}개
                    </Text>
                    <Text style={v_d81136.summaryText}>
                        • 결과 파일: ZIP 형식
                    </Text>
                </View>
            )}

            {}
            <View style={v_d81136.buttonSection}>
                <View style={v_d81136.buttonRow}>
                    <SecondaryButton
                        title="JSON 복사"
                        onPress={v_3274ee}
                        style={{ flex: 1, marginRight: v_9b1a04.small }}
                    />
                    <SecondaryButton
                        title="JSON 저장"
                        onPress={v_8d018e}
                        style={{ flex: 1 }}
                    />
                </View>
                <PrimaryButton
                    title="새로운 분석 시작"
                    onPress={v_a2f2ec}
                    fullWidth
                    style={{ marginTop: v_9b1a04.medium }}
                />
            </View>
        </>
    );

    if (v_91943c === 'camera') {
        return v_c8ac01();
    }

    return (
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
            >
                <View style={v_d81136.container}>
                    {v_91943c === 'capture' && v_33853a()}
                    {v_91943c === 'settings' && v_a5ba83()}
                    {v_91943c === 'analyzing' && v_5f339d()}
                    {v_91943c === 'result' && v_4ff022()}
                </View>
            </SafeScrollView>
        </SafeView>
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
        aspectRatio: 3/4,
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: v_9b1a04.xlarge,
        position: 'relative',
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
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: v_1bfbd0.blurBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: v_9b1a04.small,
    },
    uploadText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.bluePrimary,
    },
    uploadHint: {
        fontSize: v_ef658a.medium,
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
    concernIcon: {
        fontSize: 16,
        marginRight: 6,
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

    resultHeader: {
        alignItems: 'center',
        paddingVertical: v_9b1a04.large,
    },
    resultTitle: {
        fontSize: 24,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginTop: v_9b1a04.medium,
    },
    jsonSection: {
        backgroundColor: '#1E1E1E',
        borderRadius: 16,
        padding: v_9b1a04.medium,
        maxHeight: 400,
    },
    jsonTitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: '#4EC9B0',
    },
    jsonScrollView: {
        maxHeight: 350,
    },
    jsonText: {
        fontSize: v_ef658a.small,
        fontFamily: 'monospace',
        color: '#D4D4D4',
        lineHeight: 20,
    },
    resultSummary: {
        backgroundColor: v_1bfbd0.lightBlue,
        borderRadius: 16,
        padding: v_9b1a04.medium,
        marginTop: v_9b1a04.medium,
    },
    summaryTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    summaryText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        lineHeight: 24,
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
});

export default v_852e99;
