import { describe, it } from 'bun:test';
import type { IsAny } from 'lib/assertions/is-any';
import { expectType } from 'types-testing';

describe('lib > assertions > is-any', () => {
  describe('IsAny', () => {
    it('should return `true` type, if type argument is `any` type', () => {
      expectType<IsAny<any>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `any` type', () => {
      expectType<IsAny<string>>().toBe<false>();
    });
  });
});
