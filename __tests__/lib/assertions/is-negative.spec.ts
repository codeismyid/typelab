import { describe, it } from 'bun:test';
import type { IsNegative } from 'lib/assertions/is-negative';
import { expectType } from 'types-testing';

describe('lib > assertions > is-negative', () => {
  describe('IsNegative', () => {
    it('should return `true` type, if type argument is negative', () => {
      expectType<IsNegative<-11>>().toBe<true>();
      expectType<IsNegative<-11n>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not negative', () => {
      expectType<IsNegative<11>>().toBe<false>();
      expectType<IsNegative<11n>>().toBe<false>();
    });
  });
});
