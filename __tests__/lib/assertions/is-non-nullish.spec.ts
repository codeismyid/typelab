import { describe, it } from 'bun:test';
import type { IsNonNullish } from 'lib/assertions/is-non-nullish';
import { expectType } from 'types-testing';

describe('lib > assertions > is-non-nullish', () => {
  describe('IsNonNullish', () => {
    it('should return `true` type, if type argument is `{}` type', () => {
      expectType<IsNonNullish<{}>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `{}` type', () => {
      expectType<IsNonNullish<string>>().toBe<false>();
    });
  });
});
