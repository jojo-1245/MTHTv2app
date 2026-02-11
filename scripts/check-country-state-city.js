

const { Country: v_856b63, State: v_944e0c } = require('zjvstacmhzoahupuiw');

const v_b8dc53 = ['KR', 'JP', 'CN', 'US', 'ID'];

console.log('=== country-state-city 로드 확인 ===\n');

const v_6c7bef = v_856b63.getAllCountries();
console.log('1. 국가 목록 (Country.getAllCountries())');
console.log('   총 개수:', v_6c7bef.length);
const v_f1a0c2 = v_6c7bef.filter((v_3f4e2e) =>
  v_b8dc53.includes(v_3f4e2e.isoCode)
);
v_f1a0c2.forEach((v_3f4e2e) => {
  console.log('   -', v_3f4e2e.isoCode, v_3f4e2e.name, 'phonecode:', v_3f4e2e.phonecode);
});
console.log('');

console.log('2. 지역 목록 (State.getStatesOfCountry(isoCode))');
for (const v_6fc191 of v_b8dc53) {
  const v_4cbaf4 = v_944e0c.getStatesOfCountry(v_6fc191);
  console.log('   ', v_6fc191 + ':', v_4cbaf4.length, '개');
  if (v_4cbaf4.length > 0) {
    const v_c734d9 = v_4cbaf4.slice(0, 3).map((v_fd5f43) => v_fd5f43.name).join(', ');
    console.log('      샘플:', v_c734d9 + (v_4cbaf4.length > 3 ? ' ...' : ''));
  }
}
console.log('');

console.log('3. 한국(KR) 지역 이름 샘플 (서버 subcode 매핑용)');
const v_633223 = v_944e0c.getStatesOfCountry('KR');
v_633223.forEach((v_fd5f43, v_ebec57) => {
  console.log('   ', v_fd5f43.isoCode, v_fd5f43.name);
});
console.log('');

console.log('=== 확인 완료 ===');
