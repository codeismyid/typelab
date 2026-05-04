import { describe, it } from 'bun:test';
import type { IsUndefined } from 'lib/assertions/is-undefined';
import { expectType } from 'types-testing';

describe('lib > assertions > is-undefined', () => {
  describe('IsUndefined', () => {
    it('should return `true` type, if type argument is `undefined` type', () => {
      expectType<IsUndefined<undefined>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `undefined` type', () => {
      expectType<IsUndefined<string>>().toBe<false>();
    });
  });
});
