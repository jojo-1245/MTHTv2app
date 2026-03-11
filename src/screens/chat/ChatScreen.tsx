import v_a3453e, { v_5ab095, v_e662ae, v_c4deb2, v_df9f57, v_de06a3 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_79c4f2,
  v_4623af,
  v_122070,
  v_03e392,
  v_e767d1,
  v_326be8,
  v_cf9c33,
  v_700696,
  v_da479e,
  v_bd64bf,
  v_0e1f26,
  v_39a996,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439, v_25515d } from 'zvyjokvuouwvifyzks';
import { v_c940dd, v_b6b6d9, v_2af98c } from 'wjvlskvsbzsrojdbjsl';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_729608, v_556baf, v_5deec6, v_1c1837, v_d3705d } from '../../components';
import type { v_80b5f0 } from '../../components/SidebarMenu';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_9e8766 } from '../../hooks';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import { v_e4a763 } from '../../utils/env';
import { v_777b12 } from '../../services/healthApi';
import { v_81fcbc } from '../../services/skinApi';

const v_90fa17 = require('../../../assets/images/robot_face.png');

type Props = v_432191<v_8ad91b, 'Chat'>;

const { width: v_0d9f50 } = v_700696.get('window');
const v_37c282 = v_0d9f50 - 80; 

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

const v_34de63 = [
  'hypertension', 'diabetes', 'heart_disease', 'cardiovascular', 'respiratory', 'thyroid',
  'gastrointestinal', 'liver', 'kidney', 'arthritis', 'osteoporosis', 'cancer',
] as const;

const v_14e5f6 = [
  'bp_med', 'diabetes_med', 'lipid_med', 'heart_med', 'thyroid_med', 'stomach_med',
  'painkiller', 'anti_inflammatory', 'antibiotics', 'vitamins', 'supplements', 'sleeping_pills',
] as const;

const v_be27c3 = [
  'non_smoker', 'past_smoker', 'current_light', 'current_heavy',
] as const;

const v_42f050 = [
  'none', 'occasional', 'moderate', 'frequent', 'daily',
] as const;

interface ChatMessageActionButton {
  label: string;
  action: 'load_health_data' | 'start_questionnaire';
}
interface ChatMessageQuestionnaire {
  questionId: string;
  completed?: boolean;
  completedResult?: string;
}
interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  text: string;
  createdAt: number;
  products?: Product[];
  actionButton?: ChatMessageActionButton;
  isLoading?: boolean;
  questionnaire?: ChatMessageQuestionnaire;
  healthReport?: boolean;
}

const v_44ff40 = (v_8d41d7): Product[] => [
  {
    id: '1',
    name: v_8d41d7('chat.sample_products.product_1_name'),
    description: v_8d41d7('chat.sample_products.product_1_description'),
    price: '- MTHT',
    originalPrice: '- MTHT',
    discount: '20%',
  },
  {
    id: '2',
    name: v_8d41d7('chat.sample_products.product_2_name'),
    description: v_8d41d7('chat.sample_products.product_2_description'),
    price: '- MTHT',
    originalPrice: '- MTHT',
    discount: '20%',
  },
  {
    id: '3',
    name: v_8d41d7('chat.sample_products.product_3_name'),
    description: v_8d41d7('chat.sample_products.product_3_description'),
    price: '- MTHT',
    originalPrice: '- MTHT',
    discount: '11%',
  },
  {
    id: '4',
    name: v_8d41d7('chat.sample_products.product_4_name'),
    description: v_8d41d7('chat.sample_products.product_4_description'),
    price: '- MTHT',
    originalPrice: '- MTHT',
    discount: '18%',
  },
];

import { v_772971 } from 'jmpfvteuuztnp';

const ChatScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const v_e99f51 = v_e662ae<v_122070>(null);

  const [v_fa56e0, v_41d55d] = v_5ab095<ChatMessage[]>([]);
  const [v_a469c7, v_f32824] = v_5ab095('');
  const [v_3ba9c6, v_655a4e] = v_5ab095(false);
  const [v_2f29a7, v_5fe1ef] = v_5ab095(false);
  const [v_6e882f, v_6e04f8] = v_5ab095<{ [key: string]: number }>({});

  const {
    accounts: v_c86f08,
    selectedAccountId: v_e7b2f2,
    setSelectedAccountId: v_1f1e88,
    handleDeleteAccount: v_5bc46a,
    handleAddUser: v_20289f,
    handleLinkEmail: v_42b67a,
    reloadAccounts: v_604e0f,
  } = v_9e8766();

  v_cf763b(
    v_de06a3(() => {
      v_604e0f();
    }, [v_604e0f])
  );

  const [v_7e4acc, v_de86c2] = v_5ab095(0);
  const [v_8b20f6, v_d60b8e] = v_5ab095<{
    [messageId: string]: { selectedIds: string[]; otherValues: string[]; showOtherInput: boolean; otherInputText: string };
  }>({});

  const v_4c906f = v_e662ae<{ health?: string; skin?: string }>({});

  v_c4deb2(() => {
    const v_24baff = v_c7daf6.params;
    if (!v_24baff) return;

    if (v_24baff.initialSearchText) {
      v_f32824(v_24baff.initialSearchText);
    }
    if (v_24baff.initialHealthInfo) {
      v_1f1e88(v_24baff.initialHealthInfo.id);
    }

    const v_2453ad = v_24baff.initialHealthInfo?.id ?? v_e7b2f2;
    const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_2453ad) || v_c86f08[0];
    const v_f08a5e = v_24baff.initialHealthInfo?.name ?? v_0c2f9b.name;
    const v_87cb2b = [];

    if (v_24baff.attachedHealthSummary && v_24baff.attachedHealthSummary !== v_4c906f.current.health) {
      v_4c906f.current.health = v_24baff.attachedHealthSummary;
      const v_456484 = v_8d41d7('chat.attached_health_intro', { name: v_f08a5e });
      v_87cb2b.push({
        id: `attached-health-intro-${Date.now()}`,
        type: 'ai',
        text: v_456484,
        createdAt: Date.now(),
      });
      v_87cb2b.push({
        id: `attached-health-body-${Date.now() + 1}`,
        type: 'ai',
        text: v_24baff.attachedHealthSummary,
        createdAt: Date.now() + 1,
      });
    }
    if (v_24baff.attachedSkinSummary && v_24baff.attachedSkinSummary !== v_4c906f.current.skin) {
      v_4c906f.current.skin = v_24baff.attachedSkinSummary;
      const v_456484 = v_8d41d7('chat.attached_skin_intro', { name: v_f08a5e });
      v_87cb2b.push({
        id: `attached-skin-intro-${Date.now()}`,
        type: 'ai',
        text: v_456484,
        createdAt: Date.now(),
      });
      v_87cb2b.push({
        id: `attached-skin-body-${Date.now() + 1}`,
        type: 'ai',
        text: v_24baff.attachedSkinSummary,
        createdAt: Date.now() + 1,
      });
    }

    if (v_87cb2b.length > 0) {
      v_41d55d((v_ba2215) => [...v_ba2215, ...v_87cb2b]);
      setTimeout(() => v_e99f51.current?.scrollToEnd({ animated: true }), 150);
    }
  }, [v_c7daf6.params, v_c86f08, v_e7b2f2, v_8d41d7]);

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

  const v_18219f = (item: v_80b5f0) => {
    switch (v_8c0b26.id) {
      case 'home':
        v_9b57fc('MetaHome');
        break;
      case 'wallet':
        v_9b57fc('Wallet');
        break;
      case 'shop':
        v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.shop_preparing'));
        break;
      case 'chat':

        break;
      case 'newChat':
        v_bb559e();
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
        v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.family_preparing'));
        break;
      case 'history':
        v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.history_preparing'));
        break;
      case 'myinfo':
        v_9b57fc('MyInfo');
        break;
      default:
        if (v_8c0b26.id.startsWith('suggestion-')) {
          v_9b57fc('Chat', { initialSearchText: v_8c0b26.label });
        }
        break;
    }
  };

  const v_bb559e = () => {
    v_41d55d([]);
    v_f32824('');
    v_1f1e88('1');
  };

  const v_84bbe1 = v_de06a3(() => {
    const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2) || v_c86f08[0];
    const v_f08a5e = v_0c2f9b.name;
    const v_5c2f9f = Date.now();
    const v_c0e79a = {
      id: v_5c2f9f.toString(),
      type: 'ai',
      text: v_8d41d7('chat.health_checkup_response', { name: v_f08a5e }),
      createdAt: v_5c2f9f,
      actionButton: {
        label: v_8d41d7('chat.load_recent_data', { name: v_f08a5e }),
        action: 'load_health_data',
      },
    };
    v_41d55d((v_ba2215) => [...v_ba2215, v_c0e79a]);
    setTimeout(() => v_e99f51.current?.scrollToEnd({ animated: true }), 100);
  }, [v_c86f08, v_e7b2f2, v_8d41d7]);

  const v_f26426 = v_de06a3(() => {
    const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2) || v_c86f08[0];
    const v_f08a5e = v_0c2f9b.name;
    const v_2b273c = `loading-${Date.now()}`;
    const v_fa3864 = {
      id: v_2b273c,
      type: 'ai',
      text: v_8d41d7('chat.loading_health_data', { name: v_f08a5e }),
      createdAt: Date.now(),
      isLoading: true,
    };
    v_41d55d((v_ba2215) => [...v_ba2215, v_fa3864]);
    setTimeout(() => v_e99f51.current?.scrollToEnd({ animated: true }), 100);

    setTimeout(() => {
      const v_80d73f = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
      const v_e5db92 = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: v_8d41d7('chat.health_data_loaded', {
          name: v_f08a5e,
          measureDate: v_80d73f,
          healthIndex: '9',
        }),
        createdAt: Date.now(),
        actionButton: {
          label: v_8d41d7('chat.start_questionnaire'),
          action: 'start_questionnaire',
        },
      };
      v_41d55d((v_ba2215) => [...v_ba2215.filter((v_35f85c) => !v_35f85c.isLoading), v_e5db92]);
      setTimeout(() => v_e99f51.current?.scrollToEnd({ animated: true }), 100);
    }, 2500);
  }, [v_c86f08, v_e7b2f2, v_8d41d7]);

  const v_3736a1 = v_de06a3(() => {
    const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2) || v_c86f08[0];
    const v_f08a5e = v_0c2f9b.name;
    const v_5c2f9f = Date.now();
    const v_7da572 = {
      id: v_5c2f9f.toString(),
      type: 'ai',
      text: v_8d41d7('chat.questionnaire_intro', { name: v_f08a5e }),
      createdAt: v_5c2f9f,
      questionnaire: { questionId: 'q1' },
    };
    v_41d55d((v_ba2215) => [...v_ba2215, v_7da572]);
    v_d60b8e((v_ba2215) => ({
      ...v_ba2215,
      [v_5c2f9f.toString()]: { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' },
    }));
    setTimeout(() => v_e99f51.current?.scrollToEnd({ animated: true }), 100);
  }, [v_c86f08, v_e7b2f2, v_8d41d7]);

  const v_c52828 = v_de06a3((v_7f4466, v_e0cd25, v_9187e5) => {
    v_d60b8e((v_ba2215) => {
      const v_b6e533 = v_ba2215[v_7f4466] || { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' };
      const v_a63968 = v_9187e5
        ? (v_b6e533.selectedIds.includes(v_e0cd25) ? [] : [v_e0cd25])
        : (v_b6e533.selectedIds.includes(v_e0cd25)
          ? v_b6e533.selectedIds.filter((v_389afb) => v_389afb !== v_e0cd25)
          : [...v_b6e533.selectedIds, v_e0cd25]);
      return { ...v_ba2215, [v_7f4466]: { ...v_b6e533, selectedIds: v_a63968 } };
    });
  }, []);

  const v_99af19 = v_de06a3((v_7f4466) => {
    v_d60b8e((v_ba2215) => {
      const v_b6e533 = v_ba2215[v_7f4466] || { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' };
      return { ...v_ba2215, [v_7f4466]: { ...v_b6e533, showOtherInput: !v_b6e533.showOtherInput } };
    });
  }, []);

  const v_1f7836 = v_de06a3((v_7f4466, v_9b6134) => {
    v_d60b8e((v_ba2215) => {
      const v_b6e533 = v_ba2215[v_7f4466] || { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' };
      return { ...v_ba2215, [v_7f4466]: { ...v_b6e533, otherInputText: v_9b6134 } };
    });
  }, []);

  const v_bd7fbe = v_de06a3((v_7f4466) => {
    v_d60b8e((v_ba2215) => {
      const v_b6e533 = v_ba2215[v_7f4466] || { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' };
      const v_9b6134 = v_b6e533.otherInputText.trim();
      if (!v_9b6134) return v_ba2215;
      return {
        ...v_ba2215,
        [v_7f4466]: {
          ...v_b6e533,
          otherValues: [...v_b6e533.otherValues, v_9b6134],
          otherInputText: '',
        },
      };
    });
  }, []);

  const v_bb30b0 = v_de06a3((v_7f4466, v_9b6134) => {
    v_d60b8e((v_ba2215) => ({
      ...v_ba2215,
      [v_7f4466]: {
        ...(v_ba2215[v_7f4466] || { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' }),
        otherInputText: v_9b6134,
      },
    }));
  }, []);

  const v_e3b06a = v_de06a3(
    (v_7f4466) => {
      const v_badeaf = v_fa56e0.find((v_35f85c) => v_35f85c.id === v_7f4466);
      const v_d253eb = v_badeaf?.questionnaire?.questionId;
      const v_b6e533 = v_8b20f6[v_7f4466] || { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' };

      const v_f37094 = v_d253eb === 'q1';
      const v_bab22e = v_d253eb === 'q2';
      const v_e732a4 = v_d253eb === 'q3';
      const v_7107f8 = v_d253eb === 'q4';
      const v_a2eb48 = v_d253eb === 'q5';

      let v_095c2f;
      if (v_e732a4) {
        v_095c2f = (v_b6e533.otherInputText || '').trim() || v_8d41d7('chat.questionnaire_no_allergy');
      } else if (v_7107f8 || v_a2eb48) {
        const v_ef6c25 = v_7107f8 ? 'chat.questionnaire_smoking_options' : 'chat.questionnaire_drinking_options';
        v_095c2f = v_b6e533.selectedIds.length > 0
          ? v_8d41d7(`${v_ef6c25}.${v_b6e533.selectedIds[0]}`)
          : v_8d41d7('chat.questionnaire_no_allergy');
      } else {
        const v_ef6c25 = v_f37094 ? 'chat.questionnaire_options' : 'chat.questionnaire_medication_options';
        const v_c427ea = v_b6e533.selectedIds.map((v_389afb) => v_8d41d7(`${v_ef6c25}.${v_389afb}`));
        const v_b6119c = v_b6e533.otherValues.length > 0 ? v_b6e533.otherValues.join(', ') : '';
        v_095c2f = [...v_c427ea, v_b6119c].filter(Boolean).join(', ') || v_8d41d7('chat.questionnaire_no_allergy');
      }

      const v_5c2f9f = Date.now();
      const v_e629b5 = {
        id: v_5c2f9f.toString(),
        type: 'user',
        text: v_095c2f,
        createdAt: v_5c2f9f,
      };

      const v_87cb2b = [
        ...v_fa56e0.map((v_35f85c) =>
          v_35f85c.id === v_7f4466 && v_35f85c.questionnaire
            ? { ...v_35f85c, questionnaire: { ...v_35f85c.questionnaire, completed: true, completedResult: v_095c2f } }
            : v_35f85c
        ),
        v_e629b5,
      ];

      if (v_f37094) {
        const v_f300f8 = {
          id: (v_5c2f9f + 1).toString(),
          type: 'ai',
          text: '',
          createdAt: v_5c2f9f + 1,
          questionnaire: { questionId: 'q2' },
        };
        v_87cb2b.push(v_f300f8);
        v_d60b8e((v_ba2215) => ({
          ...v_ba2215,
          [(v_5c2f9f + 1).toString()]: { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' },
        }));
      } else if (v_bab22e) {
        const v_e262aa = {
          id: (v_5c2f9f + 1).toString(),
          type: 'ai',
          text: '',
          createdAt: v_5c2f9f + 1,
          questionnaire: { questionId: 'q3' },
        };
        v_87cb2b.push(v_e262aa);
        v_d60b8e((v_ba2215) => ({
          ...v_ba2215,
          [(v_5c2f9f + 1).toString()]: { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' },
        }));
      } else if (v_e732a4) {
        const v_d6ea2c = {
          id: (v_5c2f9f + 1).toString(),
          type: 'ai',
          text: '',
          createdAt: v_5c2f9f + 1,
          questionnaire: { questionId: 'q4' },
        };
        v_87cb2b.push(v_d6ea2c);
        v_d60b8e((v_ba2215) => ({
          ...v_ba2215,
          [(v_5c2f9f + 1).toString()]: { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' },
        }));
      } else if (v_7107f8) {
        const v_62a28c = {
          id: (v_5c2f9f + 1).toString(),
          type: 'ai',
          text: '',
          createdAt: v_5c2f9f + 1,
          questionnaire: { questionId: 'q5' },
        };
        v_87cb2b.push(v_62a28c);
        v_d60b8e((v_ba2215) => ({
          ...v_ba2215,
          [(v_5c2f9f + 1).toString()]: { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' },
        }));
      } else if (v_a2eb48) {
        const v_2b273c = `loading-${v_5c2f9f + 1}`;
        const v_fa3864 = {
          id: v_2b273c,
          type: 'ai',
          text: v_8d41d7('chat.loading_questionnaire_analysis'),
          createdAt: v_5c2f9f + 1,
          isLoading: true,
        };
        v_87cb2b.push(v_fa3864);
      }

      v_41d55d(v_87cb2b);
      v_d60b8e((v_ba2215) => {
        const v_a448ad = { ...v_ba2215 };
        delete v_a448ad[v_7f4466];
        return v_a448ad;
      });
      setTimeout(() => v_e99f51.current?.scrollToEnd({ animated: true }), 100);

      if (v_a2eb48) {
        setTimeout(() => {
          const v_2dceb6 = Date.now();
          const v_914053 = {
            id: `report-intro-${v_2dceb6}`,
            type: 'ai',
            text: v_8d41d7('chat.health_report_intro'),
            createdAt: v_2dceb6,
          };
          const v_7dc9dc = {
            id: `report-${v_2dceb6 + 1}`,
            type: 'ai',
            text: '',
            createdAt: v_2dceb6 + 1,
            healthReport: true,
          };
          v_41d55d((v_ba2215) => [...v_ba2215.filter((v_35f85c) => !v_35f85c.isLoading), v_914053, v_7dc9dc]);
          setTimeout(() => v_e99f51.current?.scrollToEnd({ animated: true }), 100);
        }, 2500);
      }
    },
    [v_8b20f6, v_fa56e0, v_c86f08, v_e7b2f2, v_8d41d7]
  );

  const v_517050 = (v_42044e) => {
    const v_d5dda0 = new Date(v_42044e);
    const v_5c2f9f = new Date();
    const v_147971 = v_d5dda0.toDateString() === v_5c2f9f.toDateString();
    if (v_147971) {
      return v_d5dda0.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    }
    return v_d5dda0.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const v_465869 = async () => {
    const v_9b6134 = v_a469c7.trim();
    if (!v_9b6134) return;

    const v_5c2f9f = Date.now();
    const v_b0cf4c = v_5c2f9f.toString();
    const v_e629b5 = {
      id: v_b0cf4c,
      type: 'user',
      text: v_9b6134,
      createdAt: v_5c2f9f,
    };

    v_41d55d(v_ba2215 => [...v_ba2215, v_e629b5]);
    v_f32824('');

    setTimeout(() => {
      v_e99f51.current?.scrollToEnd({ animated: true });
    }, 100);

    const v_4e9c48 = (v_5c2f9f + 1).toString();
    const v_4313ca = {
      id: v_4e9c48,
      type: 'ai',
      text: '',
      createdAt: v_5c2f9f + 1,
      isLoading: true,
    };
    v_41d55d(v_ba2215 => [...v_ba2215, v_4313ca]);
    setTimeout(() => {
      v_e99f51.current?.scrollToEnd({ animated: true });
    }, 100);

    try {
      const v_c253c5 = v_e7b2f2 === '1' ? undefined : v_e7b2f2;
      const v_5213e7 = v_777b12(v_c253c5).catch(() => []);
      const v_ed4b7b = v_81fcbc(v_c253c5).catch(() => []);

      const [v_77cfc3, v_d6b96e] = await Promise.all([v_5213e7, v_ed4b7b]);

      const v_ec41ce = v_77cfc3.length > 0 ? v_77cfc3[0] : null;
      const v_068098 = v_d6b96e.length > 0 ? v_d6b96e[0] : null;

      let v_681458;
      if (!v_ec41ce) {
        v_681458 = '[건강 데이터 없음: 아직 건강 분석 기록이 없습니다.]';
      } else {
        const v_17319e = v_ec41ce.vital_signs
          ? (typeof v_ec41ce.vital_signs === 'string' ? JSON.parse(v_ec41ce.vital_signs) : v_ec41ce.vital_signs)
          : {};
        const v_27ef41 = Object.entries(v_17319e).map(([v_b24339, v_a057b5]: [string, any]) => {
          const v_81e2ef = v_a057b5?.value;
          const v_ceb55a = v_a057b5?.unit ?? '';
          if (v_81e2ef == null) return null;
          if (typeof v_81e2ef === 'object') {
            return `  - ${v_b24339}: ${JSON.stringify(v_81e2ef)} ${v_ceb55a}`.trim();
          }
          return `  - ${v_b24339}: ${v_81e2ef} ${v_ceb55a}`.trim();
        }).filter(Boolean).join('\n');
        v_681458 = `[건강 데이터]
- 측정일: ${v_ec41ce.record_date ?? '알 수 없음'}
- 건강지수: ${v_ec41ce.health_index ?? '데이터 없음'}
- 건강 레벨: ${v_ec41ce.health_level ?? '데이터 없음'}${v_27ef41 ? `\n- 바이탈 사인:\n${v_27ef41}` : ''}`;
      }

      let v_0fa025;
      if (!v_068098) {
        v_0fa025 = '[피부 데이터 없음: 아직 피부 분석 기록이 없습니다.]';
      } else {
        const v_b95193 = v_068098.analysis_result
          ? (typeof v_068098.analysis_result === 'string' ? JSON.parse(v_068098.analysis_result) : v_068098.analysis_result)
          : {};
        const v_69de92 = v_068098.caution_items
          ? (typeof v_068098.caution_items === 'string' ? JSON.parse(v_068098.caution_items) : v_068098.caution_items)
          : [];
        const v_44f5a0 = Object.entries(v_b95193).map(([v_b24339, v_a057b5]: [string, any]) => {
          const v_740dd8 = v_a057b5?.ui_score ?? v_a057b5?.raw_score;
          return v_740dd8 != null ? `  - ${v_b24339}: ${v_740dd8}점` : null;
        }).filter(Boolean).join('\n');
        v_0fa025 = `[피부 데이터]
- 측정일: ${v_068098.record_date ?? '알 수 없음'}
- 종합 점수: ${v_068098.overall_score ?? '데이터 없음'}점
- 피부 나이: ${v_068098.skin_age ?? '데이터 없음'}세
- 등급: ${v_068098.grade ?? '데이터 없음'}${v_44f5a0 ? `\n- 세부 분석:\n${v_44f5a0}` : ''}${v_69de92.length > 0 ? `\n- 주의 항목: ${v_69de92.join(', ')}` : ''}`;
      }

      const v_c9c489 = v_e4a763();
      const v_fed274 = v_c9c489.GATEWAY;
      if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다.');

      const v_f71b56 = `${v_fed274}/oth-path`;

      const v_6f3521 = new XMLHttpRequest();
      v_6f3521.open('POST', v_f71b56, true);
      v_6f3521.setRequestHeader('Content-Type', 'application/json');

      let v_3e1c56 = 0;

      v_6f3521.onreadystatechange = () => {
        if (v_6f3521.readyState === XMLHttpRequest.LOADING || v_6f3521.readyState === XMLHttpRequest.DONE) {
          const v_f48e68 = v_6f3521.responseText;
          if (v_f48e68 && v_f48e68.length > 0) {
            v_41d55d(v_ba2215 => v_ba2215.map(v_35f85c => v_35f85c.id === v_4e9c48 ? { ...v_35f85c, text: v_f48e68, isLoading: false } : v_35f85c));

            if (v_f48e68.length - v_3e1c56 > 20 || v_6f3521.readyState === XMLHttpRequest.DONE) {
              v_3e1c56 = v_f48e68.length;
              setTimeout(() => v_e99f51.current?.scrollToEnd({ animated: false }), 50);
            }
          } else if (v_6f3521.readyState === XMLHttpRequest.DONE) {
            v_41d55d(v_ba2215 => v_ba2215.map(v_35f85c => v_35f85c.id === v_4e9c48 ? { ...v_35f85c, isLoading: false } : v_35f85c));
          }
        }
      };

      v_6f3521.onerror = () => {
        v_41d55d(v_ba2215 => v_ba2215.map(v_35f85c => v_35f85c.id === v_4e9c48 ? { ...v_35f85c, text: '네트워크 오류가 발생했습니다.', isLoading: false } : v_35f85c));
      };

      const v_931bf0 = {
        query: v_9b6134,
        stream: true,
        jsonData: {
          healthData: v_681458,
          skinData: v_0fa025,
        }
      };

      v_6f3521.send(JSON.stringify(v_931bf0));
    } catch (v_49263d) {
      console.error(v_49263d);
      v_41d55d(v_ba2215 => v_ba2215.map(v_35f85c => v_35f85c.id === v_4e9c48 ? { ...v_35f85c, text: 'API 호출 중 오류가 발생했습니다.', isLoading: false } : v_35f85c));
    }
  };

  const v_4f73b9 = (v_01bee9) => {
    v_03e392.alert(v_8d41d7('chat.view_product'), `${v_01bee9.name}`);
  };

  const v_07b9b4 = (v_2453ad) => {
    v_1f1e88(v_2453ad);
  };

  const v_dd0316 = (
    event: v_bd64bf<v_da479e>,
    v_7f4466,
  ) => {
    const v_bfc931 = v_d48baf.nativeEvent.contentOffset.x;
    const v_a56041 = Math.round(v_bfc931 / v_37c282);
    v_6e04f8(v_ba2215 => ({ ...v_ba2215, [v_7f4466]: v_a56041 }));
  };

  const v_80b207 = (v_01bee9) => (
    <View key={v_01bee9.id} style={v_d81136.productCardWrapper}>
      <View style={v_d81136.productCard}>
        {}
        <View style={v_d81136.productImageContainer}>
          <Image
            source={require('../../../assets/images/product_01.png')}
            style={v_d81136.productImage}
            resizeMode="contain"
          />
          {v_01bee9.discount && (
            <View style={v_d81136.discountBadge}>
              <Text style={v_d81136.discountText}>{v_01bee9.discount}</Text>
            </View>
          )}
        </View>

        {}
        <View style={v_d81136.productInfo}>
          <Text style={v_d81136.productName} numberOfLines={1}>{v_01bee9.name}</Text>
          <Text style={v_d81136.productDescription} numberOfLines={2}>{v_01bee9.description}</Text>

          <View style={v_d81136.priceContainer}>
            {v_01bee9.originalPrice && (
              <Text style={v_d81136.originalPrice}>{v_01bee9.originalPrice}</Text>
            )}
            <Text style={v_d81136.currentPrice}>{v_01bee9.price}</Text>
          </View>

          <TouchableOpacity
            style={v_d81136.viewProductButton}
            onPress={() => v_4f73b9(v_01bee9)}
            activeOpacity={0.8}
          >
            <Text style={v_d81136.viewProductButtonText}>{v_8d41d7('chat.view_product')}</Text>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const v_82c167 = (v_a8cd21) => {
    const v_f8e6b9 = v_517050(v_a8cd21.createdAt);
    if (v_a8cd21.type === 'user') {
      return (
        <View key={v_a8cd21.id} style={v_d81136.userMessageContainer}>
          <View style={v_d81136.userBubbleWrap}>
            <LinearGradient
              colors={['#615FFF', '#AD46FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={v_d81136.userMessage}
            >
              <Text style={v_d81136.userMessageText}>{v_a8cd21.text}</Text>
            </LinearGradient>
            <Text style={v_d81136.userMessageDateOuter}>{v_f8e6b9}</Text>
          </View>
        </View>
      );
    }

    const v_2bcb8f = v_6e882f[v_a8cd21.id] || 0;

    return (
      <View key={v_a8cd21.id} style={v_d81136.aiMessageContainer}>
        <View style={v_d81136.aiMessageRow}>
          <View style={v_d81136.aiAvatarWrap}>
            <Image source={v_90fa17} style={v_d81136.aiAvatarImage} resizeMode="contain" />
          </View>
          <View style={v_d81136.aiBubbleWrap}>
            <View style={v_d81136.aiBubble}>
              {v_a8cd21.isLoading ? (
                <View style={v_d81136.loadingBubble}>
                  <ActivityIndicator size="small" color="#615FFF" />
                  <Text style={v_d81136.aiBubbleText}>{v_a8cd21.text}</Text>
                </View>
              ) : v_a8cd21.text ? (
                <Text style={v_d81136.aiBubbleText}>{v_a8cd21.text}</Text>
              ) : null}
              {v_a8cd21.questionnaire && (() => {
                const v_0ba044 = v_a8cd21.questionnaire.completed;
                const v_61e622 = v_a8cd21.questionnaire.completedResult;
                if (v_0ba044 && v_61e622) {
                  const v_258c83 = {
                    q1: v_8d41d7('chat.questionnaire_q1'),
                    q2: v_8d41d7('chat.questionnaire_q2'),
                    q3: v_8d41d7('chat.questionnaire_q3'),
                    q4: v_8d41d7('chat.questionnaire_q4'),
                    q5: v_8d41d7('chat.questionnaire_q5'),
                  };
                  const v_2869c1 = v_258c83[v_a8cd21.questionnaire.questionId] || '';
                  return (
                    <View style={v_d81136.questionnaireContainer}>
                      <Text style={v_d81136.questionnaireQuestion}>{v_2869c1}</Text>
                      <Text style={v_d81136.questionnaireCompletedResult}>{v_61e622}</Text>
                    </View>
                  );
                }
                const v_f90ad7 = v_8b20f6[v_a8cd21.id] || { selectedIds: [], otherValues: [], showOtherInput: false, otherInputText: '' };
                const v_e732a4 = v_a8cd21.questionnaire.questionId === 'q3';
                const v_7107f8 = v_a8cd21.questionnaire.questionId === 'q4';
                const v_a2eb48 = v_a8cd21.questionnaire.questionId === 'q5';
                if (v_e732a4) {
                  return (
                    <View style={v_d81136.questionnaireContainer}>
                      <Text style={v_d81136.questionnaireQuestion}>{v_8d41d7('chat.questionnaire_q3')}</Text>
                      <TextInput
                        style={v_d81136.questionnaireAllergyInput}
                        placeholder={v_8d41d7('chat.questionnaire_q3_placeholder')}
                        placeholderTextColor="#9CA3AF"
                        value={v_f90ad7.otherInputText}
                        onChangeText={(v_9b6134) => v_bb30b0(v_a8cd21.id, v_9b6134)}
                        multiline={false}
                      />
                      <TouchableOpacity
                        style={v_d81136.questionnaireCompleteButton}
                        onPress={() => v_e3b06a(v_a8cd21.id)}
                        activeOpacity={0.8}
                      >
                        <LinearGradient
                          colors={['#615FFF', '#AD46FF']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={v_d81136.questionnaireCompleteButtonGradient}
                        >
                          <Text style={v_d81136.questionnaireCompleteButtonText}>
                            {v_8d41d7('chat.questionnaire_complete_input')}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  );
                }
                if (v_7107f8) {
                  return (
                    <View style={v_d81136.questionnaireContainer}>
                      <Text style={v_d81136.questionnaireQuestion}>{v_8d41d7('chat.questionnaire_q4')}</Text>
                      <View style={v_d81136.questionnaireOptionsGrid}>
                        {v_be27c3.map((v_c58503) => (
                          <TouchableOpacity
                            key={v_c58503}
                            style={[v_d81136.questionnaireOption, v_d81136.questionnaireOptionFullWidth, v_f90ad7.selectedIds.includes(v_c58503) && v_d81136.questionnaireOptionSelected]}
                            onPress={() => v_c52828(v_a8cd21.id, v_c58503, true)}
                            activeOpacity={0.7}
                          >
                            <Text style={[v_d81136.questionnaireOptionText, v_f90ad7.selectedIds.includes(v_c58503) && v_d81136.questionnaireOptionTextSelected]}>
                              {v_8d41d7(`chat.questionnaire_smoking_options.${v_c58503}`)}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                      <TouchableOpacity
                        style={v_d81136.questionnaireCompleteButton}
                        onPress={() => v_e3b06a(v_a8cd21.id)}
                        activeOpacity={0.8}
                      >
                        <LinearGradient
                          colors={['#615FFF', '#AD46FF']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={v_d81136.questionnaireCompleteButtonGradient}
                        >
                          <Text style={v_d81136.questionnaireCompleteButtonText}>
                            {v_8d41d7('chat.questionnaire_complete', { count: v_f90ad7.selectedIds.length || 0 })}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  );
                }
                if (v_a2eb48) {
                  return (
                    <View style={v_d81136.questionnaireContainer}>
                      <Text style={v_d81136.questionnaireQuestion}>{v_8d41d7('chat.questionnaire_q5')}</Text>
                      <View style={v_d81136.questionnaireOptionsGrid}>
                        {v_42f050.map((v_c58503) => (
                          <TouchableOpacity
                            key={v_c58503}
                            style={[v_d81136.questionnaireOption, v_d81136.questionnaireOptionFullWidth, v_f90ad7.selectedIds.includes(v_c58503) && v_d81136.questionnaireOptionSelected]}
                            onPress={() => v_c52828(v_a8cd21.id, v_c58503, true)}
                            activeOpacity={0.7}
                          >
                            <Text style={[v_d81136.questionnaireOptionText, v_f90ad7.selectedIds.includes(v_c58503) && v_d81136.questionnaireOptionTextSelected]}>
                              {v_8d41d7(`chat.questionnaire_drinking_options.${v_c58503}`)}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                      <TouchableOpacity
                        style={v_d81136.questionnaireCompleteButton}
                        onPress={() => v_e3b06a(v_a8cd21.id)}
                        activeOpacity={0.8}
                      >
                        <LinearGradient
                          colors={['#615FFF', '#AD46FF']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={v_d81136.questionnaireCompleteButtonGradient}
                        >
                          <Text style={v_d81136.questionnaireCompleteButtonText}>
                            {v_8d41d7('chat.questionnaire_complete', { count: v_f90ad7.selectedIds.length || 0 })}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  );
                }
                const v_ccd7bf = v_f90ad7.selectedIds.length + v_f90ad7.otherValues.length;
                const v_bab22e = v_a8cd21.questionnaire.questionId === 'q2';
                const v_a366b0 = v_bab22e ? v_14e5f6 : v_34de63;
                const v_ef6c25 = v_bab22e ? 'chat.questionnaire_medication_options' : 'chat.questionnaire_options';
                const v_de31f5 = v_bab22e ? v_8d41d7('chat.questionnaire_q2') : v_8d41d7('chat.questionnaire_q1');
                const v_665b92 = v_bab22e ? v_8d41d7('chat.questionnaire_q2_instruction') : v_8d41d7('chat.questionnaire_q1_instruction');
                return (
                  <View style={v_d81136.questionnaireContainer}>
                    <Text style={v_d81136.questionnaireQuestion}>{v_de31f5}</Text>
                    <Text style={v_d81136.questionnaireInstruction}>{v_665b92}</Text>
                    <View style={v_d81136.questionnaireOptionsGrid}>
                      {v_a366b0.map((v_c58503) => (
                        <TouchableOpacity
                          key={v_c58503}
                          style={[v_d81136.questionnaireOption, v_f90ad7.selectedIds.includes(v_c58503) && v_d81136.questionnaireOptionSelected]}
                          onPress={() => v_c52828(v_a8cd21.id, v_c58503)}
                          activeOpacity={0.7}
                        >
                          <Text style={[v_d81136.questionnaireOptionText, v_f90ad7.selectedIds.includes(v_c58503) && v_d81136.questionnaireOptionTextSelected]}>
                            {v_8d41d7(`${v_ef6c25}.${v_c58503}`)}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    <TouchableOpacity
                      style={v_d81136.questionnaireOtherOption}
                      onPress={() => v_99af19(v_a8cd21.id)}
                      activeOpacity={0.7}
                    >
                      <Text style={v_d81136.questionnaireOtherOptionText}>{v_8d41d7('chat.questionnaire_other')}</Text>
                    </TouchableOpacity>
                    {v_f90ad7.showOtherInput && (
                      <View style={v_d81136.questionnaireOtherInputRow}>
                        <TextInput
                          style={v_d81136.questionnaireOtherInput}
                          placeholder={v_8d41d7('chat.questionnaire_other_placeholder')}
                          placeholderTextColor="#9CA3AF"
                          value={v_f90ad7.otherInputText}
                          onChangeText={(v_9b6134) => v_1f7836(v_a8cd21.id, v_9b6134)}
                        />
                        <TouchableOpacity
                          style={v_d81136.questionnaireAddButton}
                          onPress={() => v_bd7fbe(v_a8cd21.id)}
                          activeOpacity={0.8}
                        >
                          <Text style={v_d81136.questionnaireAddButtonText}>{v_8d41d7('chat.questionnaire_add')}</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    <TouchableOpacity
                      style={v_d81136.questionnaireCompleteButton}
                      onPress={() => v_e3b06a(v_a8cd21.id)}
                      activeOpacity={0.8}
                    >
                      <LinearGradient
                        colors={['#615FFF', '#AD46FF']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={v_d81136.questionnaireCompleteButtonGradient}
                      >
                        <Text style={v_d81136.questionnaireCompleteButtonText}>
                          {v_8d41d7('chat.questionnaire_complete', { count: v_ccd7bf })}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                );
              })()}
              {v_a8cd21.healthReport && (() => {
                const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2) || v_c86f08[0];
                const v_f08a5e = v_0c2f9b.name;
                const v_d5dda0 = new Date();
                const v_0dee40 = `${v_d5dda0.getFullYear()}.${String(v_d5dda0.getMonth() + 1).padStart(2, '0')}.${String(v_d5dda0.getDate()).padStart(2, '0')}`;
                return (
                  <View style={v_d81136.healthReportContainer}>
                    <Text style={v_d81136.healthReportTitle}>{v_8d41d7('chat.health_report_title')}</Text>
                    <Text style={v_d81136.healthReportSubtitle}>{v_8d41d7('chat.health_report_subtitle')}</Text>
                    <Text style={v_d81136.healthReportMeta}>{v_8d41d7('chat.health_report_patient')}: {v_f08a5e}  {v_8d41d7('chat.health_report_date')}: {v_0dee40}</Text>
                    <View style={v_d81136.healthReportSection}>
                      <View style={v_d81136.healthReportSectionBar} />
                      <Text style={v_d81136.healthReportSectionTitle}>{v_8d41d7('chat.health_report_section_physical')}</Text>
                    </View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_height')}</Text><Text style={v_d81136.healthReportValue}>170.0 cm</Text></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_weight')}</Text><Text style={v_d81136.healthReportValue}>68.5 kg</Text></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_bmi')}</Text><Text style={v_d81136.healthReportValue}>23.7 kg/m²</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeNormal]}><Text style={v_d81136.healthReportBadgeText}>{v_8d41d7('chat.health_report_status_normal')}</Text></View></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_waist')}</Text><Text style={v_d81136.healthReportValue}>82.0 cm</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeNormal]}><Text style={v_d81136.healthReportBadgeText}>{v_8d41d7('chat.health_report_status_normal')}</Text></View></View>
                    <View style={v_d81136.healthReportSection}>
                      <View style={v_d81136.healthReportSectionBar} />
                      <Text style={v_d81136.healthReportSectionTitle}>{v_8d41d7('chat.health_report_section_bp_vision')}</Text>
                    </View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_bp')}</Text><Text style={v_d81136.healthReportValue}>125/82 mmHg</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeCaution]}><Text style={[v_d81136.healthReportBadgeText, v_d81136.healthReportBadgeTextCaution]}>{v_8d41d7('chat.health_report_status_caution')}</Text></View></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_vision_left')}</Text><Text style={v_d81136.healthReportValue}>1.0</Text></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_vision_right')}</Text><Text style={v_d81136.healthReportValue}>1.0</Text></View>
                    <View style={v_d81136.healthReportSection}>
                      <View style={v_d81136.healthReportSectionBar} />
                      <Text style={v_d81136.healthReportSectionTitle}>{v_8d41d7('chat.health_report_section_blood')}</Text>
                    </View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_hemoglobin')}</Text><Text style={v_d81136.healthReportValue}>14.2 g/dL</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeNormal]}><Text style={v_d81136.healthReportBadgeText}>{v_8d41d7('chat.health_report_status_normal')}</Text></View></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_glucose')}</Text><Text style={v_d81136.healthReportValue}>102 mg/dL</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeCaution]}><Text style={[v_d81136.healthReportBadgeText, v_d81136.healthReportBadgeTextCaution]}>{v_8d41d7('chat.health_report_status_caution')}</Text></View></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_cholesterol')}</Text><Text style={v_d81136.healthReportValue}>195 mg/dL</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeNormal]}><Text style={v_d81136.healthReportBadgeText}>{v_8d41d7('chat.health_report_status_normal')}</Text></View></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_hdl')}</Text><Text style={v_d81136.healthReportValue}>52 mg/dL</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeNormal]}><Text style={v_d81136.healthReportBadgeText}>{v_8d41d7('chat.health_report_status_normal')}</Text></View></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_ldl')}</Text><Text style={v_d81136.healthReportValue}>118 mg/dL</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeNormal]}><Text style={v_d81136.healthReportBadgeText}>{v_8d41d7('chat.health_report_status_normal')}</Text></View></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_triglycerides')}</Text><Text style={v_d81136.healthReportValue}>125 mg/dL</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeNormal]}><Text style={v_d81136.healthReportBadgeText}>{v_8d41d7('chat.health_report_status_normal')}</Text></View></View>
                    <View style={v_d81136.healthReportRow}><Text style={v_d81136.healthReportLabel}>{v_8d41d7('chat.health_report_ast')}</Text><Text style={v_d81136.healthReportValue}>28 U/L</Text><View style={[v_d81136.healthReportBadge, v_d81136.healthReportBadgeNormal]}><Text style={v_d81136.healthReportBadgeText}>{v_8d41d7('chat.health_report_status_normal')}</Text></View></View>
                    <View style={[v_d81136.healthReportPrecautionBox]}>
                      <View style={v_d81136.healthReportPrecautionHeader}>
                        <Ionicons name="warning" size={18} color="#B45309" />
                        <Text style={v_d81136.healthReportPrecautionTitle}>{v_8d41d7('chat.health_report_precautions')}</Text>
                      </View>
                      <Text style={v_d81136.healthReportPrecautionItem}>• {v_8d41d7('chat.health_report_precaution_bp')}</Text>
                      <Text style={v_d81136.healthReportPrecautionItem}>• {v_8d41d7('chat.health_report_precaution_glucose')}</Text>
                      <Text style={v_d81136.healthReportPrecautionItem}>• {v_8d41d7('chat.health_report_precaution_lifestyle')}</Text>
                    </View>
                    <View style={v_d81136.healthReportImprovementSection}>
                      <View style={v_d81136.healthReportImprovementLine} />
                      <Ionicons name="bulb-outline" size={18} color="#3B82F6" style={v_d81136.healthReportImprovementIcon} />
                      <Text style={v_d81136.healthReportImprovementTitle}>{v_8d41d7('chat.health_report_improvement')}</Text>
                    </View>
                    <View style={v_d81136.healthReportImprovementBlock}>
                      <Text style={v_d81136.healthReportImprovementSubtitle}>1. {v_8d41d7('chat.health_report_improvement_diet')}</Text>
                      <Text style={v_d81136.healthReportImprovementText}>• {v_8d41d7('chat.health_report_improvement_diet_items')}</Text>
                    </View>
                    <View style={v_d81136.healthReportImprovementBlock}>
                      <Text style={v_d81136.healthReportImprovementSubtitle}>2. {v_8d41d7('chat.health_report_improvement_exercise')}</Text>
                      <Text style={v_d81136.healthReportImprovementText}>• {v_8d41d7('chat.health_report_improvement_exercise_items')}</Text>
                    </View>
                    <View style={v_d81136.healthReportImprovementBlock}>
                      <Text style={v_d81136.healthReportImprovementSubtitle}>3. {v_8d41d7('chat.health_report_improvement_lifestyle')}</Text>
                      <Text style={v_d81136.healthReportImprovementText}>• {v_8d41d7('chat.health_report_improvement_lifestyle_items')}</Text>
                    </View>
                    <View style={v_d81136.healthReportImprovementBlock}>
                      <Text style={v_d81136.healthReportImprovementSubtitle}>4. {v_8d41d7('chat.health_report_improvement_checkup')}</Text>
                      <Text style={v_d81136.healthReportImprovementText}>• {v_8d41d7('chat.health_report_improvement_checkup_items')}</Text>
                    </View>
                    <Text style={v_d81136.healthReportDoctorTitle}>{v_8d41d7('chat.health_report_doctor_opinion')}</Text>
                    <Text style={v_d81136.healthReportDoctorText}>{v_8d41d7('chat.health_report_doctor_text')}</Text>
                    <View style={v_d81136.healthReportButtons}>
                      <TouchableOpacity style={v_d81136.healthReportButtonOutline} onPress={() => v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.health_report_download_pdf'))} activeOpacity={0.8}>
                        <Feather name="download" size={18} color="#615FFF" />
                        <Text style={v_d81136.healthReportButtonOutlineText}>{v_8d41d7('chat.health_report_download_pdf')}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={v_d81136.healthReportButtonPrimary} onPress={() => v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.health_report_recommend_hospital'))} activeOpacity={0.8}>
                        <LinearGradient colors={['#615FFF', '#AD46FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={v_d81136.healthReportButtonGradient}>
                          <Text style={v_d81136.healthReportButtonPrimaryText}>{v_8d41d7('chat.health_report_recommend_hospital')}</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })()}
              {v_a8cd21.actionButton && (
                <TouchableOpacity
                  style={v_d81136.aiBubbleActionButton}
                  onPress={() => {
                    if (v_a8cd21.actionButton!.action === 'load_health_data') v_f26426();
                    else if (v_a8cd21.actionButton!.action === 'start_questionnaire') v_3736a1();
                  }}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#615FFF', '#AD46FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={v_d81136.aiBubbleActionButtonGradient}
                  >
                    {v_a8cd21.actionButton.action === 'load_health_data' ? (
                      <Stethoscope size={18} color="#FFFFFF" strokeWidth={2} />
                    ) : (
                      <Ionicons name="sparkles" size={18} color="#FFFFFF" />
                    )}
                    <Text style={v_d81136.aiBubbleActionButtonText}>{v_a8cd21.actionButton.label}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            </View>
            <Text style={v_d81136.aiMessageDateOuter}>{v_f8e6b9}</Text>
            {v_a8cd21.products && v_a8cd21.products.length > 0 && (
              <View style={v_d81136.productsContainer}>
                <ScrollView
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  onScroll={(v_9e86fd) => v_dd0316(v_9e86fd, v_a8cd21.id)}
                  scrollEventThrottle={16}
                  decelerationRate="fast"
                  snapToInterval={v_37c282}
                  snapToAlignment="start"
                  contentContainerStyle={v_d81136.productSwiperContent}
                >
                  {v_a8cd21.products.map(v_80b207)}
                </ScrollView>
                <View style={v_d81136.pagination}>
                  {v_a8cd21.products.map((v_37eab7, v_a56041) => (
                    <View
                      key={v_a56041}
                      style={[
                        v_d81136.paginationDot,
                        v_a56041 === v_2bcb8f && v_d81136.paginationDotActive,
                      ]}
                    />
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <MainLayout activeKey="aihinty">
      <StatusBar style={v_2f29a7 ? "dark" : "dark"} />
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <Header
          variant="analysis"
          title={v_8d41d7('chat.title')}
          subtitle={v_8d41d7('chat.subtitle')}
          containerStyle={{ paddingTop: v_033e14.top + v_9b1a04.medium }}
          leftAccessory={(
            <View style={v_d81136.headerLeft}>
              <TouchableOpacity
                onPress={() => v_5fe1ef(true)}
                style={v_d81136.headerIconButton}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="메뉴 열기"
              >
                <Feather name="menu" size={22} color="#374151" />
              </TouchableOpacity>
              <LinearGradient
                colors={['#4F39F6', '#9810FA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={v_d81136.headerIconGradient}
              >
                <Bot size={24} color="#FFFFFF" strokeWidth={2} />
              </LinearGradient>
            </View>
          )}
        />

        <KeyboardAvoidingView
          style={v_d81136.keyboardAvoid}
          behavior={v_326be8.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={v_326be8.OS === 'ios' ? v_033e14.top + 60 : 0}
        >
          {}
          <ScrollView
            ref={v_e99f51}
            style={v_d81136.chatArea}
            contentContainerStyle={v_d81136.chatContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={v_d81136.introChatContainer}>
              {}
              <View style={v_d81136.aiMessageRow}>
                <View style={v_d81136.aiAvatarWrap}>
                  <Image source={v_90fa17} style={v_d81136.aiAvatarImage} resizeMode="contain" />
                </View>
                <View style={v_d81136.aiBubbleWrap}>
                  <View style={v_d81136.aiBubble}>
                    <Text style={v_d81136.aiBubbleText}>{v_8d41d7('chat.ai_welcome')}</Text>
                  </View>
                  <Text style={v_d81136.aiMessageDateOuter}>
                    {new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
                  </Text>
                  {}
                  <View style={v_d81136.suggestionContainer}>
                    <Text style={v_d81136.suggestionTitle}>
                      {v_8d41d7('chat.can_ask_these') || '이러한 내용을 물어볼 수 있습니다'}
                    </Text>
                    <TouchableOpacity
                      style={v_d81136.suggestionButton}
                      onPress={() => v_f32824('내 최근 건강정보 분석해줘')}
                      activeOpacity={0.8}
                    >
                      <Text style={v_d81136.suggestionButtonText}>🏥 내 최근 건강정보 분석해줘</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={v_d81136.suggestionButton}
                      onPress={() => v_f32824('내 최근 피부정보 분석해줘')}
                      activeOpacity={0.8}
                    >
                      <Text style={v_d81136.suggestionButtonText}>✨ 내 최근 피부정보 분석해줘</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {v_fa56e0.map(v_82c167)}
          </ScrollView>

          {}
          <View style={v_d81136.inputContainer}>
            {}
            <View style={v_d81136.accountRow}>
              <AccountSelector
                accounts={v_c86f08}
                selectedAccountId={v_e7b2f2}
                onSelectAccount={v_07b9b4}
                onAddSubAccount={() => v_c65f5d.navigate('AddSubAccount')}
                onDeleteAccount={v_5bc46a}
                onLinkEmail={v_42b67a}
              />
            </View>

            {}
            <View style={[v_d81136.inputBar, v_3ba9c6 && v_d81136.inputBarFocused]}>
              <TextInput
                style={v_d81136.textInput}
                placeholder={v_8d41d7('chat.placeholder')}
                placeholderTextColor="#9CA3AF"
                value={v_a469c7}
                onChangeText={v_f32824}
                onSubmitEditing={v_465869}
                onFocus={() => v_655a4e(true)}
                onBlur={() => v_655a4e(false)}
                returnKeyType="send"
                multiline={false}
              />
              <TouchableOpacity
                onPress={v_465869}
                style={v_d81136.sendButtonWrap}
                activeOpacity={0.8}
                disabled={!v_a469c7.trim()}
              >
                <LinearGradient
                  colors={v_a469c7.trim() ? ['#4F39F6', '#E60076'] : ['#D1D5DB', '#9CA3AF']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={v_d81136.sendButton}
                >
                  <SendHorizontal size={18} color="#FFFFFF" strokeWidth={2} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>

      </SafeView>

      <SidebarMenu
        visible={v_2f29a7}
        onClose={() => v_5fe1ef(false)}
        onMenuItemPress={v_18219f}
        userProfile={{ name: 'TED' }}
      />
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginRight: 12,
  },
  headerIconButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: v_1bfbd0.headerIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconGradient: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  keyboardAvoid: {
    flex: 1,
  },

  chatArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  chatContent: {
    paddingHorizontal: v_9b1a04.small,
    paddingVertical: v_9b1a04.small,
    flexGrow: 1,
  },

  introChatContainer: {
    paddingTop: v_9b1a04.medium,
    paddingBottom: v_9b1a04.xlarge,
  },
  aiMessageRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: v_9b1a04.large,
    gap: 0,
  },
  aiAvatarWrap: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiAvatarImage: {
    width: 32,
    height: 32,
  },
  aiBubbleWrap: {
    flex: 1,
    maxWidth: '85%',
  },
  aiBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderTopLeftRadius: 4,
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small + 4,
    ...(v_326be8.OS === 'ios'
      ? {
        shadowColor: '#615FFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      }
      : {
        shadowColor: '#615FFF',
        elevation: 2,
        borderWidth: 1,
        borderColor: '#E5E7EB',
      }),
  },
  loadingBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  aiBubbleText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#374151',
    lineHeight: 22,
  },
  aiBubbleActionButton: {
    marginTop: v_9b1a04.medium,
    borderRadius: 10,
    overflow: 'hidden',
  },
  aiBubbleActionButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  aiBubbleActionButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
  },
  healthReportContainer: {
    marginTop: v_9b1a04.medium,
    paddingBottom: v_9b1a04.xlarge,
  },
  healthReportTitle: {
    fontSize: v_ef658a.large + 2,
    fontFamily: v_843035.bold,
    color: '#111827',
    textAlign: 'center',
    marginBottom: 4,
  },
  healthReportSubtitle: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: v_9b1a04.medium,
  },
  healthReportMeta: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    marginBottom: v_9b1a04.medium,
  },
  healthReportSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
  },
  healthReportSectionBar: {
    width: 4,
    height: 18,
    backgroundColor: '#615FFF',
    borderRadius: 2,
    marginRight: 8,
  },
  healthReportSectionTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#374151',
  },
  healthReportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 6,
    gap: 8,
  },
  healthReportLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    minWidth: 120,
  },
  healthReportValue: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: '#374151',
    flex: 1,
  },
  healthReportBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  healthReportBadgeNormal: {
    backgroundColor: '#D1FAE5',
  },
  healthReportBadgeCaution: {
    backgroundColor: '#FEF3C7',
  },
  healthReportBadgeText: {
    fontSize: 11,
    fontFamily: v_843035.semibold,
    color: '#065F46',
  },
  healthReportBadgeTextCaution: {
    color: '#92400E',
  },
  healthReportPrecautionBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: v_9b1a04.medium,
    marginTop: v_9b1a04.medium,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  healthReportPrecautionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  healthReportPrecautionTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#92400E',
  },
  healthReportPrecautionItem: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#78350F',
    lineHeight: 20,
    marginBottom: 4,
  },
  healthReportImprovementSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
  },
  healthReportImprovementLine: {
    width: 4,
    height: 18,
    backgroundColor: '#93C5FD',
    borderRadius: 2,
    marginRight: 8,
  },
  healthReportImprovementIcon: {
    marginRight: 6,
  },
  healthReportImprovementTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#374151',
  },
  healthReportImprovementBlock: {
    marginBottom: v_9b1a04.small,
  },
  healthReportImprovementSubtitle: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
    color: '#374151',
    marginBottom: 4,
  },
  healthReportImprovementText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    lineHeight: 20,
  },
  healthReportDoctorTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#374151',
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
  },
  healthReportDoctorText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: v_9b1a04.medium,
  },
  healthReportButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: v_9b1a04.small,
    marginBottom: 4,
  },
  healthReportButtonOutline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#615FFF',
  },
  healthReportButtonOutlineText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
    color: '#615FFF',
  },
  healthReportButtonPrimary: {
    flex: 1,
    borderRadius: 10,
    ...(v_326be8.OS === 'android' ? {} : { overflow: 'hidden' }),
  },
  healthReportButtonGradient: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  healthReportButtonPrimaryText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
  },
  questionnaireContainer: {
    marginTop: v_9b1a04.medium,
  },
  questionnaireQuestion: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#374151',
    marginBottom: 6,
  },
  questionnaireCompletedResult: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    marginTop: 4,
  },
  questionnaireInstruction: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    marginBottom: v_9b1a04.medium,
  },
  questionnaireAllergyInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#374151',
    marginBottom: v_9b1a04.medium,
  },
  questionnaireOptionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: v_9b1a04.small,
  },
  questionnaireOption: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    width: '47%',
  },
  questionnaireOptionSelected: {
    backgroundColor: '#E0E7FF',
  },
  questionnaireOptionFullWidth: {
    width: '100%',
  },
  questionnaireOptionText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#374151',
  },
  questionnaireOptionTextSelected: {
    fontFamily: v_843035.semibold,
    color: '#615FFF',
  },
  questionnaireOtherOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    marginBottom: v_9b1a04.small,
  },
  questionnaireOtherOptionText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#374151',
  },
  questionnaireOtherInputRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: v_9b1a04.small,
  },
  questionnaireOtherInput: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#374151',
  },
  questionnaireAddButton: {
    backgroundColor: '#615FFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  questionnaireAddButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
  },
  questionnaireCompleteButton: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: v_9b1a04.small,
  },
  questionnaireCompleteButtonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  questionnaireCompleteButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
  },
  aiMessageDateOuter: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
    marginTop: 6,
  },
  suggestionContainer: {
    marginTop: v_9b1a04.medium,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(124, 134, 255, 0.2)',
  },
  suggestionTitle: {
    fontSize: v_ef658a.small,
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: v_843035.regular,
  },
  suggestionButton: {
    backgroundColor: '#615FFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  suggestionButtonText: {
    color: '#FFFFFF',
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
  },

  userMessageContainer: {
    alignItems: 'flex-end',
    marginBottom: v_9b1a04.medium,
  },
  userBubbleWrap: {
    maxWidth: '80%',
    alignItems: 'flex-end',
  },
  userMessage: {
    borderRadius: 20,
    borderTopRightRadius: 4,
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small + 4,
    maxWidth: '80%',
  },
  userMessageText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#FFFFFF',
    lineHeight: 22,
  },
  userMessageDate: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 6,
    alignSelf: 'flex-end',
  },
  userMessageDateOuter: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
    marginTop: 6,
    alignSelf: 'flex-end',
  },

  aiMessageContainer: {
    alignItems: 'flex-start',
    marginBottom: v_9b1a04.large,
  },

  productsContainer: {
    marginTop: v_9b1a04.small,
    marginHorizontal: -v_9b1a04.large,
    height: 360, 
    overflow: 'hidden',
  },
  productSwiperContent: {
    paddingHorizontal: v_9b1a04.large,
  },
  productCardWrapper: {
    width: v_37c282,
    paddingRight: v_9b1a04.medium,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    height: 320, 
  },
  productImageContainer: {
    width: '100%',
    height: 140,
    backgroundColor: '#F8F9FA',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#EF4444',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
  },
  productInfo: {
    padding: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.medium,
    paddingBottom: v_9b1a04.medium,
    height: 180, 
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: '#111827',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    lineHeight: 18,
    marginBottom: v_9b1a04.small,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.medium,
  },
  originalPrice: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  currentPrice: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: '#EF4444',
  },
  viewProductButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#4A5099',
    paddingVertical: 10,
    borderRadius: 8,
  },
  viewProductButtonText: {
    color: '#FFFFFF',
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: v_9b1a04.medium,
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
  },
  paginationDotActive: {
    backgroundColor: '#4A5099',
    width: 20,
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

  inputContainer: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  accountRow: {
    marginBottom: v_9b1a04.small,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.small,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  inputBarFocused: {
    borderColor: '#4F39F6',
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    paddingVertical: 10,
  },
  sendButtonWrap: {
    marginLeft: 4,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: v_9b1a04.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default v_02d653;
