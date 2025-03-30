export function CalculateOriginalPrice(currentPrice: number, discount: number) {
  return currentPrice / (1 - discount / 100);
}
