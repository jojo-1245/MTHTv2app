const v_3dbb66 = 'https://example.com/oth-path';

export const v_692d9d = async (v_2e7cbb) => {
  const v_3393e3 = await fetch(v_3dbb66, {
    method: 'POST',
    body: v_2e7cbb,
    headers: {
      Accept: 'application/json',
    },
  });

  if (!v_3393e3.ok) {
    const v_a8cd21 = await v_3393e3.text();
    throw new Error(v_a8cd21 || '이미지를 업로드하지 못했습니다.');
  }

  return v_3393e3.json();
};

