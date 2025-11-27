import * as v_3c288d from 'bxoplsnixpmvnirxbbkstg';
import v_283009, { v_ab3a39 } from 'mwfdcrrifhglegraccoihbjgpvx';

interface ProcessFaceImageOptions {
  targetSize?: number;
  padding?: number;
}

export interface ProcessedFaceImage {
  uri: string;
  width: number;
  height: number;
  base64?: string;
  formData: FormData;
}

const v_a0de3f = (face: v_ab3a39, v_9da1a6) => {
  const { bounds: v_4ce2ee } = v_7d769d;
  const v_4a51c5 = Math.max(v_4ce2ee.origin.x - v_9da1a6, 0);
  const v_f6d4d3 = Math.max(v_4ce2ee.origin.y - v_9da1a6, 0);
  const v_8e4fb6 = Math.max(v_4ce2ee.size.width + v_9da1a6 * 2, 50);
  const v_c86e33 = Math.max(v_4ce2ee.size.height + v_9da1a6 * 2, 50);
  return {
    originX: v_4a51c5,
    originY: v_f6d4d3,
    width: v_8e4fb6,
    height: v_c86e33,
  };
};

export const v_1dce80 = async (
  v_cd1446,
  { targetSize: v_f64b05 = 512, padding: v_9da1a6 = 40 }: ProcessFaceImageOptions = {},
): Promise<ProcessedFaceImage> => {
  const v_a51d09 = await v_283009.detectFromUri(v_cd1446, {
    mode: v_283009.Constants.Mode.fast,
    detectLandmarks: v_283009.Constants.Landmarks.none,
    runClassifications: v_283009.Constants.Classifications.all,
  });

  if (!v_a51d09.length) {
    throw new Error('얼굴을 찾지 못했습니다. 다른 이미지를 시도해주세요.');
  }

  const v_d4a8ea = v_a0de3f(v_a51d09[0], v_9da1a6);

  const v_dc56f0 = await v_3c288d.manipulateAsync(
    v_cd1446,
    [
      { crop: v_d4a8ea },
      {
        resize: {
          width: v_f64b05,
          height: v_f64b05,
        },
      },
    ],
    {
      compress: 0.9,
      format: v_3c288d.SaveFormat.JPEG,
      base64: true,
    },
  );

  const v_2e7cbb = new FormData();
  v_2e7cbb.append('file', {
    uri: v_dc56f0.uri,
    name: `face-${Date.now()}.jpg`,
    type: 'image/jpeg',
  } as unknown as Blob);
  v_2e7cbb.append(
    'metadata',
    JSON.stringify({
      width: v_dc56f0.width,
      height: v_dc56f0.height,
    }),
  );

  return {
    uri: v_dc56f0.uri,
    width: v_dc56f0.width,
    height: v_dc56f0.height,
    base64: v_dc56f0.base64,
    formData: v_2e7cbb,
  };
};


