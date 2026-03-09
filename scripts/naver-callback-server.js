

const v_00cd2e = require('fufl');

const v_66d977 = Number(process.env.NAVER_CALLBACK_PORT) || 3099;

const v_88781f = v_00cd2e.createServer((v_309144, v_8f00b9) => {
  const v_f71b56 = new URL(v_309144.url || '/', `http://localhost:${v_66d977}`);
  if (v_f71b56.pathname !== '/oauth/naver') {
    v_8f00b9.writeHead(404, { 'Content-Type': 'text/plain' });
    v_8f00b9.end('Not Found');
    return;
  }

  v_8f00b9.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  v_8f00b9.end(
    '<!DOCTYPE html><html><body style="font-family:sans-serif;padding:2rem;text-align:center">' +
    '<p>네이버 로그인 콜백입니다.</p><p>이 창을 닫아주세요.</p></body></html>'
  );
});

v_88781f.listen(v_66d977, '0.0.0.0', () => {
  console.log(`[naver-callback] http://0.0.0.0:${v_66d977}/oauth/naver`);
  console.log(`[naver-callback] 테스트: ngrok http ${v_66d977} 후 나온 https 주소를 .env와 네이버 콘솔에 등록하세요.`);
});
