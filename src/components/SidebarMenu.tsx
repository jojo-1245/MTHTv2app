import v_a3453e, { v_c4deb2, v_e662ae } from 'bapkr';
import {
    v_a2349e,
    v_700696,
    v_aa7413,
    v_122070,
    v_b5df25,
    v_472849,
    v_19b633,
    v_4623af,
    v_3094a2,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_dec439, v_f832ec } from 'zvyjokvuouwvifyzks';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

const { width: v_0d9f50 } = v_700696.get('window');
const v_7a3013 = v_0d9f50 * 0.85; 

export interface SidebarMenuItem {
    id: string;
    label: string;
    icon?: keyof typeof v_dec439.glyphMap;
    materialIcon?: keyof typeof v_f832ec.glyphMap;
    onPress?: () => void;
}

export interface SidebarMenuProps {
    visible: boolean;
    onClose: () => void;
    onMenuItemPress?: (item: SidebarMenuItem) => void;
    userProfile?: {
        name: string;
        avatar?: { uri: string } | undefined;
        placeholderColor?: string;
    };
}

const SidebarMenu: v_a3453e.FC<SidebarMenuProps> = ({
    visible: v_cf55be,
    onClose: v_0890f8,
    onMenuItemPress: v_1e7823,
    userProfile: v_2f4b56 = { name: 'TED' },
}) => {
    const { t: v_8d41d7 } = v_772971();
    const v_033e14 = v_e0068c();
    const v_e9b367 = v_e662ae(new v_a2349e.Value(-v_7a3013)).current;

    v_c4deb2(() => {
        if (v_cf55be) {
            v_a2349e.timing(v_e9b367, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            v_a2349e.timing(v_e9b367, {
                toValue: -v_7a3013,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [v_cf55be, v_e9b367]);

    const v_4120d4 = [
        { id: 'home', label: 'Home', icon: 'home' },
        { id: 'wallet', label: 'Wallet', icon: 'credit-card' },
        { id: 'shop', label: 'Shop', icon: 'shopping-cart' },
        { id: 'chat', label: 'Chat', icon: 'message-circle' },
    ];

    const v_c08e0e = [
        { id: 'skin', label: v_8d41d7('sidebar.skin_analysis'), materialIcon: 'face-woman-shimmer' },
        { id: 'health', label: v_8d41d7('sidebar.health_analysis'), materialIcon: 'heart-pulse' },
        { id: 'connect', label: v_8d41d7('sidebar.health_connect'), icon: 'link' },
    ];

    const v_ff33a4 = [
        { id: 'grandma', label: v_8d41d7('home.family_members.grandma'), icon: 'user' },
        { id: 'grandpa', label: v_8d41d7('home.family_members.grandpa'), icon: 'user' },
    ];

    const v_ef5773 = [
        v_8d41d7('sidebar.suggestions.vitamin'),
        v_8d41d7('sidebar.suggestions.height'),
    ];

    const v_8e442f = (v_8c0b26) => {
        if (v_1e7823) {
            v_1e7823(v_8c0b26);
        }
        v_0890f8();
    };

    v_c4deb2(() => {
        if (v_cf55be) {
            v_b5df25.setBarStyle('dark-content', true);
        } else {
            v_b5df25.setBarStyle('light-content', true);
        }
    }, [v_cf55be]);

    return (
        <Modal
            visible={v_cf55be}
            transparent
            animationType="fade"
            onRequestClose={v_0890f8}
            statusBarTranslucent
        >
            <View style={v_d81136.overlay}>
                <TouchableOpacity
                    style={v_d81136.backdrop}
                    activeOpacity={1}
                    onPress={v_0890f8}
                />
                <Animated.View
                    style={[
                        v_d81136.sidebar,
                        {
                            transform: [{ translateX: v_e9b367 }],
                        },
                    ]}
                >
                    {}
                    <View style={[v_d81136.statusBarBackground, { height: v_033e14.top }]} />

                    {}
                    <View style={[v_d81136.closeButtonContainer, { top: v_033e14.top + v_9b1a04.medium }]}>
                        <TouchableOpacity
                            style={v_d81136.closeButton}
                            onPress={v_0890f8}
                            activeOpacity={0.7}
                            accessibilityRole="button"
                            accessibilityLabel={v_8d41d7('sidebar.close_menu')}
                        >
                            <Feather name="x" size={20} color={v_1bfbd0.text} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        style={[v_d81136.scrollView, { marginTop: v_033e14.top }]}
                        contentContainerStyle={v_d81136.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {}
                        <View style={v_d81136.headerSection}>
                            <Text style={v_d81136.headerTitle}>{v_8d41d7('sidebar.header_title')}</Text>
                            <Text style={v_d81136.headerSubtitle}>{v_8d41d7('sidebar.header_subtitle')}</Text>
                            <Text style={v_d81136.headerDescription}>{v_8d41d7('sidebar.header_description')}</Text>
                        </View>

                        {}
                        <View style={v_d81136.divider} />

                        {}
                        <View style={v_d81136.menuSection}>
                            {v_4120d4.map((v_8c0b26) => (
                                <TouchableOpacity
                                    key={v_8c0b26.id}
                                    style={v_d81136.menuItem}
                                    onPress={() => v_8e442f(v_8c0b26)}
                                    activeOpacity={0.7}
                                    accessibilityRole="button"
                                    accessibilityLabel={v_8c0b26.label}
                                >
                                    {v_8c0b26.icon && (
                                        <Feather
                                            name={v_8c0b26.icon}
                                            size={20}
                                            color={v_1bfbd0.text}
                                            style={v_d81136.menuIcon}
                                        />
                                    )}
                                    <Text style={v_d81136.menuText}>{v_8c0b26.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {}
                        <View style={v_d81136.divider} />

                        {}
                        <View style={v_d81136.menuSection}>
                            {v_c08e0e.map((v_8c0b26) => (
                                <TouchableOpacity
                                    key={v_8c0b26.id}
                                    style={v_d81136.menuItem}
                                    onPress={() => v_8e442f(v_8c0b26)}
                                    activeOpacity={0.7}
                                    accessibilityRole="button"
                                    accessibilityLabel={v_8c0b26.label}
                                >
                                    {v_8c0b26.materialIcon ? (
                                        <MaterialCommunityIcons
                                            name={v_8c0b26.materialIcon}
                                            size={20}
                                            color={v_1bfbd0.text}
                                            style={v_d81136.menuIcon}
                                        />
                                    ) : v_8c0b26.icon && (
                                        <Feather
                                            name={v_8c0b26.icon}
                                            size={20}
                                            color={v_1bfbd0.text}
                                            style={v_d81136.menuIcon}
                                        />
                                    )}
                                    <Text style={v_d81136.menuText}>{v_8c0b26.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {}
                        <View style={v_d81136.divider} />

                        {}
                        <View style={v_d81136.menuSection}>
                            {v_ff33a4.map((v_8c0b26) => (
                                <TouchableOpacity
                                    key={v_8c0b26.id}
                                    style={v_d81136.menuItem}
                                    onPress={() => v_8e442f(v_8c0b26)}
                                    activeOpacity={0.7}
                                    accessibilityRole="button"
                                    accessibilityLabel={v_8c0b26.label}
                                >
                                    {v_8c0b26.icon && (
                                        <Feather
                                            name={v_8c0b26.icon}
                                            size={20}
                                            color={v_1bfbd0.text}
                                            style={v_d81136.menuIcon}
                                        />
                                    )}
                                    <Text style={v_d81136.menuText}>{v_8c0b26.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {}
                        <View style={v_d81136.divider} />

                        {}
                        <View style={v_d81136.menuSection}>
                            <TouchableOpacity
                                style={v_d81136.menuItem}
                                onPress={() => v_8e442f({ id: 'history', label: v_8d41d7('sidebar.search_history') })}
                                activeOpacity={0.7}
                                accessibilityRole="button"
                                accessibilityLabel={v_8d41d7('sidebar.search_history')}
                            >
                                <Feather
                                    name="clock"
                                    size={20}
                                    color={v_1bfbd0.text}
                                    style={v_d81136.menuIcon}
                                />
                                <Text style={v_d81136.menuText}>{v_8d41d7('sidebar.search_history')}</Text>
                            </TouchableOpacity>
                        </View>

                        {}
                        <View style={v_d81136.suggestionsSection}>
                            {v_ef5773.map((v_ba1d23, v_a56041) => (
                                <TouchableOpacity
                                    key={v_a56041}
                                    style={v_d81136.suggestionTag}
                                    onPress={() => v_8e442f({ id: `suggestion-${v_a56041}`, label: v_ba1d23 })}
                                    activeOpacity={0.7}
                                    accessibilityRole="button"
                                    accessibilityLabel={v_ba1d23}
                                >
                                    <Text style={v_d81136.suggestionText}>{v_ba1d23}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>

                    {}
                    <TouchableOpacity
                        style={[v_d81136.userProfileSection, { paddingBottom: v_033e14.bottom + v_9b1a04.medium }]}
                        onPress={() => v_8e442f({ id: 'myinfo', label: v_8d41d7('sidebar.my_info') })}
                        activeOpacity={0.7}
                        accessibilityRole="button"
                        accessibilityLabel={v_8d41d7('sidebar.my_info')}
                    >
                        <View style={v_d81136.userAvatar}>
                            {v_2f4b56.avatar ? (
                                <View style={[v_d81136.avatarPlaceholder, { backgroundColor: v_2f4b56.placeholderColor || v_1bfbd0.buttonPrimary }]}>
                                    <Text style={v_d81136.avatarText}>
                                        {v_2f4b56.name.charAt(0).toUpperCase()}
                                    </Text>
                                </View>
                            ) : (
                                <View style={[v_d81136.avatarPlaceholder, { backgroundColor: v_2f4b56.placeholderColor || v_1bfbd0.buttonPrimary }]}>
                                    <Text style={v_d81136.avatarText}>
                                        {v_2f4b56.name.charAt(0).toUpperCase()}
                                    </Text>
                                </View>
                            )}
                        </View>
                        <Text style={v_d81136.userName}>{v_2f4b56.name}</Text>
                        <Feather name="chevron-right" size={20} color="#9CA3AF" style={v_d81136.profileArrow} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
};

const v_d81136 = v_472849.create({
    overlay: {
        flex: 1,
        flexDirection: 'row',
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    sidebar: {
        width: v_7a3013,
        backgroundColor: v_1bfbd0.background,
        height: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    statusBarBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: v_1bfbd0.background,
        zIndex: 100,
    },
    closeButtonContainer: {
        paddingHorizontal: v_9b1a04.large,
        alignItems: 'flex-end',
        position: 'absolute',
        right: 0,
        zIndex: 101,
    },
    closeButton: {
        width: 34,
        height: 34,
        backgroundColor: v_1bfbd0.backgroundSecondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: v_9b1a04.xlarge,
        paddingTop: v_9b1a04.xlarge,
    },
    headerSection: {
        paddingHorizontal: v_9b1a04.large,
        paddingTop: v_9b1a04.xlarge,
        paddingBottom: v_9b1a04.medium,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.small,
    },
    headerSubtitle: {
        fontSize: 14,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.buttonPrimary,
        marginBottom: v_9b1a04.small / 2,
    },
    headerDescription: {
        fontSize: 14,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.text,
    },
    divider: {
        height: 1,
        backgroundColor: '#E3E9ED',
        marginVertical: v_9b1a04.medium,
        marginHorizontal: v_9b1a04.large,
    },
    menuSection: {
        paddingHorizontal: v_9b1a04.large,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: v_9b1a04.medium,
    },
    menuIcon: {
        marginRight: v_9b1a04.medium,
    },
    menuText: {
        fontSize: 16,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.text,
    },
    suggestionsSection: {
        paddingHorizontal: v_9b1a04.large,
        paddingTop: v_9b1a04.small,
        gap: v_9b1a04.small,
    },
    suggestionTag: {
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        paddingHorizontal: v_9b1a04.medium,
        paddingVertical: v_9b1a04.small,
        alignSelf: 'flex-start',
    },
    suggestionText: {
        fontSize: 13,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.text,
    },
    userProfileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: v_9b1a04.large,
        paddingVertical: v_9b1a04.medium,
        borderTopWidth: 1,
        borderTopColor: '#E3E9ED',
        backgroundColor: v_1bfbd0.background,
    },
    userAvatar: {
        marginRight: v_9b1a04.medium,
    },
    avatarPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: v_1bfbd0.buttonPrimary,
    },
    avatarText: {
        fontSize: 16,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.background,
    },
    userName: {
        fontSize: 16,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
        flex: 1,
    },
    profileArrow: {
        marginLeft: 'auto',
    },
});

export default v_5deec6;

