import getFullTime from "./getFullTime";

export default function getDateAndTime(timeString) {
  const timeObject = new Date(timeString);
  const date = timeObject.getDate();
  const month = timeObject.toLocaleString("default", { month: "short" });
  const fullTime = getFullTime(timeObject);

  return `${month} ${date}, ${fullTime}`;
}
