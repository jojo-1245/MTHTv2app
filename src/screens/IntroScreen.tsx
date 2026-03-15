import v_a3453e, { v_c4deb2 } from 'bapkr';
import { v_cf9c33, v_472849, v_3094a2 } from 'rcmrninabrnb';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_624bd2 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';

const v_16cea9 = require('../../assets/images/appicon.png');

type Props = v_432191<v_8ad91b, 'Intro'>;

function v_563acb(v_21cc31): boolean {
    try {
        const v_931bf0 = JSON.parse(atob(v_21cc31.split('.')[1]));
        return Date.now() >= v_931bf0.exp * 1000;
    } catch {
        return true; 
    }
}

const IntroScreen: v_a3453e.FC<Props> = () => {
    const { navigate: v_9b57fc } = v_a0daa8();

    v_c4deb2(() => {
        const v_d0a230 = async () => {
            try {
                const v_042a8b = await v_e84827.getItem(v_624bd2.isLoggedIn);
                const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
                const v_dfaee3 = await v_e84827.getItem(v_624bd2.refreshToken);

                const v_cfcfaf =
                    v_042a8b === 'true' &&
                    !!v_21cc31 &&
                    !v_563acb(v_21cc31);

                const v_bfc315 =
                    v_042a8b === 'true' &&
                    !!v_21cc31 &&
                    v_563acb(v_21cc31) &&
                    !!v_dfaee3 &&
                    !v_563acb(v_dfaee3);

                if (v_cfcfaf || v_bfc315) {
                    console.log('[IntroScreen] 로그인 상태 유지됨. MetaHome으로 이동');
                    v_9b57fc('MetaHome');
                } else {
                    if (v_042a8b === 'true') {

                        await v_e84827.multiRemove([
                            v_624bd2.authToken,
                            v_624bd2.refreshToken,
                            v_624bd2.memberInfo,
                            v_624bd2.isLoggedIn,
                        ]);
                        console.log('[IntroScreen] 토큰 만료. 세션 정리 후 Login으로 이동');
                        v_9b57fc('Login');
                    } else {
                        console.log('[IntroScreen] 로그인 상태 없음. Home으로 이동');
                        v_9b57fc('Home');
                    }
                }
            } catch (v_5e9bfe) {
                console.error('[IntroScreen] 로그인 상태 확인 실패:', v_5e9bfe);
                v_9b57fc('Home');
            }
        };

        const v_cb36b1 = setTimeout(() => {
            v_d0a230();
        }, 300);

        return () => clearTimeout(v_cb36b1);
    }, [v_9b57fc]);

    return (
        <View style={v_d81136.screen}>
            <Image source={v_16cea9} style={v_d81136.logo} resizeMode="contain" />
        </View>
    );
};

const v_d81136 = v_472849.create({
    screen: {
        flex: 1,
        backgroundColor: v_1bfbd0.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 160,
        height: 160,
        borderRadius: 36,
    },
});

export default v_7af305;

