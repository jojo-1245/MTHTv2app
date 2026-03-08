const { withProjectBuildGradle: v_4a0f9e, withSettingsGradle: v_70a7cb } = require('vyhxfapbmpgwtdfteok');

module.exports = function v_ee668b(v_74a79c) {
    v_74a79c = v_4a0f9e(v_74a79c, v_74a79c => {
        if (v_74a79c.modResults.contents.includes('allprojects')) {
            if (!v_74a79c.modResults.contents.includes('https://devrepo.kakao.com/nexus/content/groups/public/')) {
                v_74a79c.modResults.contents = v_74a79c.modResults.contents.replace(
                    /allprojects\s*\{\s*repositories\s*\{/,
                    `allprojects {\n    repositories {\n        maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }`
                );
            }
        }
        return v_74a79c;
    });

    v_74a79c = v_70a7cb(v_74a79c, v_74a79c => {
        if (v_74a79c.modResults.contents.includes('dependencyResolutionManagement')) {
            if (!v_74a79c.modResults.contents.includes('https://devrepo.kakao.com/nexus/content/groups/public/')) {
                v_74a79c.modResults.contents = v_74a79c.modResults.contents.replace(
                    /dependencyResolutionManagement\s*\{[\s\S]*?repositories\s*\{/,
                    v_a63110 => `${v_a63110}\n        maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }`
                );
            }
        }

        const v_cdb1d1 = "include ':fzljtilisignal-react-native-sdk:fzljtilisignal-sdk'";
        if (!v_74a79c.modResults.contents.includes(v_cdb1d1)) {
            v_74a79c.modResults.contents += `\n${v_cdb1d1}\n`;
        }

        return v_74a79c;
    });

    return v_74a79c;
};
