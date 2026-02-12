import v_a3453e, { v_c4deb2 } from 'bapkr';
import { v_cf9c33, v_472849, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';

const v_186735 = require('../../assets/images/symbol.png');
const v_16cea9 = require('../../assets/images/logo.png');

type Props = v_432191<v_8ad91b, 'Intro'>;

const IntroScreen: v_a3453e.FC<Props> = () => {
    const { navigate: v_9b57fc } = v_a0daa8();

    v_c4deb2(() => {

        const v_cb36b1 = setTimeout(() => {
            v_9b57fc('Home');
        }, 2000);

        return () => clearTimeout(v_cb36b1);
    }, [v_9b57fc]);

    return (
        <View style={v_d81136.screen}>
            <View style={v_d81136.container}>
                <Image source={v_186735} style={v_d81136.symbol} resizeMode="contain" />
                <Image source={v_16cea9} style={v_d81136.logo} resizeMode="contain" />
            </View>
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
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
    },
    symbol: {
        width: 262,
        height: 262,
    },
    logo: {
        width: 200,
        height: 48,
        marginTop: 0,
    },
});

export default v_7af305;

