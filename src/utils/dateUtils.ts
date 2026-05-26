

const LANGUAGE_TIMEZONE: Record<string, string> = {
  ko: 'Asia/Seoul',
  id: 'Asia/Jakarta',
  en: '', 
};

export function getTimezoneForLanguage(language: string): string {
  const code = (language || 'en').toLowerCase().split('-')[0];
  const mapped = LANGUAGE_TIMEZONE[code];
  if (mapped) return mapped;

  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return 'UTC';
  }
}

export function getTodayDateStringInTimezone(timeZone: string): string {
  try {
    const now = new Date();
    const str = now.toLocaleDateString('en-CA', { timeZone }); 
    return str;
  } catch {
    const d = new Date();
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
}

export function getTodayDateStringForLocale(language: string): string {
  const timeZone = getTimezoneForLanguage(language);
  return getTodayDateStringInTimezone(timeZone);
}

export function getClientTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Seoul';
  } catch {
    return 'Asia/Seoul';
  }
}

export function getTodayDateStringForClientTimeZone(): string {
  return getTodayDateStringInTimezone(getClientTimeZone());
}

export function parseCalendarDate(dateStr: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr.trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  return new Date(y, mo - 1, d, 12, 0, 0, 0);
}

export function formatCalendarDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function getWeekdayIndexFromCalendarDate(dateStr: string): number {
  const d = parseCalendarDate(dateStr);
  if (!d) return (new Date().getDay() + 6) % 7;
  return (d.getDay() + 6) % 7;
}

export function getMondayOfCalendarWeek(dateStr: string): string {
  const d = parseCalendarDate(dateStr);
  if (!d) return dateStr;
  const daysFromMonday = (d.getDay() + 6) % 7;
  const monday = new Date(d);
  monday.setDate(d.getDate() - daysFromMonday);
  return formatCalendarDate(monday);
}

export function addCalendarDays(dateStr: string, days: number): string {
  const d = parseCalendarDate(dateStr);
  if (!d) return dateStr;
  d.setDate(d.getDate() + days);
  return formatCalendarDate(d);
}

export function isCalendarDateInRange(dateStr: string, weekStart: string, weekEnd: string): boolean {
  const d = parseCalendarDate(dateStr);
  const start = parseCalendarDate(weekStart);
  const end = parseCalendarDate(weekEnd);
  if (!d || !start || !end) return false;
  return d >= start && d <= end;
}

export function getCalendarWeekRange(
  dateStr: string,
  weekStart?: string,
  weekEnd?: string
): { weekStart: string; weekEnd: string } {
  const start = weekStart ?? getMondayOfCalendarWeek(dateStr);
  const end = weekEnd ?? addCalendarDays(start, 6);
  return { weekStart: start, weekEnd: end };
}

export function resolveCalendarWeekRange(
  todayStr: string,
  apiWeekStart?: string,
  apiWeekEnd?: string
): { weekStart: string; weekEnd: string; usedApiWeek: boolean } {
  const client = getCalendarWeekRange(todayStr);
  if (
    apiWeekStart &&
    apiWeekEnd &&
    isCalendarDateInRange(todayStr, apiWeekStart, apiWeekEnd)
  ) {
    return { weekStart: apiWeekStart, weekEnd: apiWeekEnd, usedApiWeek: true };
  }
  return { weekStart: client.weekStart, weekEnd: client.weekEnd, usedApiWeek: false };
}

export function getWeekdayIndexFromCalendarDate(dateStr: string): number {
  const d = parseCalendarDate(dateStr);
  if (!d) return (new Date().getDay() + 6) % 7;
  return (d.getDay() + 6) % 7;
}

export function mergeCheckedDatesIntoWeek(
  weekDays: boolean[],
  weekStart: string,
  checkedDates: string[]
): boolean[] {
  const next = [...weekDays];
  const startParsed = parseCalendarDate(weekStart);
  if (!startParsed) return next;

  checkedDates.forEach((raw) => {
    const dateKey = raw.slice(0, 10);
  const y = monday.getFullYear();
  const m = String(monday.getMonth() + 1).padStart(2, '0');
  const day = String(monday.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function mapRecentStatusToWeekGrid(
  recentStatus: Array<{ date: string; attended: boolean }>,
  weekStart: string
): boolean[] {
  const weekDays = [false, false, false, false, false, false, false];
  const startParsed = parseCalendarDate(weekStart);
  if (!startParsed) return weekDays;

  recentStatus.forEach((item) => {
    const dateKey = item.date.slice(0, 10);
    const parsed = parseCalendarDate(dateKey);
    if (!parsed) return;
    const dayIndex = Math.round(
      (parsed.getTime() - startParsed.getTime()) / (24 * 60 * 60 * 1000)
    );
    if (dayIndex >= 0 && dayIndex <= 6) {
      next[dayIndex] = true;
    }
  });

  return next;
      weekDays[dayIndex] = !!item.attended;
    }
  });

  return weekDays;
}
