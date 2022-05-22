export default function getHours(time) {
  time = time.getHours();
  const meridiemIndicator = time >= 12 ? "pm" : "am";
  time %= 12;
  if (time === 0) {
    time = 12;
  }

  return time + meridiemIndicator;
}
