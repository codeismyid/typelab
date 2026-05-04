import { describe, it } from 'bun:test';
import type { Decrement, Increment } from 'lib/utils/math';
import { expectType } from 'types-testing';

describe('lib > utils > math', () => {
  describe('Increment', () => {
    it('should increment the `N`', () => {
      expectType<Increment<5>>().toBe<6>();
      expectType<Increment<10n>>().toBe<11n>();
      expectType<Increment<-3.14>>().toBe<-2.14>();
    });
  });

  describe('Decrement', () => {
    it('should decrement the `N`', () => {
      expectType<Decrement<5>>().toBe<4>();
      expectType<Decrement<10n>>().toBe<9n>();
      expectType<Decrement<-3.14>>().toBe<-4.14>();
    });
  });
});
