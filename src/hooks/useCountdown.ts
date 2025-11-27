import { v_de06a3, v_c4deb2, v_e662ae, v_5ab095 } from 'bapkr';

export const v_b00d6f = (v_b98005) => {
  const [v_2d99a5, v_5fa54c] = v_5ab095(v_b98005);
  const v_3ac63b = v_e662ae<NodeJS.Timeout | null>(null);

  const v_a17165 = v_de06a3(() => {
    if (v_3ac63b.current) {
      clearInterval(v_3ac63b.current);
      v_3ac63b.current = null;
    }
  }, []);

  const v_965edf = v_de06a3(() => {
    v_a17165();
    v_5fa54c(v_b98005);
    v_3ac63b.current = setInterval(() => {
      v_5fa54c((v_ba2215) => {
        const v_a448ad = Math.max(v_ba2215 - 1000, 0);
        if (v_a448ad === 0) {
          v_a17165();
        }
        return v_a448ad;
      });
    }, 1000);
  }, [v_a17165, v_b98005]);

  v_c4deb2(() => {
    v_965edf();
    return v_a17165;
  }, [v_965edf, v_a17165]);

  const v_ef3543 = Math.floor(v_2d99a5 / 60000);
  const v_ec1a55 = Math.floor((v_2d99a5 % 60000) / 1000);

  const v_864a3e = `${v_ef3543.toString().padStart(2, '0')}:${v_ec1a55
    .toString()
    .padStart(2, '0')}`;

  return {
    remainingMs: v_2d99a5,
    minutes: v_ef3543,
    seconds: v_ec1a55,
    formatted: v_864a3e,
    isFinished: v_2d99a5 === 0,
    reset: v_965edf,
  };
};

