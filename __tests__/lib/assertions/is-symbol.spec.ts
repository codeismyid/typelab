import { describe, it } from 'bun:test';
import type { IsSymbol } from 'lib/assertions/is-symbol';
import { expectType } from 'types-testing';

describe('lib > assertions > is-symbol', () => {
  describe('IsSymbol', () => {
    it('should return `true` type, if type argument is `symbol` type', () => {
      expectType<IsSymbol<symbol>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `symbol` type', () => {
      expectType<IsSymbol<string>>().toBe<false>();
    });
  });
});
