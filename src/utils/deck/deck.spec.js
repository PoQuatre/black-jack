import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { Deck } from './deck';

describe('Deck >>>', () => {
  it('should have 52 cards for 1 deck', () => {
    const deck = new Deck();

    expect(deck.size).to.equal(52);
  });

  it('should have 312 cards for 6 decks', () => {
    const deck = new Deck(6);

    expect(deck.size).to.equal(312);
  });

  describe('Draw >', () => {
    let deck = new Deck(6);
    let top;

    beforeEach(() => {
      deck = new Deck(6);
      top = deck.top;
    });

    it('should get the card at the top of the deck', () => {
      expect(deck.draw()).to.deep.equal(top);
    });

    it('should remove 1 card from the deck', () => {
      const size = deck.size;

      deck.draw();

      expect(deck.size).to.equal(size - 1);
    });

    it('should change the card at the top of the deck', () => {
      deck.draw();

      expect(deck.top).to.not.equal(top);
    });
  });

  describe('Shuffle >', () => {
    it.skip('should be idempotent given the same seed and deck count');
  });
});
