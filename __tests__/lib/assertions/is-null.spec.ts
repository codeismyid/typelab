import { describe, it } from 'bun:test';
import type { IsNull } from 'lib/assertions/is-null';
import { expectType } from 'types-testing';

describe('lib > assertions > is-null', () => {
  describe('IsNull', () => {
    it('should return `true` type, if type argument is `null` type', () => {
      expectType<IsNull<null>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `null` type', () => {
      expectType<IsNull<string | null>>().toBe<false>();
    });
  });
});
