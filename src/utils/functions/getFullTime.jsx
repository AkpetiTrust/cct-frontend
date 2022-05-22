import convertToTwoDigits from "./convertToTwoDigits";

export default function getFullTime(time) {
  if (!time) return;
  let hours = time.getHours();
  let minutes = time.getMinutes();
  minutes = convertToTwoDigits(minutes);
  const meridiemIndicator = hours >= 12 ? "pm" : "am";
  hours %= 12;
  if (hours === 0) {
    hours = 12;
  }

  return `${hours}:${minutes}${meridiemIndicator}`;
}
