import v_a3453e, { v_c4deb2, v_e662ae, v_5ab095 } from 'bapkr';
import {
  v_39a996,
  v_0e1f26,
  v_e767d1,
  v_aa7413,
  v_326be8,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04, v_624bd2 } from '../constants';
import {
  v_8e2768,
  v_fa3feb,
  v_dd725b,
  v_729608,
  v_e2ca42,
  v_570c34,
  v_e775af,
} from '../components';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import v_f595b9, { v_003e74, v_bf60de, v_9aafc7, v_c9c101, v_cd1400, v_8959a6 } from 'vpztcxjmsfanunln';
import type { v_8ad91b } from '../navigation';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_4eac84 } from 'tdbilgxptaometuphydosyywsglhnlfgkfkzstthk';
import * as v_6d394a from 'rpswwnotkqebxswfnogjwnyum';
import * as v_2c8bdd from 'refjsvmnhpbvuhzr';
import { v_e4a763 } from '../utils/env';
import { v_67ec53, v_d41982, v_545a63, v_2cd4e6 } from '../services';
import type { v_8adb2f } from '../services/authApi';
import { v_1fc886 } from '../services/authApi';
import { v_c1a440 } from '../services/signupApi';
import { v_87ba9a } from '../navigation/postLoginNavigation';
import v_9a8286 from '../services/apiClient';

const v_a98e10 = ({ size: v_05b441 = 20 }: { size?: number }) => (
  <Svg width={v_05b441} height={v_05b441} viewBox="0 0 120 111" fill="none">
    <Path
      d="M59.9569 0C26.7666 0 0 21.4131 0 47.4088C0 64.2828 11.1349 79.058 27.8373 87.4944L22.1842 108.609C22.0776 108.924 22.0613 109.265 22.1369 109.589C22.2125 109.914 22.3771 110.213 22.6125 110.45C22.9556 110.752 23.397 110.919 23.8545 110.92C24.2337 110.891 24.5935 110.74 24.8822 110.493L49.2078 94.0904C52.7986 94.5854 56.4181 94.8425 60.0433 94.8607C93.1911 94.8607 120 73.4477 120 47.4088C120 21.3703 93.1047 0 59.9569 0Z"
      fill="#392020"
    />
    <Path
      d="M21.4971 40.1318H14.9723C14.1637 40.1555 13.365 39.9468 12.6695 39.5303C12.3608 39.3354 12.0953 39.0782 11.8899 38.775C11.6843 38.4719 11.5433 38.1292 11.4755 37.7686C11.4548 37.54 11.4548 37.3102 11.4755 37.0816C11.4552 36.6537 11.5376 36.227 11.7158 35.8381C11.894 35.4492 12.1626 35.1094 12.4989 34.8474C13.2424 34.3049 14.1398 34.0183 15.0576 34.0308H34.717C35.5321 34.0019 36.3362 34.2271 37.0198 34.6753C37.3358 34.8616 37.6069 35.1164 37.8134 35.4211C38.0198 35.7257 38.1567 36.0727 38.2139 36.437C38.2347 36.6512 38.2347 36.8672 38.2139 37.0816C38.234 37.5156 38.1518 37.9481 37.9738 38.3439C37.7959 38.7398 37.5275 39.0872 37.1904 39.3583C36.4651 39.9 35.5764 40.1735 34.6743 40.1318H28.3629V62.7314C28.3885 63.2119 28.3146 63.6935 28.1457 64.1451C27.9769 64.5957 27.7169 65.0067 27.382 65.3513C27.061 65.6809 26.6752 65.9388 26.2491 66.109C25.8231 66.2792 25.3666 66.3584 24.9086 66.3402C24.1077 66.3626 23.3238 66.1047 22.6911 65.6092C22.0887 65.1255 21.6799 64.4394 21.5397 63.6764C21.4975 63.3628 21.4975 63.0449 21.5397 62.7314L21.4971 40.1318Z"
      fill="#FEE500"
    />
    <Path
      d="M40.099 35.7062C40.2866 34.9992 40.727 34.3869 41.3357 33.9875C41.9842 33.6172 42.7232 33.4385 43.4679 33.472H45.0884C45.8786 33.4434 46.6612 33.6368 47.3486 34.0305C48.077 34.524 48.5947 35.2755 48.7985 36.1357L57.3275 60.4102C57.5487 61.0438 57.7337 61.6891 57.8819 62.3441C57.8965 62.616 57.8965 62.8878 57.8819 63.1596C57.8963 63.5792 57.8199 63.9955 57.6578 64.3818C57.4958 64.7671 57.2521 65.1128 56.9437 65.3943C56.645 65.7025 56.2862 65.9465 55.89 66.1092C55.4939 66.2708 55.0686 66.35 54.6409 66.3393C53.9831 66.4056 53.3226 66.2462 52.7655 65.8876C52.2086 65.5291 51.7876 64.9919 51.5704 64.3636L49.7793 59.0789H38.5637L36.7726 64.3636C36.5608 65.0047 36.1347 65.5527 35.567 65.9122C34.9995 66.2729 34.3253 66.4238 33.6596 66.3393C32.9384 66.3585 32.2321 66.1316 31.6553 65.695C31.0932 65.2444 30.714 64.6034 30.5891 63.8906C30.5664 63.6477 30.5664 63.4026 30.5891 63.1596C30.5159 62.7337 30.5159 62.2981 30.5891 61.8711C30.5891 61.3991 30.8877 60.8833 31.0582 60.4102L40.099 35.7062ZM44.3635 41.3347L40.3122 54.2239H48.372L44.3635 41.3347Z"
      fill="#FEE500"
    />
    <Path
      d="M58.8572 37.0818C58.8139 36.1175 59.1512 35.1754 59.7953 34.461C60.1231 34.1281 60.5161 33.8681 60.9495 33.6979C61.3829 33.5276 61.8471 33.4507 62.3114 33.4723C63.1102 33.463 63.8899 33.72 64.5294 34.203C65.1211 34.7069 65.5152 35.4079 65.6374 36.1791C65.6799 36.4784 65.6799 36.7824 65.6374 37.0818V59.6809H77.365C78.1776 59.6702 78.9775 59.8928 79.668 60.3251C79.9782 60.5178 80.2448 60.7746 80.4509 61.0775C80.657 61.3815 80.7972 61.725 80.862 62.0867C80.862 62.0867 80.862 62.5159 80.862 62.731C80.8822 63.1591 80.7993 63.585 80.6219 63.9735C80.4435 64.3631 80.1747 64.7034 79.839 64.9656C79.0954 65.5072 78.1978 65.794 77.28 65.7811H62.8659C61.9481 65.8411 61.0356 65.6003 60.2643 65.0941C59.575 64.575 59.1156 63.8034 58.9851 62.9461C58.9539 62.4741 58.9539 62 58.9851 61.5281L58.8572 37.0818Z"
      fill="#FEE500"
    />
    <Path
      d="M81.6289 37.0832C81.6034 36.1219 81.938 35.1862 82.5669 34.4625C83.2064 33.8774 84.0264 33.5318 84.889 33.4848C85.7505 33.438 86.6025 33.6921 87.3004 34.2045C87.9059 34.704 88.3149 35.4047 88.4519 36.1806C88.4732 36.481 88.4732 36.7828 88.4519 37.0832V47.6091L99.2415 35.0635C99.6569 34.6355 100.099 34.2342 100.563 33.8609C101.002 33.5982 101.504 33.4639 102.013 33.4739C102.759 33.4697 103.487 33.6947 104.103 34.1184C104.393 34.3151 104.64 34.569 104.831 34.8642C105.021 35.1595 105.151 35.4903 105.212 35.8371C105.229 35.9222 105.229 36.01 105.212 36.0951C105.191 36.1943 105.191 36.2965 105.212 36.3956C105.211 36.8477 105.093 37.2919 104.871 37.6847C104.644 38.1007 104.372 38.4893 104.06 38.8443L96.981 46.664L105.51 59.9822V60.4125C105.953 61.0278 106.298 61.7096 106.534 62.432V62.646C106.583 63.1448 106.512 63.6467 106.326 64.1112C106.14 64.5746 105.846 64.9866 105.468 65.3098C104.756 65.8524 103.886 66.1392 102.995 66.1264C102.402 66.151 101.813 66.0172 101.289 65.74C100.72 65.3558 100.253 64.84 99.9235 64.2364L91.9914 51.347L88.1959 55.3428V62.5176C88.2214 63.4787 87.8868 64.414 87.2579 65.1386C86.9212 65.4703 86.5207 65.7293 86.0798 65.8995C85.6401 66.0686 85.1705 66.1467 84.6999 66.1264C83.9128 66.1435 83.1448 65.8856 82.5244 65.3965C81.9221 64.9128 81.5131 64.2257 81.3729 63.4626C81.3314 63.149 81.3314 62.8312 81.3729 62.5176L81.6289 37.0832Z"
      fill="#FEE500"
    />
  </Svg>
);

const v_5e5451 = ({ size: v_05b441 = 20 }: { size?: number }) => (
  <Svg width={v_05b441} height={v_05b441} viewBox="0 0 110 108" fill="none">
    <Path
      d="M74.2856 57.553L33.5715 0H0V108H35.7144V50.447L76.4285 108H110V0H74.2856V57.553Z"
      fill="white"
    />
  </Svg>
);

const v_6ccf4f = ({ size: v_05b441 = 24 }: { size?: number }) => (
  <Svg width={v_05b441} height={v_05b441} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90912H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7637 23.04 12.2614Z"
      fill="#4285F4"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23.4998C15.105 23.4998 17.7081 22.47 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 12 18.9259C9.00474 18.9259 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z"
      fill="#34A853"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z"
      fill="#FBBC05"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z"
      fill="#EA4335"
    />
  </Svg>
);

const v_03733d = ({ size: v_05b441 = 20 }: { size?: number }) => (
  <Svg width={v_05b441} height={v_05b441} viewBox="0 0 102 120" fill="none">
    <Path
      d="M99.8622 93.5166C98.031 97.7088 95.8632 101.568 93.3516 105.116C89.9286 109.953 87.1254 113.301 84.9654 115.16C81.6162 118.212 78.0288 119.775 74.1864 119.864C71.4282 119.864 68.1024 119.086 64.23 117.508C60.3456 115.938 56.7756 115.16 53.5116 115.16C50.0881 115.16 46.4165 115.938 42.4893 117.508C38.5561 119.086 35.3876 119.908 32.965 119.99C29.2807 120.145 25.6084 118.538 21.9428 115.16C19.6032 113.138 16.6768 109.672 13.1712 104.761C9.40992 99.516 6.31764 93.435 3.89508 86.502C1.30062 79.0134 0 71.7618 0 64.7412C0 56.699 1.75356 49.763 5.26596 43.9505C8.02638 39.2818 11.6987 35.599 16.2949 32.8953C20.8911 30.1917 25.8573 28.814 31.2055 28.7258C34.1318 28.7258 37.9693 29.6228 42.7382 31.3858C47.4936 33.1546 50.5471 34.0516 51.8856 34.0516C52.8864 34.0516 56.2788 33.0027 62.0292 30.9117C67.467 28.9724 72.0564 28.1695 75.816 28.4858C86.004 29.3006 93.6582 33.2805 98.7486 40.4506C89.637 45.9216 85.1298 53.5843 85.2192 63.4146C85.3014 71.0712 88.1046 77.4426 93.6132 82.5018C96.1098 84.8502 98.898 86.6646 102 87.9534C101.327 89.8872 100.617 91.7388 99.8622 93.5166ZM76.4964 2.40068C76.4964 8.40204 74.2836 14.0055 69.8736 19.192C64.5516 25.3577 58.1142 28.9206 51.1338 28.3584C51.045 27.6385 50.9933 26.8807 50.9933 26.0844C50.9933 20.3231 53.5242 14.1574 58.0188 9.11604C60.2628 6.56352 63.1164 4.44114 66.5772 2.74808C70.0308 1.08028 73.2972 0.157945 76.3692 0C76.4586 0.80229 76.4964 1.60471 76.4964 2.40068Z"
      fill="white"
    />
  </Svg>
);

type Props = v_432191<v_8ad91b, 'Login'>;

const LoginScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();

  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_adc076, v_52b279] = v_5ab095('');

  const [v_2129ec, v_874dfe] = v_5ab095(true);
  const [v_cd31a8, v_deef62] = v_5ab095(false);
  const [v_ac3ab7, v_028502] = v_5ab095(false);
  const [v_153a89, v_879b56] = v_5ab095<{
    visible: boolean;
    title: string;
    message: string;
    onConfirm?: () => void;
  }>({
    visible: false,
    title: '',
    message: '',
  });

  const [v_a0ad57, v_7984d2] = v_5ab095(false);
  const [v_e2bd5a, v_889581] = v_5ab095('');
  const [v_0b3ebe, v_241a35] = v_5ab095('');
  const [v_44c732, v_db7885] = v_5ab095(false);
  const v_c85cb5 = v_e662ae(false);
  const v_95d78d = v_e662ae<v_8adb2f | null>(null);

  v_c4deb2(() => {
    const v_219084 = async () => {
      try {
        const v_39de0e = await v_e84827.getItem(v_624bd2.savedEmail);
        if (v_39de0e) {
          v_fedf34(v_39de0e);
        }
      } catch (v_5e9bfe) {
        console.warn('이메일 정보를 불러오지 못했습니다:', v_5e9bfe);
      }
    };

    v_219084();
  }, []);

  v_c4deb2(() => {
    const v_b55c88 = v_0e1f26.addListener(
      v_326be8.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => v_028502(true),
    );
    const v_88ec6a = v_0e1f26.addListener(
      v_326be8.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => v_028502(false),
    );

    return () => {
      v_b55c88.remove();
      v_88ec6a.remove();
    };
  }, []);

  const v_1d0f03 = (v_3b402b) => {
    const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return v_9a3638.test(v_3b402b);
  };

  const v_6ca26b = () => {
    v_c65f5d.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const v_889fad = (v_9f1622, v_a8cd21, v_e2be2d) => {
    v_879b56({
      visible: true,
      title: v_9f1622,
      message: v_a8cd21,
      onConfirm: v_e2be2d,
    });
  };

  const v_34f542 = () => {
    const v_9b064f = v_153a89.onConfirm;
    v_879b56({
      visible: false,
      title: '',
      message: '',
      onConfirm: undefined,
    });
    v_9b064f?.();
  };

  const v_d4705b = async () => {
    if (v_e2bd5a.length < 8) {
      v_889fad(v_8d41d7('common.error'), '비밀번호는 8자 이상이어야 합니다.');
      return;
    }
    if (v_e2bd5a !== v_0b3ebe) {
      v_889fad(v_8d41d7('common.error'), '비밀번호가 일치하지 않습니다.');
      return;
    }
    v_db7885(true);
    try {
      await v_9a8286.post('/oth-path', { new_password: v_e2bd5a });
      v_7984d2(false);
      v_889581('');
      v_241a35('');
      v_87ba9a(v_c65f5d, v_95d78d.current ?? {});
    } catch {
      v_889fad(v_8d41d7('common.error'), '비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
    } finally {
      v_db7885(false);
    }
  };

  const v_ec4736 = async () => {
    const v_8f37ac = v_e0c7e8.trim().toLowerCase();

    if (!v_8f37ac) {
      v_889fad(v_8d41d7('common.error'), v_8d41d7('login.error_empty_email'));
      return;
    }

    if (!v_1d0f03(v_8f37ac)) {
      v_889fad(v_8d41d7('common.error'), v_8d41d7('login.error_invalid_email'));
      return;
    }

    if (!v_adc076.trim()) {
      v_889fad(v_8d41d7('common.error'), v_8d41d7('login.error_empty_password'));
      return;
    }

    try {
      const v_bd4b7d = await v_67ec53({
        email: v_8f37ac,
        password: v_adc076,
      });
      await v_d41982(v_bd4b7d, v_2129ec);

      const v_b095d7 = (v_bd4b7d as any).member ?? (v_bd4b7d as any).user;
      if (v_b095d7?.force_password_change) {
        v_95d78d.current = v_bd4b7d;
        v_c85cb5.current = true;
        v_7984d2(true);
        return;
      }

      if (__DEV__) {
        console.log('[Perf] LoginScreen: navigation.reset(home) 호출 직전', { _ts: Date.now(), _time: new Date().toISOString() });
      }
      v_87ba9a(v_c65f5d, v_bd4b7d);
    } catch (v_5e9bfe) {
      if (v_1fc886(v_5e9bfe)) {
        const v_5ab5bd = v_5e9bfe.details ?? {};
        const v_3dba52 =
          (typeof v_5ab5bd.email === 'string' && v_5ab5bd.email) || v_8f37ac;
        const v_966f6a =
          typeof v_5ab5bd.mobile === 'string' && v_5ab5bd.mobile ? v_5ab5bd.mobile : undefined;
        const v_982d62 =
          v_5ab5bd.mobile_code != null ? String(v_5ab5bd.mobile_code) : null;
        v_889fad(
          v_8d41d7('login.error_pending_title'),
          v_8d41d7('login.error_pending_message'),
          async () => {
            try {
              await v_c1a440({ email: v_3dba52, purpose: 'signup' });
            } catch (v_b8f4ab) {

              if (__DEV__) console.warn('[Login] pending verification resend failed', v_b8f4ab);
            }
            v_c65f5d.navigate('EmailVerification', {
              email: v_3dba52,
              purpose: 'signup',
              channel: 'email',
              mobile: v_966f6a,
              mobile_code: v_982d62,
              redirectTo: 'Login',
            });
          }
        );
        return;
      }
      const v_4b5200 = v_8d41d7('login.error_unknown');
      let v_d6bda5 = v_4b5200;
      if (v_5e9bfe instanceof Error) {
        const v_75195c = v_5e9bfe.message || '';
        if (/invalid email or password/i.test(v_75195c)) {
          v_d6bda5 = v_8d41d7('login.error_failed');
        } else if (/account is deactivated/i.test(v_75195c)) {
          v_d6bda5 = v_8d41d7('login.error_deactivated');
        } else {
          v_d6bda5 = v_75195c;
        }
      }
      v_889fad(v_8d41d7('login.error_failed'), v_d6bda5);
    } finally {

    }
  };

  const v_40f9f9 = async () => {
    const v_c9c489 = v_e4a763();
    const v_e3f3fd = v_c9c489.NAVER_CLIENT_ID;
    const v_ce8a7f = v_c9c489.NAVER_CLIENT_SECRET;
    const v_f41eea = v_c9c489.NAVER_REDIRECT_URI;
    if (__DEV__) console.log('[Naver] 로그인 시도', { hasClientId: !!v_e3f3fd, redirectUri: v_f41eea });
    if (!v_e3f3fd || !v_ce8a7f) {
      v_889fad(v_8d41d7('common.error'), '네이버 로그인 설정이 없습니다.');
      return;
    }
    if (!v_f41eea || (!v_f41eea.startsWith('https://') && !v_f41eea.startsWith('http://'))) {
      v_889fad(v_8d41d7('common.error'), '네이버 Callback URL(EXPO_PUBLIC_NAVER_REDIRECT_URI)을 설정해주세요.');
      return;
    }
    v_deef62(true);
    try {
      const v_b6e533 = Math.random().toString(36).slice(2, 15);
      const v_04129a =
        `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${encodeURIComponent(v_e3f3fd)}` +
        `&state=${encodeURIComponent(v_b6e533)}&redirect_uri=${encodeURIComponent(v_f41eea)}`;
      const v_43c42e = await v_2c8bdd.openAuthSessionAsync(v_04129a, v_f41eea);
      if (__DEV__) console.log('[Naver] 인증 결과', { type: v_43c42e.type, hasUrl: !!(v_43c42e as { url?: string }).url });
      if (v_43c42e.type !== 'success' || !v_43c42e.url) {
        if (v_43c42e.type === 'cancel') {
          if (__DEV__) console.log('[Naver] 사용자 취소');
          return;
        }
        v_889fad(v_8d41d7('login.error_failed'), v_8d41d7('login.error_unknown'));
        return;
      }
      const v_f71b56 = v_43c42e.url;
      const v_a63110 = v_f71b56.match(/\?([^#]+)/);
      const v_24baff = new URLSearchParams(v_a63110 ? v_a63110[1] : '');
      const v_c99bd2 = v_24baff.get('code');
      const v_b6f6e8 = v_24baff.get('state');
      const v_5e9bfe = v_24baff.get('error');
      if (__DEV__) console.log('[Naver] 콜백 파싱', { hasCode: !!v_c99bd2, stateMatch: v_b6f6e8 === v_b6e533, error: v_5e9bfe });
      if (v_5e9bfe) {
        v_889fad(v_8d41d7('login.error_failed'), v_24baff.get('error_description') || v_5e9bfe);
        return;
      }
      if (v_b6f6e8 !== v_b6e533 || !v_c99bd2) {
        v_889fad(v_8d41d7('login.error_failed'), v_8d41d7('login.error_unknown'));
        return;
      }
      const v_5c81fd = await fetch('https://nid.naver.com/oauth2.0/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: v_e3f3fd,
          client_secret: v_ce8a7f,
          code: v_c99bd2,
          state: v_b6e533,
        }).toString(),
      });
      const v_fb7579 = (await v_5c81fd.json()) as { access_token?: string; error?: string };
      if (__DEV__) console.log('[Naver] 토큰 교환', { ok: v_5c81fd.ok, hasAccessToken: !!v_fb7579.access_token, error: v_fb7579.error });
      if (!v_5c81fd.ok || !v_fb7579.access_token) {
        v_889fad(v_8d41d7('login.error_failed'), v_fb7579.error || v_8d41d7('login.error_unknown'));
        return;
      }
      const v_aa8b54 = await v_545a63({ provider: 'naver', token: v_fb7579.access_token });
      if (__DEV__) console.log('[Naver] social-login 결과', { needsSignup: v_2cd4e6(v_aa8b54), email: v_aa8b54.email });
      if (v_2cd4e6(v_aa8b54)) {
        v_c65f5d.navigate('Signup', { email: v_aa8b54.email, fromSocial: 'naver' });
        return;
      }
      await v_d41982(v_aa8b54, v_2129ec);
      if (__DEV__) console.log('[Naver] 로그인 완료 → home');
      v_87ba9a(v_c65f5d, v_aa8b54);
    } catch (v_5e9bfe) {
      if (__DEV__) console.log('[Naver] 에러', v_5e9bfe instanceof Error ? v_5e9bfe.message : v_5e9bfe);
      const v_a8cd21 = v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('login.error_unknown');
      v_889fad(v_8d41d7('login.error_failed'), v_a8cd21);
    } finally {
      v_deef62(false);
    }
  };

  const v_6dd38d = async () => {
    if (__DEV__) console.log('[Google] ① 로그인 시작', { platform: v_326be8.OS });
    v_deef62(true);
    try {

      if (v_326be8.OS === 'android') {
        if (__DEV__) console.log('[Google] ② Play Services 체크 시작');
        const v_a11c85 = await v_4eac84.hasPlayServices({ showPlayServicesUpdateDialog: true });
        if (__DEV__) console.log('[Google] ② Play Services 결과:', { hasPlayServices: v_a11c85 });
        if (!v_a11c85) {
          if (__DEV__) console.warn('[Google] ② Play Services 없음 → 중단');
          v_889fad(v_8d41d7('common.error'), v_8d41d7('login.error_unknown'));
          return;
        }
      }

      if (__DEV__) {
        try {
          const v_f73be6 = await v_4eac84.getCurrentUser();
          console.log('[Google] ③ 현재 세션:', {
            hasUser: !!v_f73be6,
            email: v_f73be6?.user?.email ?? '(없음)',
          });
        } catch (v_9e86fd) {
          console.log('[Google] ③ getCurrentUser 에러 (무시):', v_9e86fd);
        }
      }

      if (__DEV__) console.log('[Google] ④ GoogleSignin.signIn() 호출');
      const v_3393e3 = await v_4eac84.signIn();
      if (__DEV__) {
        console.log('[Google] ④ signIn 응답:', {
          type: v_3393e3.type,
          hasData: !!v_3393e3.data,
          hasIdToken: !!(v_3393e3 as { data?: { idToken?: string } }).data?.idToken,
          idTokenLength: (v_3393e3 as { data?: { idToken?: string } }).data?.idToken?.length ?? 0,
          email: (v_3393e3 as { data?: { user?: { email?: string } } }).data?.user?.email ?? '(없음)',
          dataKeys: v_3393e3.data ? Object.keys(v_3393e3.data) : [],
        });
      }

      if (v_3393e3.type !== 'success' || !v_3393e3.data?.idToken) {
        if (v_3393e3.type === 'cancelled') {
          if (__DEV__) console.log('[Google] ④ 사용자 취소');
          return;
        }
        if (__DEV__) console.warn('[Google] ④ idToken 없음 또는 type 불일치 → 중단', { type: v_3393e3.type });
        v_889fad(v_8d41d7('common.error'), v_8d41d7('login.error_unknown'));
        return;
      }

      const v_b50834 = v_3393e3.data.idToken;
      if (__DEV__) console.log('[Google] ⑤ socialLogin 호출', { tokenLength: v_b50834.length, tokenPreview: `${v_b50834.slice(0, 20)}...` });

      const v_43c42e = await v_545a63({ provider: 'google', token: v_b50834 });
      if (__DEV__) {
        console.log('[Google] ⑤ socialLogin 결과:', {
          needsSignup: v_2cd4e6(v_43c42e),
          resultKeys: Object.keys(v_43c42e),
        });
      }

      if (v_2cd4e6(v_43c42e)) {
        if (__DEV__) console.log('[Google] ⑤ 회원가입 필요 → Signup 이동', { email: v_43c42e.email });
        v_c65f5d.navigate('Signup', { email: v_43c42e.email, fromSocial: 'google' });
        return;
      }

      if (__DEV__) console.log('[Google] ⑥ persistAuthSession 호출');
      await v_d41982(v_43c42e, v_2129ec);
      if (__DEV__) console.log('[Google] ⑦ 로그인 완료 → home 이동');
      v_87ba9a(v_c65f5d, v_43c42e);
    } catch (v_5e9bfe) {
      const v_c99bd2 = v_5e9bfe && typeof v_5e9bfe === 'object' && 'code' in v_5e9bfe ? (v_5e9bfe as { code: string }).code : '';
      if (__DEV__) {
        console.error('[Google] catch 에러:', {
          code: v_c99bd2,
          message: v_5e9bfe instanceof Error ? v_5e9bfe.message : String(v_5e9bfe),
          error: v_5e9bfe,
        });
      }
      if (v_c99bd2 === 'SIGN_IN_CANCELLED' || v_c99bd2 === '12501') {
        if (__DEV__) console.log('[Google] 사용자 취소 코드 감지 → 조용히 종료');
        return;
      }

      const v_badeaf = v_5e9bfe instanceof Error ? v_5e9bfe.message.trim() : '';
      const v_e629b5 = v_badeaf || v_8d41d7('login.error_unknown');
      v_889fad(v_8d41d7('login.error_failed'), v_e629b5);
    } finally {
      v_deef62(false);
    }
  };

  const v_ef4111 = async () => {
    if (v_326be8.OS !== 'ios') {
      v_889fad(v_8d41d7('login.error_failed'), v_8d41d7('login.apple_ios_only'));
      return;
    }
    v_deef62(true);
    try {
      const v_68e4c4 = await v_6d394a.signInAsync({
        requestedScopes: [
          v_6d394a.AppleAuthenticationScope.FULL_NAME,
          v_6d394a.AppleAuthenticationScope.EMAIL,
        ],
      });
      const v_21cc31 = v_68e4c4.identityToken;
      if (!v_21cc31) {
        v_889fad(v_8d41d7('login.error_failed'), v_8d41d7('login.error_unknown'));
        return;
      }
      const v_43c42e = await v_545a63({ provider: 'apple', token: v_21cc31 });
      if (v_2cd4e6(v_43c42e)) {
        v_c65f5d.navigate('Signup', { email: v_43c42e.email, fromSocial: 'apple' });
        return;
      }
      await v_d41982(v_43c42e, v_2129ec);
      v_87ba9a(v_c65f5d, v_43c42e);
    } catch (v_5e9bfe) {
      const v_c99bd2 = v_5e9bfe && typeof v_5e9bfe === 'object' && 'code' in v_5e9bfe ? (v_5e9bfe as { code: string }).code : '';
      if (v_c99bd2 === 'ERR_REQUEST_CANCELED' || v_c99bd2 === 'ERR_CANCELED') {
        return;
      }
      const v_a8cd21 = v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('login.error_unknown');
      v_889fad(v_8d41d7('login.error_failed'), v_a8cd21);
    } finally {
      v_deef62(false);
    }
  };
  return (
    <>
      <View style={v_d81136.screen}>
        <Header
          showBackButton
          title={v_8d41d7('common.login')}
          onBackPress={v_6ca26b}
          containerStyle={v_d81136.flatHeader}
        />
        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          autoAdjustKeyboardPadding={true}
        >
          <View style={v_d81136.inner}>
            <View style={v_d81136.form}>
              <TextField
                testID="login-email"
                label={v_8d41d7('login.email_label')}
                placeholder={v_8d41d7('login.email_placeholder')}
                keyboardType="email-address"
                autoCapitalize="none"
                value={v_e0c7e8}
                onChangeText={v_fedf34}
                editable={!v_cd31a8}
              />
              <PasswordField
                testID="login-password"
                label={v_8d41d7('login.password_label')}
                placeholder={v_8d41d7('login.password_placeholder')}
                value={v_adc076}
                onChangeText={v_52b279}
                editable={!v_cd31a8}
                autoCapitalize="none"
              />
              <FormCheckbox
                testID="login-keep-logged-in"
                label={v_8d41d7('login.keep_logged_in')}
                value={v_2129ec}
                onChange={v_874dfe}
              />
              <TouchableOpacity
                style={v_d81136.linkButton}
                onPress={() => v_c65f5d.navigate('ForgotPassword')}
              >
                <Text style={v_d81136.linkText}>{v_8d41d7('login.forgot_password')}</Text>
              </TouchableOpacity>
              <View style={v_d81136.buttonWrapper}>
                <GradientButton
                  testID="login-submit"
                  title={v_cd31a8 ? v_8d41d7('login.logging_in') : v_8d41d7('common.login')}
                  onPress={v_ec4736}
                  disabled={v_cd31a8}
                />
                {v_cd31a8 && (
                  <ActivityIndicator
                    size="small"
                    color={v_1bfbd0.buttonPrimary}
                    style={v_d81136.loadingIndicator}
                  />
                )}
              </View>

              {

}
              {v_326be8.OS !== 'ios' && (
                <View style={v_d81136.socialLoginSection}>
                  <View style={v_d81136.socialDivider}>
                    <View style={v_d81136.dividerLine} />
                    <Text style={v_d81136.dividerText}>{v_8d41d7('common.or')}</Text>
                    <View style={v_d81136.dividerLine} />
                  </View>

                  <View style={v_d81136.socialButtons}>
                    {}
                    <TouchableOpacity
                      style={[v_d81136.socialIconButton, v_d81136.googleButton]}
                      onPress={v_6dd38d}
                      disabled={v_cd31a8}
                      activeOpacity={0.85}
                      accessibilityRole="button"
                      accessibilityLabel={v_8d41d7('login.google_login')}
                    >
                      <GoogleIcon size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[v_d81136.socialIconButton, v_d81136.naverButton]}
                      onPress={v_40f9f9}
                      disabled={v_cd31a8}
                      activeOpacity={0.85}
                      accessibilityRole="button"
                      accessibilityLabel={v_8d41d7('login.naver_login')}
                    >
                      <NaverIcon size={24} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        </SafeScrollView>
      </View>

      <AlertModal
        visible={v_153a89.visible}
        title={v_153a89.title}
        message={v_153a89.message}
        onConfirm={v_34f542}
      />

      {}
      <Modal
        visible={v_a0ad57}
        transparent
        animationType="fade"
        onRequestClose={() => {}}
      >
        <View style={v_d81136.modalOverlay}>
          <View style={v_d81136.modalBox}>
            <Text style={v_d81136.modalTitle}>비밀번호 변경 필요</Text>
            <Text style={v_d81136.modalDesc}>
              임시 비밀번호로 로그인되었습니다.{'\n'}새 비밀번호를 설정해주세요.
            </Text>
            <PasswordField
              label="새 비밀번호"
              value={v_e2bd5a}
              onChangeText={v_889581}
              placeholder="8자 이상 입력"
            />
            <View style={{ height: 12 }} />
            <PasswordField
              label="비밀번호 확인"
              value={v_0b3ebe}
              onChangeText={v_241a35}
              placeholder="비밀번호 재입력"
            />
            <TouchableOpacity
              style={[v_d81136.modalBtn, v_44c732 && { opacity: 0.6 }]}
              onPress={v_d4705b}
              disabled={v_44c732}
            >
              {v_44c732
                ? <ActivityIndicator color={v_1bfbd0.white} />
                : <Text style={v_d81136.modalBtnText}>변경 완료</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const v_d81136 = v_472849.create({
  flex: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.white,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalBox: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    padding: 24,
    width: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: '#111',
    marginBottom: 8,
  },
  modalDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  modalBtn: {
    marginTop: 20,
    backgroundColor: '#1e3a5f',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalBtnText: {
    color: v_1bfbd0.white,
    fontSize: 15,
    fontFamily: v_843035.semibold,
  },
  flatHeader: {
    shadowOpacity: 0,
    elevation: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: v_9b1a04.medium,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.xlarge,
    marginTop: v_9b1a04.large,
  },
  inner: {
    width: '100%',
    maxWidth: 780,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  buttonWrapper: {
  },
  loadingIndicator: {
    marginTop: v_9b1a04.small / 2,
    alignSelf: 'center',
  },
  linkButton: {
    alignSelf: 'flex-end',
  },
  linkText: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  socialLoginSection: {
    width: '100%',
    gap: v_9b1a04.medium,
    paddingTop: v_9b1a04.medium,
  },
  socialDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    marginTop: v_9b1a04.small,
    marginBottom: v_9b1a04.medium,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: v_1bfbd0.border,
  },
  dividerText: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  socialButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: v_9b1a04.medium,
  },
  socialIconButton: {
    width: 56,
    height: 56,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    borderColor: '#FEE500',
  },
  naverButton: {
    backgroundColor: '#03C75A',
    borderColor: '#03C75A',
  },
  googleButton: {
    backgroundColor: v_1bfbd0.background,
    borderColor: v_1bfbd0.border,
  },
  appleButton: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
});

export default v_f4f851;

