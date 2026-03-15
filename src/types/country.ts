export interface CountryDialCode {
  name: string;
  dialCode: string;
  iso2: string;
  flagEmoji: string;

  countryCode: number;
}

export interface GetCountriesResponse {
  data?: Array<{
    country?: string;
    code?: string;
    callnumber?: number;
    description?: string;
    lcode?: string;
    [key: string]: unknown;
  }>;
  status?: string;
  [key: string]: unknown;
}

export interface GetRegionsByCountryResponse {
  data?: Array<{
    country?: string;
    callnumber?: number;
    description?: string;
    code?: number;
    subcode?: number;
    [key: string]: unknown;
  }>;
  status?: string;
  has_regions?: boolean;
  [key: string]: unknown;
}

