import random from 'random';
import config from './config';

export class Deck {
  #cards = [];

  #rng;

  constructor(count = 1, seed = undefined) {
    const cards = config.suits.flatMap((suit) => {
      return config.values.map((value) => {
        return {
          id: value.id + suit.id,
          name: `${value.name}-${suit.name}`,
          value: value.value,
          secondaryValue: value.secondaryValue,
        };
      });
    });

    for (let i = 0; i < count; i++) {
      this.#cards.push(...cards);
    }

    this.#rng = random.clone(undefined, seed);

    this.shuffle();
  }

  get size() {
    return this.#cards.length;
  }

  get top() {
    return this.#cards[0];
  }

  get cards() {
    return [...this.#cards];
  }

  draw = () => {
    return this.#cards.shift();
  };

  shuffle = () => {
    for (let i = this.#cards.length - 1; i > 0; i--) {
      const j = this.#rng.int(0, i);
      [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]];
    }
  };
}
