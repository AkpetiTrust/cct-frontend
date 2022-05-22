export default function convertToTwoDigits(number) {
  number = number.toString();
  if (number.length == 1) {
    number = "0" + number;
  }

  return number;
}
