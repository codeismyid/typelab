import { describe, it } from 'bun:test';
import type { Void } from 'lib/aliases/void';
import { expectType } from 'types-testing';

describe('lib > aliases > void', () => {
  describe('Void', () => {
    it('should be the same as `void` type', () => {
      expectType<Void>().toBe<void>();
    });
  });
});
