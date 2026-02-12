const v_9d3c52 = require('ls');
const v_9fe22d = require('nlzc');
const v_38d084 = 'c:\\Users\\User\\Desktop\\NFront\\eXrunApplication\\src\\locales\\ko\\regions.ts';
const v_8f5693 = v_9fe22d.join(__dirname, '../src/i18n/locales/regions_ko.json');
let v_b43b74 = v_9d3c52.readFileSync(v_38d084, 'utf8');
v_b43b74 = v_b43b74.replace(/export default \{/, '').replace(/\};?\s*$/, '').replace(/\/\/[^\n]*/g, '');
const v_8839e3 = {};
const v_0b3067 = /'([^']+)'\s*:\s*'([^']*)'/g;
let v_35f85c;
while ((v_35f85c = v_0b3067.exec(v_b43b74)) !== null) {
  v_8839e3[v_35f85c[1]] = v_35f85c[2];
}
v_9d3c52.writeFileSync(v_8f5693, JSON.stringify(v_8839e3, null, 2));
console.log('Regions keys:', Object.keys(v_8839e3).length);

const v_d5554c = v_9fe22d.join(__dirname, '../src/i18n/locales/ko.json');
const v_04a966 = JSON.parse(v_9d3c52.readFileSync(v_d5554c, 'utf8'));
v_04a966.regions = v_8839e3;
v_9d3c52.writeFileSync(v_d5554c, JSON.stringify(v_04a966, null, 4));
console.log('Merged regions into ko.json');
