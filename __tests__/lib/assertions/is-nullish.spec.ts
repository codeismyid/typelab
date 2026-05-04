import { describe, it } from 'bun:test';
import type { IsNullish } from 'lib/assertions/is-nullish';
import { expectType } from 'types-testing';

describe('lib > assertions > is-nullish', () => {
  describe('IsNullish', () => {
    it('should return `true` type, if type argument contains `null | undefined` type', () => {
      expectType<IsNullish<string | null>>().toBe<true>();
      expectType<IsNullish<string | undefined>>().toBe<true>();
    });

    it('should return `false` type, if type argument not contains `null | undefined` type', () => {
      expectType<IsNullish<string>>().toBe<false>();
    });
  });
});
