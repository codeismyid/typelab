import { describe, it } from 'bun:test';
import type { KeyOf } from 'lib/utils/key-of';
import { expectType } from 'types-testing';

describe('lib > utils > key-of', () => {
  describe('KeyOf', () => {
    it('should return key of `T`', () => {
      expectType<KeyOf<{ a: string; b: number }>>().toBe<'a' | 'b'>();
    });
  });
});
