import v_a3453e, {
  v_af12cb,
  v_de06a3,
  v_76a8a9,
  v_df9f57,
  v_5ab095,
} from 'bapkr';

export interface VerifiedPharmacistGuest {
  name: string;
  phone: string;
  visitorId: number;
  isNew?: boolean;
  records?: Array<{
    id: number;
    created_at?: string;
    createdAt?: string;
    device_info?: string | null;
    deviceInfo?: string | null;
  }>;

  sessionId: string;
  verifiedAt: string;
}

interface PharmacistGuestContextValue {
  verifiedGuest: VerifiedPharmacistGuest | null;
  isGuestVerified: boolean;
  setVerifiedGuest: (guest: VerifiedPharmacistGuest) => void;
  clearVerifiedGuest: () => void;
}

const v_5f7e85 = v_af12cb<PharmacistGuestContextValue | undefined>(
  undefined
);

export const PharmacistGuestProvider: v_a3453e.FC<{ children: v_a3453e.ReactNode }> = ({
  children: v_21f619,
}) => {
  const [v_3de945, v_3a91ff] = v_5ab095<VerifiedPharmacistGuest | null>(null);

  const v_e51c8e = v_de06a3((v_2433e3) => {
    v_3a91ff(v_2433e3);
  }, []);

  const v_9cf8a5 = v_de06a3(() => {
    v_3a91ff(null);
  }, []);

  const v_3b402b = v_df9f57(
    () => ({
      verifiedGuest: v_3de945,
      isGuestVerified: !!v_3de945,
      setVerifiedGuest: v_e51c8e,
      clearVerifiedGuest: v_9cf8a5,
    }),
    [v_3de945, v_e51c8e, v_9cf8a5]
  );

  return (
    <PharmacistGuestContext.Provider value={v_3b402b}>
      {v_21f619}
    </PharmacistGuestContext.Provider>
  );
};

export function v_4b2942(): PharmacistGuestContextValue {
  const v_16e2dd = v_76a8a9(v_5f7e85);
  if (!v_16e2dd) {
    throw new Error('usePharmacistGuest must be used within PharmacistGuestProvider');
  }
  return v_16e2dd;
}
