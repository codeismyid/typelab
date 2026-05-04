import { describe, it } from 'bun:test';
import type { ValueOf } from 'lib/utils/value-of';
import { expectType } from 'types-testing';

describe('lib > utils > value-of', () => {
  describe('ValueOf', () => {
    it('should extract values from object `T`', () => {
      expectType<ValueOf<{ a: string; b: number }>>().toBe<string | number>();
    });
  });
});
