

export function v_dff48a(v_9b6134): string {
  let v_8d4337 = v_9b6134;
  v_8d4337 = v_8d4337.replace(/\$\$([\s\S]*?)\$\$/g, (v_413567, v_db991d) => v_2213be(v_db991d));

  v_8d4337 = v_8d4337.replace(/\$([^$\n]*\\[^$\n]+)\$/g, (v_413567, v_db991d) => v_2213be(v_db991d));

  v_8d4337 = v_8d4337.replace(/\$([^$\s가-힣]+)\$/g, (v_413567, v_db991d) => v_2213be(v_db991d));
  v_8d4337 = v_8d4337.replace(/\\text\{([^{}]*)\}/g, '$1');
  v_8d4337 = v_8d4337.replace(/\\%/g, '%');
  v_8d4337 = v_8d4337.replace(/^#{1,6}\s+/gm, '');
  v_8d4337 = v_8d4337.replace(/\*\*([^*]+)\*\*/g, '$1');
  return v_8d4337;
}

function v_2213be(v_db991d): string {
  return v_db991d
    .replace(/\\boxed\{([^{}]*)\}/g, '$1')
    .replace(/\\text\{([^{}]*)\}/g, '$1')
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2')
    .replace(/\\%/g, '%')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
