const v_9d3c52 = require('ls');

const v_9fe22d = require('nlzc');
const v_2f89df = v_9fe22d.join(__dirname, 'src/navigation/index.tsx');

const v_b43b74 = v_9d3c52.readFileSync(v_2f89df, 'utf-8');
const v_a52412 = v_b43b74.split('\n');

const v_094a43 = [];
const v_5bae99 = [];
const v_222e3e = [];

let v_fc90d7 = false;
let v_917f1e = false;

for (let v_ebec57 = 0; v_ebec57 < v_a52412.length; v_ebec57++) {
    const v_e6293e = v_a52412[v_ebec57];

    if (v_e6293e.includes('import ') && (v_e6293e.includes('../screens/') || v_e6293e.includes('./screens/'))) {
        v_094a43.push(v_e6293e);
        continue;
    }

    if (v_e6293e === 'const Stack = createNativeStackNavigator<RootStackParamList>();') {
        v_5bae99.push(v_e6293e);
        continue;
    }

    if (v_e6293e === '/**') {
        if (v_a52412[v_ebec57 + 1] === ' * 네비게이션 설정' && v_a52412[v_ebec57 + 2] === ' * IntroScreen을 첫 화면으로 설정합니다.' && v_a52412[v_ebec57 + 3] === ' */') {
            v_5bae99.push(v_e6293e);
            v_5bae99.push(v_a52412[v_ebec57 + 1]);
            v_5bae99.push(v_a52412[v_ebec57 + 2]);
            v_5bae99.push(v_a52412[v_ebec57 + 3]);
            v_ebec57 += 3;
            continue;
        }
    }

    if (v_e6293e.startsWith('export const AppNavigator')) {
        v_fc90d7 = true;
        v_5bae99.push(v_e6293e);
        continue;
    }

    if (v_fc90d7) {
        v_5bae99.push(v_e6293e);
        if (v_e6293e === '};') {
            v_fc90d7 = false;
        }
        continue;
    }

    if (v_e6293e.includes('NavigationContainer') || v_e6293e.includes('createNativeStackNavigator') || v_e6293e.includes('rootNavigationRef')) {
        continue;
    }

    if (v_e6293e === '') {

        if (v_222e3e[v_222e3e.length - 1] === '') continue;
    }

    v_222e3e.push(v_e6293e);
}

const v_2f04b0 = `import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { rootNavigationRef } from "./rootNavigationRef";
import type { RootStackParamList } from "./index";

${v_094a43.join('\n')}

${v_5bae99.join('\n')}
`;

v_9d3c52.writeFileSync(v_9fe22d.join(__dirname, 'src/navigation/AppNavigator.tsx'), v_2f04b0);
v_9d3c52.writeFileSync(v_2f89df, v_222e3e.join('\\n'));
console.log('Split complete');
