export function capitalizeFirstLetter(string: string) {
  if (string === "") return;

  const firstLetter = string.charAt(0).toUpperCase();
  const remaining = string.slice(1);

  return firstLetter + remaining;
}
