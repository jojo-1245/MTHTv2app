import v_a3453e, { v_df9f57 } from 'bapkr';
import {
    v_aa7413,
    v_472849,
    v_19b633,
    v_3094a2,
    v_4623af,
    v_cf9c33,
    v_122070,
    v_79139e,
} from 'rcmrninabrnb';
import { v_25515d, v_f832ec } from 'zvyjokvuouwvifyzks';
import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04, v_d8cb4d } from '../../../constants';

type GroupStatus = '정상' | '위험';

export interface VitalSignInfoModalProps {

    visible: boolean;

    infoModalType: number | null;

    infoModalSectionId?: string | null;

    results: Record<number, { value: any; confidence?: any }>;

    onClose: () => void;

    infoContentMap: Record<number, { title: string; body: string; image?: any; images?: any[] }>;

    getStatusLabelForType: (typeNum: number, value: unknown) => GroupStatus | null;

    getStatusColor: (status: GroupStatus | null) => { text: string; background: string };

    formatValue: (value: any, type: number, t: any) => string;

    getVitalSignName: (type: number, t: any) => string;
}

const VitalSignInfoModal: v_a3453e.FC<VitalSignInfoModalProps> = ({
    visible: v_cf55be,
    infoModalType: v_9e9019,
    infoModalSectionId: v_d4a21d,
    results: v_a7f568,
    onClose: v_0890f8,
    infoContentMap: v_ec82c6,
    getStatusLabelForType: v_0aaeba,
    getStatusColor: v_463ca2,
    formatValue: v_a6fe82,
    getVitalSignName: v_50f905,
}) => {
    const { t: v_8d41d7, i18n: v_9c213b } = v_772971();

    const v_84a924 = () => {
        if (v_9e9019 === null) return null;
        const v_9390e8 = v_a7f568[v_9e9019];
        if (!v_9390e8) return null;
        const v_3b402b = v_9390e8.value;
        const v_72b4e2 = v_a6fe82(v_3b402b, v_9e9019, v_8d41d7);
        const v_d308b5 = v_0aaeba(v_9e9019, v_3b402b);
        const v_d72c04 = v_463ca2(v_d308b5);
        const v_1833e7 = v_50f905(v_9e9019, v_8d41d7);
        return { value: v_3b402b, formattedValue: v_72b4e2, status: v_d308b5, statusColors: v_d72c04, name: v_1833e7 };
    };

    const v_e005eb = v_df9f57(() => v_84a924(), [v_9e9019, v_a7f568, v_8d41d7]);
    const v_4594bf = v_9e9019 !== null ? v_ec82c6[v_9e9019] : null;

    return (
        <Modal
            visible={v_cf55be}
            transparent
            animationType="fade"
            onRequestClose={v_0890f8}
        >
            <View style={v_d81136.wellnessModalOverlay}>
                <View style={v_d81136.wellnessModal}>
                    <View style={v_d81136.wellnessModalHeader}>
                        <Text style={v_d81136.wellnessModalTitle}>
                            {v_d4a21d === 'respiratory' && v_9e9019 === v_e3e816.RESPIRATION_RATE
                                ? v_8d41d7('health_analysis.result.binah_respiratory')
                                : v_4594bf?.title}
                        </Text>
                        <TouchableOpacity
                            onPress={v_0890f8}
                            style={v_d81136.modalCloseButton}
                            accessibilityRole="button"
                            accessibilityLabel={v_8d41d7('common.close')}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        >
                            <Ionicons name="close" size={20} color={v_1bfbd0.secondaryText} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        style={v_d81136.wellnessModalBodyScroll}
                        contentContainerStyle={v_d81136.wellnessModalBodyContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {}
                        {v_e005eb && v_9e9019 && (
                            <View style={v_d81136.modalStatusSection}>
                                {}
                                {v_d4a21d === 'respiratory' && v_9e9019 === v_e3e816.RESPIRATION_RATE ? (
                                    <>
                                        {}
                                        <View style={[v_d81136.modalStatusIconCircle, { backgroundColor: v_e005eb.statusColors.background }]}>
                                            <Ionicons
                                                name={v_e005eb.status === '위험' ? 'sad-outline' : 'happy-outline'}
                                                size={32}
                                                color={v_e005eb.statusColors.text}
                                            />
                                        </View>
                                        {}
                                        <Text style={v_d81136.modalStatusTitle}>
                                            {v_e005eb.status === '정상'
                                                ? v_8d41d7('health_analysis.result.respiratory_headline_normal')
                                                : v_8d41d7('health_analysis.result.respiratory_headline_abnormal')}
                                        </Text>
                                        {}
                                        <View style={v_d81136.respiratoryToggleContainer}>
                                            <Text style={v_d81136.respiratoryToggleLabel}>
                                                {v_8d41d7('health_analysis.result.respiratory_modal_abnormal')}
                                            </Text>
                                            <Switch
                                                value={v_e005eb.status === '정상'}
                                                onValueChange={() => { }}
                                                trackColor={{ false: '#E0E0E0', true: '#4CAF50' }}
                                                thumbColor={v_e005eb.status === '정상' ? '#FFFFFF' : '#FFFFFF'}
                                                disabled={true}
                                            />
                                            <Text style={v_d81136.respiratoryToggleLabel}>
                                                {v_8d41d7('health_analysis.result.respiratory_modal_normal')}
                                            </Text>
                                        </View>
                                        {}
                                        <Text style={v_d81136.respiratoryDescription}>
                                            {v_8d41d7('health_analysis.result.respiratory_description')}
                                        </Text>
                                        {}
                                        <View style={v_d81136.respiratoryEmojiContainer}>
                                            <View style={v_d81136.respiratoryEmojiItem}>
                                                <View style={[v_d81136.respiratoryEmojiCircle, { backgroundColor: '#F44336' }]}>
                                                    <Ionicons name="sad-outline" size={40} color="#FFFFFF" />
                                                </View>
                                                <Text style={v_d81136.respiratoryEmojiLabel}>
                                                    {v_8d41d7('health_analysis.result.respiratory_modal_abnormal')}
                                                </Text>
                                            </View>
                                            <View style={v_d81136.respiratoryEmojiItem}>
                                                <View style={[v_d81136.respiratoryEmojiCircle, { backgroundColor: '#4CAF50' }]}>
                                                    <Ionicons name="happy-outline" size={40} color="#FFFFFF" />
                                                </View>
                                                <Text style={v_d81136.respiratoryEmojiLabel}>
                                                    {v_8d41d7('health_analysis.result.respiratory_modal_normal')}
                                                </Text>
                                            </View>
                                        </View>
                                    </>
                                ) : (
                                    <>
                                        {}
                                        <View style={[v_d81136.modalStatusIconCircle, { backgroundColor: v_e005eb.statusColors.background }]}>
                                            <Ionicons
                                                name={v_e005eb.status === '위험' ? 'sad-outline' : 'happy-outline'}
                                                size={32}
                                                color={v_e005eb.statusColors.text}
                                            />
                                        </View>
                                        {}
                                        <Text style={v_d81136.modalStatusTitle}>
                                            {v_e005eb.name}는 {v_e005eb.formattedValue} - {v_e005eb.status === '정상' ? v_8d41d7('health_analysis.result.normal') : v_8d41d7('health_analysis.result.risk')}
                                        </Text>
                                        {}
                                        {(() => {
                                            const v_996062 = [
                                                v_e3e816.PULSE_RATE,
                                                v_e3e816.RESPIRATION_RATE,
                                                v_e3e816.PRQ,
                                                v_e3e816.OXYGEN_SATURATION,
                                                v_e3e816.SDNN,
                                            ];

                                            if (v_9e9019 === v_e3e816.STRESS_LEVEL) {

                                                const v_590eda = typeof v_e005eb.value === 'number' ? v_e005eb.value : Number(v_e005eb.value);
                                                const v_cf086c = [
                                                    { min: 0, max: 0, icon: 'happy', iconLib: 'ionicons', color: '#4CAF50', label: '낮음' },
                                                    { min: 1, max: 1, icon: 'happy-outline', iconLib: 'ionicons', color: '#8BC34A', label: '정상' },
                                                    { min: 2, max: 2, icon: 'emoticon-neutral-outline', iconLib: 'material', color: '#FFC107', label: '가벼움' },
                                                    { min: 3, max: 4, icon: 'sad-outline', iconLib: 'ionicons', color: '#FF9800', label: '높음' },
                                                    { min: 5, max: 5, icon: 'sad', iconLib: 'ionicons', color: '#F44336', label: '매우 높음' },
                                                ];
                                                const v_182730 = v_cf086c.find(v_fbe91e => v_590eda >= v_fbe91e.min && v_590eda <= v_fbe91e.max) || v_cf086c[0];
                                                return (
                                                    <View style={v_d81136.stressLevelContainer}>
                                                        {v_cf086c.map((v_fbe91e, v_a56041) => {
                                                            const v_26dce6 = v_590eda >= v_fbe91e.min && v_590eda <= v_fbe91e.max;
                                                            return (
                                                                <View key={v_a56041} style={v_d81136.stressLevelItem}>
                                                                    <View style={[v_d81136.stressLevelIcon, v_26dce6 && { borderWidth: 2, borderColor: v_fbe91e.color }]}>
                                                                        {v_fbe91e.iconLib === 'material' ? (
                                                                            <MaterialCommunityIcons
                                                                                name={v_fbe91e.icon as any}
                                                                                size={32}
                                                                                color={v_26dce6 ? v_fbe91e.color : '#E0E0E0'}
                                                                            />
                                                                        ) : (
                                                                            <Ionicons
                                                                                name={v_fbe91e.icon as any}
                                                                                size={32}
                                                                                color={v_26dce6 ? v_fbe91e.color : '#E0E0E0'}
                                                                            />
                                                                        )}
                                                                    </View>
                                                                    <Text style={[v_d81136.stressLevelLabel, v_26dce6 && { color: v_fbe91e.color, fontFamily: v_843035.semibold }]}>
                                                                        {v_fbe91e.label}
                                                                    </Text>
                                                                </View>
                                                            );
                                                        })}
                                                    </View>
                                                );
                                            } else if (v_996062.includes(v_9e9019)) {

                                                const v_9740cd = v_a7f568[v_9e9019];
                                                let v_549ed3 = 0;

                                                if (v_9740cd && v_9740cd.value !== undefined && v_9740cd.value !== null) {
                                                    if (typeof v_9740cd.value === 'number') {
                                                        v_549ed3 = v_9740cd.value;
                                                    } else if (typeof v_9740cd.value === 'string') {
                                                        v_549ed3 = parseFloat(v_9740cd.value);
                                                    } else {
                                                        v_549ed3 = Number(v_9740cd.value);
                                                    }
                                                }

                                                if (isNaN(v_549ed3) || v_549ed3 === 0) {
                                                    if (v_e005eb && v_e005eb.value !== undefined && v_e005eb.value !== null) {
                                                        if (typeof v_e005eb.value === 'number') {
                                                            v_549ed3 = v_e005eb.value;
                                                        } else if (typeof v_e005eb.value === 'string') {
                                                            v_549ed3 = parseFloat(v_e005eb.value);
                                                        } else {
                                                            v_549ed3 = Number(v_e005eb.value);
                                                        }
                                                    }
                                                }

                                                if (isNaN(v_549ed3) && v_e005eb && v_e005eb.formattedValue) {
                                                    const v_a63110 = v_e005eb.formattedValue.match(/[\d.]+/);
                                                    if (v_a63110) {
                                                        v_549ed3 = parseFloat(v_a63110[0]);
                                                    }
                                                }

                                                if (isNaN(v_549ed3)) {
                                                    v_549ed3 = 0;
                                                }

                                                let v_43e24b = 0, v_d2c6bf = 100, v_362579 = 0, v_ba4c5f = 100, v_80cae9 = '';
                                                let v_0f5cba = false;
                                                let v_022965 = 0, v_c9ee7b = 0;

                                                if (v_9e9019 === v_e3e816.PULSE_RATE) {
                                                    v_43e24b = 40; v_d2c6bf = 240; v_362579 = 60; v_ba4c5f = 100; v_80cae9 = 'bpm';
                                                    v_0f5cba = true;
                                                    v_022965 = 60; 
                                                    v_c9ee7b = 100; 
                                                } else if (v_9e9019 === v_e3e816.RESPIRATION_RATE) {
                                                    v_43e24b = 6; v_d2c6bf = 40; v_362579 = 12; v_ba4c5f = 20; v_80cae9 = 'brpm';
                                                    v_0f5cba = true;
                                                    v_022965 = 12; 
                                                    v_c9ee7b = 20; 
                                                } else if (v_9e9019 === v_e3e816.PRQ) {
                                                    v_43e24b = 2; v_d2c6bf = 8; v_362579 = 3; v_ba4c5f = 5; v_80cae9 = '';
                                                    v_0f5cba = true;
                                                    v_022965 = 4; 
                                                    v_c9ee7b = 5; 
                                                } else if (v_9e9019 === v_e3e816.OXYGEN_SATURATION) {
                                                    v_43e24b = 90; v_d2c6bf = 100; v_362579 = 95; v_ba4c5f = 100; v_80cae9 = '%';
                                                } else if (v_9e9019 === v_e3e816.SDNN) {
                                                    v_43e24b = 10; v_d2c6bf = 100; v_362579 = 50; v_ba4c5f = 100; v_80cae9 = 'ms';
                                                }

                                                const v_7aed98 = ((v_362579 - v_43e24b) / (v_d2c6bf - v_43e24b)) * 100;
                                                const v_40639b = ((v_ba4c5f - v_43e24b) / (v_d2c6bf - v_43e24b)) * 100;

                                                if (v_0f5cba && (v_9e9019 === v_e3e816.PULSE_RATE || v_9e9019 === v_e3e816.RESPIRATION_RATE || v_9e9019 === v_e3e816.PRQ)) {

                                                    const v_331246 = 100 / 3;

                                                    let v_0645af = 0;

                                                    if (v_549ed3 <= v_022965) {

                                                        const v_9c3ff4 = 0;
                                                        const v_e09284 = v_022965 - v_43e24b;
                                                        const v_f7429e = (v_549ed3 - v_43e24b) / v_e09284;
                                                        v_0645af = v_9c3ff4 + (v_f7429e * v_331246);
                                                    } else if (v_549ed3 <= v_c9ee7b) {

                                                        const v_9c3ff4 = v_331246; 
                                                        const v_e09284 = v_c9ee7b - v_022965;
                                                        const v_f7429e = (v_549ed3 - v_022965) / v_e09284;
                                                        v_0645af = v_9c3ff4 + (v_f7429e * v_331246);
                                                    } else {

                                                        const v_9c3ff4 = v_331246 * 2; 
                                                        const v_e09284 = v_d2c6bf - v_c9ee7b;
                                                        const v_f7429e = (v_549ed3 - v_c9ee7b) / v_e09284;
                                                        v_0645af = v_9c3ff4 + (v_f7429e * v_331246);
                                                    }

                                                    v_0645af = Math.max(0, Math.min(100, v_0645af));

                                                    let v_e001fc = '#FFC107'; 
                                                    let v_6f0c12 = '#4CAF50'; 
                                                    let v_62b932 = '#FF9800'; 

                                                    if (v_9e9019 === v_e3e816.PULSE_RATE) {
                                                        v_e001fc = '#FFC107'; 
                                                        v_6f0c12 = '#4CAF50'; 
                                                        v_62b932 = '#F44336'; 
                                                    } else if (v_9e9019 === v_e3e816.PRQ) {
                                                        v_e001fc = '#FF9800'; 
                                                        v_6f0c12 = '#4CAF50'; 
                                                        v_62b932 = '#E91E63'; 
                                                    }

                                                    if (v_9e9019 === v_e3e816.PULSE_RATE || v_9e9019 === v_e3e816.RESPIRATION_RATE || v_9e9019 === v_e3e816.PRQ) {
                                                        const v_823608 = v_9e9019 === v_e3e816.PULSE_RATE ? '심박수' : v_9e9019 === v_e3e816.RESPIRATION_RATE ? '호흡수' : 'PRQ';
                                                        console.log(`[${v_823608} 그래프] numValue:`, v_549ed3, 'segment1End:', v_022965, 'segment2End:', v_c9ee7b, 'indicatorPercentage:', v_0645af);
                                                    }

                                                    return (
                                                        <View style={v_d81136.graphBarContainer}>
                                                            <View style={v_d81136.graphBar}>
                                                                {}
                                                                <View
                                                                    style={[
                                                                        v_d81136.graphBarSegment,
                                                                        {
                                                                            left: '0%',
                                                                            width: `${v_331246}%`,
                                                                            backgroundColor: v_e001fc,
                                                                        }
                                                                    ]}
                                                                />
                                                                {}
                                                                <View
                                                                    style={[
                                                                        v_d81136.graphBarSegment,
                                                                        {
                                                                            left: `${v_331246}%`,
                                                                            width: `${v_331246}%`,
                                                                            backgroundColor: v_6f0c12,
                                                                        }
                                                                    ]}
                                                                />
                                                                {}
                                                                <View
                                                                    style={[
                                                                        v_d81136.graphBarSegment,
                                                                        {
                                                                            left: `${v_331246 * 2}%`,
                                                                            width: `${v_331246}%`,
                                                                            backgroundColor: v_62b932,
                                                                        }
                                                                    ]}
                                                                />
                                                                {}
                                                                <View
                                                                    style={[
                                                                        v_d81136.graphBarIndicator,
                                                                        { left: `${v_0645af}%` }
                                                                    ]}
                                                                />
                                                            </View>
                                                            <View style={v_d81136.graphBarLabels}>
                                                                {v_9e9019 === v_e3e816.PRQ ? (

                                                                    <>
                                                                        <Text style={v_d81136.graphBarLabel}></Text>
                                                                        <Text style={v_d81136.graphBarLabel}>{v_022965}{v_80cae9}</Text>
                                                                        <Text style={v_d81136.graphBarLabel}>{v_c9ee7b}{v_80cae9}</Text>
                                                                        <Text style={v_d81136.graphBarLabel}></Text>
                                                                    </>
                                                                ) : (

                                                                    <>
                                                                        <Text style={v_d81136.graphBarLabel}>{v_43e24b}{v_80cae9}</Text>
                                                                        <Text style={v_d81136.graphBarLabel}>{v_022965}{v_80cae9}</Text>
                                                                        <Text style={v_d81136.graphBarLabel}>{v_c9ee7b}{v_80cae9}</Text>
                                                                        <Text style={v_d81136.graphBarLabel}>{v_d2c6bf}{v_80cae9}</Text>
                                                                    </>
                                                                )}
                                                            </View>
                                                        </View>
                                                    );
                                                }

                                                const v_0aabe4 = Math.max(0, Math.min(100, ((v_549ed3 - v_43e24b) / (v_d2c6bf - v_43e24b)) * 100));

                                                return (
                                                    <View style={v_d81136.graphBarContainer}>
                                                        <View style={v_d81136.graphBar}>
                                                            <View style={v_d81136.graphBarBackground} />
                                                            <View
                                                                style={[
                                                                    v_d81136.graphBarNormalRange,
                                                                    {
                                                                        left: `${v_7aed98}%`,
                                                                        width: `${v_40639b - v_7aed98}%`
                                                                    }
                                                                ]}
                                                            />
                                                            <View
                                                                style={[
                                                                    v_d81136.graphBarIndicator,
                                                                    { left: `${Math.max(0, Math.min(100, v_0aabe4))}%` }
                                                                ]}
                                                            />
                                                        </View>
                                                        <View style={v_d81136.graphBarLabels}>
                                                            <Text style={v_d81136.graphBarLabel}>{v_43e24b}{v_80cae9}</Text>
                                                            <Text style={v_d81136.graphBarLabel}>{v_362579}{v_80cae9}</Text>
                                                            <Text style={v_d81136.graphBarLabel}>{v_ba4c5f}{v_80cae9}</Text>
                                                            <Text style={v_d81136.graphBarLabel}>{v_d2c6bf}{v_80cae9}</Text>
                                                        </View>
                                                    </View>
                                                );
                                            }
                                            return null;
                                        })()}
                                    </>
                                )}
                            </View>
                        )}
                        {}
                        {v_d4a21d !== 'respiratory' && (() => {
                            if (!v_4594bf) {
                                return null;
                            }
                            const v_706e98 = v_4594bf.images
                                ? v_4594bf.images
                                : v_4594bf.image
                                    ? [v_4594bf.image]
                                    : [];
                            const v_39f39e = v_4594bf.body
                                ? v_4594bf.body.split('\n\n').filter(Boolean)
                                : [];

                            if (
                                v_9e9019 === v_e3e816.STRESS_LEVEL &&
                                v_706e98.length === 2
                            ) {
                                return (
                                    <View style={v_d81136.infoModalBodyStack}>
                                        {v_39f39e.map((v_d64a40, v_a56041) => (
                                            <View
                                                key={`info-paragraph-${v_a56041}`}
                                                style={v_d81136.infoModalParagraphBlock}
                                            >
                                                <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                                                {}
                                                {v_a56041 === 0 && v_706e98[0] ? (
                                                    <Image
                                                        source={v_706e98[0]}
                                                        style={v_d81136.wellnessExampleImage}
                                                        resizeMode="contain"
                                                    />
                                                ) : null}
                                                {}
                                                {v_a56041 === 1 && v_706e98[1] ? (
                                                    <Image
                                                        source={v_706e98[1]}
                                                        style={v_d81136.wellnessExampleImage}
                                                        resizeMode="contain"
                                                    />
                                                ) : null}
                                            </View>
                                        ))}
                                    </View>
                                );
                            }

                            const v_d8f6f6 =
                                v_706e98.length > 0 && v_706e98.length === v_39f39e.length - 1;
                            if (v_d8f6f6) {
                                return (
                                    <View style={v_d81136.infoModalBodyStack}>
                                        {v_39f39e.map((v_d64a40, v_a56041) => (
                                            <View key={`info-paragraph-${v_a56041}`} style={v_d81136.infoModalParagraphBlock}>
                                                <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                                                {v_706e98[v_a56041] ? (
                                                    <Image
                                                        source={v_706e98[v_a56041]}
                                                        style={v_d81136.wellnessExampleImage}
                                                        resizeMode="contain"
                                                    />
                                                ) : null}
                                            </View>
                                        ))}
                                    </View>
                                );
                            }

                            if (
                                v_9e9019 === v_e3e816.OXYGEN_SATURATION &&
                                v_706e98.length > 0
                            ) {
                                const v_39416f = v_9c213b.language?.startsWith('ko');
                                const v_d6be1a = v_9c213b.language?.startsWith('en');
                                const v_d660f2 = v_9c213b.language?.startsWith('id');

                                let v_1f890f = -1;
                                if (v_39416f) {
                                    v_1f890f = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('저산소혈증'),
                                    );
                                } else if (v_d6be1a) {
                                    v_1f890f = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('hypoxemia') || v_e2a85c.includes('Hypoxemia'),
                                    );
                                } else if (v_d660f2) {
                                    v_1f890f = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('hipoksemia') || v_e2a85c.includes('Hipoksemia'),
                                    );
                                }

                                if (v_1f890f > 0) {
                                    return (
                                        <View style={v_d81136.infoModalBodyStack}>
                                            {v_39f39e.map((v_d64a40, v_a56041) => (
                                                <View
                                                    key={`info-paragraph-${v_a56041}`}
                                                    style={v_d81136.infoModalParagraphBlock}
                                                >
                                                    <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                                                    {v_a56041 === v_1f890f - 1 && v_706e98[0] ? (
                                                        <Image
                                                            source={v_706e98[0]}
                                                            style={v_d81136.wellnessExampleImage}
                                                            resizeMode="contain"
                                                        />
                                                    ) : null}
                                                </View>
                                            ))}
                                        </View>
                                    );
                                }
                            }

                            if (
                                v_9e9019 === v_e3e816.BLOOD_PRESSURE &&
                                v_706e98.length > 0 &&
                                v_39f39e.length > 1
                            ) {
                                return (
                                    <View style={v_d81136.infoModalBodyStack}>
                                        {v_39f39e.map((v_d64a40, v_a56041) => (
                                            <View
                                                key={`info-paragraph-${v_a56041}`}
                                                style={v_d81136.infoModalParagraphBlock}
                                            >
                                                <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                                                {v_a56041 === 0 && v_706e98[0] ? (
                                                    <Image
                                                        source={v_706e98[0]}
                                                        style={v_d81136.wellnessExampleImage}
                                                        resizeMode="contain"
                                                    />
                                                ) : null}
                                            </View>
                                        ))}
                                    </View>
                                );
                            }

                            if (
                                v_9e9019 === v_e3e816.PULSE_RATE &&
                                v_706e98.length > 0
                            ) {
                                const v_39416f = v_9c213b.language?.startsWith('ko');
                                const v_d6be1a = v_9c213b.language?.startsWith('en');
                                const v_d660f2 = v_9c213b.language?.startsWith('id');

                                let v_c3488c = -1;
                                if (v_39416f) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('심장은 온몸에') || v_e2a85c.includes('심장은'),
                                    );
                                } else if (v_d6be1a) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('Think of the heart') || v_e2a85c.includes('heart as a pump'),
                                    );
                                } else if (v_d660f2) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('Anggap jantung sebagai') || v_e2a85c.includes('jantung sebagai pompa'),
                                    );
                                }

                                if (v_c3488c > 0) {
                                    return (
                                        <View style={v_d81136.infoModalBodyStack}>
                                            {v_39f39e.map((v_d64a40, v_a56041) => (
                                                <View
                                                    key={`info-paragraph-${v_a56041}`}
                                                    style={v_d81136.infoModalParagraphBlock}
                                                >
                                                    <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                                                    {v_a56041 === v_c3488c - 1 && v_706e98[0] ? (
                                                        <Image
                                                            source={v_706e98[0]}
                                                            style={v_d81136.wellnessExampleImage}
                                                            resizeMode="contain"
                                                        />
                                                    ) : null}
                                                </View>
                                            ))}
                                        </View>
                                    );
                                }
                            }

                            if (
                                v_9e9019 === v_e3e816.RESPIRATION_RATE &&
                                v_706e98.length > 0
                            ) {
                                const v_39416f = v_9c213b.language?.startsWith('ko');
                                const v_d6be1a = v_9c213b.language?.startsWith('en');
                                const v_d660f2 = v_9c213b.language?.startsWith('id');

                                let v_c3488c = -1;
                                if (v_39416f) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('숨을 들이실 때') || v_e2a85c.includes('숨을'),
                                    );
                                } else if (v_d6be1a) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('When you inhale') || v_e2a85c.includes('you inhale'),
                                    );
                                } else if (v_d660f2) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('Saat Anda menghirup') || v_e2a85c.includes('menghirup'),
                                    );
                                }

                                if (v_c3488c > 0) {
                                    return (
                                        <View style={v_d81136.infoModalBodyStack}>
                                            {v_39f39e.map((v_d64a40, v_a56041) => (
                                                <View
                                                    key={`info-paragraph-${v_a56041}`}
                                                    style={v_d81136.infoModalParagraphBlock}
                                                >
                                                    <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                                                    {v_a56041 === v_c3488c - 1 && v_706e98[0] ? (
                                                        <Image
                                                            source={v_706e98[0]}
                                                            style={v_d81136.wellnessExampleImage}
                                                            resizeMode="contain"
                                                        />
                                                    ) : null}
                                                </View>
                                            ))}
                                        </View>
                                    );
                                }
                            }

                            if (
                                v_9e9019 === v_e3e816.PRQ &&
                                v_706e98.length > 0
                            ) {
                                const v_39416f = v_9c213b.language?.startsWith('ko');
                                const v_d6be1a = v_9c213b.language?.startsWith('en');
                                const v_d660f2 = v_9c213b.language?.startsWith('id');

                                let v_c3488c = -1;
                                if (v_39416f) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('PRQ(맥박-호흡 비율)은') || v_e2a85c.includes('PRQ(맥박'),
                                    );
                                } else if (v_d6be1a) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('PRQ (pulse rate-respiration rate ratio)') || v_e2a85c.includes('pulse rate-respiration rate ratio'),
                                    );
                                } else if (v_d660f2) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('PRQ (rasio denyut nadi-laju pernapasan)') || v_e2a85c.includes('menunjukkan seberapa efisien jantung dan paru-paru'),
                                    );
                                }

                                if (v_c3488c > 0) {
                                    return (
                                        <View style={v_d81136.infoModalBodyStack}>
                                            {v_39f39e.map((v_d64a40, v_a56041) => (
                                                <View
                                                    key={`info-paragraph-${v_a56041}`}
                                                    style={v_d81136.infoModalParagraphBlock}
                                                >
                                                    <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                                                    {v_a56041 === v_c3488c - 1 && v_706e98[0] ? (
                                                        <Image
                                                            source={v_706e98[0]}
                                                            style={v_d81136.wellnessExampleImage}
                                                            resizeMode="contain"
                                                        />
                                                    ) : null}
                                                </View>
                                            ))}
                                        </View>
                                    );
                                }
                            }

                            if (
                                v_9e9019 === v_e3e816.SDNN &&
                                v_706e98.length > 0
                            ) {
                                const v_39416f = v_9c213b.language?.startsWith('ko');
                                const v_d6be1a = v_9c213b.language?.startsWith('en');
                                const v_d660f2 = v_9c213b.language?.startsWith('id');

                                let v_c3488c = -1;
                                if (v_39416f) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('개인의 심박은') || v_e2a85c.includes('심박은 일정한'),
                                    );
                                } else if (v_d6be1a) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('An individual') || v_e2a85c.includes('heart rate is not constant'),
                                    );
                                } else if (v_d660f2) {
                                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                                        v_e2a85c.includes('Denyut jantung individu') || v_e2a85c.includes('denyut jantung tidak konstan'),
                                    );
                                }

                                if (v_c3488c > 0) {
                                    return (
                                        <View style={v_d81136.infoModalBodyStack}>
                                            {v_39f39e.map((v_d64a40, v_a56041) => (
                                                <View
                                                    key={`info-paragraph-${v_a56041}`}
                                                    style={v_d81136.infoModalParagraphBlock}
                                                >
                                                    <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                                                    {v_a56041 === v_c3488c - 1 && v_706e98[0] ? (
                                                        <Image
                                                            source={v_706e98[0]}
                                                            style={v_d81136.wellnessExampleImage}
                                                            resizeMode="contain"
                                                        />
                                                    ) : null}
                                                </View>
                                            ))}
                                        </View>
                                    );
                                }
                            }

                            return (
                                <>
                                    {v_706e98.length > 0 ? (
                                        <View style={v_d81136.infoModalImageStack}>
                                            {v_706e98.map((v_04e790, v_a56041) => (
                                                <Image
                                                    key={`info-image-${v_a56041}`}
                                                    source={v_04e790}
                                                    style={v_d81136.wellnessExampleImage}
                                                    resizeMode="contain"
                                                />
                                            ))}
                                        </View>
                                    ) : null}
                                    <Text style={v_d81136.wellnessModalBody}>{v_4594bf.body}</Text>
                                </>
                            );
                        })()}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const v_d81136 = v_472849.create({
    wellnessModalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: v_9b1a04.large,
    },
    wellnessModal: {
        backgroundColor: v_1bfbd0.background,
        borderRadius: 16,
        width: '100%',
        maxWidth: 600,
        maxHeight: '90%',
        padding: v_9b1a04.large,
    },
    wellnessModalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: v_9b1a04.medium,
    },
    wellnessModalTitle: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        flex: 1,
        marginRight: v_9b1a04.medium,
    },
    modalCloseButton: {
        padding: v_9b1a04.small / 2,
    },
    wellnessModalBodyScroll: {
        width: '100%',
        maxHeight: 420,
        marginTop: v_9b1a04.medium,
    },
    wellnessModalBodyContent: {
        gap: v_9b1a04.medium,
        paddingBottom: v_9b1a04.small,
    },
    modalStatusSection: {
        alignItems: 'center',
        paddingBottom: v_9b1a04.large,
        borderBottomWidth: 1,
        borderBottomColor: v_1bfbd0.border,
        marginBottom: v_9b1a04.large,
    },
    modalStatusIconCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: v_9b1a04.medium,
    },
    modalStatusTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        textAlign: 'center',
        marginBottom: v_9b1a04.large,
    },
    graphBarContainer: {
        width: '100%',
        paddingHorizontal: v_9b1a04.medium,
    },
    graphBar: {
        height: 40,
        position: 'relative',
        marginBottom: v_9b1a04.small,
    },
    graphBarBackground: {
        position: 'absolute',
        top: 18,
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: '#E0E0E0',
        borderRadius: 2,
    },
    graphBarSegment: {
        position: 'absolute',
        top: 18,
        height: 4,
        borderRadius: 2,
    },
    graphBarNormalRange: {
        position: 'absolute',
        top: 18,
        height: 4,
        backgroundColor: '#4CAF50',
        borderRadius: 2,
    },
    graphBarIndicator: {
        position: 'absolute',
        top: 10,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: v_1bfbd0.primary,
        borderWidth: 2,
        borderColor: v_1bfbd0.background,
        transform: [{ translateX: -10 }],
    },
    graphBarLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
    },
    graphBarLabel: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    stressLevelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: v_9b1a04.small,
        marginTop: v_9b1a04.medium,
    },
    stressLevelItem: {
        alignItems: 'center',
        flex: 1,
    },
    stressLevelIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: v_9b1a04.small / 2,
    },
    stressLevelLabel: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        textAlign: 'center',
    },
    infoModalBodyStack: {
        gap: v_9b1a04.medium,
    },
    infoModalParagraphBlock: {
        gap: v_9b1a04.medium,
    },
    infoModalImageStack: {
        gap: v_9b1a04.medium,
    },
    wellnessExampleImage: {
        width: '100%',
        height: 180,
    },
    wellnessModalBody: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        lineHeight: v_ef658a.medium + v_9b1a04.small,
    },
    respiratoryToggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: v_9b1a04.large,
        gap: v_9b1a04.medium,
    },
    respiratoryToggleLabel: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.text,
    },
    respiratoryDescription: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        textAlign: 'center',
        lineHeight: v_ef658a.medium + v_9b1a04.small,
        marginBottom: v_9b1a04.xlarge,
    },
    respiratoryEmojiContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: v_9b1a04.xlarge,
        marginTop: v_9b1a04.medium,
    },
    respiratoryEmojiItem: {
        alignItems: 'center',
        gap: v_9b1a04.small,
    },
    respiratoryEmojiCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    respiratoryEmojiLabel: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.text,
    },
});

export default v_98de1f;

