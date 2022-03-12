import config from './config';

export class Deck {
  #cards = [];

  constructor(count = 1) {
    const cards = config.suits.flatMap((suit) => {
      return config.values.map((value) => {
        return {
          id: value.id + suit.id,
          name: `${value.name}-${suit.name}`,
        };
      });
    });

    for (let i = 0; i < count; i++) {
      this.#cards.push(...cards);
    }
  }

  get size() {
    return this.#cards.length;
  }

  get top() {
    return this.#cards[0];
  }

  draw = () => {
    return this.#cards.shift();
  };
}
