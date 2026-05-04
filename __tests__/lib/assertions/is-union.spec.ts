import { describe, it } from 'bun:test';
import type { IsUnion } from 'lib/assertions/is-union';
import { expectType } from 'types-testing';

describe('lib > assertions > is-union', () => {
  describe('IsUnion', () => {
    it('should return `true` type, if type argument is union type', () => {
      expectType<IsUnion<string | number>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not union type', () => {
      expectType<IsUnion<string>>().toBe<false>();
    });
  });
});
