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
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

const { width: v_0d9f50 } = v_700696.get('window');
const v_7a3013 = v_0d9f50 * 0.85; 

export interface SidebarMenuItem {
    id: string;
    label: string;
    icon?: keyof typeof v_dec439.glyphMap;
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
                        <TouchableOpacity
                            style={v_d81136.newChatButton}
                            onPress={() => v_8e442f({ id: 'newChat', label: v_8d41d7('sidebar.new_chat') })}
                            activeOpacity={0.8}
                            accessibilityRole="button"
                            accessibilityLabel={v_8d41d7('sidebar.new_chat')}
                        >
                            <LinearGradient
                                colors={['#4F39F6', '#9810FA', '#E60076']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={v_d81136.newChatGradient}
                            >
                                <Feather name="plus" size={20} color="#FFFFFF" />
                                <Text style={v_d81136.newChatText}>{v_8d41d7('sidebar.new_chat')}</Text>
                            </LinearGradient>
                        </TouchableOpacity>

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
                    </ScrollView>
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
        paddingBottom: v_9b1a04.xlarge * 2,
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
    newChatButton: {
        marginHorizontal: v_9b1a04.large,
        marginBottom: v_9b1a04.medium,
        borderRadius: 14,
        overflow: 'hidden',
    },
    newChatGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: v_9b1a04.large,
        gap: 8,
    },
    newChatText: {
        fontSize: 16,
        fontFamily: v_843035.semibold,
        color: '#FFFFFF',
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

