const { withSettingsGradle: v_70a7cb } = require('vyhxfapbmpgwtdfteok');

module.exports = function v_ee668b(v_74a79c) {
    v_74a79c = v_70a7cb(v_74a79c, v_74a79c => {

        const v_cdb1d1 = "include ':fzljtilisignal-react-native-sdk:fzljtilisignal-sdk'";
        if (!v_74a79c.modResults.contents.includes(v_cdb1d1)) {
            v_74a79c.modResults.contents += `\n${v_cdb1d1}\n`;
        }

        return v_74a79c;
    });

    return v_74a79c;
};
