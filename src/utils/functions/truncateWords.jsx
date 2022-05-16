export default function truncateWords(words, numberOfWords) {
  return words.split(" ").slice(0, numberOfWords).join(" ") + "...";
}
