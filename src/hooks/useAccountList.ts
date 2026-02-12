import { v_5ab095, v_c4deb2, v_de06a3 } from 'bapkr';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_ada615 } from 'ixigazcpvfldbecwtbvavtbi';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_766523, v_7ef860, type v_abf760 } from '../services';
import { v_998b9d } from '../utils/authErrorHandler';
import { v_624bd2 } from '../constants';
import type { v_70edf1 } from '../components/AccountSelector';

export const v_9e8766 = () => {
  const { t: v_8d41d7 } = v_772971();
  const v_c65f5d = v_ada615();
  const [v_c86f08, v_d690d0] = v_5ab095<v_70edf1[]>([]);
  const [v_e7b2f2, v_1f1e88] = v_5ab095<string>('');
  const [v_cd31a8, v_deef62] = v_5ab095(false);

  const v_358be6 = v_de06a3(async () => {
    v_deef62(true);
    try {
      console.log('[useAccountList] 계정 리스트 로드 시작...');

      let myAccount: v_70edf1 | null = null;
      try {
        const v_0376ef = await v_7ef860();
        console.log('[useAccountList] getMe 응답:', {
          profile: JSON.stringify(v_0376ef, null, 2),
          hasName: !!v_0376ef.name,
          hasFirstname: !!v_0376ef.firstname,
          hasLastname: !!v_0376ef.lastname,
          hasEmail: !!v_0376ef.email,
        });

        const v_4b10f9 = 
          (v_0376ef.name && typeof v_0376ef.name === 'string' ? v_0376ef.name : '') || 
          ([v_0376ef.firstname, v_0376ef.lastname].filter(Boolean).join(' ').trim()) ||
          (v_0376ef.email && typeof v_0376ef.email === 'string' ? v_0376ef.email : '') ||
          v_8d41d7('health_analysis.default_user_name', '나');

        const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
        let v_f1620a = 'me';
        if (v_0e3b5e) {
          try {
            const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
            console.log('[useAccountList] memberInfo 파싱:', {
              member: JSON.stringify(v_660822, null, 2),
              hasId: !!v_660822.id,
              idType: typeof v_660822.id,
            });
            if (v_660822.id && typeof v_660822.id === 'number') {
              v_f1620a = String(v_660822.id);
            } else if (v_660822.id && typeof v_660822.id === 'string') {
              v_f1620a = v_660822.id;
            }
          } catch (v_5f9add) {
            console.error('[useAccountList] memberInfo 파싱 에러:', v_5f9add);
          }
        }

        v_a63cee = {
          id: v_f1620a,
          name: v_4b10f9,
          isCurrent: true,
        };

        if (v_a63cee) {
          console.log('[useAccountList] 로그인한 사용자 정보 설정 완료:', {
            id: v_a63cee.id,
            name: v_a63cee.name,
            nameSource: v_0376ef.name ? 'name' : 
                       (v_0376ef.firstname || v_0376ef.lastname) ? 'firstname+lastname' :
                       v_0376ef.email ? 'email' : 'default',
          });
        }
      } catch (v_5e9bfe) {
        console.error('[useAccountList] 사용자 정보 로드 실패:', {
          error: v_5e9bfe,
          errorMessage: v_5e9bfe instanceof Error ? v_5e9bfe.message : String(v_5e9bfe),
        });

        if (v_998b9d(v_c65f5d, v_5e9bfe)) {
          return;
        }

        const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
        let v_4b10f9 = v_8d41d7('health_analysis.default_user_name', '나');
        let v_f1620a = 'me';
        if (v_0e3b5e) {
          try {
            const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
            if (v_660822.name && typeof v_660822.name === 'string') {
              v_4b10f9 = v_660822.name;
            } else if (v_660822.email && typeof v_660822.email === 'string') {
              v_4b10f9 = v_660822.email;
            }
            if (v_660822.id && typeof v_660822.id === 'number') {
              v_f1620a = String(v_660822.id);
            } else if (v_660822.id && typeof v_660822.id === 'string') {
              v_f1620a = v_660822.id;
            }
          } catch {

          }
        }
        v_a63cee = {
          id: v_f1620a,
          name: v_4b10f9,
          isCurrent: true,
        };
        console.log('[useAccountList] 기본 계정 생성:', {
          id: v_a63cee.id,
          name: v_a63cee.name,
        });
      }

      let subAccounts: v_abf760[] = [];
      try {
        v_28724c = await v_766523();
        console.log('[useAccountList] 부계정 리스트 로드 성공:', {
          count: v_28724c.length,
          accounts: JSON.stringify(v_28724c, null, 2),
        });
      } catch (v_5e9bfe) {
        console.error('[useAccountList] 부계정 리스트 로드 실패:', {
          error: v_5e9bfe,
          errorMessage: v_5e9bfe instanceof Error ? v_5e9bfe.message : String(v_5e9bfe),
        });

        if (v_998b9d(v_c65f5d, v_5e9bfe)) {
          return;
        }
      }

      const allAccounts: v_70edf1[] = [];

      if (v_a63cee) {
        v_f0f175.push(v_a63cee);
      }

      v_28724c.forEach((v_9f1d92) => {
        if (v_9f1d92.id !== v_a63cee?.id) {
          v_f0f175.push({
            id: v_9f1d92.id,
            name: v_9f1d92.name,
            isCurrent: v_9f1d92.isCurrent || false,
          });
        }
      });

      if (v_f0f175.length > 0) {
        v_d690d0(v_f0f175);

        if (!v_e7b2f2 || !v_f0f175.some((v_9f1d92) => v_9f1d92.id === v_e7b2f2)) {
          v_1f1e88(v_f0f175[0].id);
        }
        console.log('[useAccountList] 계정 리스트 설정 완료:', {
          totalCount: v_f0f175.length,
          selectedId: v_f0f175[0].id,
          accounts: JSON.stringify(v_f0f175, null, 2),
        });
      } else {
        console.warn('[useAccountList] 계정이 없습니다.');
      }
    } catch (v_5e9bfe) {
      console.error('[useAccountList] 계정 로드 중 오류:', v_5e9bfe);
    } finally {
      v_deef62(false);
    }
  }, [v_8d41d7, v_c65f5d, v_e7b2f2]);

  v_c4deb2(() => {
    v_358be6();
  }, []); 

  const v_5bc46a = v_de06a3((v_2453ad) => {
    v_d690d0((v_ba2215) => {
      const v_a448ad = v_ba2215.filter((v_779914) => v_779914.id !== v_2453ad);

      if (v_a448ad.length > 0) {
        v_1f1e88(v_a448ad[0].id);
      }
      return v_a448ad;
    });
  }, []);

  const v_20289f = v_de06a3((v_af419b) => {
    const v_ceee18 = String(Date.now());
    v_d690d0((v_ba2215) => [...v_ba2215, { id: v_ceee18, name: `사용자 ${v_af419b.slice(-2)}`, isCurrent: false }]);
    v_1f1e88(v_ceee18);
  }, []);

  return {
    accounts: v_c86f08,
    selectedAccountId: v_e7b2f2,
    setSelectedAccountId: v_1f1e88,
    isLoading: v_cd31a8,
    handleDeleteAccount: v_5bc46a,
    handleAddUser: v_20289f,
    reloadAccounts: v_358be6,
  };
};

