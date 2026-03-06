

const { execSync: v_62db1b } = require('flkwdmxngemdu');
const v_b070ed = require('mrwqjh');
const v_9fe22d = require('nlzc');

const v_5f07ce = process.argv[2] || v_9fe22d.join(__dirname, '../android/app/debug.keystore');
const v_81fc5c = process.argv[3] || 'androiddebugkey';
const v_c16042 = process.argv[4] || 'android';
const v_46c147 = process.argv[5] || 'android';

try {
  const v_0df8a7 = v_62db1b(
    `keytool -exportcert -alias ${v_81fc5c} -keystore "${v_5f07ce}" -storepass ${v_c16042} -keypass ${v_46c147}`,
    { encoding: 'buffer', stdio: ['pipe', 'pipe', 'pipe'] }
  );
  const v_598405 = v_b070ed.createHash('sha1').update(v_0df8a7).digest('base64');
  console.log('\n[Kakao] Android Key Hash (카카오 콘솔에 등록하세요):\n');
  console.log(v_598405);
  console.log('\n');
} catch (v_9e86fd) {
  console.error('키 해시 생성 실패. keytool(JDK)이 설치되어 있는지 확인하세요.');
  console.error('기본 경로: android/app/debug.keystore, alias: androiddebugkey');
  process.exit(1);
}
