import { describe, it } from 'bun:test';
import type { IsUndefinable } from 'lib/assertions/is-undefinable';
import { expectType } from 'types-testing';

describe('lib > assertions > is-undefinable', () => {
  describe('IsUndefinable', () => {
    it('should return `true` type, if type argument contains `undefined` type', () => {
      expectType<IsUndefinable<string | undefined>>().toBe<true>();
    });

    it('should return `false` type, if type argument not contains `undefined` type', () => {
      expectType<IsUndefinable<string>>().toBe<false>();
    });
  });
});
