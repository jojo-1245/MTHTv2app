import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
    v_79c4f2,
    v_4623af,
    v_9cabcb,
    v_122070,
    v_e767d1,
    v_326be8,
    v_cf9c33,
    v_03e392,
} from 'rcmrninabrnb';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import { v_556baf, v_729608, v_cb41de } from '../../components';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_a0daa8 } from '../../navigation';

const v_2e47ea = require('../../../assets/images/robot_face.png');

interface HealthConnection {
    id: string;
    email: string;
    name?: string;
    status: 'available' | 'pending' | 'connected';
}

const v_5fd9ad = [
    { id: '1', email: 'oth-test@example.invalid', status: 'available' },
    { id: '2', email: 'test@example.com', status: 'available' },
    { id: '3', email: 'hello@world.com', status: 'available' },
];

const v_c3a1bc = [
    { id: '10', email: 'oth-test@example.invalid', name: '할머니', status: 'connected' },
    { id: '11', email: 'oth-test@example.invalid', name: '할아버지', status: 'connected' },
];

const v_840337 = [
    { id: '20', email: 'oth-test@example.invalid', status: 'pending' },
];

type ViewMode = 'search' | 'form' | 'result';

const HealthConnectionScreen: v_a3453e.FC = () => {
    const { goBack: v_c7ac57 } = v_a0daa8();

    const [v_0af1e7, v_9e8c08] = v_5ab095<ViewMode>('search');

    const [v_89bb03, v_39f9a7] = v_5ab095('');
    const [v_76148b, v_ff2199] = v_5ab095<HealthConnection[]>([]);
    const [v_fb2a6e, v_afa1a3] = v_5ab095<HealthConnection[]>(v_c3a1bc);
    const [v_5ca9b8, v_560d69] = v_5ab095<HealthConnection[]>(v_840337);

    const [v_98be11, v_82eb98] = v_5ab095('');
    const [v_8b4457, v_2a4973] = v_5ab095('');
    const [v_4b10f9, v_bada8b] = v_5ab095('');

    const [v_88dca2, v_e33ec0] = v_5ab095(false);

    const [v_1b9174, v_b655bf] = v_5ab095(false);

    const v_6ca26b = () => {
        if (v_0af1e7 === 'form') {

            v_9e8c08('search');
            v_82eb98('');
            v_2a4973('');
            v_bada8b('');
        } else {
            v_c7ac57();
        }
    };

    const v_5e757d = (v_9b6134) => {
        v_39f9a7(v_9b6134);
        if (v_9b6134.trim().length > 0) {

            const v_e4cf17 = v_5fd9ad.filter(v_8c0b26 =>
                v_8c0b26.email.toLowerCase().includes(v_9b6134.toLowerCase())
            );
            v_ff2199(v_e4cf17);
        } else {
            v_ff2199([]);
        }
    };

    const v_2e55eb = (v_e0c7e8) => {
        v_82eb98(v_e0c7e8);
        v_9e8c08('form');
    };

    const v_41f83b = async () => {
        if (!v_8b4457.trim() || !v_4b10f9.trim()) {
            return;
        }

        v_e33ec0(true);

        await new Promise(v_6f7712 => setTimeout(v_6f7712, 1000));

        const v_a38b56 = {
            id: Date.now().toString(),
            email: v_98be11,
            name: v_8b4457,
            status: 'pending',
        };
        v_560d69(v_ba2215 => [...v_ba2215, v_a38b56]);

        v_82eb98('');
        v_2a4973('');
        v_bada8b('');
        v_39f9a7('');
        v_ff2199([]);
        v_e33ec0(false);

        v_9e8c08('search');
    };

    const v_b9c704 = (v_389afb) => {
        v_560d69(v_ba2215 => v_ba2215.filter(v_8c0b26 => v_8c0b26.id !== v_389afb));
    };

    const v_3525bc = (v_389afb) => {
        const v_993c20 = v_fb2a6e.find(v_8c0b26 => v_8c0b26.id === v_389afb);
        const v_d044ab = v_993c20?.name || v_993c20?.email || '항목';

        v_03e392.alert(
            '건강정보 삭제',
            `${v_d044ab}의 건강정보를 삭제하시겠습니까?`,
            [
                {
                    text: '취소',
                    style: 'cancel',
                },
                {
                    text: '삭제',
                    style: 'destructive',
                    onPress: () => {
                        v_afa1a3(v_ba2215 => v_ba2215.filter(v_8c0b26 => v_8c0b26.id !== v_389afb));
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const v_2b88e3 = () => {
        v_b655bf(v_ba2215 => !v_ba2215);
    };

    const v_670cb6 = ({ item: v_8c0b26 }: { item: HealthConnection }) => (
        <View style={v_d81136.searchResultItem}>
            <View style={v_d81136.avatarContainer}>
                <View style={v_d81136.avatar}>
                    <Image source={v_2e47ea} style={v_d81136.avatarImage} />
                </View>
            </View>
            <Text style={v_d81136.emailText}>{v_8c0b26.email}</Text>
            <TouchableOpacity
                style={v_d81136.addButton}
                onPress={() => v_2e55eb(v_8c0b26.email)}
                activeOpacity={0.7}
            >
                <Ionicons name="add-circle-outline" size={28} color="#6B7280" />
            </TouchableOpacity>
        </View>
    );

    const v_3563ae = ({ item: v_8c0b26 }: { item: HealthConnection }) => (
        <View style={v_d81136.listItem}>
            <View style={v_d81136.avatarContainer}>
                <View style={v_d81136.avatar}>
                    <Image source={v_2e47ea} style={v_d81136.avatarImage} />
                </View>
            </View>
            <Text style={v_d81136.nameText}>{v_8c0b26.name}</Text>
            {v_1b9174 && (
                <TouchableOpacity
                    style={v_d81136.deleteButton}
                    onPress={() => v_3525bc(v_8c0b26.id)}
                    activeOpacity={0.7}
                >
                    <Ionicons name="trash-outline" size={22} color="#9CA3AF" />
                </TouchableOpacity>
            )}
        </View>
    );

    const v_0c176a = ({ item: v_8c0b26 }: { item: HealthConnection }) => (
        <View style={v_d81136.listItem}>
            <View style={v_d81136.avatarContainer}>
                <View style={v_d81136.avatar}>
                    <Image source={v_2e47ea} style={v_d81136.avatarImage} />
                </View>
            </View>
            <Text style={v_d81136.emailText}>{v_8c0b26.email}</Text>
            <TouchableOpacity
                style={v_d81136.cancelButton}
                onPress={() => v_b9c704(v_8c0b26.id)}
                activeOpacity={0.7}
            >
                <Text style={v_d81136.cancelButtonText}>요청취소</Text>
            </TouchableOpacity>
        </View>
    );

    const v_c43d50 = () => (
        <ScrollView
            style={v_d81136.content}
            showsVerticalScrollIndicator={false}
        >
            {}
            <View style={v_d81136.searchContainer}>
                <Ionicons name="search" size={20} color="#9CA3AF" style={v_d81136.searchIcon} />
                <TextInput
                    style={v_d81136.searchInput}
                    placeholder="추가하실 이메일을 입력하세요"
                    placeholderTextColor="#9CA3AF"
                    value={v_89bb03}
                    onChangeText={v_5e757d}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            {}
            {v_76148b.length > 0 && (
                <View style={v_d81136.searchResultsContainer}>
                    <FlatList
                        data={v_76148b}
                        keyExtractor={v_8c0b26 => v_8c0b26.id}
                        renderItem={v_670cb6}
                        scrollEnabled={false}
                    />
                </View>
            )}

            {}
            {v_fb2a6e.length > 0 && (
                <View style={v_d81136.section}>
                    <Text style={v_d81136.sectionTitle}>불러오기 가능한 건강정보</Text>
                    <FlatList
                        data={v_fb2a6e}
                        keyExtractor={v_8c0b26 => v_8c0b26.id}
                        renderItem={v_3563ae}
                        scrollEnabled={false}
                    />
                </View>
            )}

            {}
            {v_5ca9b8.length > 0 && (
                <View style={v_d81136.section}>
                    <Text style={v_d81136.sectionTitle}>건강정보 연결하기 신청중</Text>
                    <FlatList
                        data={v_5ca9b8}
                        keyExtractor={v_8c0b26 => v_8c0b26.id}
                        renderItem={v_0c176a}
                        scrollEnabled={false}
                    />
                </View>
            )}
        </ScrollView>
    );

    const v_28d9b7 = () => (
        <KeyboardAvoidingView
            style={v_d81136.formContainer}
            behavior={v_326be8.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                style={v_d81136.formScrollView}
                contentContainerStyle={v_d81136.formScrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {}
                <View style={v_d81136.formGroup}>
                    <Text style={v_d81136.formLabel}>Email</Text>
                    <View style={v_d81136.readOnlyField}>
                        <Text style={v_d81136.readOnlyText}>{v_98be11}</Text>
                    </View>
                </View>

                {}
                <View style={v_d81136.formGroup}>
                    <Text style={v_d81136.formLabel}>등록할 이름</Text>
                    <TextInput
                        style={v_d81136.formInput}
                        placeholder="할아버지"
                        placeholderTextColor="#D1D5DB"
                        value={v_8b4457}
                        onChangeText={v_2a4973}
                    />
                </View>

                {}
                <View style={v_d81136.formGroup}>
                    <Text style={v_d81136.formLabel}>내가 누군지 알려주세요.</Text>
                    <TextInput
                        style={v_d81136.formInput}
                        placeholder="신세경"
                        placeholderTextColor="#D1D5DB"
                        value={v_4b10f9}
                        onChangeText={v_bada8b}
                    />
                </View>
            </ScrollView>

            {}
            <View style={v_d81136.submitButtonContainer}>
                <PrimaryButton
                    title={v_88dca2 ? "요청중..." : "요청하기"}
                    onPress={v_41f83b}
                    disabled={!v_8b4457.trim() || !v_4b10f9.trim() || v_88dca2}
                />
            </View>
        </KeyboardAvoidingView>
    );

    const v_e33fdf = () => (
        <ScrollView
            style={v_d81136.content}
            showsVerticalScrollIndicator={false}
        >
            {}
            <View style={v_d81136.searchContainer}>
                <Ionicons name="search" size={20} color="#9CA3AF" style={v_d81136.searchIcon} />
                <TextInput
                    style={v_d81136.searchInput}
                    placeholder="추가하실 이메일을 입력하세요"
                    placeholderTextColor="#9CA3AF"
                    value={v_89bb03}
                    onChangeText={v_5e757d}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            {}
            {v_fb2a6e.length > 0 && (
                <View style={v_d81136.section}>
                    <Text style={v_d81136.sectionTitle}>불러오기 가능한 건강정보</Text>
                    <FlatList
                        data={v_fb2a6e}
                        keyExtractor={v_8c0b26 => v_8c0b26.id}
                        renderItem={v_3563ae}
                        scrollEnabled={false}
                    />
                </View>
            )}

            {}
            {v_5ca9b8.length > 0 && (
                <View style={v_d81136.section}>
                    <Text style={v_d81136.sectionTitle}>건강정보 연결하기 신청중</Text>
                    <FlatList
                        data={v_5ca9b8}
                        keyExtractor={v_8c0b26 => v_8c0b26.id}
                        renderItem={v_0c176a}
                        scrollEnabled={false}
                    />
                </View>
            )}
        </ScrollView>
    );

    return (
        <SafeView style={v_d81136.screen}>
            <Header
                title="건강정보 연결하기"
                showBackButton
                onBackPress={v_6ca26b}
                rightAccessory={
                    v_0af1e7 !== 'form' && v_fb2a6e.length > 0 ? (
                        <TouchableOpacity
                            style={v_d81136.editButton}
                            onPress={v_2b88e3}
                        >
                            <Text style={[
                                v_d81136.editButtonText,
                                v_1b9174 && v_d81136.editButtonTextActive
                            ]}>
                                {v_1b9174 ? '완료' : '편집'}
                            </Text>
                        </TouchableOpacity>
                    ) : undefined
                }
            />

            {v_0af1e7 === 'search' && v_c43d50()}
            {v_0af1e7 === 'form' && v_28d9b7()}
            {v_0af1e7 === 'result' && v_e33fdf()}
        </SafeView>
    );
};

const v_d81136 = v_472849.create({
    screen: {
        flex: 1,
        backgroundColor: v_1bfbd0.background,
    },
    editButton: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    editButtonText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: '#6366F1',
    },
    editButtonTextActive: {
        color: '#EF4444',
    },
    content: {
        flex: 1,
        paddingHorizontal: v_9b1a04.large,
        paddingTop: v_9b1a04.medium,
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingHorizontal: v_9b1a04.medium,
        paddingVertical: 14,
        marginBottom: v_9b1a04.medium,
    },
    searchIcon: {
        marginRight: v_9b1a04.small,
    },
    searchInput: {
        flex: 1,
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.text,
        padding: 0,
    },

    searchResultsContainer: {
        marginTop: v_9b1a04.small,
    },
    searchResultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: v_9b1a04.medium,
    },

    avatarContainer: {
        marginRight: v_9b1a04.medium,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#EEF2FF',
        borderWidth: 2,
        borderColor: '#A5B4FC',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    avatarImage: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },

    emailText: {
        flex: 1,
        fontSize: v_ef658a.large,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
    },
    nameText: {
        flex: 1,
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },

    addButton: {
        padding: v_9b1a04.small,
    },

    section: {
        marginTop: v_9b1a04.xlarge,
    },
    sectionTitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: '#9CA3AF',
        marginBottom: v_9b1a04.medium,
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: v_9b1a04.medium,
    },

    cancelButton: {
        paddingHorizontal: v_9b1a04.medium,
        paddingVertical: v_9b1a04.small,
    },
    cancelButtonText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: '#EF4444',
    },

    deleteButton: {
        padding: v_9b1a04.small,
    },

    formContainer: {
        flex: 1,
    },
    formScrollView: {
        flex: 1,
    },
    formScrollContent: {
        paddingHorizontal: v_9b1a04.large,
        paddingTop: v_9b1a04.large,
    },
    formGroup: {
        marginBottom: v_9b1a04.large,
    },
    formLabel: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.small,
    },
    readOnlyField: {
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: v_9b1a04.medium,
        paddingVertical: 16,
    },
    readOnlyText: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
    },
    formInput: {
        backgroundColor: v_1bfbd0.background,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: v_9b1a04.medium,
        paddingVertical: 16,
        fontSize: v_ef658a.large,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
    },
    submitButtonContainer: {
        paddingHorizontal: v_9b1a04.large,
        paddingTop: v_9b1a04.medium,
        paddingBottom: v_9b1a04.large,
    },
});

export default v_1b8038;
