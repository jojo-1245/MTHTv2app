import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
    v_4623af,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439, v_25515d } from 'zvyjokvuouwvifyzks';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_729608, v_570c34, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'ProfitDistribution'>;

const ProfitDistributionScreen: v_a3453e.FC<Props> = () => {
    const { t: v_8d41d7 } = v_772971();
    const { navigate: v_9b57fc } = v_a0daa8();
    const v_033e14 = v_e0068c();

    return (
        <MainLayout activeKey="myinfo">
            <View style={v_d81136.container}>
                <Header
                    variant="analysis"
                    title="수익배분"
                    leftAccessory={
                        <TouchableOpacity
                            onPress={() => v_9b57fc('MyInfo')}
                            style={v_d81136.backButton}
                            activeOpacity={0.85}
                            accessibilityRole="button"
                            accessibilityLabel={v_8d41d7('common.back')}
                        >
                            <Ionicons name="arrow-back" size={20} color={v_1bfbd0.primary} />
                        </TouchableOpacity>
                    }
                />
                <View style={v_d81136.comingSoonContainer}>
                    <Text style={v_d81136.comingSoonText}>준비중입니다</Text>
                </View>
                {

}
            </View>
        </MainLayout>
    );
};

const v_d81136 = v_472849.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    backButton: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: v_1bfbd0.backgroundSecondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    comingSoonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    comingSoonText: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.secondaryText,
    },

});

export default v_f97d8b;
