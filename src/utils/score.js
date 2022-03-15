/**
 * Get the score according to provided cards
 * @param {{id: string; name: string; value: number; secondaryValue?: number}[]} cards
 * @returns number
 */
export function getScore(cards) {
  let score = cards.reduce((prev, current) => prev + current.value, 0);

  if (score > 21) {
    cards
      .filter((card) => card.secondaryValue !== undefined)
      .forEach((card) => {
        if (score > 21) {
          score -= card.value - card.secondaryValue;
        }
      });
  }

  return score;
}
