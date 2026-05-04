import { describe, it } from 'bun:test';
import type { IsVoid } from 'lib/assertions/is-void';
import { expectType } from 'types-testing';

describe('lib > assertions > is-void', () => {
  describe('IsVoid', () => {
    it('should return `true` type, if type argument is `void` type', () => {
      expectType<IsVoid<void>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `void` type', () => {
      expectType<IsVoid<string>>().toBe<false>();
    });
  });
});
