import moment from "moment";

export function formatDate(date: Date, opts: Intl.DateTimeFormatOptions = {}) {
  const defaultOpts = {
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const resolvedOpts = Object.assign(defaultOpts, opts);
  return date.toLocaleString(undefined, resolvedOpts);
}

export function formatDateRelative(date: Date) {
  return moment(date).fromNow();
}

export function convertMinsToHoursMins(mins: number) {
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return { hours, mins: remainingMins };
}

export function convertMinsToHoursMinsStr(mins: number) {
  if (mins === 0) return "0 minutes";
  const { hours: h, mins: m } = convertMinsToHoursMins(mins);
  return `${h ? `${h} hour${h > 1 ? "s" : ""} ` : ""} ${
    m ? `${m} minute${m > 1 ? "s" : ""}` : ""
  }`;
}

export function formatTimeRelative(
  val: number,
  unit: Intl.RelativeTimeFormatUnit,
  {
    style = "long",
  }: { style?: Intl.RelativeTimeFormatStyle; toParts?: boolean } = {}
) {
  const formatter = new Intl.RelativeTimeFormat(undefined, { style });
  return formatter.format(val, unit);
}

export function formatDateRelativeToParts(
  val: number,
  unit: Intl.RelativeTimeFormatUnit,
  {
    style = "long",
  }: { style?: Intl.RelativeTimeFormatStyle; toParts?: boolean } = {}
) {
  const formatter = new Intl.RelativeTimeFormat(undefined, { style });
  return formatter.formatToParts(val, unit);
}
