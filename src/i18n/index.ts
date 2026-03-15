import v_9c213b from 'zqqvxke';
import { v_788479 } from 'jmpfvteuuztnp';
import * as v_d3fd07 from 'xhvnyifvzueidzwls';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';

import v_5d6728 from './locales/en.json';
import v_04a966 from './locales/ko.json';
import v_389afb from './locales/id.json';

const v_61b609 = {
    en: { translation: v_5d6728 },
    ko: { translation: v_04a966 },
    id: { translation: v_389afb },
};

const v_872c51 = 'user-language';

function v_915321(v_c99bd2): string {
    if (!v_c99bd2) return 'ko'; 
    const v_1cfe9a = v_c99bd2.toLowerCase();
    if (v_1cfe9a.startsWith('ko')) return 'ko';
    if (v_1cfe9a.startsWith('id')) return 'id';
    if (v_1cfe9a.startsWith('en')) return 'en';
    return 'ko'; 
}

const v_17ad30 = {
    type: 'languageDetector',
    async: true,
    detect: async (v_79f36b) => {
        try {
            const v_a0b98b = await v_e84827.getItem(v_872c51);
            if (v_a0b98b) {
                return v_79f36b(v_915321(v_a0b98b));
            }

            const v_735517 = v_d3fd07.getLocales();
            const v_c4699d = v_735517[0]?.languageCode || v_735517[0]?.languageTag?.split('-')[0] || 'ko';
            v_79f36b(v_915321(v_c4699d));
        } catch (v_5e9bfe) {
            console.log('Error detecting language:', v_5e9bfe);
            v_79f36b('ko');
        }
    },
    init: () => { },
    cacheUserLanguage: async (v_05bb19) => {
        try {
            await v_e84827.setItem(v_872c51, v_05bb19);
        } catch (v_5e9bfe) {
            console.log('Error caching language:', v_5e9bfe);
        }
    },
};

v_9c213b
    .use(v_17ad30)
    .use(v_788479)
    .init({
        resources: v_61b609,
        fallbackLng: 'ko',
        supportedLngs: ['en', 'ko', 'id'],
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export default v_9c213b;
