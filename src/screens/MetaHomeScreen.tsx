import v_a3453e, { v_5ab095, v_df9f57, v_c4deb2 } from 'bapkr';
import {
  v_03e392,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_cf9c33,
  v_700696,
  v_9cabcb,
  v_79c4f2,
  v_aa7413,
  v_122070,
  v_09d0e5,
  v_e45a99,
  v_0e1f26,
  v_326be8,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439, v_25515d, v_f832ec } from 'zvyjokvuouwvifyzks';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_b5df25 } from 'ernurodqvmtspux';
import v_f595b9, { v_bf60de, v_003e74, v_050c3d, v_19b633 as v_9b42ad, v_9033e9, v_9aafc7 } from 'vpztcxjmsfanunln';
import { v_570c34, v_5deec6 } from '../components';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a, v_16b893, v_53f592 } from '../constants';
import type { v_80b5f0 } from '../components/SidebarMenu';
import { v_556baf } from '../components';

const v_9b2456 = require('../../assets/images/main_top_img.png');
const v_a6b742 = require('../../assets/images/character.png');
const v_2e47ea = require('../../assets/images/robot_face.png');

interface HealthInfo {
  id: string;
  name: string;
}

const v_33dc2e = [
  { id: '1', name: '할머니' },
  { id: '2', name: '할아버지' },
  { id: '3', name: '아버지' },
];

const { width: v_0d9f50 } = v_700696.get('window');

type Props = v_432191<v_8ad91b, 'MetaHome'>;

const v_74dc09 = [
  {
    id: '1',
    question: '주름개선 하는방법 알려줘.',
    preview: 'Youcod 주름개선 화장품 추천 .....',
  },
  {
    id: '2',
    question: '다크서클 없애는 방법은?',
    preview: '다크서클 개선을 위해서는 .....',
  },
  {
    id: '3',
    question: '피부 수분 관리 방법',
    preview: '피부 수분을 유지하려면 .....',
  },
  {
    id: '4',
    question: '모공 축소하는 방법',
    preview: '모공 관리를 위해서는 .....',
  },
];

const v_191cd1 = [
  { id: 'skinType', label: 'Skin Type', score: 78, color: '#8B4513', isButton: true, radarBefore: 0, radarAfter: 0 },
  { id: 'spots', label: 'Spots', score: 78, color: '#22C55E', radarBefore: 60, radarAfter: 80 },
  { id: 'wrinkles', label: 'Wrinkles', score: 91, color: '#22C55E', radarBefore: 60, radarAfter: 80 },
  { id: 'texture', label: 'Texture', score: 96, color: '#06B6D4', radarBefore: 65, radarAfter: 85 },
  { id: 'acne', label: 'Acne', score: 96, color: '#9CA3AF', radarBefore: 70, radarAfter: 85 },
  { id: 'darkCircles', label: 'Dark Circles', score: 77, color: '#9CA3AF', radarBefore: 50, radarAfter: 75 },
  { id: 'redness', label: 'Redness', score: 99, color: '#EF4444', radarBefore: 55, radarAfter: 75 },
  { id: 'oiliness', label: 'Oiliness', score: 93, color: '#F97316', radarBefore: 45, radarAfter: 70 },
  { id: 'moisture', label: 'Moisture', score: 83, color: '#06B6D4', radarBefore: 55, radarAfter: 80 },
  { id: 'pores', label: 'Pores', score: 87, color: '#84CC16', radarBefore: 45, radarAfter: 70 },
  { id: 'eyeBags', label: 'Eye bags', score: 86, color: '#22C55E', radarBefore: 55, radarAfter: 75 },
  { id: 'radiance', label: 'Radiance', score: 89, color: '#22C55E', radarBefore: 50, radarAfter: 80 },
  { id: 'firmness', label: 'Firmness', score: 90, color: '#EC4899', radarBefore: 40, radarAfter: 75 },
  { id: 'droopyUpper', label: 'Droopy Upper Eyelid', score: 81, color: '#06B6D4', radarBefore: 60, radarAfter: 80 },
  { id: 'droopyLower', label: 'Droopy Lower Eyelid', score: 75, color: '#84CC16', radarBefore: 50, radarAfter: 70 },
];

const v_be142a = [
  { id: 'skinType', label: 'Skin Type', score: 72, color: '#8B4513', isButton: true, radarBefore: 0, radarAfter: 0 },
  { id: 'spots', label: 'Spots', score: 65, color: '#F97316', radarBefore: 50, radarAfter: 65 },
  { id: 'wrinkles', label: 'Wrinkles', score: 82, color: '#22C55E', radarBefore: 55, radarAfter: 70 },
  { id: 'texture', label: 'Texture', score: 88, color: '#06B6D4', radarBefore: 60, radarAfter: 75 },
  { id: 'acne', label: 'Acne', score: 85, color: '#9CA3AF', radarBefore: 60, radarAfter: 75 },
  { id: 'darkCircles', label: 'Dark Circles', score: 68, color: '#F97316', radarBefore: 45, radarAfter: 65 },
  { id: 'redness', label: 'Redness', score: 92, color: '#22C55E', radarBefore: 50, radarAfter: 70 },
  { id: 'oiliness', label: 'Oiliness', score: 85, color: '#F97316', radarBefore: 40, radarAfter: 60 },
  { id: 'moisture', label: 'Moisture', score: 75, color: '#F97316', radarBefore: 50, radarAfter: 70 },
  { id: 'pores', label: 'Pores', score: 78, color: '#84CC16', radarBefore: 40, radarAfter: 60 },
  { id: 'eyeBags', label: 'Eye bags', score: 79, color: '#22C55E', radarBefore: 50, radarAfter: 70 },
  { id: 'radiance', label: 'Radiance', score: 80, color: '#22C55E', radarBefore: 45, radarAfter: 70 },
  { id: 'firmness', label: 'Firmness', score: 82, color: '#EC4899', radarBefore: 35, radarAfter: 65 },
  { id: 'droopyUpper', label: 'Droopy Upper Eyelid', score: 74, color: '#06B6D4', radarBefore: 55, radarAfter: 70 },
  { id: 'droopyLower', label: 'Droopy Lower Eyelid', score: 68, color: '#F97316', radarBefore: 45, radarAfter: 60 },
];

const v_2b90bf = '2026.01.15';
const v_c10ca0 = '2025.12.20';

const v_4a3ec5 = {
  caution: ['모공', '수분'],  
  danger: ['탄력'],           
};

const v_df3284 = {
  caution: ['다크서클', '유분'],  
  danger: ['잡티', '수분'],       
};

const RadarChart: v_a3453e.FC<{
  data: number[];
  dataAfter?: number[];
  labels: string[];
  size: number;
}> = ({ data: v_9390e8, dataAfter: v_65eb2a, labels: v_e0187d, size: v_05b441 }) => {
  const v_0288f8 = v_05b441 / 2;
  const v_0c21c9 = v_05b441 / 2 - 40;
  const v_4f44eb = (2 * Math.PI) / v_e0187d.length;

  const v_42a1e1 = (v_3b402b, v_a56041) => {
    const v_4b6102 = v_4f44eb * v_a56041 - Math.PI / 2;
    const v_cb35cb = (v_3b402b / 100) * v_0c21c9;
    return {
      x: v_0288f8 + v_cb35cb * Math.cos(v_4b6102),
      y: v_0288f8 + v_cb35cb * Math.sin(v_4b6102),
    };
  };

  const v_cf01e7 = (v_6fea0b) => {
    return v_6fea0b.map((v_81e2ef, v_ebec57) => {
      const v_49cb67 = v_42a1e1(v_81e2ef, v_ebec57);
      return `${v_49cb67.x},${v_49cb67.y}`;
    }).join(' ');
  };

  const v_52e515 = [20, 40, 60, 80, 100];

  return (
    <Svg width={v_05b441} height={v_05b441}>
      {}
      {v_52e515.map((v_fbe91e) => (
        <Polygon
          key={v_fbe91e}
          points={v_e0187d.map((v_37eab7, v_ebec57) => {
            const v_49cb67 = v_42a1e1(v_fbe91e, v_ebec57);
            return `${v_49cb67.x},${v_49cb67.y}`;
          }).join(' ')}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={1}
        />
      ))}

      {}
      {v_e0187d.map((v_37eab7, v_ebec57) => {
        const v_49cb67 = v_42a1e1(100, v_ebec57);
        return (
          <Line
            key={v_ebec57}
            x1={v_0288f8}
            y1={v_0288f8}
            x2={v_49cb67.x}
            y2={v_49cb67.y}
            stroke="#E5E7EB"
            strokeWidth={1}
          />
        );
      })}

      {}
      <Polygon
        points={v_cf01e7(v_9390e8)}
        fill="rgba(156, 163, 175, 0.2)"
        stroke="#9CA3AF"
        strokeWidth={2}
        strokeDasharray="4,4"
      />

      {}
      {v_65eb2a && (
        <Polygon
          points={v_cf01e7(v_65eb2a)}
          fill="rgba(59, 130, 246, 0.3)"
          stroke="#3B82F6"
          strokeWidth={2}
        />
      )}

      {}
      {v_e0187d.map((v_2869c1, v_ebec57) => {
        const v_49cb67 = v_42a1e1(115, v_ebec57);
        return (
          <SvgText
            key={v_ebec57}
            x={v_49cb67.x}
            y={v_49cb67.y}
            fontSize={8}
            fill="#6B7280"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {v_2869c1}
          </SvgText>
        );
      })}
    </Svg>
  );
};

const CircularGauge: v_a3453e.FC<{
  value: number;
  maxValue: number;
  size: number;
}> = ({ value: v_3b402b, maxValue: v_f8362b, size: v_05b441 }) => {
  const v_474580 = 14;
  const v_0c21c9 = (v_05b441 - v_474580 - 40) / 2;
  const v_0288f8 = v_05b441 / 2;
  const v_0aabe4 = v_3b402b / v_f8362b;

  const v_b53ada = 225 * (Math.PI / 180); 
  const v_e23062 = 270 * (Math.PI / 180);

  const v_46b3de = v_b53ada - (v_0aabe4 * v_e23062);

  const v_665404 = 50;
  const v_8c3a6e = v_e23062 / v_665404;

  return (
    <View style={{
      width: v_05b441,
      height: v_05b441,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {}
      <View style={{
        position: 'absolute',
        width: v_05b441 - 20,
        height: v_05b441 - 20,
        borderRadius: (v_05b441 - 20) / 2,
        backgroundColor: '#F5F7FA',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: -6, height: -6 },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 6,
      }} />
      {}
      <View style={{
        position: 'absolute',
        width: v_05b441 - 20,
        height: v_05b441 - 20,
        borderRadius: (v_05b441 - 20) / 2,
        backgroundColor: '#F5F7FA',
        shadowColor: '#D1D9E6',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 6,
      }} />

      <Svg width={v_05b441} height={v_05b441}>
        <G>
          {}
          {Array.from({ length: v_665404 }).map((v_37eab7, v_ebec57) => {

            const v_62a89e = (v_b53ada - (v_ebec57 * v_8c3a6e));
            const v_cd56dc = (v_b53ada - ((v_ebec57 + 1) * v_8c3a6e));

            const v_f0b70d = v_0288f8 - v_0c21c9 * Math.cos(v_62a89e);
            const v_98efa0 = v_0288f8 - v_0c21c9 * Math.sin(v_62a89e);
            const v_3bbf66 = v_0288f8 - v_0c21c9 * Math.cos(v_cd56dc);
            const v_a9fef8 = v_0288f8 - v_0c21c9 * Math.sin(v_cd56dc);

            return (
              <Line
                key={`bg-${v_ebec57}`}
                x1={v_f0b70d}
                y1={v_98efa0}
                x2={v_3bbf66}
                y2={v_a9fef8}
                stroke="#E8ECF0"
                strokeWidth={v_474580}
                strokeLinecap="round"
              />
            );
          })}

          {}
          {Array.from({ length: Math.floor(v_665404 * v_0aabe4) }).map((v_37eab7, v_ebec57) => {
            const v_62a89e = (v_b53ada - (v_ebec57 * v_8c3a6e));
            const v_cd56dc = (v_b53ada - ((v_ebec57 + 1) * v_8c3a6e));
            const v_f0b70d = v_0288f8 - v_0c21c9 * Math.cos(v_62a89e);
            const v_98efa0 = v_0288f8 - v_0c21c9 * Math.sin(v_62a89e);
            const v_3bbf66 = v_0288f8 - v_0c21c9 * Math.cos(v_cd56dc);
            const v_a9fef8 = v_0288f8 - v_0c21c9 * Math.sin(v_cd56dc);

            const v_a63fde = v_ebec57 / v_665404;
            let v_3c2a3a = '#22C55E';
            if (v_a63fde < 0.2) {
              v_3c2a3a = '#EF4444'; 
            } else if (v_a63fde < 0.35) {
              v_3c2a3a = '#F97316'; 
            } else if (v_a63fde < 0.5) {
              v_3c2a3a = '#FBBF24'; 
            } else if (v_a63fde < 0.65) {
              v_3c2a3a = '#84CC16'; 
            } else {
              v_3c2a3a = '#22C55E'; 
            }

            return (
              <Line
                key={`value-${v_ebec57}`}
                x1={v_f0b70d}
                y1={v_98efa0}
                x2={v_3bbf66}
                y2={v_a9fef8}
                stroke={v_3c2a3a}
                strokeWidth={v_474580}
                strokeLinecap="round"
              />
            );
          })}

          {}
          <Circle
            cx={v_0288f8 - v_0c21c9 * Math.cos(v_46b3de)}
            cy={v_0288f8 - v_0c21c9 * Math.sin(v_46b3de)}
            r={12}
            fill="#CDDC39"
            stroke="#FFFFFF"
            strokeWidth={4}
          />
        </G>
      </Svg>
    </View>
  );
};

const MetaHomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const { width: v_06db8f } = v_e45a99();
  const [v_2f29a7, v_5fe1ef] = v_5ab095(false);
  const [v_89bb03, v_39f9a7] = v_5ab095('');
  const [v_40f660, v_d5a554] = v_5ab095(false);
  const [v_b2ef64, v_9fb738] = v_5ab095(false);
  const [v_204bf1, v_b318d9] = v_5ab095<'recent' | 'previous'>('recent');
  const [v_459c4b, v_82dcd4] = v_5ab095<string[]>(
    v_191cd1.map(v_8c0b26 => v_8c0b26.id)
  );
  const [v_39cb7a, v_ecd01c] = v_5ab095(8); 
  const [v_30ddf9, v_ca2ef8] = v_5ab095(9); 
  const [v_9cb8cb, v_8cab62] = v_5ab095(true); 

  const [v_e870d1, v_aa40cb] = v_5ab095(false);
  const [v_437b17, v_c88681] = v_5ab095<HealthInfo | null>(null);
  const [v_7e4acc, v_de86c2] = v_5ab095(0);

  v_c4deb2(() => {
    const v_b55c88 = v_0e1f26.addListener(
      v_326be8.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (v_9e86fd) => v_de86c2(v_9e86fd.endCoordinates.height)
    );
    const v_88ec6a = v_0e1f26.addListener(
      v_326be8.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => v_de86c2(0)
    );

    return () => {
      v_b55c88.remove();
      v_88ec6a.remove();
    };
  }, []);

  const v_a36c61 = v_204bf1 === 'recent' ? v_191cd1 : v_be142a;
  const v_d39d27 = v_204bf1 === 'recent' ? v_2b90bf : v_c10ca0;
  const v_287ba3 = v_204bf1 === 'recent' ? 17 : 19;
  const v_972b6e = v_204bf1 === 'recent' ? v_4a3ec5 : v_df3284;

  const v_fc5fb7 = (v_740dd8): string => {
    if (v_740dd8 >= 8) return '높음';
    if (v_740dd8 >= 6) return '양호';
    if (v_740dd8 >= 4) return '보통';
    if (v_740dd8 >= 2) return '주의';
    return '위험';
  };

  const v_d22127 = (v_fbe91e): string => {
    if (v_fbe91e >= 9) return '우수단계';
    if (v_fbe91e >= 7) return '양호단계';
    if (v_fbe91e >= 5) return '보통단계';
    if (v_fbe91e >= 3) return '주의단계';
    return '위험단계';
  };

  const v_7d58f2 = v_df9f57(() => {
    const v_3a6ab1 = v_9b1a04.large * 2; 
    const v_2f5c5c = v_06db8f - v_3a6ab1 - v_9b1a04.large * 2; 

    const v_ebe42e = Math.min(Math.max(v_2f5c5c, 200), 400);

    const v_c536d0 = v_9b1a04.small;
    const v_ee0b62 = Math.floor((v_2f5c5c - v_c536d0 * 4) / 5);
    const v_3b3648 = Math.min(Math.max(v_ee0b62 - 8, 36), 56); 
    const v_fa3a42 = Math.min(Math.max(v_3b3648 * 0.33, 12), 18);
    const v_6fb2d1 = Math.min(Math.max(v_3b3648 * 0.65, 24), 36);
    const v_6e702b = Math.min(Math.max(v_ee0b62 * 0.16, 8), 11);

    return {
      radarChartSize: v_ebe42e,
      itemWidth: v_ee0b62,
      circleSize: v_3b3648,
      fontSize: v_fa3a42,
      iconSize: v_6fb2d1,
      labelFontSize: v_6e702b,
    };
  }, [v_06db8f]);

  const v_18219f = (item: v_80b5f0) => {
    switch (v_8c0b26.id) {
      case 'home':

        break;
      case 'wallet':
        v_9b57fc('Wallet');
        break;
      case 'shop':
        v_03e392.alert('안내', 'Shop 화면은 준비 중입니다.');
        break;
      case 'chat':
        v_9b57fc('Chat');
        break;
      case 'skin':
        v_9b57fc('SkinAnalysis');
        break;
      case 'health':
        v_9b57fc('HealthAnalysis');
        break;
      case 'connect':
        v_9b57fc('HealthConnection');
        break;
      case 'grandma':
      case 'grandpa':
        v_03e392.alert('안내', '가족 프로필 화면은 준비 중입니다.');
        break;
      case 'history':
        v_03e392.alert('안내', '검색 기록 화면은 준비 중입니다.');
        break;
      case 'myinfo':
        v_9b57fc('MyInfo');
        break;
      default:
        if (v_8c0b26.id.startsWith('suggestion-')) {
          v_03e392.alert('검색', v_8c0b26.label);
        }
        break;
    }
  };

  const v_74d6ea = () => {
    v_9b57fc('SkinAnalysis');
  };

  const v_ae6f36 = () => {
    v_9b57fc('HealthAnalysis');
  };

  const v_128506 = (v_180423) => {
    v_03e392.alert('질문', v_180423);
  };

  const v_5e757d = () => {
    if (v_89bb03.trim() || v_437b17) {
      v_9b57fc('Chat', {
        initialSearchText: v_89bb03.trim(),
        initialHealthInfo: v_437b17,
      });

      v_39f9a7('');
      v_c88681(null);
      v_d5a554(false);
    }
  };

  const v_74f1f5 = () => {
    if (!v_e870d1) {

      v_0e1f26.dismiss();
    }
    v_aa40cb(v_ba2215 => !v_ba2215);
  };

  const v_073b8f = (v_e60aa7) => {
    v_c88681(v_e60aa7);
    v_aa40cb(false);
  };

  const v_80b796 = () => {
    v_c88681(null);
  };

  const v_2d3af6 = (v_389afb) => {
    v_82dcd4(v_ba2215 => {
      if (v_ba2215.includes(v_389afb)) {
        return v_ba2215.filter(v_8c0b26 => v_8c0b26 !== v_389afb);
      } else {
        return [...v_ba2215, v_389afb];
      }
    });
  };

  const v_54edde = (v_45e488) => {
    if (v_45e488) {
      v_82dcd4(v_191cd1.map(v_8c0b26 => v_8c0b26.id));
    } else {
      v_82dcd4([]);
    }
  };

  const v_916c54 = v_df9f57(() => {
    const v_973c3e = v_191cd1.filter(
      v_8c0b26 => !v_8c0b26.isButton && v_459c4b.includes(v_8c0b26.id)
    );
    return {
      labels: v_973c3e.map(v_8c0b26 => v_8c0b26.label),
      before: v_973c3e.map(v_8c0b26 => v_8c0b26.radarBefore),
      after: v_973c3e.map(v_8c0b26 => v_8c0b26.radarAfter),
    };
  }, [v_459c4b]);

  const v_b5f731 = ({ item: v_8c0b26 }: { item: typeof v_74dc09[0] }) => (
    <TouchableOpacity
      style={v_d81136.questionCard}
      onPress={() => v_128506(v_8c0b26.question)}
      activeOpacity={0.8}
    >
      <View style={v_d81136.questionHeader}>
        <Text style={v_d81136.questionLabel}>Q.</Text>
        <Text style={v_d81136.questionText}>{v_8c0b26.question}</Text>
      </View>
      <Text style={v_d81136.questionPreview}>{v_8c0b26.preview}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      {}
      <StatusBar style={v_2f29a7 ? "dark" : "light"} />
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        {}
        <View style={[v_d81136.statusBarBackground, { height: v_033e14.top }]} />

        <SafeScrollView
          style={v_d81136.scrollView}
          contentContainerStyle={{ ...v_d81136.scrollContent, paddingTop: v_033e14.top }}
          showBottomBackground={true}
        >
          {}
          <View style={v_d81136.headerSection}>
            {}
            <View style={v_d81136.headerIcons}>
              <TouchableOpacity
                onPress={() => v_5fe1ef(true)}
                style={v_d81136.iconButton}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="메뉴 열기"
              >
                <Feather name="menu" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => v_9b57fc('MyInfoNotify')}
                style={v_d81136.iconButton}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="알림"
              >
                <View style={v_d81136.notificationIconContainer}>
                  <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
                  {v_9cb8cb && (
                    <View style={v_d81136.notificationBadge} />
                  )}
                </View>
              </TouchableOpacity>
            </View>

            {}
            <View style={v_d81136.greetingContainer}>
              <Text style={v_d81136.greetingText}>안녕하세요.</Text>
              <Text style={v_d81136.greetingTitle}>건강분석 AI 힌티 입니다</Text>
            </View>

            {}
            <Image
              source={v_9b2456}
              style={v_d81136.mainImage}
              resizeMode="contain"
            />
          </View>

          {}
          <View style={v_d81136.searchContainer}>
            <View style={[
              v_d81136.searchBar,
              (v_40f660 || v_437b17 || v_e870d1) && v_d81136.searchBarFocused
            ]}>
              <TextInput
                style={v_d81136.searchInput}
                placeholder={(v_40f660 || v_437b17 || v_e870d1) ? "건강정보를 검색하세요" : "TED 님, 무엇이 궁금하신가요?"}
                placeholderTextColor="#999"
                value={v_89bb03}
                onChangeText={v_39f9a7}
                onSubmitEditing={v_5e757d}
                onFocus={() => v_d5a554(true)}
                onBlur={() => v_d5a554(false)}
                returnKeyType="search"
              />
              <TouchableOpacity
                onPress={v_5e757d}
                style={[
                  v_d81136.searchButton,
                  (v_40f660 || v_437b17 || v_e870d1) && v_d81136.searchButtonFocused
                ]}
              >
                {(v_40f660 || v_437b17 || v_e870d1) ? (
                  <Ionicons name="arrow-up" size={20} color="#FFFFFF" />
                ) : (
                  <Ionicons name="search" size={22} color="#6B7280" />
                )}
              </TouchableOpacity>
            </View>

            {}
            {(v_40f660 || v_437b17 || v_e870d1) && (
              <View style={v_d81136.searchExtras}>
                <View style={v_d81136.searchExtraLeft}>
                  <TouchableOpacity
                    style={[v_d81136.searchExtraButton, v_e870d1 && v_d81136.searchExtraButtonActive]}
                    onPress={v_74f1f5}
                  >
                    <Ionicons name="add" size={24} color={v_e870d1 ? '#4A5099' : '#6B7280'} />
                  </TouchableOpacity>

                  {}
                  {v_437b17 && (
                    <TouchableOpacity
                      style={v_d81136.selectedHealthTag}
                      onPress={v_80b796}
                      activeOpacity={0.7}
                    >
                      <Text style={v_d81136.selectedHealthTagText}>{v_437b17.name}</Text>
                    </TouchableOpacity>
                  )}
                </View>

                <View style={v_d81136.searchExtraRight}>
                  <TouchableOpacity
                    style={v_d81136.searchExtraButton}
                    onPress={() => v_03e392.alert('음성', '음성 검색 기능은 준비 중입니다.')}
                  >
                    <Ionicons name="mic-outline" size={24} color="#6B7280" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>인기있는 질문</Text>
            <FlatList
              data={v_74dc09}
              renderItem={v_b5f731}
              keyExtractor={(v_8c0b26) => v_8c0b26.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={v_d81136.questionList}
              snapToInterval={v_0d9f50 - 80}
              decelerationRate="fast"
            />
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>내 건강상태</Text>
            <View style={v_d81136.healthStatusCard}>
              {}
              <TouchableOpacity
                style={[v_d81136.analysisButton, v_d81136.analysisButtonSkin]}
                onPress={v_74d6ea}
                activeOpacity={0.8}
              >
                <Text style={v_d81136.analysisButtonText}>피부</Text>
                <Text style={v_d81136.analysisButtonText}>분석하기</Text>
              </TouchableOpacity>

              {}
              <View style={v_d81136.characterContainer}>
                <Image
                  source={v_a6b742}
                  style={v_d81136.characterImage}
                  resizeMode="contain"
                />
              </View>

              {}
              <TouchableOpacity
                style={v_d81136.analysisButton}
                onPress={v_ae6f36}
                activeOpacity={0.8}
              >
                <Text style={v_d81136.analysisButtonText}>건강</Text>
                <Text style={v_d81136.analysisButtonText}>분석하기</Text>
              </TouchableOpacity>
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>나의 건강레벨</Text>
            <View style={v_d81136.healthLevelCard}>
              <View style={[v_d81136.levelIconContainer, { backgroundColor: v_16b893[v_30ddf9 as keyof typeof v_16b893] + '20' }]}>
                <MaterialCommunityIcons
                  name="heart-pulse"
                  size={32}
                  color={v_16b893[v_30ddf9 as keyof typeof v_16b893]}
                />
              </View>
              <View style={v_d81136.levelInfoContainer}>
                <View style={v_d81136.levelInfo}>
                  <View style={[v_d81136.levelBadge, { backgroundColor: v_16b893[v_30ddf9 as keyof typeof v_16b893] }]}>
                    <Text style={v_d81136.levelBadgeText}>Level {v_30ddf9}</Text>
                  </View>
                  <Text style={v_d81136.levelStatus}>{v_d22127(v_30ddf9)}</Text>
                </View>
                <Text style={v_d81136.levelDescription}>
                  상태 유지를 위한 지속적 관리 필요
                </Text>
              </View>
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>피부 분석 결과</Text>
            <View style={v_d81136.skinAnalysisCard}>
              {}
              <View style={v_d81136.radarChartContainer}>
                {v_916c54.labels.length > 2 ? (
                  <RadarChart
                    data={v_916c54.before}
                    dataAfter={v_916c54.after}
                    labels={v_916c54.labels}
                    size={v_7d58f2.radarChartSize}
                  />
                ) : (
                  <View style={[v_d81136.radarChartPlaceholder, {
                    width: v_7d58f2.radarChartSize,
                    height: v_7d58f2.radarChartSize
                  }]}>
                    <Text style={v_d81136.radarChartPlaceholderText}>
                      레이더 차트를 표시하려면{'\n'}3개 이상의 항목을 선택하세요
                    </Text>
                  </View>
                )}
                {}
                <View style={v_d81136.legendContainer}>
                  <View style={v_d81136.legendItem}>
                    <View style={v_d81136.legendLineSolid} />
                    <Text style={v_d81136.legendText}>최근분석</Text>
                  </View>
                  <View style={v_d81136.legendItem}>
                    <View style={v_d81136.legendLineDashed} />
                    <Text style={v_d81136.legendText}>이전분석</Text>
                  </View>
                </View>
              </View>

              {}
              <View style={v_d81136.analysisTabContainer}>
                <TouchableOpacity
                  style={[
                    v_d81136.analysisTab,
                    v_204bf1 === 'recent' && v_d81136.analysisTabActive,
                  ]}
                  onPress={() => v_b318d9('recent')}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    v_d81136.analysisTabText,
                    v_204bf1 === 'recent' && v_d81136.analysisTabTextActive,
                  ]}>
                    최근분석
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    v_d81136.analysisTab,
                    v_204bf1 === 'previous' && v_d81136.analysisTabActive,
                  ]}
                  onPress={() => v_b318d9('previous')}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    v_d81136.analysisTabText,
                    v_204bf1 === 'previous' && v_d81136.analysisTabTextActive,
                  ]}>
                    이전분석
                  </Text>
                </TouchableOpacity>
              </View>

              {}
              <Text style={v_d81136.analysisDateText}>분석일자: {v_d39d27}</Text>

              {}
              <View style={v_d81136.warningSection}>
                {v_972b6e.caution.length > 0 && (
                  <View style={v_d81136.warningRow}>
                    <Text style={v_d81136.warningLabel}>주의</Text>
                    <View style={v_d81136.tagContainer}>
                      {v_972b6e.caution.map((v_8c0b26, v_a56041) => (
                        <View key={`caution-${v_a56041}`} style={[v_d81136.tag, v_d81136.tagWarning]}>
                          <Text style={v_d81136.tagText}>{v_8c0b26}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
                {v_972b6e.danger.length > 0 && (
                  <View style={v_d81136.warningRow}>
                    <Text style={v_d81136.warningLabel}>경고</Text>
                    <View style={v_d81136.tagContainer}>
                      {v_972b6e.danger.map((v_8c0b26, v_a56041) => (
                        <View key={`danger-${v_a56041}`} style={[v_d81136.tag, v_d81136.tagDanger]}>
                          <Text style={[v_d81136.tagText, v_d81136.tagTextDanger]}>{v_8c0b26}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
              </View>

              {}
              <View style={v_d81136.diagnosticSection}>
                <Text style={v_d81136.diagnosticTitle}>Live Diagnostic Results</Text>
                <Text style={v_d81136.skinAgeText}>SKIN AGE: {v_287ba3}</Text>

                {}
                <View style={v_d81136.diagnosticGridWrap}>
                  {}
                  <TouchableOpacity
                    style={[v_d81136.diagnosticItemNew, { width: v_7d58f2.itemWidth }]}
                    onPress={() => v_9fb738(true)}
                    activeOpacity={0.8}
                  >
                    <View style={[v_d81136.skinTypeButtonCircle, {
                      width: v_7d58f2.circleSize,
                      height: v_7d58f2.circleSize,
                      borderRadius: v_7d58f2.circleSize / 2,
                    }]}>
                      <MaterialCommunityIcons
                        name="face-woman-shimmer"
                        size={v_7d58f2.iconSize * 0.85}
                        color="#6366F1"
                      />
                    </View>
                    <View style={v_d81136.skinTypeAddBadge}>
                      <View style={v_d81136.skinTypeAddBadgeInner}>
                        <Ionicons name="add" size={10} color="#FFFFFF" />
                      </View>
                    </View>
                    <Text style={[v_d81136.diagnosticLabelNew, v_d81136.skinTypeLabel, { fontSize: v_7d58f2.labelFontSize }]} numberOfLines={2}>
                      Skin Type
                    </Text>
                  </TouchableOpacity>

                  {}
                  {v_a36c61
                    .filter(v_8c0b26 => !v_8c0b26.isButton && v_459c4b.includes(v_8c0b26.id))
                    .map((v_8c0b26) => {
                      const v_5e5963 = v_53f592(v_8c0b26.score);
                      return (
                        <View
                          key={v_8c0b26.id}
                          style={[v_d81136.diagnosticItemNew, { width: v_7d58f2.itemWidth }]}
                        >
                          <View style={[v_d81136.scoreCircleNew, {
                            borderColor: v_5e5963,
                            width: v_7d58f2.circleSize,
                            height: v_7d58f2.circleSize,
                            borderRadius: v_7d58f2.circleSize / 2,
                          }]}>
                            <Text style={[v_d81136.scoreTextNew, {
                              color: v_5e5963,
                              fontSize: v_7d58f2.fontSize,
                            }]}>
                              {v_8c0b26.score}
                            </Text>
                          </View>
                          <Text style={[v_d81136.diagnosticLabelNew, { fontSize: v_7d58f2.labelFontSize }]} numberOfLines={2}>
                            {v_8c0b26.label}
                          </Text>
                        </View>
                      );
                    })
                  }
                </View>

                {}
                <TouchableOpacity style={v_d81136.tryAgainButton} onPress={v_74d6ea}>
                  <Text style={v_d81136.tryAgainText}>TRY AGAIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>나의 건강지수</Text>
            <View style={v_d81136.healthScoreCard}>
              {}
              <View style={v_d81136.gaugeContainer}>
                <CircularGauge value={v_39cb7a} maxValue={10} size={220} />
                <View style={v_d81136.gaugeValueContainer}>
                  <Text style={v_d81136.gaugeValue}>{v_39cb7a}/10</Text>
                  <Text style={v_d81136.gaugeLabel}>{v_fc5fb7(v_39cb7a)}</Text>
                </View>
              </View>

              {}
              <View style={v_d81136.healthScoreLabel}>
                <Text style={v_d81136.healthScoreLabelText}>건강 지수</Text>
                <Ionicons name="information-circle-outline" size={16} color="#9CA3AF" />
              </View>

              {}
              <Text style={v_d81136.healthDisclaimer}>
                측정된 지표는 의료용이 아닙니다
              </Text>
            </View>
          </View>

        </SafeScrollView>

        {}
        {v_e870d1 && (
          <TouchableOpacity
            style={v_d81136.healthPanelBackdrop}
            activeOpacity={1}
            onPress={() => v_aa40cb(false)}
          />
        )}

        {}
        {v_e870d1 && (
          <View style={[
            v_d81136.healthPanel,
            { paddingBottom: v_033e14.bottom + v_9b1a04.medium }
          ]}>
            <View style={v_d81136.healthPanelHeader}>
              <Text style={v_d81136.healthPanelTitle}>건강정보 불러오기</Text>
              <TouchableOpacity onPress={() => {
                v_aa40cb(false);
                v_9b57fc('HealthConnection');
              }}>
                <Text style={v_d81136.healthPanelLink}>건강정보 연결하기</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={v_d81136.healthPanelList}
              showsVerticalScrollIndicator={false}
            >
              {v_33dc2e.map((v_8c0b26) => (
                <TouchableOpacity
                  key={v_8c0b26.id}
                  style={v_d81136.healthPanelItem}
                  onPress={() => v_073b8f(v_8c0b26)}
                  activeOpacity={0.7}
                >
                  <View style={v_d81136.healthPanelAvatar}>
                    <Image source={v_2e47ea} style={v_d81136.healthPanelAvatarImage} />
                  </View>
                  <Text style={v_d81136.healthPanelItemText}>{v_8c0b26.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </SafeView>

      <SidebarMenu
        visible={v_2f29a7}
        onClose={() => v_5fe1ef(false)}
        onMenuItemPress={v_18219f}
        userProfile={{ name: 'TED' }}
      />

      {}
      <Modal
        visible={v_b2ef64}
        transparent
        animationType="fade"
        onRequestClose={() => v_9fb738(false)}
      >
        <Pressable
          style={v_d81136.modalOverlay}
          onPress={() => v_9fb738(false)}
        >
          <Pressable style={v_d81136.modalContent} onPress={() => { }}>
            <View style={v_d81136.modalHeader}>
              <Text style={v_d81136.modalTitle}>표시할 항목 선택</Text>
              <TouchableOpacity
                onPress={() => v_9fb738(false)}
                style={v_d81136.modalCloseButton}
              >
                <Ionicons name="close" size={24} color="#374151" />
              </TouchableOpacity>
            </View>

            {}
            <View style={v_d81136.modalSelectAll}>
              <TouchableOpacity
                style={v_d81136.selectAllButton}
                onPress={() => v_54edde(true)}
              >
                <Text style={v_d81136.selectAllText}>전체 선택</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={v_d81136.selectAllButton}
                onPress={() => v_54edde(false)}
              >
                <Text style={v_d81136.selectAllText}>전체 해제</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={v_d81136.modalScrollView}>
              {v_a36c61.filter(v_8c0b26 => !v_8c0b26.isButton).map((v_8c0b26) => (
                <TouchableOpacity
                  key={v_8c0b26.id}
                  style={v_d81136.modalItem}
                  onPress={() => v_2d3af6(v_8c0b26.id)}
                >
                  <View style={v_d81136.modalItemLeft}>
                    <View style={[v_d81136.modalItemDot, { backgroundColor: v_53f592(v_8c0b26.score) }]} />
                    <Text style={v_d81136.modalItemLabel}>{v_8c0b26.label}</Text>
                  </View>
                  <View style={[
                    v_d81136.checkbox,
                    v_459c4b.includes(v_8c0b26.id) && v_d81136.checkboxChecked
                  ]}>
                    {v_459c4b.includes(v_8c0b26.id) && (
                      <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={v_d81136.modalConfirmButton}
              onPress={() => v_9fb738(false)}
            >
              <Text style={v_d81136.modalConfirmText}>확인</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },

  statusBarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4A5099',
    zIndex: 100,
  },

  headerSection: {
    backgroundColor: '#4A5099',
    paddingTop: v_9b1a04.medium,
    paddingBottom: 50, 
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  greetingContainer: {
    paddingHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
  },
  greetingText: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.medium,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  greetingTitle: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: '#FFFFFF',
  },
  mainImage: {
    width: '100%',
    height: 180,
    marginTop: v_9b1a04.small,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },

  searchContainer: {
    paddingHorizontal: v_9b1a04.large,
    marginTop: -30,
    marginBottom: v_9b1a04.large,
    zIndex: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  searchBarFocused: {
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  searchButtonFocused: {
    backgroundColor: '#4A5099',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchExtras: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  searchExtraButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchExtraLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  searchExtraRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  searchExtraButtonActive: {
    borderColor: '#4A5099',
    backgroundColor: '#EEF2FF',
  },
  selectedHealthTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#A5B4FC',
    backgroundColor: '#EEF2FF',
  },
  selectedHealthTagText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#4A5099',
  },

  healthPanelBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 10,
  },

  healthPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 11,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: v_9b1a04.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
  },
  healthPanelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: v_9b1a04.medium,
  },
  healthPanelTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#9CA3AF',
  },
  healthPanelLink: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#4A5099',
    textDecorationLine: 'underline',
  },
  healthPanelList: {
    maxHeight: 250,
  },
  healthPanelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: v_9b1a04.small,
    marginBottom: v_9b1a04.small / 2,
  },
  healthPanelAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    borderWidth: 2,
    borderColor: '#A5B4FC',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: v_9b1a04.medium,
  },
  healthPanelAvatarImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  healthPanelItemText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  healthTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  healthTagText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#374151',
  },
  searchInput: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    paddingVertical: 12,
  },
  searchButton: {
    padding: 8,
  },

  section: {
    paddingHorizontal: v_9b1a04.large,
    paddingBottom: v_9b1a04.xlarge,
  },
  sectionTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },

  questionList: {
    paddingRight: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    paddingHorizontal: 3,
  },
  questionCard: {
    width: v_0d9f50 - 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: v_9b1a04.large,
    marginRight: v_9b1a04.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: v_9b1a04.small,
  },
  questionLabel: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: '#7C3AED',
    marginRight: v_9b1a04.small,
  },
  questionText: {
    flex: 1,
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    lineHeight: 24,
  },
  questionPreview: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    marginLeft: 24,
  },

  healthStatusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
  },
  analysisButton: {
    backgroundColor: '#3A3C79',
    borderRadius: 12,
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
  },
  analysisButtonSkin: {
    backgroundColor: '#5E62AC',
    alignItems: 'flex-start',
  },
  analysisButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
    lineHeight: 18,
  },
  characterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -25,
    left: "50%",
    transform: [{ translateX: -50 }],
    zIndex: 2,
    width: 100,
    height: 120,
  },
  characterImage: {
    height: '100%',
  },

  healthLevelCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EBE9FF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DADADA',
    padding: v_9b1a04.large,
  },
  levelInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: v_9b1a04.small,
  },
  levelIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: v_9b1a04.medium,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  levelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  levelBadge: {
    backgroundColor: '#10B981',
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: v_9b1a04.small,
  },
  levelBadgeText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
    color: '#FFFFFF',
  },
  levelStatus: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  levelDescription: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
  },

  skinAnalysisCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: v_9b1a04.large,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  radarChartContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v_9b1a04.medium,
  },
  radarChartPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
  },
  radarChartPlaceholderText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 22,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: v_9b1a04.medium,
    marginTop: v_9b1a04.small,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendLineDashed: {
    width: 20,
    height: 0,
    borderTopWidth: 2,
    borderTopColor: '#9CA3AF',
    borderStyle: 'dashed',
  },
  legendLineSolid: {
    width: 20,
    height: 2,
    backgroundColor: '#3B82F6',
    borderRadius: 1,
  },
  legendText: {
    fontSize: 11,
    fontFamily: v_843035.regular,
    color: '#6B7280',
  },

  analysisTabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: v_9b1a04.large,
    marginBottom: v_9b1a04.small,
    gap: v_9b1a04.small,
  },
  analysisTab: {
    paddingVertical: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.large,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    minWidth: 100,
    alignItems: 'center',
  },
  analysisTabActive: {
    backgroundColor: '#3B82F6',
  },
  analysisTabText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#6B7280',
  },
  analysisTabTextActive: {
    color: '#FFFFFF',
  },
  analysisDateText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: v_9b1a04.medium,
  },
  warningSection: {
    width: '100%',
    marginBottom: v_9b1a04.large,
  },
  warningRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: v_9b1a04.small,
  },
  warningLabel: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    width: 40,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: v_9b1a04.small,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagWarning: {
    backgroundColor: '#FEF3C7',
  },
  tagDanger: {
    backgroundColor: '#FEE2E2',
  },
  tagText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: '#D97706',
  },
  tagTextDanger: {
    color: '#DC2626',
  },
  diagnosticSection: {
    width: '100%',
    alignItems: 'center',
  },
  diagnosticTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: 4,
  },
  skinAgeText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#6B7280',
    marginBottom: v_9b1a04.medium,
  },
  diagnosticGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.large,
  },
  diagnosticItem: {
    alignItems: 'center',
    width: (v_0d9f50 - v_9b1a04.large * 4 - v_9b1a04.small * 6) / 7,
    minWidth: 40,
  },
  scoreCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 4,
  },
  scoreText: {
    fontSize: 11,
    fontFamily: v_843035.bold,
  },
  diagnosticLabel: {
    fontSize: 8,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    textAlign: 'center',
  },

  diagnosticGridWrap: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: v_9b1a04.large,
    gap: v_9b1a04.small,
  },
  diagnosticItemNew: {
    alignItems: 'center',
    minWidth: 40,
    maxWidth: 80,
    paddingHorizontal: 2,
  },
  scoreCircleNew: {
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 6,
  },
  scoreTextNew: {
    fontFamily: v_843035.bold,
  },
  diagnosticLabelNew: {
    fontFamily: v_843035.regular,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 14,
  },

  skinTypeButtonCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF2FF',
    marginBottom: 6,
    borderWidth: 2.5,
    borderColor: '#A5B4FC',

    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,

    elevation: 6,
  },
  skinTypeAddBadge: {
    position: 'absolute',
    top: -2,
    right: 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
  skinTypeAddBadgeInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skinTypeLabel: {
    color: '#6366F1',
    fontFamily: v_843035.semibold,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: v_0d9f50 - 48,
    maxHeight: '70%',
    padding: v_9b1a04.large,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: v_9b1a04.medium,
  },
  modalTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: '#374151',
  },
  modalCloseButton: {
    padding: 4,
  },
  modalSelectAll: {
    flexDirection: 'row',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.medium,
  },
  selectAllButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  selectAllText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: '#6B7280',
  },
  modalScrollView: {
    maxHeight: 300,
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  modalItemDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  modalItemLabel: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.regular,
    color: '#374151',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  modalConfirmButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: v_9b1a04.medium,
  },
  modalConfirmText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
  },
  tryAgainButton: {
    borderWidth: 1,
    borderColor: '#3B82F6',
    borderRadius: 20,
    paddingVertical: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.xlarge * 2,
  },
  tryAgainText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#3B82F6',
  },

  healthScoreCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: v_9b1a04.large,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  gaugeContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v_9b1a04.small,
  },
  gaugeValueContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeValue: {
    fontSize: 36,
    fontFamily: v_843035.bold,
    color: '#374151',
  },
  gaugeLabel: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: '#6B7280',
    marginTop: 4,
  },
  healthScoreLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: v_9b1a04.small,
  },
  healthScoreLabelText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  healthDisclaimer: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
  },
});

export default v_7aeeb0;
