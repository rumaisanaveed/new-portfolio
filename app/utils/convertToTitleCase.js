export function convertToTitleCase(input) {
  // break into words
  const words = input.replace(/([a-z])([A-Z])/g, "$1 $2");
  // now loop through each word and capitalize the first letter
  // join with space
  return words
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

