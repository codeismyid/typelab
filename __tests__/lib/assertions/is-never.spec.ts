import { describe, it } from 'bun:test';
import type { IsNever } from 'lib/assertions/is-never';
import { expectType } from 'types-testing';

describe('lib > assertions > is-never', () => {
  describe('IsNever', () => {
    it('should return `true` type, if type argument is `never` type', () => {
      expectType<IsNever<never>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `never` type', () => {
      expectType<IsNever<string>>().toBe<false>();
    });
  });
});
