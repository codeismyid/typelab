import { describe, it } from 'bun:test';
import type { IsPositive } from 'lib/assertions/is-positive';
import { expectType } from 'types-testing';

describe('lib > assertions > is-negative', () => {
  describe('IsPositive', () => {
    it('should return `true` type, if type argument is positive', () => {
      expectType<IsPositive<11>>().toBe<true>();
      expectType<IsPositive<11n>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not positive', () => {
      expectType<IsPositive<-11>>().toBe<false>();
      expectType<IsPositive<-11n>>().toBe<false>();
    });
  });
});
