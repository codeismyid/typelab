import { describe, it } from 'bun:test';
import type { IsNullable } from 'lib/assertions/is-nullable';
import { expectType } from 'types-testing';

describe('lib > assertions > is-nullable', () => {
  describe('IsNullable', () => {
    it('should return `true` type, if type argument contains `null` type', () => {
      expectType<IsNullable<string | null>>().toBe<true>();
    });

    it('should return `false` type, if type argument not contains `null` type', () => {
      expectType<IsNullable<string>>().toBe<false>();
    });
  });
});
