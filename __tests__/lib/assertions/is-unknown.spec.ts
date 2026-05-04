import { describe, it } from 'bun:test';
import type { IsUnknown } from 'lib/assertions/is-unknown';
import { expectType } from 'types-testing';

describe('lib > assertions > is-unknown', () => {
  describe('IsUnknown', () => {
    it('should return `true` type, if type argument is `unknown` type', () => {
      expectType<IsUnknown<unknown>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `unknown` type', () => {
      expectType<IsUnknown<string>>().toBe<false>();
    });
  });
});
